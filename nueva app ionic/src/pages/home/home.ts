import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import { DetallePage } from '../Palacio/Palacio';
import { DetalleVilla } from '../Villa/Villa';
import { DetalleMina } from '../Mina/Mina';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

  }

    onClick() {
        this.navCtrl.push(DetallePage);
    }

    Villa() {
        this.navCtrl.push(DetalleVilla);
    }

    Mina() {
        this.navCtrl.push(DetalleMina);
    }

  }
