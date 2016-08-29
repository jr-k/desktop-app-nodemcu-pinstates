// Here is the starting point for your application code.
// All stuff below is just to show you how it works. You can delete all of it.

// Use new ES6 modules syntax for everything.
import os from 'os'; // native node.js module
import { remote } from 'electron'; // native electron module
import jetpack from 'fs-jetpack'; // module loaded from npm
import env from './env';
var net = require('net');
var electron_titlebar = require('electron-titlebar');
console.log('Loaded environment variables:', env);

var app = remote.app;
var appDir = jetpack.cwd(app.getAppPath());
console.log('The author of this app is:', appDir.read('package.json', 'json').author);

var os = require('os');
var isWin = (os.platform() === 'win32');

document.addEventListener('DOMContentLoaded', function () {


	// Change IP of your nodeMCU here
	const host = '192.168.1.55';
	const pinToManage = 2;

    var client = new net.Socket();
    client.connect(80, host, function() {
        client.write('!everesp{"action":"actionPinTriggerSync"}');
    });

    client.on('data', function(data) {
        var states = (JSON.parse(data));
        if (states[2] == 1) {
            $('.socket-trigger').removeClass('socket-off').addClass('socket-on');
        }
    });

    require("jsdom").env("", function(err, window) {
        if (err) { console.error(err); return; }

        $('body').addClass(isWin ? 'windows' : 'mac');

        $(document).on('click','.socket-on',function(){
            console.log('[GO TO OFF]');
            var client = new net.Socket();
            client.connect(80, host, function() {
                console.log('Connected');
                client.write('!everesp{"action":"actionPinTriggerDigit","state":"0","pin":"'+pinToManage+'"}');
            });

            $(this).addClass('socket-off').removeClass('socket-on');
        });

        $(document).on('click','.socket-off',function(){
            console.log('[GO TO ON]');
            var client = new net.Socket();
            client.connect(80, host, function() {
                console.log('Connected');
                client.write('!everesp{"action":"actionPinTriggerDigit","state":"1","pin":"'+pinToManage+'"}');
            });

            $(this).addClass('socket-on').removeClass('socket-off');
        });
    });

});





