define([
    'jquery',
    'backbone',
    'tmpl/main',
    'models/user'
], function ($, Backbone, tmpl, userModel) {

    var HomeView = Backbone.View.extend({
        model: userModel,
        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },
        events: {
            'click .js-logout': 'logout'
        },
        template: function () {
            return tmpl(this.model);
        },
        render: function () {
            this.$el.html(this.template());
            return this;
        },
        show: function () {
            this.trigger('show', this);
            this.$el.show();
        },
        hide: function () {
            this.$el.hide();
        },
        logout: function (event) {
            event.preventDefault();
            this.model.logout();
        }
    });

    return HomeView;

});
