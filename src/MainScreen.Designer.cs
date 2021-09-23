
using System;

namespace Htapps
{
    partial class MainScreen
    {
        /// <summary>
        /// Variável de designer necessária.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpar os recursos que estão sendo usados.
        /// </summary>
        /// <param name="disposing">true se for necessário descartar os recursos gerenciados; caso contrário, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código gerado pelo Windows Form Designer

        /// <summary>
        /// Método necessário para suporte ao Designer - não modifique 
        /// o conteúdo deste método com o editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.browserScreen = new System.Windows.Forms.WebBrowser();
            this.SuspendLayout();
            // 
            // browserScreen
            // 
            this.browserScreen.Dock = System.Windows.Forms.DockStyle.Fill;
            this.browserScreen.IsWebBrowserContextMenuEnabled = false;
            this.browserScreen.Location = new System.Drawing.Point(0, 0);
            this.browserScreen.MinimumSize = new System.Drawing.Size(20, 20);
            this.browserScreen.Name = "browserScreen";
            this.browserScreen.ScriptErrorsSuppressed = true;
            this.browserScreen.Size = new System.Drawing.Size(784, 561);
            this.browserScreen.TabIndex = 0;
            this.browserScreen.Url = new System.Uri("", System.UriKind.Relative);
            this.browserScreen.WebBrowserShortcutsEnabled = false;
            // 
            // MainScreen
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(784, 561);
            this.Controls.Add(this.browserScreen);
            this.Name = "MainScreen";
            this.Text = "MainScreen";
            this.SizeChanged += new System.EventHandler(this.MainScreen_Resize);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.WebBrowser browserScreen;
    }
}

