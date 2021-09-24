using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Htapps.components.parsers
{
    public static class EnvParser
    {
        static string AppPath = AppDomain.CurrentDomain.BaseDirectory.Replace("\\", "/")
        .Remove(AppDomain.CurrentDomain.BaseDirectory.Replace("\\", "/").Length - 1) + "/environment/";

        static Dictionary<string, string> EnvVariables = new Dictionary<string, string>()
        {
            { "{app}", File.ReadAllText("./environment/app.html") },
            { "{appPath}", AppPath }
        };

        public static string Execute(string code)
        {
            foreach (var i in EnvVariables.Keys)
            {
                code = code.Replace(i, EnvVariables[i]);
            }

            return code;
        }
    }
}
