var util = require('util');
var bleno = require('bleno');

function WriteCharacteristic(uuid) {
  bleno.Characteristic.call(this, {
    uuid: uuid,
    properties: ['write'],
    descriptors: [
      new bleno.Descriptor({
        uuid: '2901',
        value: 'Bakes the pizza and notifies when done baking.'
      })
    ]
  });

  this.pizza = pizza;
}

util.inherits(WriteCharacteristic, bleno.Characteristic);

WriteCharacteristic.prototype.onWriteRequest = function(data, offset, withoutResponse, callback) {
  console.log(data)
  console.log(offset)
};

module.exports = WriteCharacteristic;
