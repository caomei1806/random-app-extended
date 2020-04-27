import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRandomComponent } from './add-random.component';

describe('AddRandomComponent', () => {
  let component: AddRandomComponent;
  let fixture: ComponentFixture<AddRandomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRandomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
