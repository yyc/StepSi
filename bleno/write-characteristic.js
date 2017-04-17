var util = require('util');
var bleno = require('bleno');

function WriteCharacteristic(uuid) {
  bleno.Characteristic.call(this, {
    uuid: uuid,
    properties: ['write'],
    descriptors: [
      new bleno.Descriptor({
        uuid: '2901',
        value: Buffer.from('Step Tracker Data')
      })
    ]
  });
}

util.inherits(WriteCharacteristic, bleno.Characteristic);

WriteCharacteristic.prototype.onWriteRequest = function(data, offset, withoutResponse, callback) {
  console.log('write write');
  console.log(data)
  console.log(offset)
};

WriteCharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log('sub write');
  console.log(maxValueSize, updateValueCallback);
};


module.exports = WriteCharacteristic;
