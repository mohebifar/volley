/**
 * Created by mohamad on 10/6/14.
 */

define(function () {
    function Player() {
        /**
         * @property point
         * @type {number}
         */
        this.point = 0;

        /**
         * @property sprite
         * @type object
         */
        this.sprite = null;

        /**
         * @property position
         * @type {string}
         */
        this.position = null;
    }

    return Player;
});