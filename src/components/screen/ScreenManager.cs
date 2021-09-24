using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Drawing;
using System.Windows.Forms;
using Htapps;

namespace Htapps.components.screen
{
    public static class ScreenManager
    {
        public static void ResizeScreen(int x, int y, MainScreen screen)
        {
            screen.WindowState = FormWindowState.Normal;
            screen.Size = new Size(x, y);
        }
        public static void LockResizeScreen(MainScreen screen)
        {
            screen.FormBorderStyle = FormBorderStyle.FixedSingle;
        }
        public static void UnlockResizeScreen(MainScreen screen)
        {
            screen.FormBorderStyle = FormBorderStyle.Sizable;
        }
        public static void LockMaximize(MainScreen screen)
        {
            screen.MaximizeBox = false;
        }
        public static void UnlockMaximize(MainScreen screen)
        {
            screen.MaximizeBox = true;
        }
        public static void LockMinimize(MainScreen screen)
        {
            screen.MinimizeBox = false;
        }
        public static void UnlockMinimize(MainScreen screen)
        {
            screen.MinimizeBox = true;
        }
        public static void SetTitle(string new_title, MainScreen screen)
        {
            screen.Text = new_title;
        }
        public static void SetIcon(string url, MainScreen screen)
        {
            Icon icon = Icon.ExtractAssociatedIcon(url);
            screen.Icon = icon;
        }
        public static void Alert(string text, string message)
        {
            MessageBox.Show(text, message);
        }
    }
}