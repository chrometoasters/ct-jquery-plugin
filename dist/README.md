# ct-jquery-PLUGIN_NAME

PLUGIN_DESCRIPTION

__Please note: this plugin is optimised for internal Chrometoaster use. YMMV.__

## Installation

1. In Terminal: `cd /PATH/TO/PROJECT-THEME-FOLDER`
1. `bower install https://github.com/chrometoasters/ct-jquery-PLUGIN_NAME.git#v0.0.1 --save`

Note: if you wish to customise where Bower puts installed components, you may add a `.bowerrc` file into this folder:

        {
            "directory" : "PATH/TO/COMPONENTS"
        }

## Usage

### Set up

    $(TARGET).PLUGIN_NAME({
        PROPERTY: 'VALUE', // DESCRIPTION
    });

### Dependencies

Ensure that the following scripts are loaded by your page:

1. `DEPENDENCY/DEPENDENCY.js` (dependency, via Bower)
1. `dist/ct-jquery-PLUGIN_NAME.min.js` (this script, bundled)

### ADDITIONAL_HEADING

ADDITIONAL_INFORMATION

## Demo

Please refer to `demos/ct-jquery-PLUGIN_NAME.html`.