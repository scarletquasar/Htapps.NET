using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Htapps.components.storage
{
    public static class StorageManager
    {
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
