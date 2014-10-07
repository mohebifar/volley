/**
 * Created by mohamad on 10/6/14.
 */
define(function () {
    return function () {
        function keyControl(key, player, speed) {
            if (key.up.isDown && key.up.duration < 60 && player.sprite.y > 370) {
                player.sprite.body.moveUp(300);
                speed /= 3;
            }
            if (key.right.isDown) {
                player.sprite.body.moveRight(speed);
            } else if (key.left.isDown) {
                player.sprite.body.moveLeft(speed);
            }
        }

        require(['global', 'players', 'input'], function (global, players, input) {
            var speed = global.settings.speed;

            keyControl(input.keyboard.left, players[0], speed);
            keyControl(input.keyboard.right, players[1], speed);

        });
    }
});