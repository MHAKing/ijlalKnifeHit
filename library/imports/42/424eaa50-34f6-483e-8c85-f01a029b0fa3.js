"use strict";
cc._RF.push(module, '424eapQNPZIPoyF8BoCmw+j', 'KnifeManager');
// scripts/KnifeManager.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    throwForce: {
      serializable: true,
      "default": new cc.Vec2()
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // let manager = cc.director.getCollisionManager();
    // // Enabled the colider manager.
    // manager.enabled = true;
    // // Enabled draw collider
    // manager.enabledDebugDraw = true;
    // // Enabled draw collider bounding box
    // manager.enabledDrawBoundingBox = true;
    this.isActive = true;
    this.selfRB = this.node.getComponent(cc.RigidBody); //getting rigid body component of this knife instance

    this.selfCollider = this.node.getComponent(cc.PhysicsBoxCollider); //getting box collider component of this knife instance
    //listening for mouse click on this system
    // cc.systemEvent.on(cc.SystemEvent.EventType.MOUSE_DOWN,this.onClick,this);

    this.node.on('mousedown', this.onClick, this); // this.selfCollider.on(Contact2DType.BEGIN_CONTACT, this.onCollisionEnter,this);

    console.log("this.node", this.node);
  },
  start: function start() {},
  // update (dt) {},
  onClick: function onClick() {
    //if this knife is not active then return from this call
    if (!this.isActive) return;
    console.log("clicked");
    this.selfRB.applyLinearImpulse(this.throwForce, this.selfRB.getWorldCenter(), true);
    this.selfRB.gravityScale = 1;
  },
  onBeginContact: function onBeginContact() {
    console.log("contact");
  },
  onPreSolve: function onPreSolve(contact, selfCollider, otherCollider) {
    if (!this.isActive) return;
    this.isActive = false;
    console.log("selfCollider: ", selfCollider); //updating rigid body dynamics of the knife

    selfCollider.body._type = 1; //setting the type of bofy to kinematic

    selfCollider.body.linearVelocity = new cc.Vec2(0, 0); //resetting linear velocity 

    selfCollider.body.gravityScale = 0; //setting gravity scale to 0 so that gravity does not have impact on this knife
    //updating box collider of the knife

    this.oldSize = selfCollider.size; //saving old size of collider

    this.oldOffset = selfCollider.offset; //saving old offset of collider

    selfCollider.size = new cc.Vec2(this.oldSize.width, 80); //reducing the size of knife collider

    selfCollider.offset = new cc.Vec2(this.oldOffset.x, -23.5); //shifting down the knife box collider

    selfCollider.node.setParent(otherCollider.node);
    console.log("pre solve");
  }
});

cc._RF.pop();