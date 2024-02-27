import { Component, Input } from "@angular/core";

@Component({
  selector: "lib-neo-faux-button",
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
