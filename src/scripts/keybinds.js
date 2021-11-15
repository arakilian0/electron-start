const { app, BrowserWindow } = require('electron')

module.exports = {
    label: 'Keybinds',
    submenu: [
        {
            role: 'Close',
            accelerator: 'Ctrl+Shift+C',
            click: () => app.quit()
        },
        {
            role: 'Minimize',
            accelerator: 'Ctrl+Shift+Z',
            click: () => { 
                let win = BrowserWindow.getFocusedWindow()
                win.minimize()
            }
        },
        {
            role: 'Maximize',
            accelerator: 'Ctrl+Shift+X',
            click: () => { 
                let win = BrowserWindow.getFocusedWindow()
                win.maximize()
            }
        },
        {
            role: 'DevTools',
            accelerator: 'Ctrl+Shift+Q',
            click: () => { 
                let win = BrowserWindow.getFocusedWindow()
                win.openDevTools()
            }
        }
    ]
}