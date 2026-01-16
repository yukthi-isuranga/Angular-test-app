import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Yukthi } from './yukthi';

describe('Yukthi', () => {
  let component: Yukthi;
  let fixture: ComponentFixture<Yukthi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Yukthi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Yukthi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
