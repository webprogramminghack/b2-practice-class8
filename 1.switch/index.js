'use strict';

{
  const a = 2 + 100;

  // switch (a) {
  //   case 3:
  //     console.log('Terlalu kecil');
  //     break;
  //   case 4:
  //     console.log('Tepat!')
  //     break;
  //   case 5:
  //     console.log('Terlalu besar');
  //     break;
  //   default:
  //   console.log('Tidak diketahui nilai tersebut')
  // }
}

{
  const a = 3;

  // switch (a) {
  //   case 3:
  //     console.log('Terlalu kecil');
  //     break;
  //   case 4:
  //   case 5:
  //     console.log('Terlalu besar');
  //     break;
  //   default:
  //   console.log('Tidak diketahui nilai tersebut')
  // }
}

let fruit = 'orange';

switch (fruit) {
  case 'banana':
    console.log('This is a banana.');
    break;
  case 'apple':
    console.log('This is an apple')
    break;
  case 'orange':
  case 'lemon':
    console.log('This is citrus fruit')
    break;
  default:
    console.log('Unknown fruit.')
}