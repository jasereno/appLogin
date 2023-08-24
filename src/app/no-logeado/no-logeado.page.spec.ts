import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoLogeadoPage } from './no-logeado.page';

describe('NoLogeadoPage', () => {
  let component: NoLogeadoPage;
  let fixture: ComponentFixture<NoLogeadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NoLogeadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
