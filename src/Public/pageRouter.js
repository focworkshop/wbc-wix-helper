import wixSiteFrontend from 'wix-site-frontend';
import wixLocationFrontend from 'wix-location-frontend';
import wixWindowFrontend from 'wix-window-frontend';
import { session, local } from 'wix-storage-frontend';
import config from './config.js';

const CURRENT_PAGE_LANG = 'currentPageLang';
const CURRENT_PAGE_PARENT_URL = 'currentPageParentUrl';
const MENU_CACHE_KEY = 'wbcMenuCache';

export class PageRouter {
    constructor() {
        this.baseUrl = wixLocationFrontend.baseUrl;
        this.currentUrl = wixLocationFrontend.url;
        this.revision = wixSiteFrontend.revision;
        const page = wixSiteFrontend.currentPage;
        this.isHomePage = page?.type === 'static' && page?.isHomePage === true;
        this.langCodes = Object.values(config.langCode);
        // Authoritative language identity from Velo multilingual API (2-letter code, e.g. 'en', 'zh').
        this.currentLangKey = wixWindowFrontend.multilingual.currentLanguage;
        // URL-form code (e.g. 'en', 'zh-hk') used for path manipulation and transforms.
        this.currentLang = config.langCode[this.currentLangKey] || this.langCodes[0];
        this.currentPath = this._stripBaseAndLang(this.currentUrl);

        // Try cache first; fall back to live $w read on miss.
        const cached = this._readMenuCache(this.currentLangKey, this.revision);
        if (cached) {
            this.menuItems = cached;
            this.cacheWasMiss = false;
        } else {
            const el = $w(`#${config.horizontalMenuId}`);
            this.menuItems = el.length ? el.menuItems : [];
            this.cacheWasMiss = true;
        }
    }

    /**
     * @returns {boolean} true if staying on page (caller should reveal),
     *                    false if redirect fired (caller should leave hidden).
     */
    run() {
        // Validate first: redirect() needs the PREVIOUS page's stored meta,
        // so we must not overwrite session before checking.
        // Home is never redirected — it always records and returns.
        if (!this.isHomePage && !this._isInMenu(this.currentPath)) {
            const didRedirect = this._redirect();
            return !didRedirect; // if skipped (honest 404), we're staying
        }
        this._recordPageMeta();
        if (this.cacheWasMiss) {
            this._writeMenuCache(this.currentLangKey, this.revision, this.menuItems);
        }
        return true;
    }

    // --- validation ---

    _isInMenu(path) {
        return this._findItem(this.menuItems, path) !== null;
    }

    _findItem(items, path) {
        for (const item of items) {
            if (this._stripBaseAndLang(item.link) === path) return item;
            const nested = this._findItem(item.menuItems || [], path);
            if (nested) return nested;
        }
        return null;
    }

    // --- meta recording ---

    _recordPageMeta() {
        const parentUrl = this._findParentUrl();
        session.setItem(CURRENT_PAGE_LANG, this.currentLangKey);
        session.setItem(CURRENT_PAGE_PARENT_URL, parentUrl);
    }

    _findParentUrl() {
        const homeUrl = `${this.baseUrl}/${this.currentLang}`;
        if (this.isHomePage) return homeUrl; // home -> home

        const parent = this._findParentIn(this.menuItems, this.currentPath, null);
        return parent ? parent.link : homeUrl; // top-level -> home
    }

    _findParentIn(items, path, currentParent) {
        for (const item of items) {
            if (this._stripBaseAndLang(item.link) === path) return currentParent;
            const found = this._findParentIn(item.menuItems || [], path, item);
            if (found) return found;
        }
        return null;
    }

    // --- redirect ---

    /**
     * @returns {boolean} true if redirect was actually fired, false if skipped.
     */
    _redirect() {
        const prevLangKey = session.getItem(CURRENT_PAGE_LANG);
        const prevParentUrl = session.getItem(CURRENT_PAGE_PARENT_URL);
        if (!prevLangKey || !prevParentUrl) return false;
        if (prevLangKey === this.currentLangKey) return false; // lang unchanged -> honest 404
        const target = this._transformUrlLang(prevParentUrl, this.currentLang);
        wixLocationFrontend.to(target);
        return true;
    }

    // --- menu cache ---

    _readMenuCache(langKey, revision) {
        const raw = local.getItem(MENU_CACHE_KEY);
        if (!raw) return null;
        try {
            const parsed = JSON.parse(raw);
            if (parsed.revision !== revision) return null;
            return parsed.menus && parsed.menus[langKey] ? parsed.menus[langKey] : null;
        } catch (_) {
            return null;
        }
    }

    _writeMenuCache(langKey, revision, menuItems) {
        let cached;
        const raw = local.getItem(MENU_CACHE_KEY);
        if (raw) {
            try {
                cached = JSON.parse(raw);
                if (cached.revision !== revision) cached = { revision, menus: {} };
            } catch (_) {
                cached = { revision, menus: {} };
            }
        } else {
            cached = { revision, menus: {} };
        }
        cached.menus[langKey] = menuItems;
        local.setItem(MENU_CACHE_KEY, JSON.stringify(cached));
    }

    // --- URL helpers ---

    _stripBaseAndLang(url) {
        return url
            .replace(this.baseUrl, '')
            .replace(/\?.*$/, '')
            .split('/')
            .filter(p => p !== '' && !this.langCodes.includes(p))
            .join('/');
    }

    _transformUrlLang(url, newLang) {
        const rest = this._stripBaseAndLang(url);
        return rest
            ? `${this.baseUrl}/${newLang}/${rest}`
            : `${this.baseUrl}/${newLang}`;
    }
}

export function runPageRouter() {
    return new PageRouter().run();
}
