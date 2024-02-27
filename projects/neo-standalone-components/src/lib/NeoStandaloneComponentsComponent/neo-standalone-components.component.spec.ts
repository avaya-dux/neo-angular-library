import { ComponentFixture, TestBed } from "@angular/core/testing";

import { NeoStandaloneComponentsComponent } from "./neo-standalone-components.component";

describe("NeoStandaloneComponentsComponent", () => {
  let component: NeoStandaloneComponentsComponent;
  let fixture: ComponentFixture<NeoStandaloneComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeoStandaloneComponentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NeoStandaloneComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
