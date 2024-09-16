import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundntComponent } from './foundnt.component';

describe('FoundntComponent', () => {
  let component: FoundntComponent;
  let fixture: ComponentFixture<FoundntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoundntComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
