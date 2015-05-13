define(["require", "exports", "aurelia-router"], function (require, exports, _aurelia_router) {
    var App = (function () {
        function App(router) {
            this.router = router;
            this.router.configure(function (config) {
                config.title = "Aurelia ESRI Atom Sample";
                config.map([
                    {
                        route: [
                            "",
                            "welcome"
                        ],
                        moduleId: "views/welcome",
                        nav: true,
                        title: "Welcome to Atom sample"
                    },
                    {
                        route: "flickr",
                        moduleId: "views/flickr",
                        nav: true
                    },
                    {
                        route: "esri-map",
                        moduleId: "views/esri-map",
                        nav: true,
                        title: "ESRI Map V1"
                    },
                    {
                        route: "child-router",
                        moduleId: "views/child-router",
                        nav: true,
                        title: "Child Router"
                    }
                ]);
            });
        }
        App.inject = [
            _aurelia_router.Router
        ];
        return App;
    })();
    exports.App = App;
});
