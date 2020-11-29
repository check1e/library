import { deepStrictEqual, strictEqual, notStrictEqual, throws } from 'assert';

export default class AssertUtils {

  public static typedArraysAreEqual(left: Int32Array | Uint8ClampedArray, right: Int32Array | Uint8ClampedArray, size?: number): boolean {

    if (!size) {
      size = Math.max(left.length, right.length);
    }

    for (let i = 0; i < size; i++) {
      if (left[i] !== right[i]) {
        return false;
      }
    }

    return true;
  }

}


export const assertEquals = <T>(actual: any, expected: T, message?: string) => strictEqual(actual, expected, message);
export const assertArrayEquals = (a: Array<any> | Uint8Array | Int32Array, b: Array<any> | Uint8Array | Int32Array) => deepStrictEqual(a, b);
export const assertFalse = x => strictEqual(!!x, false);
export const assertTrue = x => strictEqual(!!x, true);
export const assertNull = x => strictEqual(x, null);
export const assertNotNull = x => notStrictEqual(x, null);
export const assertThrow = (func, err) => throws(func, err);
