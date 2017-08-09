"use strict";
var MockHttpClient = (function () {
    function MockHttpClient() {
    }
    MockHttpClient.get = function (restUrl, options) {
        return new Promise(function (resolve) {
            resolve(MockHttpClient._items);
        });
    };
    return MockHttpClient;
}());
MockHttpClient._items = [
    {
        ID: 1,
        Title: 'Another awesome day in Contoso Company!',
        Created: new Date(),
        Content: "<b>Hello customer!</b>",
        Author: "John Smith",
        Color: "#18171C",
        AccentColor: "#EABE3B",
        PhotoUrl: "http://inspirationist.net/wp-content/uploads/2014/08/00-anti-office.jpg"
    },
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MockHttpClient;

//# sourceMappingURL=MockHttpClient.js.map
