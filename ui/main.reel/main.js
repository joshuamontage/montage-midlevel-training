/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    handleLogin: {
        value: function (event) {
            this.loggedIn = event.detail.successful;
            if (this.loggedIn) {
                this.templateObjects.substitution.switchValue = "default";
            }
        }
    }
});
