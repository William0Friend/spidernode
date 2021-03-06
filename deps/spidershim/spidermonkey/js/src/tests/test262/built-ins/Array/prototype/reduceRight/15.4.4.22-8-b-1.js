// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.22-8-b-1
description: >
    Array.prototype.reduceRight - no observable effects occur if 'len'
    is 0
---*/

        var accessed = false;

        var obj = { length: 0 };

        Object.defineProperty(obj, "0", {
            get: function () {
                accessed = true;
                return 10;
            },
            configurable: true
        });

assert.throws(TypeError, function() {
            Array.prototype.reduceRight.call(obj, function () { });
});

assert.sameValue(accessed, false, 'accessed');

reportCompare(0, 0);
