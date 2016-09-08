import { Component } from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "ns-home-view",
  templateUrl: "home-view.component.xml",
  styleUrls: ["home-view.component.css"]
})
export class HomeViewComponent {
  pageTitle: string = "Home View";
}