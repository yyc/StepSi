var util = require('util');
var bleno = require('bleno');

var WriteCharacteristic = require('./write-characteristic');
var NotifyCharacteristic = require('./notify-characteristic');

function StrideService(uuid, strideData) {
    bleno.PrimaryService.call(this, {
        uuid: uuid,
        characteristics: [
            new WriteCharacteristic(uuid),
            new NotifyCharacteristic(uuid, strideData)
        ]
    });
}

util.inherits(StrideService, bleno.PrimaryService);

module.exports = StrideService;
