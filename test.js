"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const cache = new index_1.Cache();
cache.set("testKey", "testValue", 5);
console.log("cache.get(\"testKey\") = " + cache.get("testKey"));
console.log("Outputting value after two seconds (still there)," +
    " and after 6 seconds (gone)...");
setTimeout(() => {
    console.log("2 sec => cache.get(\"testKey\") = " + cache.get("testKey"));
}, 2000);
setTimeout(() => {
    console.log("6 sec => cache.get(\"testKey\") = " + cache.get("testKey"));
}, 6000);
