import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VelasAromaticasPage } from './velas-aromaticas.page';

describe('VelasAromaticasPage', () => {
  let component: VelasAromaticasPage;
  let fixture: ComponentFixture<VelasAromaticasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VelasAromaticasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
