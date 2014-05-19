# ct-jquery-plugin

A best-practice template for developing Github hosted jQuery plugins, which can be consumed via Bower.

__Please note: this plugin is optimised for internal Chrometoaster use. YMMV.__

## Installation

### Copying the plugin to your local development environment

1. In Terminal: `cd /PATH/TO/PROJECT-THEME-FOLDER`
1. `bower install https://github.com/chrometoasters/ct-jquery-plugin.git#v1.1.1 --save`

Note: if you wish to customise where Bower puts installed components, you may add a `.bowerrc` file into this folder:

        {
            "directory" : "PATH/TO/COMPONENTS"
        }

### Customisation

1. Decide on a plugin name, considering the function or utility that the plugin will provide.
1. Do a case sensitive Find and Replace on all files in `ct-jquery-plugin/dist`:
    1. Replace `PLUGIN_NAME` with your (lowercase) plugin name
    1. Replace `PLUGIN_DESCRIPTION` with a one line description of the plugin
    1. Replace `PROJECT_NAME` with the code of the project that the plugin was created for
    1. Replace `PROJECT_YEAR` with the year that the plugin was created for the project
    1. Replace `EMAIL` with your email address
    1. Replace `FIRSTNAME` with your first name
    1. Replace `LASTNAME` with your last name

### Dependencies

1. Add any dependencies to the `ct-jquery-plugin/dist/dependencies` object in `ct-jquery-plugin/dist/bower.json`
1. List any dependencies in `ct-jquery-plugin/dist/README.md`

### Re-use

1. Navigate to <https://github.com/chrometoasters>
1. Click "New repository"
1. In "Repository name" enter `ct-jquery-PLUGIN_NAME`
1. In "Description" enter `PLUGIN_DESCRIPTION`
1. Check "Public"
1. Check "Initialize this repository with a README"
1. Click "Create repository"
1. Navigate to <https://github.com/chrometoasters/ct-jquery-PLUGIN_NAME>
1. Click 'Clone in Desktop'
1. Save the repo to your local machine
1. Copy the contents of `ct-jquery-plugin/dist` into your local repository folder, replacing the `README.md` that is in there
1. Navigate to this folder
1. `bower install` (`bower_components` is excluded from the commit via the included `.gitignore` file)
1. Commit your code to Github

#### Versioning

Whenever you have a version ready for release:

1. Navigate to <https://github.com/chrometoasters/ct-jquery-PLUGIN_NAME>
1. Click 'N releases' (where `N` is a number)
1. Click 'Create a new release'
1. 'Tag version': `v.0.0.1`, renaming this as you progress through the versions
1. Optionally, add a 'Release title'
1. Optionally, 'Describe this release'
1. If the release is not completely ready, check 'This is a pre-release'
1. Click 'Publish release'
1. Open `bower.json` and change the `version` value to match your release
1. Open `README.md` and change the `bower install` line to include your release version

#### Tests

Tests provide other users with confidence that your plugin works as it should.

1. Add your QUnit tests to `test/index.html` and `test/test.js`
1. Add your Demo page to `demos/ct-jquery-PLUGIN_NAME.html`
