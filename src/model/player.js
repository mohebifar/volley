/**
 * Created by mohamad on 10/6/14.
 */

define(function () {
    function Player(index) {
        /**
         * @property point
         * @type {number}
         */
        this.point_ = 0;

        /**
         * @property sprite
         * @type {Phaser.Sprite}
         */
        this.sprite = null;

        /**
         * @property position
         * @type {string}
         */
        this.position = null;

        /**
         * @property pointText
         * @type {Phaser.Text}
         */
        this.pointText = null;

        /**
         * @property index
         * @type {number}
         */
        this.index = index;
    }

    Player.prototype.constructor = Player;

    Player.prototype.initPosition = function () {
        if(this.sprite.body) {
            this.sprite.body.x = 500 * this.index + 150;
            this.sprite.body.y = 300;
            this.sprite.body.velocity.x = 0;
            this.sprite.body.velocity.y = 0;
        } else {
            this.sprite.x = 500 * this.index + 150;
            this.sprite.y = 300;
        }
    }

    Object.defineProperty(Player.prototype, 'point', {
        set: function(point) {
            this.pointText.setText(point.toString());
            this.point_ = point;
        }, get: function () {
            return this.point_;
        }
    })

    return Player;
});