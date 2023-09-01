
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Animation, createAnimation } from '@ionic/core';
import { HelperService } from 'src/app/services/helper.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private router: Router, private helper: HelperService) { }
 
  ngOnInit() {
  
    
  }

  onLogin() {
    if (this.username == "") {
      //alert("Debe ingresar un usuario");
      this.helper.showAlert("Debe ingresar un usuario ", "Error");
      return;
    }
    if (this.password == "") {
      this.helper.showAlert("Debe ingresar una contraseña ","Error");
      return;
      
    }
    if (this.username == "admin" && this.password == "1234") {
      //alert("Login correcto");
      this.router.navigate(['/logeado']);
    } else {
      this.helper.showAlert("Usuario o contraseña incorrecta.","Error")
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
    username: '';
    password: '';
  }


}