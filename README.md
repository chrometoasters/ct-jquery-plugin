# Boilerplate - jQuery Plugin

A best-practice template for developing jQuery plugins.

## Installation

    bower install https://github.com/chrometoasters/frontend-boilerplate-jquery-plugin.git

## Usage

1. Decide on a plugin name, considering the function or utility that the plugin will provide.
1. Open `PLUGIN_NAME.jquery.js`
1. Find and replace `PLUGIN_NAME` with your (lowercase) plugin name
1. Load the plugin with your other site scripts
1. Call the plugin within a document ready block like so: `$(document).eady( function() { $element.PLUGIN_NAME() });`