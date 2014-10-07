/**
 * Created by mohamad on 10/6/14.
 */
define(['global'], function (global) {

    return {
        piece: global.game.physics.p2.createMaterial('piece'),
        ball: global.game.physics.p2.createMaterial('ball')
    };

});