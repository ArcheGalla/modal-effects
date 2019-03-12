import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBComponent } from './dialog-b.component';

describe('DialogBComponent', () => {
  let component: DialogBComponent;
  let fixture: ComponentFixture<DialogBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
