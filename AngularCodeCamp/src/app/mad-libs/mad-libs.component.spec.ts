import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadLibsComponent } from './mad-libs.component';

describe('MadLibsComponent', () => {
  let component: MadLibsComponent;
  let fixture: ComponentFixture<MadLibsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MadLibsComponent]
    });
    fixture = TestBed.createComponent(MadLibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
