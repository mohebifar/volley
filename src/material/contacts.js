/**
 * Created by mohamad on 10/6/14.
 */
define(['global', 'material/sprites'], function (global, materials) {

    return {
        pieceAndBall: global.game.physics.p2.createContactMaterial(materials.piece, materials.ball, {
            friction: 0.3,
            restitution: 0.7
        })
    };

});