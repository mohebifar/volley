/**
 * Created by mohamad on 10/6/14.
 */

requirejs.config({
    baseUrl: 'src',
    paths: {
        states: 'states'
    }
});

var g, gl;
define(['states/preload', 'states/create', 'states/update', 'global'], function (preload, create, update, global) {
    var game = new Phaser.Game(800, 450, Phaser.AUTO, 'volley', {
            preload: preload,
            create: create,
            update: update
        }
    );

    global.game = game;
    global.settings = {
        speed: 300
    };

    //TODO: remove global variables
    g = game;
    gl = global;

    return game;
});