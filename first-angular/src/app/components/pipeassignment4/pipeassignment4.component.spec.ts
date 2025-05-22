import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pipeassignment4Component } from './pipeassignment4.component';

describe('Pipeassignment4Component', () => {
  let component: Pipeassignment4Component;
  let fixture: ComponentFixture<Pipeassignment4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pipeassignment4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pipeassignment4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
