
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, AfterViewInit } from '@angular/core';
import { Animation, createAnimation } from '@ionic/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }



  login() {
    // Aquí puedes realizar la autenticación real, en este ejemplo solo verificamos los valores estáticos
    if (this.username === 'usuario123' && this.password === 'contraseña') {
      this.router.navigate(['/logeado']); // Cambia 'home' por la ruta de tu página principal
    } else {
      this.router.navigate(['/no-logeado']);
    }
  }


  moverInput() {
    const inputElement = document.querySelector('ion-input') as HTMLElement;
    const inputElement2 = document.querySelector('.ion-input') as HTMLElement;
    const animation = createAnimation()
      .addElement(inputElement)
      .addElement(inputElement2)
      .duration(2500)
      .iterations(1)
      .fromTo('transform', 'translateX(-20px)', 'translateX(300px)')
      .fromTo('opacity', '1', '0.0');
    animation.play();
    username:  '';
    password:  '';
  }
}