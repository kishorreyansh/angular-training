import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IplplayersComponent } from './iplplayers.component';

describe('IplplayersComponent', () => {
  let component: IplplayersComponent;
  let fixture: ComponentFixture<IplplayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IplplayersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IplplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
