const { app, BrowserWindow, Tray } = require('electron')

const { resolve } = require('path')

iconPath = resolve(__dirname, './','src', 'assets', 'padlock_tray.png')

const createWindow = () => {

    const win = new BrowserWindow({
      width: 340,
      height: 250,
      show: false,
      frame: false,
      resizable: false,
      fullscreenable: false,
    })
    
    // win.webContents.openDevTools();
  
    win.loadFile('./src/pages/index.html')
    
    const tray = new Tray(iconPath)
    tray.setToolTip('Password Generator')

    tray.on('click', toggle)

    win.on('blur', win.hide)

    function toggle() {
      if(win.isVisible()) {
        win.hide()
      } else {
        show()
      }
    }

    function show() {
      const {x, y} = getPosition()

      win.setPosition(x, y, false)

      win.show()
      win.focus()
    }

    function getPosition() {
      const winBounds = win.getBounds()
      const trayBounds = tray.getBounds()

      const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (winBounds.width / 2))

      const y = Math.round(trayBounds.y + trayBounds.height + 3)

      return {x, y}
    }
}


app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.dock.hide()