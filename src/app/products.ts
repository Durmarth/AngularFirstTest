export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  sold_out: number;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    sold_out: 1
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    sold_out: 2
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: 'This is just a standard product',
    sold_out: 0
  },
  {
    id: 4,
    name: 'NOKIA',
    price: 9,
    description: 'This is just a standard product',
    sold_out: 11
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/