/**
 * Created by mohamad on 10/6/14.
 */
define(['global'], function (global) {

    return {
        piece: global.game.physics.p2.createMaterial('piece'),
        ball: global.game.physics.p2.createMaterial('ball'),
        platformer: global.game.physics.p2.createMaterial('platformer'),
        net: global.game.physics.p2.createMaterial('net'),
        topWall: global.game.physics.p2.createMaterial('topWall')
    };

});