import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdsesComponent } from './odses.component';

describe('OdsesComponent', () => {
  let component: OdsesComponent;
  let fixture: ComponentFixture<OdsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdsesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
