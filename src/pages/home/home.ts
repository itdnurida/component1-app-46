import { Component } from '@angular/core';
import { AlertController,NavController,ActionSheetController } from 'ionic-angular';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alertCtrl: AlertController,
    public actionSheet: ActionSheetController,
    public navCtrl: NavController) {

  }


showAction(){
  const acSheet = this.actionSheet.create({
    title:'test Action',
    buttons: [
      {
        text: 'Information',
        role: 'info',
        handler: () => {
          console.log('Destructive clicked');
        }  
}
    ]
  });
  acSheet.present();
}


showAlert1(){
  const alert = this.alertCtrl.create({
    title:'Confirm Answer!!',
    subTitle:'nurida Dueramae',
    buttons:[
      {
        text:'OK'
      },
    {
      text:'cancel',
      handler:() => {
        console.log("cancel");
      },
    }]
  });
  alert.present();
}
}
