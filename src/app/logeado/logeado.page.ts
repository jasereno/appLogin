import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-logeado',
  templateUrl: './logeado.page.html',
  styleUrls: ['./logeado.page.scss'],
})
export class LogeadoPage  {
  firstName: string = '';
  lastName: string = '';
  educationLevel: string = '';
  birthDate: string = '';
  constructor(private alertController: AlertController) {}

  clearFields() {
    this.firstName = '';
    this.lastName = '';
    this.educationLevel = '';
    this.birthDate = '';
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Usuario',
      message:'Su nombre es : ' + this.firstName +' '+ this.lastName,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
