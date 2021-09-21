using System.IO;
using System.Windows.Forms;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Net;
using System.Text;
using System.Text.Json;
using System.Drawing;

namespace Htapps
{
    [System.Runtime.InteropServices.ComVisibleAttribute(true)]
    public partial class MainScreen : Form
    {
        public MainScreen()
        {
            InitializeComponent();
            browserScreen.ObjectForScripting = this;
            browserScreen.Document.Write(File.ReadAllText("./environment/index.html"));
        }

        //Environment Functions
        public void Import(string url)
        {
            HtmlDocument doc = browserScreen.Document;
            HtmlElement body = doc.GetElementsByTagName("head")[0];
            HtmlElement s = doc.CreateElement("script");
            s.SetAttribute("text", File.ReadAllText("./environment/" + url));
            body.AppendChild(s);
        }

        public void Alert(string text, string message)
        {
            MessageBox.Show(text, message);
        }

        public void ResizeScreen(int x, int y)
        {
            this.WindowState = FormWindowState.Normal;
            this.Size = new Size(x, y);
        }

        //Web Fetch Functions
        public async Task<string> WebFetch(string target, string method, string content_type, string headers, string body, string callback)
        {
            string result = string.Empty;
            await Task.Run(() => {
                var httpWebRequest = (HttpWebRequest)WebRequest.Create(target);
                httpWebRequest.Method = method;

                var Headers = JsonSerializer.Deserialize<Dictionary<string, string>>(headers);

                foreach (var i in Headers.Keys)
                {
                    httpWebRequest.Headers[i] = Headers[i];
                }

                if (method.ToUpperInvariant() != "GET")
                {
                    httpWebRequest.ContentType = content_type;
                    using (var streamWriter = new StreamWriter(httpWebRequest.GetRequestStream()))
                    {
                        string json = body;

                        streamWriter.Write(json);
                    }

                    var httpResponse = (HttpWebResponse)httpWebRequest.GetResponse();
                    using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
                    {
                        string javascript = "(" + callback + ")(JSON.stringify(" + streamReader.ReadToEnd() + "))";
                        result = javascript;
                    }
                }
                else
                {
                    using (HttpWebResponse response = (HttpWebResponse)httpWebRequest.GetResponse())
                    using (Stream stream = response.GetResponseStream())
                    using (StreamReader streamReader = new StreamReader(stream))
                    {
                        string javascript = "(" + callback + ")(JSON.stringify(" + streamReader.ReadToEnd() + "))";
                        result = javascript;
                    }
                }
            });

            HtmlDocument doc = browserScreen.Document;
            HtmlElement head = doc.GetElementsByTagName("head")[0];
            HtmlElement s = doc.CreateElement("script");
            s.SetAttribute("text", result);
            head.AppendChild(s);

            return result;
        }
    
        //Storage Functions
        public void SessionStorageStore(string key, string value)
        {
            GlobalStorage.Dictionary[key] = value;
        }

        public string SessionStorageGet(string key)
        {
            if(GlobalStorage.Dictionary.ContainsKey(key))
            {
                return GlobalStorage.Dictionary[key];
            }
            else
            {
                return "empty";
            }
        }


    }
}


