import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditusermodalComponent } from './editusermodal.component';

describe('EditusermodalComponent', () => {
  let component: EditusermodalComponent;
  let fixture: ComponentFixture<EditusermodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditusermodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditusermodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
