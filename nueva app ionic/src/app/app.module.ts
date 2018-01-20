import { NgModule, ErrorHandler } from '@angular/core';
//import { GoogleMaps } from '@ionic-native/google-maps';
//import { Geolocation } from '@ionic-native/geolocation';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetallePage } from '../pages/Palacio/Palacio';
import { DetalleVilla } from '../pages/Villa/Villa';
import { DetalleMina } from '../pages/Mina/Mina';
import { DetalleTeatro } from '../pages/Teatro/Teatro';
import { DetallePuerta } from '../pages/Puerta/Puerta';
//import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
      HomePage,
      DetallePage,
      DetalleVilla,
      DetalleMina,
      DetallePuerta,
      DetalleTeatro,
    TabsPage
  ],
  imports: [
      IonicModule.forRoot(MyApp)/*,
      IonicImageViewerModule*/
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
      HomePage,
      DetallePage,
      DetalleVilla,
      DetalleTeatro,
      DetallePuerta,
      DetalleMina,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
