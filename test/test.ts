import * as assert from "assert";
import { Cache } from "../index";

describe("Cache()", () => {

  it("New cache has size zero", () => {
    const cache = new Cache();
    assert.equal(cache.size(), 0);
  });

  it("Cache cannot exceed capacity", () => {
    const cache = new Cache(10);
    for (let keyIndex = 0; keyIndex < 20; keyIndex += 1) {
      cache.set("key" + keyIndex.toString(), keyIndex, 3);
    }
    assert.equal(cache.size(), 10);
  });

  const expiryCheck = new Cache();
  expiryCheck.set("testKey", "testValue", 3);

  it("Cache contains testKey", () => {
    assert.equal(expiryCheck.get("testKey"), "testValue");
  });

  it("After 1 seconds, cache still contains testKey", (done) => {
    setTimeout(() => {
      assert.equal(expiryCheck.get("testKey"), "testValue");
      done();
    }, 1000);
  });

  it("After 3 seconds, cache no longer contains testKey", (done) => {
    setTimeout(() => {
      assert.equal(expiryCheck.get("testKey"), null);
      done();
    }, 3000);
  });
});
