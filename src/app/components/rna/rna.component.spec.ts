import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RnaComponent } from './rna.component';

describe('RnaComponent', () => {
  let component: RnaComponent;
  let fixture: ComponentFixture<RnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
