class Entity<V> {
  data: V;
  expiryMilliseconds: number | false;
  expiryDateMillis: number;

  constructor(data: V, expiryMillis: number) {
    this.data = data;

    if (expiryMillis > 0) {
      this.expiryMilliseconds = expiryMillis;
      this.expiryDateMillis = Date.now() + this.expiryMilliseconds;
    } else {
      this.expiryMilliseconds = false;
    }
  }

  get expired() {
    return this.expiryMilliseconds
      ? this.expiryDateMillis <= Date.now()
      : false;
  }
}

export class Cache<K, V> {

  _map: Map<K, Entity<V>>;
  capacity: number;

  constructor(capacity = 100) {
    this.capacity = capacity;
    this._map = new Map();
  }

  set(key: K, value: V, expiryMillis: number) {

    const entity = new Entity(value, expiryMillis);

    this._map.set(key, entity);

    if (this._map.size > this.capacity) {
      this.clean();
    }

    if (entity.expiryMilliseconds) {

      setTimeout(key => {
        const o = this._map.get(key);

        if (o?.expired) {
          this.delete(key);
        }

      }, entity.expiryMilliseconds, key);
    }
  }

  get(key: K) {
    const entity = this._map.get(key);
    return entity === undefined || entity.expired ? undefined : entity.data;
  }

  delete(key: K) {
    this._map.delete(key);
  }

  clean() {
    var keys = this._map.keys();
    while (this._map.size > this.capacity) {
      const key = keys.next().value;
      this.delete(key);
    }
  }

  size() {
    return this._map.size;
  }
}
