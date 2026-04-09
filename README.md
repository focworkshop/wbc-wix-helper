# WBC Wix Helper

Wix Multilingual does not provide a customizable fallback when a page is hidden from a specific language's navigation menu. When a visitor switches languages, they can land on a page that doesn't exist in the new language — resulting in a broken or empty page with no graceful recovery.

This module solves that by dynamically detecting when the current page is missing from the active language's menu and automatically redirecting the visitor to the page's parent in the menu hierarchy. If no parent is found, it falls back to the language's home page.

## Setup on Wix

1. Go to the Wix, enter the Editor by `Edit Site` button.
2. Enable Dev Mode
3. Go to left navigation for `Backend and Public`
4. Place the files of `src/Public` under the `Public` section
5. Customize the values inside `config.js`

## Configuration (`config.js`)

| Key | Description |
|---|---|
| `horizontalMenuId` | Element ID of the horizontal menu component (default: `horizontalMenu1`) |
| `langCode` | Map of Wix multilingual language key → URL path segment (e.g. `{ en: 'en', zh: 'zh-hk' }`) |

## Pre-conditions
- The site must have **Wix Multilingual** enabled.
- There must be a **horizontal menu** component on all pages with the ID matching `horizontalMenuId` in config.

## Usage

Call `runPageRouter()` inside `$w.onReady()` in the site-level **masterPage.js**:

```js
import { runPageRouter } from 'public/pageRouter.js';

$w.onReady(() => {
    const staying = runPageRouter();
    // staying === true  → page is valid, reveal content
    // staying === false → redirect fired, keep page hidden
});
```

## Critical Notes
- Ensure `$w.onReady()` is not overridden by any page-level script.
- The page router uses **session storage** to track the previous page's language and parent URL for cross-language redirect logic.
- Menu items are cached in **local storage** and invalidated automatically on site revision changes.