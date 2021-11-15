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
        preload: path.join(__dirname, 'preload.js')
      }
    })
  
    // Don't disable the menu, but hide it.
    // This let's us use Local Shortcuts on the window.
    indexWindow.setMenuBarVisibility(false)
    // and load the index.html of the app.
    indexWindow.loadFile('./src/index.html')
  
    // Show 'mainWindow' when 'ready-to-show'
    indexWindow.on('ready-to-show', () => {
        indexWindow.show()
        indexWindow.focus()
    })
  
    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
  }