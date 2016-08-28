// This is main process of Electron, started as first thing when your
// app starts. This script is running through entire life of your application.
// It doesn't have any windows which you can see on screen, but we can open
// window from here.

import { app, Menu } from 'electron';
import { devMenuTemplate } from './menu/dev_menu_template';
import { editMenuTemplate } from './menu/edit_menu_template';
import createWindow from './helpers/window';

// Special module holding environment variables which you declared
// in config/env_xxx.json file.
import env from './env';
var ipc = require('ipc')

var mainWindow;

var setApplicationMenu = function () {
    var menus = [editMenuTemplate];
    if (env.name !== 'production') {
        menus.push(devMenuTemplate);
    }

//    menus = [];

    Menu.setApplicationMenu(Menu.buildFromTemplate(menus));
};

// Save userData in separate folders for each environment.
// Thanks to this you can use production and development versions of the app
// on same machine like those are two separate apps.
if (env.name !== 'production') {
    var userDataPath = app.getPath('userData');
    app.setPath('userData', userDataPath + ' (' + env.name + ')');
}

app.on('ready', function () {
    setApplicationMenu();

    mainWindow = createWindow('main', {
        width: 180,
        height: 130,
        frame: false,
        transparent:true
    });

    mainWindow.loadURL('file://' + __dirname + '/app.html');

    mainWindow.setMinimumSize(180,150);
    mainWindow.setMaximumSize(180,150);
    mainWindow.setResizable(false);

    if (env.name === 'development') {
        mainWindow.openDevTools();
    }

});







app.on('window-all-closed', function () {
    app.quit();
});
