using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace @for
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.ForegroundColor = ConsoleColor.DarkMagenta;



            for (int i = 1; i <= 999999999; i++)
            {
                for (int x = 1; x < i; x++)
                {
                    Console.Write(x);
                }

                Console.WriteLine(i);
            }

            Console.ReadLine();

        }
    }
}
