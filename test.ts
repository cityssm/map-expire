import { Cache } from "./index";


const cache = new Cache();

// Add a value
cache.set("testKey", "testValue", 5);

// Show the value
console.log("cache.get(\"testKey\") = " + cache.get("testKey"));

console.log("Outputting value after two seconds (still there)," +
  " and after 6 seconds (gone)...");

// Two second output
setTimeout(() => {
  console.log("2 sec => cache.get(\"testKey\") = " + cache.get("testKey"));
}, 2000);

// Six second output
setTimeout(() => {
  console.log("6 sec => cache.get(\"testKey\") = " + cache.get("testKey"));
}, 6000);
