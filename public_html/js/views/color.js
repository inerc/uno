define([
    'backbone',
    'collections/cards',
    'tmpl/color'
], function (Backbone, cardsCollection, tmpl) {
    var colorDfd,
        ColorView = Backbone.View.extend({

        initialize: function () {
            this.listenTo(cardsCollection, 'color:select', this.getColor);
            _.bindAll(this, 'hide');
        },
        template: function () {
            return tmpl();
        },
        events: {
            'click .js-color': 'selectColor',
            'click .js-close': 'hide'
        },
        getColor: function (model) {
            this.show();
            colorDfd = new $.Deferred();
            colorDfd.done(function (color) {
                model.set('color', color);
                cardsCollection.sendCard(model).fail(function () {
                    model.set('color', 'black');
                });
            });
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        },
        show: function () {
            this.$el.show();
            this.$('.color').show();
        },
        hide: function () {
            this.$el.hide();
            colorDfd.reject();
        },
        selectColor: function (event) {
            var color = $(event.target).data('color');
            colorDfd.resolve(color);
            this.hide();
        }
    });

    return new ColorView();
});
