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
    }
});
