/**
 * Created by mohamad on 10/6/14.
 */
define(['model/player'], function (Player) {
    var players = [];

    players[0] = new Player();
    players[0].position = 'left';

    players[1] = new Player();
    players[1].position = 'right';

    return players;
});