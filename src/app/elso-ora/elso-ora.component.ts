import { Component, OnInit, VERSION } from '@angular/core';
import { ConnectionService } from '../utils/connection.service';

@Component({
  selector: 'app-elso-ora',
  templateUrl: './elso-ora.component.html',
  styleUrls: ['./elso-ora.component.css'],
})
export class ElsoOraComponent implements OnInit {
  constructor(private connection: ConnectionService) {}

  // lifecycle hook, az Angular komponensek betöltésének megfelelő pontjain hívódnak meg automatikusan, az ngOnInit a konstruktor után de még a komponens megjelenítése előtt
  ngOnInit() {
    this.connection.getArukeszlet().subscribe(data => {
      console.log(data);
    }, error => {
      if(error) {
        console.log('Hiba a http lekérés során')
        console.log(error)
      }
    })
  }

  name = 'Angular ' + VERSION.major;

  userInput = '';

  lista = [];

  addElement() {
    if (this.userInput.length > 0) {
      this.lista.push(this.userInput);
      this.userInput = '';
    }
    console.log(this.lista);
  }

  removeElement(key: string) {
    this.lista = this.lista.filter((e) => {
      return e !== key;
    });
  }
}
