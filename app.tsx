import { app, BrowserWindow } from 'electron';

function createWindow() {
  const win: BrowserWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadURL('http://localhost:3000');
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
