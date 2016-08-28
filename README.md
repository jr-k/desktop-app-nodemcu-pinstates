Nodemcu Pins States
=======================
This app simply provide you on ON/OFF button to manage a pin of a nodemcu, particle photon or other. The script needs the host and the pin number to operate.

# Quick start

Run these commands

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
