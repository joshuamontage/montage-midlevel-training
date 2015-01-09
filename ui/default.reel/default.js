/**
 * @module ui/default.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Default
 * @extends Component
 */
exports.Default = Component.specialize(/** @lends Default# */ {
    constructor: {
        value: function Default() {
            this.super();
        }
    },
    enterDocument: {
        value: function (firstTime) {
            if (firstTime) {
                this.templateObjects.stormController.content = [
                    {"name":"Wilma", "type":"Tropical Storm"},
                    {"name":"Fred", "type":"Hurricane"},
                    {"name":"Betty", "type":"Tropical Storm"},
                    {"name":"Barney", "type":"Hurricane"}
                ];
            }
        }
    },
    removeStorm: {
        value: function (storm) {
            var i = this.templateObjects.stormController.content.indexOf(storm);
            console.log(i);
        }
    }
});
