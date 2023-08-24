import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeLogeadoPage } from './home-logeado.page';

describe('HomeLogeadoPage', () => {
  let component: HomeLogeadoPage;
  let fixture: ComponentFixture<HomeLogeadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeLogeadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
