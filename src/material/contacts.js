/**
 * Created by mohamad on 10/6/14.
 */
define(['global', 'material/sprites'], function (global, materials) {

    return {
        pieceAndBall: global.game.physics.p2.createContactMaterial(materials.piece, materials.ball, {
            friction: 0.3,
            restitution: 0.8
        }),
        pieceAndPlatformer: global.game.physics.p2.createContactMaterial(materials.piece, materials.platformer, {
            friction: 5,
            restitution: 0.2
        }),
        ballAndPlatformer: global.game.physics.p2.createContactMaterial(materials.ball, materials.platformer, {
            friction: 0,
            restitution: 0.1,
            stiffness: 1e7
        }),
        pieceAndNet: global.game.physics.p2.createContactMaterial(materials.piece, materials.net, {
            friction: 0,
            restitution: 0.1
        }),
        ballAndTop: global.game.physics.p2.createContactMaterial(materials.ball, materials.topWall, {
            friction: 0,
            restitution: 0
        })
    };

});