import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByDistrictComponent } from './by-district.component';

describe('ByDistrictComponent', () => {
  let component: ByDistrictComponent;
  let fixture: ComponentFixture<ByDistrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByDistrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
