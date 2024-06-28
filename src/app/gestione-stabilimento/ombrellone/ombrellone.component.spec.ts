import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmbrelloneComponent } from './ombrellone.component';

describe('OmbrelloneComponent', () => {
  let component: OmbrelloneComponent;
  let fixture: ComponentFixture<OmbrelloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmbrelloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmbrelloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
