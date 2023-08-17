import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MandalasPage } from './mandalas.page';

describe('MandalasPage', () => {
  let component: MandalasPage;
  let fixture: ComponentFixture<MandalasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MandalasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
