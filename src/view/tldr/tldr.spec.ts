import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TLDR } from './tldr';

describe('TLDR', () => {
  let component: TLDR;
  let fixture: ComponentFixture<TLDR>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TLDR]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TLDR);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
