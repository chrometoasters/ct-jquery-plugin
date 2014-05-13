# ct-jquery-plugin

A best-practice template for developing jQuery plugins.

__Please note: this plugin is optimised for internal Chrometoaster use. YMMV.__

## Installation

1. In Terminal: `cd /PATH/TO/PROJECT-THEME-FOLDER`
1. `bower install https://github.com/chrometoasters/frontend-boilerplate-jquery-plugin.git#v1.0.0 --save`

Note: if you wish to customise where Bower puts installed components, you may add a `.bowerrc` file into this folder:

        {
            "directory" : "PATH/TO/COMPONENTS"
        }

## Usage

1. Decide on a plugin name, considering the function or utility that the plugin will provide.
1. Open `PLUGIN_NAME.jquery.js`
1. Find and replace `PLUGIN_NAME` with your (lowercase) plugin name
1. Load the plugin with your other site scripts
1. Call the plugin within a document ready block like so: `$(document).eady( function() { $element.PLUGIN_NAME() });`
