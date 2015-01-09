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
            console.log("before");
            this.dispatchEventNamed("removeStorm", {name:this.stormData.name});
            console.log("after");
            event.stopPropagation();
        }
    }
});
