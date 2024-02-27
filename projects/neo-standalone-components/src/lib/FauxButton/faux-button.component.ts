import { Component, Input } from "@angular/core";

@Component({
  selector: "lib-neo-standalone-components",
  standalone: true,
  template: `<button>{{ label }}</button> `,
})
export class FauxButtonComponent {
  /**
   * Button contents
   *
   * @required
   */
  @Input()
  label = "Button";
}
