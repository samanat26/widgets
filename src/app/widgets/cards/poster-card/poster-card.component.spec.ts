import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterCardComponent } from './poster-card.component';

describe('PosterCardComponent', () => {
  let component: PosterCardComponent;
  let fixture: ComponentFixture<PosterCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosterCardComponent]
    });
    fixture = TestBed.createComponent(PosterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
