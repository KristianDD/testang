import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";

import { NS_ROUTER_DIRECTIVES } from "nativescript-angular/router";

@Component({
  selector: "ns-app",
  template: "<page-router-outlet></page-router-outlet>",
  directives: [ROUTER_DIRECTIVES, NS_ROUTER_DIRECTIVES]
})
export class AppComponent {}
