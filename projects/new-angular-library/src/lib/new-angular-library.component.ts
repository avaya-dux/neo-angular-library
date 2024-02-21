import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-new-angular-library',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      new-angular-library works!
    </p>
  `,
  styles: ``
})
export class NewAngularLibraryComponent {

}
