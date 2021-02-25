import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcformComponent } from './ncform.component';

describe('NcformComponent', () => {
  let component: NcformComponent;
  let fixture: ComponentFixture<NcformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NcformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
