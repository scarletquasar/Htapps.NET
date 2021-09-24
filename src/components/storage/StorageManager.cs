using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Windows.Forms;

namespace Htapps.components.storage
{
    public static class StorageManager
    {
        public static void LocalStorageStore(string key, string value, WebBrowser browserScreen)
        {
            try
            {
                if (File.Exists("./environment/modules/storage/local.yml"))
                {
                    var content = File.ReadAllLines("./environment/modules/storage/local.yml").ToList();
                    var treated_content = new List<string>();
                    foreach (var i in content)
                    {
                        if (!i.StartsWith(key))
                        {
                            treated_content.Add(i);
                        }
                    }

                    treated_content.Add($"{key}: {value}");
                    File.WriteAllLines("./environment/modules/storage/local.yml", treated_content);
                }
                else
                {
                    var content = new List<string>();
                    content.Add($"{key}: {value}");
                    File.WriteAllLines("./environment/modules/storage/local.yml", content);
                }
            }
            catch(Exception e)
            {
                browserScreen.Document.InvokeScript("alert", e.ToString().Split(' '));
            }
        }
        public static string LocalStorageGet(string key, WebBrowser browserScreen)
        {
            try
            {
                if (File.Exists("./environment/modules/storage/local.yml"))
                {
                    var content = File.ReadAllLines("./environment/modules/storage/local.yml").ToList();
                    foreach(var i in content)
                    {
                        if(i.StartsWith(key))
                        {
                            return i.Replace(key + ": ", "");
                        }
                    }
                }
                else
                {
                    return "undefined";
                }
            }
            catch (Exception e)
            {
                browserScreen.Document.InvokeScript("alert", e.ToString().Split(' '));
            }
            return "undefined";
        }
        public static void SessionStorageStore(string key, string value)
        {
            GlobalStorage.Dictionary[key] = value;
        }

        public static string SessionStorageGet(string key)
        {
            if (GlobalStorage.Dictionary.ContainsKey(key))
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
