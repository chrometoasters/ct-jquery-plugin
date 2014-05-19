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

    // TODO
    // Add test for focus (working in demo)

});

/*
-------------------------------------------------------------------
Prerequisites
-------------------------------------------------------------------
*/

module("Prerequisites");


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
