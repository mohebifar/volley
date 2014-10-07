/**
 * Created by mohamad on 10/6/14.
 */
define(function () {
    return function () {
        var game = this.game;


        require(['players', 'global'], function (players, global) {

            game.add.image(0, 0, 'background');

            game.physics.startSystem(Phaser.Physics.P2JS);
            game.physics.p2.gravity.y = 600;
            game.physics.p2.restitution = 0.1;
            game.physics.p2.friction = 2;

            require(['material/sprites'], function (spriteMaterials) {

                for(var i in players) {
                    players[i].sprite = game.add.sprite(500 * i + 150, 380, 'piece');
                    game.physics.p2.enable(players[i].sprite);

                    players[i].sprite.body.debug = true;

                    players[i].sprite.body.fixedRotation = true;
                    players[i].sprite.body.gravity.y = 1000;
                    players[i].sprite.body.clearShapes();
                    players[i].sprite.body.addRectangle(37,86,0,33);
                    players[i].sprite.body.addCircle(32, 0, -42);
                    players[i].sprite.body.setMaterial(spriteMaterials.piece);
                }

                toor = game.add.sprite(400, 250, 'toor');
                game.physics.p2.enable(toor);
                toor.body.debug = true;
                toor.body.fixedRotation = true;
                toor.body.clearShapes();
                toor.body.addRectangle(15, 230, 20, 80);
                toor.body.mass = 1500;
                toor.body.gravity.y = 99999;
                var ball = game.add.sprite(150, 60, 'ball');
                game.physics.p2.enable(ball);
                ball.body.clearShapes();
                ball.body.addCircle(32, 0, 0);
                ball.body.gravity.y = 0.1;
                ball.body.mass = 0.001;
                ball.body.setMaterial(spriteMaterials.ball);

                global.cursors = game.input.keyboard.createCursorKeys();

                require(['material/contacts'], function(d) {
                    console.log(d);
                });
            });

        });

    }
});