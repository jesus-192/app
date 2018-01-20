import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-palacio',
    templateUrl: 'Palacio.html'
})
export class DetallePage {
    images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
    constructor(public navCtrl: NavController) {

    }
}
