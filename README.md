# map-expire

[![npm](https://img.shields.io/npm/v/@cityssm/map-expire)](https://www.npmjs.com/package/@cityssm/map-expire) [![Codacy Badge](https://img.shields.io/codacy/grade/cf6937317a1544c08dcddbf7e5a1a944)](https://app.codacy.com/gh/cityssm/map-expire) [![Maintainability](https://img.shields.io/codeclimate/maintainability/cityssm/map-expire)](https://codeclimate.com/github/cityssm/map-expire/maintainability) [![Test Coverage](https://img.shields.io/codeclimate/coverage/cityssm/map-expire)](https://codeclimate.com/github/cityssm/map-expire/test_coverage) ![AppVeyor](https://img.shields.io/appveyor/build/dangowans/map-expire) ![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/cityssm/map-expire)

A JavaScript map with entries that expire after a given number of milliseconds.

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

cache.set(key, value, expiryMillis);

const value = cache.get(key);
```

## Methods

`set(key, value, expiryMillis)`

-   If `expiryMillis` is falsy or not given, the value will never be expired.

`get(key)`

-   Returns `undefined` if not exists or expired.
