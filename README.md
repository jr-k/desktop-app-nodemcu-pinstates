Nodemcu Pins States
=======================
Minimalistic yet comprehensive boilerplate application for [Electron runtime](http://electron.atom.io).  

Provides cross-platform development environment, which works the same way on OSX, Windows and Linux, and allows you to generate ready for distribution installers of your app for those operating systems.

At the same time this boilerplate does not impose on you any framework (like Angular or React). Tries to give you only the 'electron' part of technology stack so you can pick your favorite tools for 'the actual app' part.

# Quick start
The only development dependency of this project is [Node.js](https://nodejs.org). So just make sure you have it installed.
Then type few commands known to every Node developer...
```
git clone https://github.com/jreziga/desktop-app-nodemcu-pinstates
cd desktop-app-nodemcu-pinstates
npm install
npm start
```
... and voila! You have running desktop application on your screen.

# Configuration

Don't forget to edit nodemcu ip address on `src/app.js` :
```
const host = '192.168.1.55';
const pinToManage = 2;
```

# Preview

![](http://puu.sh/qRKkv/2ba65fd16a.jpg)

![](http://puu.sh/qRKlU/6fcb761ccd.png)

# Thanks

I'm using this boilerplate: [https://github.com/szwacz/electron-boilerplate] go and give him a star :)


# License

Released under the MIT license.
