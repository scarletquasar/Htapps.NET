using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Htapps.components.parsers
{
    public static class StyleParser
    {
        static Dictionary<string, string> CommonTerms = new Dictionary<string, string>()
        {
            { "display", "-appkit-display" }
        };

        public static string Execute(string code)
        {
            foreach (var i in CommonTerms.Keys)
            {
                code = code.Replace(i, CommonTerms[i]);
            }

            return code;
        }
    }
}
