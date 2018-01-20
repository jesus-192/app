import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { DetallePage } from '../Palacio/Palacio';
import { DetalleTeatro } from '../Teatro/Teatro';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  onClick() {
      this.navCtrl.push(DetallePage);
  }

  Teatro() {
      this.navCtrl.push(DetalleTeatro);
  }
}
