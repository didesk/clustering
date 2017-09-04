import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Http, HttpModule} from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  points: any[] = []; 

  constructor(public navCtrl: NavController, private http: Http) {

    this.http.get("assets/points.json").subscribe(data => {
      this.points = data.json(); 
      console.log('lOS PUNTOS', this.points);
    });



  }

}
