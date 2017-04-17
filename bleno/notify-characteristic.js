var util = require('util');
var bleno = require('bleno');

function NotifyCharacteristic(uuid) {
  bleno.Characteristic.call(this, {
    uuid: uuid,
    properties: ['write'],
    descriptors: [
      new bleno.Descriptor({
        uuid: '2901',
        value: Buffer.from('Characteristic User Description')
      })
    ]
  });
}

util.inherits(NotifyCharacteristic, bleno.Characteristic);

NotifyCharacteristic.prototype.onWriteRequest = function(data, offset, withoutResponse, callback) {
  console.log('write notify');
  console.log(data)
  console.log(offset)
};

NotifyCharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log("sub notify");
  console.log(maxValueSize, updateValueCallback);
}



module.exports = NotifyCharacteristic;
