"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cache = void 0;
class Entity {
    constructor(data, expirySeconds) {
        this.data = data;
        this.expiryMilliseconds = expirySeconds
            ? Date.now() + (expirySeconds * 1000)
            : false;
    }
    get expired() {
        return this.expiryMilliseconds
            ? this.expiryMilliseconds <= Date.now()
            : false;
    }
}
class Cache {
    constructor(capacity = 100) {
        this.capacity = capacity;
        this._map = new Map();
    }
    set(key, value, expirySeconds) {
        const entity = new Entity(value, expirySeconds);
        this._map.set(key, entity);
        if (this._map.size > this.capacity) {
            this.clean();
        }
        if (entity.expiryMilliseconds) {
            setTimeout(key => {
                const o = this._map.get(key);
                if (o && o.expired) {
                    this.delete(key);
                }
            }, entity.expiryMilliseconds, key);
        }
    }
    get(key) {
        const entity = this._map.get(key);
        return entity === undefined || entity.expired ? undefined : entity.data;
    }
    delete(key) {
        this._map.delete(key);
    }
    clean() {
        var keys = this._map.keys();
        while (this._map.size > this.capacity) {
            const key = keys.next().value;
            this.delete(key);
        }
    }
}
exports.Cache = Cache;
