import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestReadyComponent } from './test-ready.component';

describe('TestReadyComponent', () => {
  let component: TestReadyComponent;
  let fixture: ComponentFixture<TestReadyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestReadyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
