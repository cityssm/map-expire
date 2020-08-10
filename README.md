# map-expire

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
