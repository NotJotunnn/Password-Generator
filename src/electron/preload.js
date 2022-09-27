const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('consoleHelloAPI', {
    console: () => ipcRenderer.send('HelloAPI')
})