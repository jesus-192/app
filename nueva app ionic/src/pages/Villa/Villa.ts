import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-villa',
    templateUrl: 'Villa.html'
})
export class DetalleVilla {
    images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
    constructor(public navCtrl: NavController) {

    }
}
