import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureListComponent } from './signature-list.component';

describe('SignatureListComponent', () => {
  let component: SignatureListComponent;
  let fixture: ComponentFixture<SignatureListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
