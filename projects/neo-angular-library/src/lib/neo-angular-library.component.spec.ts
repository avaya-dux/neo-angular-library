import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAngularLibraryComponent } from './neo-angular-library.component';

describe('NewAngularLibraryComponent', () => {
  let component: NewAngularLibraryComponent;
  let fixture: ComponentFixture<NewAngularLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAngularLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewAngularLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
