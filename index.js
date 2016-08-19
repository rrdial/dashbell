var DashButton = require('node-dash-button');
var HipChatter = require('hipchatter');

var dash = DashButton("Amazon Dash Button MAC Address");
var hipchat = new HipChatter("Room Token");

dash.on("detected", function (){
    hipchat.notify(123456, {
        message: '@here 🔔 ding dong 🔔 bing bong 🔔',
        format: 'text',
        color: 'purple',
        notify: true
    }, function (err, res) {
        if (err) { throw err; }
    });
});
