import * as assert from "assert";
import { Cache } from "../index";

describe("Cache()", () => {

  it("New cache has size zero", () => {
    const cache = new Cache();
    assert.strictEqual(cache.size(), 0);
  });

  it("Cache cannot exceed set capacity", () => {
    const cache = new Cache(10);
    for (let keyIndex = 0; keyIndex < 20; keyIndex += 1) {
      cache.set("key" + keyIndex.toString(), keyIndex, 3);
    }
    assert.strictEqual(cache.size(), 10);
  });

  describe("Cache expires a value after three seconds", () => {

    const expiryCheck = new Cache();
    expiryCheck.set("testKey", "testValue", 3000);

    it("Cache contains testKey immediately after insert", () => {
      assert.strictEqual(expiryCheck.get("testKey"), "testValue");
    });

    it("After 1 seconds, cache still contains testKey", (done) => {
      setTimeout(() => {
        assert.strictEqual(expiryCheck.get("testKey"), "testValue");
        done();
      }, 1000);
    });

    it("After 3 seconds, cache no longer contains testKey", (done) => {
      setTimeout(() => {
        assert.strictEqual(expiryCheck.get("testKey"), undefined);
        done();
      }, 3000);
    });

  });

  describe("Cache contains a value \"indefinitely\" when the expirySeconds is zero", () => {

    const expiryCheck = new Cache();
    expiryCheck.set("testKey", "testValue", 0);

    for (let milli = 0; milli <= 5000; milli += 1000) {

      it("After " + (milli / 1000).toString() + " seconds, cache still contains testKey", (done) => {

        setTimeout(() => {
          assert.strictEqual(expiryCheck.get("testKey"), "testValue");
          done();
        }, milli);
      });
    }
  });
});
