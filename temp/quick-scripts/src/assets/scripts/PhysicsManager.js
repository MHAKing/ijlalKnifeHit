"use strict";
cc._RF.push(module, 'd9df1LmDiRCJqCNflNrLjWi', 'PhysicsManager');
// scripts/PhysicsManager.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.director.getPhysicsManager().enabled = true;
    console.log("onLoad");
  } // start () {
  // },
  // update (dt) {},

});

cc._RF.pop();