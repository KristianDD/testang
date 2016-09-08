import { RouterConfig } from "@angular/router";

import { nsProvideRouter } from "nativescript-angular/router";

import { HomeViewComponent } from "./components/home-view/home-view.component";

export const ROUTES: RouterConfig = [
  { path: "", component: HomeViewComponent }
];

export const APP_ROUTES_PROVIDERS = [
  nsProvideRouter(ROUTES, {
    enableTracing: false
  })
];