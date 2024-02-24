import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsParametersComponent } from './js-parameters.component';

describe('JsParametersComponent', () => {
  let component: JsParametersComponent;
  let fixture: ComponentFixture<JsParametersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JsParametersComponent]
    });
    fixture = TestBed.createComponent(JsParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
