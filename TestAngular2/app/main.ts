import { nativeScriptBootstrap } from "nativescript-angular/application";

import { AppComponent } from "./app.component";
import { APP_ROUTES_PROVIDERS } from "./app.routes";

nativeScriptBootstrap(AppComponent, [
  APP_ROUTES_PROVIDERS
]);