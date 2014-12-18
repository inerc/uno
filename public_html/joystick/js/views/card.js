define([
    'backbone',
    'models/game',
    'legacy/tmpl/joystick/game'
], function (Backbone, GameModel, tmpl) {
    var CardView = Backbone.View.extend({
        className: 'cards__card',
        initialize: function () {
            this.listenTo(this.model, 'remove', this.remove);
        },
        events: {
            'click': 'selectCard'
        },
        selectCard: function (event) {
            console.log('cardId: %d', this.model.get('cardId'));
            this.model.select();
        },
        render: function () {
            this.$el.css({
                'background-position': '-' + this.model.get('x') + 'px -' + this.model.get('y') + 'px',
                'background-size': '1681px, 1141px'
            })
                .width(this.model.get('width'))
                .height(this.model.get('height'))
                .data('id', this.model.get('cardId'));
            return this;
        }
    });
    return new CardView();
});