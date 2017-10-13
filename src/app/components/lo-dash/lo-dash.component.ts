import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-lo-dash',
  templateUrl: './lo-dash.component.html',
  styleUrls: ['./lo-dash.component.css']
})
export class LoDashComponent implements OnInit {

  constructor() {
    this.iteratingOverCollections();
    this.sortingData();
    this.SearchingForData();
    this.findingItemsInCollections();
    this.slicingCollectionsIntoSmallerPieces();
  }

  ngOnInit() {
    console.log('lodash version:', _.VERSION);
  }

  iteratingOverCollections() {

    const collection = [
      'Lois',
      'Kathryn',
      'Craig',
      'Ryan'
    ];

    console.log('***********  Ejemplo 1  ***************');

    _.forEach(collection, (name) => {
      console.log(name);
    });

    console.log('***********  Ejemplo 2  ***************');

    _.forEachRight(collection, (name) => {
      console.log(name);
    });

    console.log('***********  Ejemplo 3  ***************');

    _.forEach(collection, (name, index) => {
      if (name === 'Craig') {
        console.log(`Craig Index: ${ index } `);
      }
    });

    console.log('***********  Fin  ***************');

  }


  sortingData() {

    const collection = [
      {name: 'Clancy', age: 43},
      {name: 'Edna', age: 32},
      {name: 'Lisa', age: 10},
      {name: 'Philip', age: 10}
    ];

    console.log('***********  Ejemplo 4 ***************');

    console.log(_.sortBy(collection, ['age', 'name']));

    console.log('***********  Ejemplo 5 ***************');


    const collection2 = [
      'Carl',
      'Gary',
      'Luigi',
      'Otto'
    ];
    const name = 'Luke';
    collection2.splice(_.sortedIndex(collection2, name), 0, name);

    console.log(collection2);

  }


  SearchingForData() {
    const collection = [
      {name: 'Sean', enabled: false},
      {name: 'Joel', enabled: true},
      {name: 'Sue', enabled: false},
      {name: 'Jackie', enabled: true}
    ];

    console.log('***********  Ejemplo 6 ***************');

    console.log(_.filter(collection, 'enabled'));

    const collection2 = [
      {type: 'shirt', size: 'L'},
      {type: 'pants', size: 'S'},
      {type: 'shirt', size: 'XL'},
      {type: 'pants', size: 'M'}
    ];

    console.log('***********  Ejemplo 7 ***************');

    console.log(_.filter(collection2, (item) => {
      return item.size === 'L' || item.size === 'M';
    }));


    const collection3 = [
      {name: 'Ryan', enabled: true},
      {name: 'Megan', enabled: false},
      {name: 'Trevor', enabled: false},
      {name: 'Patricia', enabled: true}
    ];

    console.log('***********  Ejemplo 8 ***************');

    console.log(_.reject(collection3, {enabled: false}));


  }

  findingItemsInCollections() {
    const collection = [
      {name: 'Derek', age: 37},
      {name: 'Caroline', age: 35},
      {name: 'Malcolm', age: 37},
      {name: 'Hazel', age: 62}
    ];

    console.log('***********  Ejemplo 9 ***************');

    console.log(_.find(collection, {age: 37}));

    console.log('***********  Ejemplo 10 ***************');

    console.log(_.findLast(collection, {age: 37}));

  }

  slicingCollectionsIntoSmallerPieces() {
    const array = [
      'Steve',
      'Michelle',
      'Rebecca',
      'Alan'
    ];

    _.take(array, 2);

    // → [ "Steve", "Michelle" ]

    _.take('lodash', 2).join('');

    // → "lo"

    _.takeRight(array, 2);
    _.takeRight('lodash', 4).join('');

  }

}
