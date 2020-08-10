declare class Entity<V> {
    data: V;
    expiryMilliseconds: number | false;
    constructor(data: V, expirySeconds: number);
    get expired(): boolean;
}
export declare class Cache<K, V> {
    _map: Map<K, Entity<V>>;
    capacity: number;
    constructor(capacity?: number);
    set(key: K, value: V, expirySeconds: number): void;
    get(key: K): V;
    delete(key: K): void;
    clean(): void;
}
export {};
