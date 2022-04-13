import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parameter-proba',
  templateUrl: './parameter-proba.component.html',
  styleUrls: ['./parameter-proba.component.css'],
})
export class ParameterProbaComponent implements OnInit {
  id = '';
  korabbi = [];

  //így tudom a konstruktorral elkérni az Angulartól a regisztrált illetve beépített serviceket - erről majd jövő héten több szó is esik majd
  constructor(private route: ActivatedRoute) {}

  // a paraméterek feldolgozása, kiolvasása az az ngOnInit-ben történhet legkorábban, mert ez az a pont, amikor már hozzáférünk a routing információhoz, a konstruktorban még nem
  ngOnInit() {
    // erről a subscribe-os is majd jövő héten :)
    this.route.params.subscribe((params) => {
      console.log(params);
      this.id = params.id;
      if (params.korabbi && params.korabbi.length > 0) {
        this.korabbi = params.korabbi.split(',');
      }
    });
  }
}
