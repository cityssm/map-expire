# map-expire

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/cf6937317a1544c08dcddbf7e5a1a944)](https://app.codacy.com/gh/cityssm/map-expire?utm_source=github.com&utm_medium=referral&utm_content=cityssm/map-expire&utm_campaign=Badge_Grade_Dashboard)

A JavaScript map with entries that expire after a given number of seconds.

Based on the work in
[cavitkeskin/map-expire](https://github.com/cavitkeskin/map-expire).

## Installation

```bash
npm install @cityssm/map-expire
```

## Usage

```javascript
import { Cache } from "@cityssm/map-expire";
const cache = new Cache();

cache.set(key, value, expirySeconds);

const value = cache.get(key);
```

## Methods

`set(key, value, expirySeconds)`

-   If `expirySeconds` is falsy or not given, the value will never be expired.

`get(key)`

-   Returns undefined if not exists or expired.
