/**
 * Created by mohamad on 10/6/14.
 */

define(['global'], function(global) {
    return {
        keyboard: {
            right: global.game.input.keyboard.createCursorKeys(),
            left: {
                up: global.game.input.keyboard.addKey(Phaser.Keyboard.W),
                down: global.game.input.keyboard.addKey(Phaser.Keyboard.S),
                left: global.game.input.keyboard.addKey(Phaser.Keyboard.A),
                right: global.game.input.keyboard.addKey(Phaser.Keyboard.D)
            }
        }
    };

});