// From https://raw.githubusercontent.com/sandeepmistry/bleno/master/examples/stride/peripheral.js

//
// Require bleno peripheral library.
// https://github.com/sandeepmistry/bleno
//
var bleno = require('../bleno/index.js');

var util = require('util');

var StrideService = require('./stride-service');

var name = 'Actxa-Stride';

var strideData = [{year:17, month: 4, day: 3, steps: 1000, activeMinutes: 20, km: 3},
  {year:17, month: 4, day: 4, steps: 1000, activeMinutes: 20, km: 3},
  {year:17, month: 4, day: 5, steps: 1000, activeMinutes: 20, km: 3},
  {year:17, month: 4, day: 6, steps: 1000, activeMinutes: 20, km: 3},
  {year:17, month: 4, day: 7, steps: 1000, activeMinutes: 20, km: 3},
  {year:17, month: 4, day: 8, steps: 1000, activeMinutes: 20, km: 3},
  {year:17, month: 4, day: 9, steps: 1000, activeMinutes: 20, km: 3},
  {year:17, month: 4, day: 10, steps: 1000, activeMinutes: 20, km: 3},
];
var uuid = '0000ffc0'+'0000'+'1000'+'8000'+'00805f9b34fb';

var strideService = new StrideService(uuid, strideData);

//
// Wait until the BLE radio powers on before attempting to advertise.
// If you don't have a BLE radio, then it will never power on!
//
bleno.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    //
    // We will also advertise the service ID in the advertising packet,
    // so it's easier to find.
    //
    bleno.startAdvertising(name, [strideService.uuid], function(err) {
      if (err) {
        console.log(err);
      }
    });
  }
  else {
    bleno.stopAdvertising();
  }
});

bleno.on('advertisingStart', function(err) {
  if (!err) {
    console.log('advertising...');
    //
    // Once we are advertising, it's time to set up our services,
    // along with our characteristics.
    //
    bleno.setServices([
      strideService
    ]);
  }
});
