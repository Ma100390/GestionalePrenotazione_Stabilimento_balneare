import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StabilimentoComponent } from './stabilimento.component';

describe('StabilimentoComponent', () => {
  let component: StabilimentoComponent;
  let fixture: ComponentFixture<StabilimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StabilimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StabilimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
