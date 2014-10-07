/**
 * Created by mohamad on 10/3/14.
 */
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('ball', 'assets/sprites/ball.png');
    game.load.image('human', 'assets/sprites/piece-100.png');
    game.load.image('human-mask', 'assets/sprites/piece-mask.png');
}

function create() {
    game.physics.startSystem(Phaser.Physics.P2JS);
    game.stage.backgroundColor = '#EFEFEF';

    game.physics.p2.gravity.y = 600;
    game.physics.p2.restitution = 0.1;
    game.physics.p2.friction = 15;
    bullets = game.add.group();

    var worldMaterial = game.physics.p2.createMaterial('worldMaterial');

    //  4 trues = the 4 faces of the world in left, right, top, bottom order
    game.physics.p2.setWorldMaterial(worldMaterial, false, false, true, false);

    humans = game.add.group();
    human1 = humans.create(150, game.world.height - 80, 'human');

    game.physics.p2.enable(human1, false);

    human1.body.gravity.y = 5000;
//    for (var i = 0; i < 10; i++) {
//        var bullet = bullets.create(game.rnd.integerInRange(200, 1700), game.rnd.integerInRange(-200, 400), 'tinycar');

//        game.physics.p2.enable(bullet,false);
//    }

    human1.body.debug = true;
    human1.body.clearShapes();
    human1.body.addCircle(32, 0, -43);
    human1.body.addRectangle(37, 86, 1, 33);

    cursors = game.input.keyboard.createCursorKeys();

    shipS = game.add.graphics(0, 0);
    shipS.lineStyle(2, 0x000000)
    shipS.drawCircle(0, 0, 30);

    ship = game.add.sprite(150, 150);
    ship.addChild(shipS);

    game.physics.p2.enable(ship);
    ship.body.gravity.y = 0.1;
    ship.body.mass = 0.0001;
    ship.body.addCircle(30, 0, 0)
    human1.body.fixedRotation = true

    cursors.up.onDown.add(function () {
        human1.body.moveUp(300)
    });
    var humanMaterial = game.physics.p2.createMaterial('humanMaterial');
    var ballMaterial = game.physics.p2.createMaterial('humanMaterial');
    human1.body.setMaterial(humanMaterial);
    ship.body.setMaterial(ballMaterial);
    var contact = game.physics.p2.createContactMaterial(humanMaterial, ballMaterial);
    contact.friction = 0.3;
    contact.restitution = 0.5;

    var contactMaterial = game.physics.p2.createContactMaterial(humanMaterial, worldMaterial);

    contactMaterial.friction = 50;     // Friction to use in the contact of these two materials.
    contactMaterial.restitution = 0;  // Restitution (i.e. how bouncy it is!) to use in the contact of these two materials.
    contactMaterial.surfaceVelocity = 0.0;        // Will add surface velocity to this material. If bodyA rests on top if bodyB, and the surface velocity is positive, bodyA will slide to the right.

    text = game.add.text(20, 20, 'move with arrow, space to jump', { fill: '#ffffff' });

};

function update() {
//    bullets.forEachAlive(moveBullets,this);  //make bullets accelerate to ship

    if (cursors.left.isDown) {
        human1.body.moveLeft(150);
    }   //ship movement
    else if (cursors.right.isDown) {
        human1.body.moveRight(150);
    }
//    else {ship.body.setZeroRotation();}
    if (cursors.up.isDown) {
//        human1.body.moveUp(100)
    }
//    else if (cursors.down.isDown){ship.body.reverse(400);}
};