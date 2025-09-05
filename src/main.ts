import { app, BrowserWindow } from 'electron';

const createWindow = () => {
  const window = new BrowserWindow({
    width: 600,
    height: 800,
  });

  window.loadFile('index.html');
};

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  app.quit();
});
