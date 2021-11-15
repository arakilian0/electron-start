const { BrowserWindow } = require('electron')
const path = require('path')

module.exports = function createIndex () {
    // Create the browser window.
    const indexWindow = new BrowserWindow({
      width: 800,
      height: 600,
      frame: true,
      // Hide 'mainWindow' until 'ready-to-show'
      show: false,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        preload: path.resolve('src', 'preload.js')
      }
    })
  
    // Don't disable the menu, but hide it...
    indexWindow.setMenuBarVisibility(false)
    // and load the index.html of the app.
    indexWindow.loadFile(path.resolve('src', 'index.html'))
  
    // Show 'mainWindow' when 'ready-to-show'
    indexWindow.on('ready-to-show', () => {
        indexWindow.show()
        indexWindow.focus()
    })
  
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
  }