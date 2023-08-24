import { Component } from '@angular/core';
import { AlertController, PickerController } from '@ionic/angular';

@Component({
  selector: 'app-home-logeado',
  templateUrl: './home-logeado.page.html',
  styleUrls: ['./home-logeado.page.scss'],
})
export class HomeLogeadoPage {
  firstName: string = '';
  lastName: string = '';
  educationLevel: string = '';
  birthDate: string = '';

  mesesNombres: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  constructor(
    private alertController: AlertController,
    private pickerController: PickerController
  ) {}

  clearFields() {
    this.firstName = '';
    this.lastName = '';
    this.educationLevel = '';
    this.birthDate = '';
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Usuario',
      message: 'Su nombre es: ' + this.firstName + ' ' + this.lastName + ' fue agregado correctamente',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async openDatePicker() {
    const picker = await this.pickerController.create({
      columns: [
        {
          name: 'dias',
          options: Array.from({ length: 31 }, (_, i) => ({ text: (i + 1).toString(), value: i + 1 }))
        },
        {
          name: 'meses',
          options: this.mesesNombres.map((mes, index) => ({ text: mes, value: index + 1 }))
        },
        {
          name: 'anios',
          options: Array.from({ length: 2023 - 2000 + 1 }, (_, i) => ({ text: (2000 + i).toString(), value: 2000 + i }))
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Seleccionar',
          handler: (value) => {
            const selectedDay = value.dias.value;
            const selectedMonth = value.meses.value;
            const selectedYear = value.anios.value;
            
            // Crear la fecha seleccionada
            const selectedDate = new Date(selectedYear, selectedMonth - 1, selectedDay);
            
            // Formatear la fecha en el formato deseado
            const formattedDate = `${selectedDay} de ${this.mesesNombres[selectedMonth - 1]} de ${selectedYear}`;
            
            // Mostrar el mensaje con la fecha seleccionada
            this.showSelectedDateMessage(formattedDate);
          }
        }
      ]
    });

    await picker.present();
  }

  async showSelectedDateMessage(date: string) {
    const alert = await this.alertController.create({
      header: 'Fecha Seleccionada',
      message: `Has seleccionado la fecha: ${date}`,
      buttons: ['OK'],
    });

    await alert.present();
  }
}