
let gameManager = cc.Class({
    extends: cc.Component,

    properties: {
        knifeParent: {
            serializable: true,
            default: null,
            type: cc.Node,
        },
        knifePosition: {
            serializable: true,
            default: new cc.Vec3(),
        },
        knifePrefab: {
            serializable: true,
            default: null,
            type: cc.Prefab,
        },
        log: {
            serializable: true,
            default: null,
            type: cc.Node,
        }
    },
    statics: {
        Instance: null,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //initializing the instance of this class
        gameManager.Instance = this;
        this.totalKnives = 1;
        this.knviesSpawned = 0;
    },

    start () {

    },

    spawnNewKnife(){
        if(this.knivesSpawned >= this.totalKnives)
            return;
        this.knviesSpawned++;
        this.newKnife = cc.instantiate(this.knifePrefab);
        this.newKnife.setParent(this.knifeParent);
        this.newKnife.setPosition(this.knifePosition);
    }

    // update (dt) {},
});
