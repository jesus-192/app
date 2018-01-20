import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-puerta',
    templateUrl: 'Puerta.html'
})
export class DetallePuerta {
    galleryType = 'regular';
    images = ['1.jpg', '2.jpg'];
    constructor(public navCtrl: NavController) {

    }
}
