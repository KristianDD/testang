"use strict";
var router_1 = require("nativescript-angular/router");
var home_view_component_1 = require("./components/home-view/home-view.component");
exports.ROUTES = [
    { path: "", component: home_view_component_1.HomeViewComponent }
];
exports.APP_ROUTES_PROVIDERS = [
    router_1.nsProvideRouter(exports.ROUTES, {
        enableTracing: false
    })
];
//# sourceMappingURL=app.routes.js.map