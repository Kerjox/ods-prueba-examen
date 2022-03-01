import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filter01Component } from './filter01.component';

describe('Filter01Component', () => {
  let component: Filter01Component;
  let fixture: ComponentFixture<Filter01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Filter01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Filter01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
