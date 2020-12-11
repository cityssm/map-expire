declare class Entity<V> {
    data: V;
    expiryMilliseconds: number | false;
    expiryDateMillis: number;
    constructor(data: V, expiryMillis: number);
    get expired(): boolean;
}
export declare class Cache<K, V> {
    _map: Map<K, Entity<V>>;
    capacity: number;
    constructor(capacity?: number);
    set(key: K, value: V, expiryMillis: number): void;
    get(key: K): V;
    delete(key: K): void;
    clean(): void;
    size(): number;
}
export {};
