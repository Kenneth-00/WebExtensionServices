import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResAgenComponent } from './res-agen.component';

describe('ResAgenComponent', () => {
  let component: ResAgenComponent;
  let fixture: ComponentFixture<ResAgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResAgenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResAgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
