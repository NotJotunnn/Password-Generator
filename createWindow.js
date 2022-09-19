const { BrowserWindow } = require('electron')

const createWindow = () => {

    const win = new BrowserWindow({
      width: 300,
      height: 250,
      frame: false,
      resizable: false,
      fullscreenable: false,
    })
    
    // win.webContents.openDevTools();
  
    win.loadFile('./src/pages/index.html')

    return win
}

module.exports = createWindow