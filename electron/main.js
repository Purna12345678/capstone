"use strict";
const { app, BrowserWindow } = require("electron");
const path = require("path");
if (require("electron-squirrel-startup")) return;
function createWindow() {
  let win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
    },
  });

  win.loadURL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:5174"
      : `file://${path.join(__dirname, "../public/dist/index.html")}`
  );
  if (process.env.NODE_ENV === "development") {
    win.webContents.openDevTools();
  }
  win.on("closed", () => {
    win = null;
  });
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
});
