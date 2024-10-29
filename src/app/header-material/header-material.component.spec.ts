import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMaterialComponent } from './header-material.component';

describe('HeaderMaterialComponent', () => {
  let component: HeaderMaterialComponent;
  let fixture: ComponentFixture<HeaderMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
