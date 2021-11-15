// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu, MenuItem } = require('electron')
const path = require('path')
const keybinds = require(path.resolve('src', 'electron', 'keybinds.js'))

// Electron Windows
const createIndex = require(path.resolve('src', 'electron', '__index'))

// Create a menu for Local Shortcuts
// Hidden in the indexWindow and should be hidden in all other
// windows. We want to create our own menu.
const menu = new Menu(); menu.append(new MenuItem(keybinds))
Menu.setApplicationMenu(menu)

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createIndex()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createIndex()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.