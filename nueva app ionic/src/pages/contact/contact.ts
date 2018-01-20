import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetallePuerta } from '../Puerta/Puerta';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  onClick() {
      this.navCtrl.push(DetallePuerta);
  }
}
