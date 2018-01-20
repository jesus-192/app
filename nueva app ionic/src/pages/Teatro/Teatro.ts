import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-teatro',
    templateUrl: 'Teatro.html'
})
export class DetalleTeatro {
    images = ['1.jpg', '3.jpg', '4.jpg', '2.jpg'];
    constructor(public navCtrl: NavController) {

    }
}
