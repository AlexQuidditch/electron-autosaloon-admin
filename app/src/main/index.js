'use strict'

import { app , BrowserWindow } from 'electron'

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
	?	`http://localhost:${require('../../../config').port}`
	:	`file://${__dirname}/index.html`

function createWindow() {
    mainWindow = new BrowserWindow({
		width: 1366,
        height:  768
    });

    mainWindow.loadURL(winURL)

    mainWindow.on('closed', () => {
        mainWindow = null
    });
    // eslint-disable-next-line no-console
    console.log('mainWindow opened')
};

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
});
