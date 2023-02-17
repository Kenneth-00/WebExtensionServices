import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartLinkComponent } from './part-link.component';

describe('PartLinkComponent', () => {
  let component: PartLinkComponent;
  let fixture: ComponentFixture<PartLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
