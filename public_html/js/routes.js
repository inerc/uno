define([
    'jquery',
    'backbone',
    'views/home',
    'views/game',
    'views/login',
    'views/signup',
    'views/profile',
    'views/scoreboard',
    'views/canvas',
    'views/canvas2',
    'views/app',
    'models/user'
], function ($, Backbone, homeView, gameView, loginView, signupView, profileView, scoreboardView, canvasView, canvas2View, app, userModel) {
  
    app.subscribe([homeView, gameView, loginView, signupView, profileView, scoreboardView, canvasView, canvas2View]);

    var Router = Backbone.Router.extend({
        initialize: function () {
            this.on('route', canvas2View.pause, canvas2View);
            
            this.listenTo(userModel, 'login:ok', this.toGame);
            this.listenTo(userModel, 'signup:ok', this.toLogin);
            this.listenTo(userModel, 'login:no', this.toLogin);
            this.listenTo(userModel, 'logout', this.toMain);
        },
        routes: {
            '': 'index',
            'game': 'game',
            'login': 'login',
            'signup': 'signup',
            'profile': 'profile',
            'scoreboard': 'scoreboard',
            'canvas': 'canvas',
            'canvas2': 'canvas2',
            '*other': 'defaultRoute'
        },
        index: function () {
            homeView.show();
        },
        game: function () {
            gameView.show();
        },
        login: function () {
            loginView.show();
        },
        signup: function () {
            signupView.show();
        },
        profile: function () {
            profileView.show();
        },
        scoreboard: function () {
            scoreboardView.show();
        },
        canvas: function () {
            canvasView.show();
        },
        canvas2: function () {
            canvas2View.show();
        },
        defaultRoute: function () {
            alert('404'); // TODO: change to 404 View
        },
        toGame: function () {
            this.navigate('game', {trigger: true});
        },
        toLogin: function () {
            this.navigate('login', {trigger: true});
        },
        toMain: function () {
            this.navigate('', {trigger: true});
        }
    });

    return new Router();
});
