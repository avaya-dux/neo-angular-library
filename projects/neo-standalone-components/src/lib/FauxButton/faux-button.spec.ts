import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FauxButtonComponent } from "./faux-button.component";

describe("FauxButtonComponent", () => {
  let component: FauxButtonComponent;
  let fixture: ComponentFixture<FauxButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FauxButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FauxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
