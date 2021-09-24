using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Htapps.components.webservices
{
    public static class WebManagerAsync
    {
        public static async Task<string> WebFetch
        (string target, string method, string content_type, string headers, 
        string body, string callback, string result, WebBrowser browserScreen)
        {
            if(result == "")
            {
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
            }
            else
            {
                string javascript = "(" + callback + ")(JSON.stringify(" + result + "))";
                result = javascript;
            }


            HtmlDocument doc = browserScreen.Document;
            HtmlElement head = doc.GetElementsByTagName("head")[0];
            HtmlElement s = doc.CreateElement("script");
            s.SetAttribute("text", result);
            head.AppendChild(s);

            return result;
        }
    }
}
