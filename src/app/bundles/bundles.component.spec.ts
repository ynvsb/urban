import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundlesComponent } from './bundles.component';

describe('BundlesComponent', () => {
  let component: BundlesComponent;
  let fixture: ComponentFixture<BundlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BundlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BundlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
