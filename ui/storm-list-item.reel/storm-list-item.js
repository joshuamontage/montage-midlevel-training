/**
 * @module ui/storm-list-item.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class StormListItem
 * @extends Component
 */
exports.StormListItem = Component.specialize(/** @lends StormListItem# */ {
    constructor: {
        value: function StormListItem() {
            this.super();
        }
    },
    removeStormEvent : {
        value: function (event) {
            console.log(this.stormData);
            this.dispatchEventNamed("removeStorm", this.stormData);
            event.stopPropagation();
        }
    }
});
