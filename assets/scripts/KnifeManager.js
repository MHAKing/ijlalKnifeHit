// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

var gameManager = null;

cc.Class({
    extends: cc.Component,

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
            default: new cc.Vec2(),
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let manager = cc.director.getCollisionManager();

        // Enabled the colider manager.
        manager.enabled = true;

        // Enabled draw collider
        manager.enabledDebugDraw = true;

        // // Enabled draw collider bounding box
        // manager.enabledDrawBoundingBox = true;
        if(!gameManager)
            gameManager = require("gameManager");

        this.isActive = true;
        this.selfRB = this.node.getComponent(cc.RigidBody); //getting rigid body component of this knife instance
        this.selfCollider = this.node.getComponent(cc.BoxCollider); //getting box collider component of this knife instance
        //listening for mouse click on this system
        // cc.systemEvent.on(cc.SystemEvent.EventType.MOUSE_DOWN,this.onClick,this);
        this.node.on('mousedown',this.onClick,this);
        // this.selfCollider.on(Contact2DType.BEGIN_CONTACT, this.onCollisionEnter,this);
        console.log("this.node", this.node);
    },

    start () {

    },

    // update (dt) {},

    onClick(){
        //if this knife is not active then return from this call
        if(!this.isActive)
            return;
        console.log("clicked");
        // this.selfRB._type = 2;
        this.selfRB.applyLinearImpulse(this.throwForce, this.selfRB.getWorldCenter(),true);
        this.selfRB.gravityScale = 1;
    },
    onBeginContact(){
        // console.log("contact");
    },
    onPreSolve(contact,selfCollider, otherCollider){
        if(!this.isActive)
            return;
        this.isActive = false;
        // console.log("selfCollider: ",selfCollider);
        //updating rigid body dynamics of the knife
        // selfCollider.body._type = 1; //setting the type of bofy to kinematic
        // selfCollider.body.linearVelocity = new cc.Vec2(0,0); //resetting linear velocity 
        // selfCollider.body.gravityScale = 0; //setting gravity scale to 0 so that gravity does not have impact on this knife
        // //updating box collider of the knife
        // this.oldSize = selfCollider.size; //saving old size of collider
        // this.oldOffset = selfCollider.offset; //saving old offset of collider
        // selfCollider.size = new cc.Vec2(this.oldSize.width, 80); //reducing the size of knife collider
        // selfCollider.offset = new cc.Vec2(this.oldOffset.x, -23.5); //shifting down the knife box collider
        // selfCollider.node.setParent(otherCollider.node);
        this.node.removeComponent(cc.PhysicsBoxCollider);
        this.node.removeComponent(cc.RigidBody);
        this.node.addComponent(cc.CircleCollider);
        // gameManager.Instance.spawnNewKnife();
    },
    onCollisionEnter(){
        console.log("collision enter");
    },
    onCollisionStay(self, other){
        if(!this.isActive)
            return;
        this.isActive = false;
        console.log("selfCollider: ",this.selfCollider);
        console.log("other: ",other);
        if(other.node._name == 'log')
            console.log("other name is log");
        if(this.selfCollider){
            this.selfRB.linearVelocity = new cc.Vec2(0,0);
            this.selfRB.gravityScale = 0;
            this.selfCollider.size.height = 70;
            this.selfCollider.offset.y = -28.5;
            this.node.removeComponent(cc.RigidBody);
            this.node.setParent(gameManager.Instance.log);;
            gameManager.Instance.spawnNewKnife();
            console.log("this.node: ",this.node);
        }
        
        
    }

});
module.exports = gameManager;
