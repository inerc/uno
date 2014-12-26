define([
    'backbone',
    'jquery',
    'collections/cards',
    'models/card',
    'models/game',
    'mock-socket'
], function (Backbone, $, CardCollection, CardModel, gameModel) {
    window.WebSocket = MockSocket;

    var exampleServer = new WebSocketServer('ws://' + location.host + '/game');
    exampleServer.on('connection', function (server) {
        server.on('message', function (msg) {

            var data = JSON.parse(msg.data);
            if (data.type === 'card') {
                setTimeout(function () {
                    server.send(JSON.stringify({
                        type: 'step',
                        body: {
                            correct: true
                        }
                    }));
                }, 1000);
            }
            if (data.type === 'gameInfo') {

                server.send(JSON.stringify({
                    type: 'start',
                    body: {}
                }));
            }

        });
    });

    var run = function () {
        module('Card collection test');
        gameModel.connect();
        asyncTest('cardCollection.sendCards', function () {
            var cardModel = new CardModel();
            cardModel.set('cardId', 1);
            CardCollection.sendCard(cardModel).done(function () {
                start();
                ok(true, 'Testing of sending card is correct');
            }).fail(function () {
                start();
                ok(false, 'Testing of sending card is not correct');
            });
        });
    };

    return {run: run};
});
