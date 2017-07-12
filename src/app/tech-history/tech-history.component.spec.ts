import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechHistoryComponent } from './tech-history.component';

describe('TechHistoryComponent', () => {
  let component: TechHistoryComponent;
  let fixture: ComponentFixture<TechHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
