// VALIDATION SETTINGS FOR JSHINT.COM
/*jshint browser:true, jquery:true, strict:true, devel:true */
/*global QUnit:true, equal:true, module, test */

// Unit tests for ct-jquery-PLUGIN_NAME.js
// Author: EMAIL
// equal( test, expected value, string to display in output )
//
// ----------------------------------------------------------------

var testvars = {};

QUnit.begin( function() {

    "use strict";

    testvars.container = '#qunit-fixture';

    testvars.id = 'TOOD';
    testvars.target = '#TODO';

});

/*
-------------------------------------------------------------------
Prerequisites
-------------------------------------------------------------------
*/

module("Prerequisites");

test("OTHER_PLUGIN_NAME.js", function() {

    "use strict";

    equal(
        typeof $.fn.OTHER_PLUGIN_NAME === 'undefined', // or OTHER_PLUGIN_NAME.METHOD
        false,
        'loaded'
    );
});

/*
-------------------------------------------------------------------
Set up
-------------------------------------------------------------------
*/

module("Set up", {

    setup: function() {
        "use strict";
        //
    },
    teardown: function() {
        "use strict";
        //
    }
});

test("TODO", function() {
    "use strict";

    // Setup
    // TODO

    equal(
        TODO,
        true,
        ''
    );

});

/*
-------------------------------------------------------------------
Destroy
-------------------------------------------------------------------
*/

module("Destroy", {

    setup: function() {
        "use strict";

        // Setup
        $(testvars.target).PLUGIN_NAME({
            // options
        });

        // Destroy
        $(testvars.target).PLUGIN_NAME('destroy');
    },
    teardown: function() {
        "use strict";
        //
    }
});

test("TESTNAME", function() {
    "use strict";

    equal(
        TODO,
        true,
        ''
    );
});
