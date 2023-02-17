import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JesComponent } from './jes.component';

describe('JesComponent', () => {
  let component: JesComponent;
  let fixture: ComponentFixture<JesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
