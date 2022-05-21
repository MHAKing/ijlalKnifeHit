
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/KnifeManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcS25pZmVNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGhyb3dGb3JjZSIsInNlcmlhbGl6YWJsZSIsIlZlYzIiLCJvbkxvYWQiLCJpc0FjdGl2ZSIsInNlbGZSQiIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJSaWdpZEJvZHkiLCJzZWxmQ29sbGlkZXIiLCJQaHlzaWNzQm94Q29sbGlkZXIiLCJvbiIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwic3RhcnQiLCJhcHBseUxpbmVhckltcHVsc2UiLCJnZXRXb3JsZENlbnRlciIsImdyYXZpdHlTY2FsZSIsIm9uQmVnaW5Db250YWN0Iiwib25QcmVTb2x2ZSIsImNvbnRhY3QiLCJvdGhlckNvbGxpZGVyIiwiYm9keSIsIl90eXBlIiwibGluZWFyVmVsb2NpdHkiLCJvbGRTaXplIiwic2l6ZSIsIm9sZE9mZnNldCIsIm9mZnNldCIsIndpZHRoIiwieCIsInNldFBhcmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLElBQUFBLFVBQVUsRUFBRTtBQUNSQyxNQUFBQSxZQUFZLEVBQUUsSUFETjtBQUVSLGlCQUFTLElBQUlMLEVBQUUsQ0FBQ00sSUFBUDtBQUZEO0FBaEJKLEdBSFA7QUF5Qkw7QUFFQUMsRUFBQUEsTUEzQkssb0JBMkJLO0FBQ047QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QlgsRUFBRSxDQUFDWSxTQUExQixDQUFkLENBWk0sQ0FZOEM7O0FBQ3BELFNBQUtDLFlBQUwsR0FBb0IsS0FBS0gsSUFBTCxDQUFVQyxZQUFWLENBQXVCWCxFQUFFLENBQUNjLGtCQUExQixDQUFwQixDQWJNLENBYTZEO0FBQ25FO0FBQ0E7O0FBQ0EsU0FBS0osSUFBTCxDQUFVSyxFQUFWLENBQWEsV0FBYixFQUF5QixLQUFLQyxPQUE5QixFQUFzQyxJQUF0QyxFQWhCTSxDQWlCTjs7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QixLQUFLUixJQUE5QjtBQUNILEdBOUNJO0FBZ0RMUyxFQUFBQSxLQWhESyxtQkFnREksQ0FFUixDQWxESTtBQW9ETDtBQUVBSCxFQUFBQSxPQXRESyxxQkFzREk7QUFDTDtBQUNBLFFBQUcsQ0FBQyxLQUFLUixRQUFULEVBQ0k7QUFDSlMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNBLFNBQUtULE1BQUwsQ0FBWVcsa0JBQVosQ0FBK0IsS0FBS2hCLFVBQXBDLEVBQWdELEtBQUtLLE1BQUwsQ0FBWVksY0FBWixFQUFoRCxFQUE2RSxJQUE3RTtBQUNBLFNBQUtaLE1BQUwsQ0FBWWEsWUFBWixHQUEyQixDQUEzQjtBQUNILEdBN0RJO0FBOERMQyxFQUFBQSxjQTlESyw0QkE4RFc7QUFDWk4sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksU0FBWjtBQUNILEdBaEVJO0FBaUVMTSxFQUFBQSxVQWpFSyxzQkFpRU1DLE9BakVOLEVBaUVjWixZQWpFZCxFQWlFNEJhLGFBakU1QixFQWlFMEM7QUFDM0MsUUFBRyxDQUFDLEtBQUtsQixRQUFULEVBQ0k7QUFDSixTQUFLQSxRQUFMLEdBQWdCLEtBQWhCO0FBQ0FTLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQTZCTCxZQUE3QixFQUoyQyxDQUszQzs7QUFDQUEsSUFBQUEsWUFBWSxDQUFDYyxJQUFiLENBQWtCQyxLQUFsQixHQUEwQixDQUExQixDQU4yQyxDQU1kOztBQUM3QmYsSUFBQUEsWUFBWSxDQUFDYyxJQUFiLENBQWtCRSxjQUFsQixHQUFtQyxJQUFJN0IsRUFBRSxDQUFDTSxJQUFQLENBQVksQ0FBWixFQUFjLENBQWQsQ0FBbkMsQ0FQMkMsQ0FPVTs7QUFDckRPLElBQUFBLFlBQVksQ0FBQ2MsSUFBYixDQUFrQkwsWUFBbEIsR0FBaUMsQ0FBakMsQ0FSMkMsQ0FRUDtBQUNwQzs7QUFDQSxTQUFLUSxPQUFMLEdBQWVqQixZQUFZLENBQUNrQixJQUE1QixDQVYyQyxDQVVUOztBQUNsQyxTQUFLQyxTQUFMLEdBQWlCbkIsWUFBWSxDQUFDb0IsTUFBOUIsQ0FYMkMsQ0FXTDs7QUFDdENwQixJQUFBQSxZQUFZLENBQUNrQixJQUFiLEdBQW9CLElBQUkvQixFQUFFLENBQUNNLElBQVAsQ0FBWSxLQUFLd0IsT0FBTCxDQUFhSSxLQUF6QixFQUFnQyxFQUFoQyxDQUFwQixDQVoyQyxDQVljOztBQUN6RHJCLElBQUFBLFlBQVksQ0FBQ29CLE1BQWIsR0FBc0IsSUFBSWpDLEVBQUUsQ0FBQ00sSUFBUCxDQUFZLEtBQUswQixTQUFMLENBQWVHLENBQTNCLEVBQThCLENBQUMsSUFBL0IsQ0FBdEIsQ0FiMkMsQ0FhaUI7O0FBQzVEdEIsSUFBQUEsWUFBWSxDQUFDSCxJQUFiLENBQWtCMEIsU0FBbEIsQ0FBNEJWLGFBQWEsQ0FBQ2hCLElBQTFDO0FBQ0FPLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDSDtBQWpGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgdGhyb3dGb3JjZToge1xyXG4gICAgICAgICAgICBzZXJpYWxpemFibGU6IHRydWUsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG5ldyBjYy5WZWMyKCksXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIC8vIGxldCBtYW5hZ2VyID0gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpO1xyXG5cclxuICAgICAgICAvLyAvLyBFbmFibGVkIHRoZSBjb2xpZGVyIG1hbmFnZXIuXHJcbiAgICAgICAgLy8gbWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gLy8gRW5hYmxlZCBkcmF3IGNvbGxpZGVyXHJcbiAgICAgICAgLy8gbWFuYWdlci5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gLy8gRW5hYmxlZCBkcmF3IGNvbGxpZGVyIGJvdW5kaW5nIGJveFxyXG4gICAgICAgIC8vIG1hbmFnZXIuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxmUkIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7IC8vZ2V0dGluZyByaWdpZCBib2R5IGNvbXBvbmVudCBvZiB0aGlzIGtuaWZlIGluc3RhbmNlXHJcbiAgICAgICAgdGhpcy5zZWxmQ29sbGlkZXIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7IC8vZ2V0dGluZyBib3ggY29sbGlkZXIgY29tcG9uZW50IG9mIHRoaXMga25pZmUgaW5zdGFuY2VcclxuICAgICAgICAvL2xpc3RlbmluZyBmb3IgbW91c2UgY2xpY2sgb24gdGhpcyBzeXN0ZW1cclxuICAgICAgICAvLyBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuTU9VU0VfRE9XTix0aGlzLm9uQ2xpY2ssdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdtb3VzZWRvd24nLHRoaXMub25DbGljayx0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLnNlbGZDb2xsaWRlci5vbihDb250YWN0MkRUeXBlLkJFR0lOX0NPTlRBQ1QsIHRoaXMub25Db2xsaXNpb25FbnRlcix0aGlzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMubm9kZVwiLCB0aGlzLm5vZGUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuXHJcbiAgICBvbkNsaWNrKCl7XHJcbiAgICAgICAgLy9pZiB0aGlzIGtuaWZlIGlzIG5vdCBhY3RpdmUgdGhlbiByZXR1cm4gZnJvbSB0aGlzIGNhbGxcclxuICAgICAgICBpZighdGhpcy5pc0FjdGl2ZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xpY2tlZFwiKTtcclxuICAgICAgICB0aGlzLnNlbGZSQi5hcHBseUxpbmVhckltcHVsc2UodGhpcy50aHJvd0ZvcmNlLCB0aGlzLnNlbGZSQi5nZXRXb3JsZENlbnRlcigpLHRydWUpO1xyXG4gICAgICAgIHRoaXMuc2VsZlJCLmdyYXZpdHlTY2FsZSA9IDE7XHJcbiAgICB9LFxyXG4gICAgb25CZWdpbkNvbnRhY3QoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbnRhY3RcIik7XHJcbiAgICB9LFxyXG4gICAgb25QcmVTb2x2ZShjb250YWN0LHNlbGZDb2xsaWRlciwgb3RoZXJDb2xsaWRlcil7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNBY3RpdmUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWxmQ29sbGlkZXI6IFwiLHNlbGZDb2xsaWRlcik7XHJcbiAgICAgICAgLy91cGRhdGluZyByaWdpZCBib2R5IGR5bmFtaWNzIG9mIHRoZSBrbmlmZVxyXG4gICAgICAgIHNlbGZDb2xsaWRlci5ib2R5Ll90eXBlID0gMTsgLy9zZXR0aW5nIHRoZSB0eXBlIG9mIGJvZnkgdG8ga2luZW1hdGljXHJcbiAgICAgICAgc2VsZkNvbGxpZGVyLmJvZHkubGluZWFyVmVsb2NpdHkgPSBuZXcgY2MuVmVjMigwLDApOyAvL3Jlc2V0dGluZyBsaW5lYXIgdmVsb2NpdHkgXHJcbiAgICAgICAgc2VsZkNvbGxpZGVyLmJvZHkuZ3Jhdml0eVNjYWxlID0gMDsgLy9zZXR0aW5nIGdyYXZpdHkgc2NhbGUgdG8gMCBzbyB0aGF0IGdyYXZpdHkgZG9lcyBub3QgaGF2ZSBpbXBhY3Qgb24gdGhpcyBrbmlmZVxyXG4gICAgICAgIC8vdXBkYXRpbmcgYm94IGNvbGxpZGVyIG9mIHRoZSBrbmlmZVxyXG4gICAgICAgIHRoaXMub2xkU2l6ZSA9IHNlbGZDb2xsaWRlci5zaXplOyAvL3NhdmluZyBvbGQgc2l6ZSBvZiBjb2xsaWRlclxyXG4gICAgICAgIHRoaXMub2xkT2Zmc2V0ID0gc2VsZkNvbGxpZGVyLm9mZnNldDsgLy9zYXZpbmcgb2xkIG9mZnNldCBvZiBjb2xsaWRlclxyXG4gICAgICAgIHNlbGZDb2xsaWRlci5zaXplID0gbmV3IGNjLlZlYzIodGhpcy5vbGRTaXplLndpZHRoLCA4MCk7IC8vcmVkdWNpbmcgdGhlIHNpemUgb2Yga25pZmUgY29sbGlkZXJcclxuICAgICAgICBzZWxmQ29sbGlkZXIub2Zmc2V0ID0gbmV3IGNjLlZlYzIodGhpcy5vbGRPZmZzZXQueCwgLTIzLjUpOyAvL3NoaWZ0aW5nIGRvd24gdGhlIGtuaWZlIGJveCBjb2xsaWRlclxyXG4gICAgICAgIHNlbGZDb2xsaWRlci5ub2RlLnNldFBhcmVudChvdGhlckNvbGxpZGVyLm5vZGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicHJlIHNvbHZlXCIpO1xyXG4gICAgfVxyXG5cclxufSk7XHJcbiJdfQ==