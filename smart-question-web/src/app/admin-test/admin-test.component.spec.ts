import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTestComponent } from './admin-test.component';

describe('AdminTestComponent', () => {
  let component: AdminTestComponent;
  let fixture: ComponentFixture<AdminTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
