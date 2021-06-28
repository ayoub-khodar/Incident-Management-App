import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestpasswordComponent } from './requestpassword.component';

describe('RequestpasswordComponent', () => {
  let component: RequestpasswordComponent;
  let fixture: ComponentFixture<RequestpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
