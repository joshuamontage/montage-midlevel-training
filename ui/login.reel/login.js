/**
 * @module ui/login.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Login
 * @extends Component
 */
exports.Login = Component.specialize(/** @lends Login# */ {
    constructor: {
        value: function Login() {
            this.super();
        }
    },
    loginActionHandler: {
        value: function (event) {
            // Obviously a real login handler would have much more logic
            this.dispatchEventNamed("loginEvent", true, false, {successful:true});
            event.stopPropagation();
        }
    }
});
