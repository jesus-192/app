import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-mina',
    templateUrl: 'Mina.html'
})
export class DetalleMina {
    images = ['1.jpg', '2.jpg', '3.jpg', '5.jpg'];
    constructor(public navCtrl: NavController) {

    }
}
