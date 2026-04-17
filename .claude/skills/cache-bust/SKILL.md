---
name: cache-bust
description: Update all stylesheet link cache-bust timestamps across design templates
---

# Cache Bust

Update all `design-system.css` link tags in `design/templates/*.html` with a fresh unix timestamp query string (`?v=<timestamp>`).

## Steps

1. Run the following python script from the project root:

```bash
cd C:/data/wbc-wix-helper/design/templates && python -c "
import glob, re, time
ts = str(int(time.time()))
files = glob.glob('*.html')
count = 0
for f in files:
    with open(f, 'r', encoding='utf-8') as fh:
        content = fh.read()
    updated = re.sub(r'href=\"design-system\.css(\?v=[^\"]*)?\"', f'href=\"design-system.css?v={ts}\"', content)
    if updated != content:
        with open(f, 'w', encoding='utf-8') as fh:
            fh.write(updated)
        count += 1
print(f'Cache bust updated: v={ts}')
print(f'{count} files updated')
"
```

2. Report the timestamp and file count to the user.
