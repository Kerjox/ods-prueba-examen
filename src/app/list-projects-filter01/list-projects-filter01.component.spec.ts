import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProjectsFilter01Component } from './list-projects-filter01.component';

describe('ListProjectsFilter01Component', () => {
  let component: ListProjectsFilter01Component;
  let fixture: ComponentFixture<ListProjectsFilter01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProjectsFilter01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProjectsFilter01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
