import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PulseirasPage } from './pulseiras.page';

describe('PulseirasPage', () => {
  let component: PulseirasPage;
  let fixture: ComponentFixture<PulseirasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PulseirasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
