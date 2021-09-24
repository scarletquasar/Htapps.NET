using System.IO;
using System.Windows.Forms;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Net;
using System.Text.Json;
using System.Drawing;
using System;
using Htapps.components.screen;
using Htapps.components.lifecycle;
using Htapps.components.webservices;
using Htapps.components.storage;

namespace Htapps
{
    [System.Runtime.InteropServices.ComVisibleAttribute(true)]
    public partial class MainScreen : Form
    {
        string AppPath = AppDomain.CurrentDomain.BaseDirectory.Replace("\\", "/")
        .Remove(AppDomain.CurrentDomain.BaseDirectory.Replace("\\", "/").Length - 1) + "/environment/";

        public MainScreen()
        {
            InitializeComponent();
            browserScreen.ObjectForScripting = this;
            browserScreen.Document.Write(File.ReadAllText("./environment/index.html")
            .Replace("{app}", File.ReadAllText("./environment/app.html"))
            .Replace("{appPath}", AppPath));
        }

        private void MainScreen_Resize(object sender, EventArgs e)
        {
            browserScreen.Size = this.Size;
            browserScreen.Dock = DockStyle.Fill;
            HtmlDocument doc = browserScreen.Document;
            HtmlElement head = doc.GetElementsByTagName("head")[0];
            HtmlElement s = doc.CreateElement("script");
            s.SetAttribute("text", "flexibility(document.documentElement)");
            head.AppendChild(s);
        }

        //Screen Functions
        public void SetIcon(string url) { ScreenManager.SetIcon(url, this); }
        public void SetTitle(string new_title) { ScreenManager.SetTitle(new_title, this); }
        public void LockResizeScreen() { ScreenManager.LockResizeScreen(this); }
        public void UnlockResizeScreen() { ScreenManager.UnlockResizeScreen(this); }
        public void LockMaximize() { ScreenManager.LockMaximize(this); }
        public void UnlockMaximize() { ScreenManager.UnlockMaximize(this); }
        public void LockMinimize() { ScreenManager.LockMinimize(this); }
        public void UnlockMinimize() { ScreenManager.UnlockMinimize(this); }
        public void ResizeScreen(int x, int y) { ScreenManager.ResizeScreen(x, y, this); }
        public void Alert(string text, string message) { ScreenManager.Alert(text, message); }

        //Lifecycle Functions

        public void Import(string url) { LifecycleManager.Import(url, browserScreen); }
        public void ImportStyle(string url) { LifecycleManager.ImportStyle(url, browserScreen); }
        public void Exit() { LifecycleManager.Exit(); }

        //Webservices Functions
        public async Task WebFetch(string t, string m, string c_t, string h, string b, string c) 
        {
            await WebManagerAsync.WebFetch(t, m, c_t, h, b, c, browserScreen);
        }

        //Storage Functions
        public void SessionStorageStore(string key, string value) { StorageManager.SessionStorageStore(key, value); }
        public string SessionStorageGet(string key) { return StorageManager.SessionStorageGet(key); }

    }
}


