using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.IO;
using Htapps.components.parsers;

namespace Htapps.components.lifecycle
{
    public static class LifecycleManager
    {
        public static void Import(string url, WebBrowser browserScreen)
        {
            HtmlDocument doc = browserScreen.Document;
            HtmlElement body = doc.GetElementsByTagName("head")[0];
            HtmlElement s = doc.CreateElement("script");
            s.SetAttribute("text", File.ReadAllText("./environment/" + url));
            body.AppendChild(s);
        }
        public static void ImportStyle(string url, WebBrowser browserScreen)
        {
            HtmlDocument doc = browserScreen.Document;
            HtmlElement head = doc.GetElementsByTagName("head")[0];
            HtmlElement s = doc.CreateElement("script");
            var content = File.ReadAllText("./environment/" + url).Replace(System.Environment.NewLine, "");
            var parsed_content = StyleParser.Execute(content);

            s.SetAttribute("text", $"___appendStyle(\"{parsed_content}\")");
            head.AppendChild(s);
        }
    }
}
