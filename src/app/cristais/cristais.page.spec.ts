import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CristaisPage } from './cristais.page';

describe('CristaisPage', () => {
  let component: CristaisPage;
  let fixture: ComponentFixture<CristaisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CristaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
