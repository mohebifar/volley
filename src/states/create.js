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
            game.physics.p2.stiffness = 20000;

            // Platformer
            var platformer = game.add.sprite(10, 420);
            game.physics.p2.enable(platformer);
            platformer.body.clearShapes();
            platformer.body.addRectangle(790, 50, 790 / 2 - 5, 0);
            platformer.body.gravity.y = -11112;
            platformer.body.mass = 600;
            // platformer.body.debug = true;

            //Net
            net = game.add.sprite(400, 260, 'net');
            game.physics.p2.enable(net);
//            net.body.debug = true;
            net.body.fixedRotation = true;
            net.body.clearShapes();
            net.body.addRectangle(15, 190, 20, 45);
            net.body.mass = 1500;
            net.body.gravity.y = 99999;

            // Ball
            var ball = game.add.sprite(150, 60, 'ball');
            game.physics.p2.enable(ball);
            ball.body.clearShapes();
            ball.body.addCircle(32, 0, 0);
            ball.body.gravity.y = 0.1;
            ball.body.mass = 0.001;

            global.ball = ball;


            require(['material/sprites', 'material/contacts'], function (spriteMaterials, contactMaterials) {
                ball.body.setMaterial(spriteMaterials.ball);
                game.physics.p2.walls.top.shapes[0].material = spriteMaterials.topWall;
                platformer.body.setMaterial(spriteMaterials.platformer);
                net.body.setMaterial(spriteMaterials.net);

                for (var i in players) {
                    players[i].sprite = game.add.sprite(0, 0, 'piece');
                    players[i].pointText = game.add.text(510 * i + 140, 20, '0', { font: "36px sans-serif", fill: "#FFFFFF", stroke: "#333", strokeThickness: 2 });
                    players[i].initPosition();
                    game.physics.p2.enable(players[i].sprite);

//                    players[i].sprite.body.debug = true;

                    players[i].sprite.body.fixedRotation = true;
                    players[i].sprite.body.gravity.y = 1000;
                    players[i].sprite.body.clearShapes();
                    players[i].sprite.body.addRectangle(37, 86, 0, 33);
                    players[i].sprite.body.addCircle(32, 0, -42);
                    players[i].sprite.body.setMaterial(spriteMaterials.piece);

                }

                players[0].sprite.scale.x = -1;

                global.cursors = game.input.keyboard.createCursorKeys();

            });

            require(['libs/gyro'], function(gyro) {
                gyro.frequency = 1;
                gyro.startTracking(function(o) {
                    if(o.y) {

                        players[0].sprite.body.velocity.x = o.y * 150;
                    } else if(o.gamma) {

                        players[0].sprite.body.velocity.x = o.gamma * 50;
                    }
                });

            });
            
            game.input.onTap.add(function () {
                players[0].sprite.body.moveUp(300);
            });

        });

    }
});
