using System;
using System.Collections;

namespace Day7
{
    class Program
    {
        static void Main(string[] args)
        {
            string response;
            int input = 0;
            bool cont = true;
            ArrayList inputnums = new ArrayList();

            Console.Write("Please enter a number you want to add to the list to sort: ");
            try
            {
            input = Convert.ToInt32(Console.ReadLine());
            inputnums.Add(input);
                //loops so that it can have infinate number of numbers that the user wants to sort
                do
                {
                    Console.Write("Please enter another number: ");
                    try
                    {
                        input = Convert.ToInt32(Console.ReadLine());
                    }
                    catch
                    {
                        Console.WriteLine("Please enter a valid input");
                    }

                    inputnums.Add(input);
                    do
                    {
                        Console.WriteLine("Do you want to add more numbers? (yes/no)");
                        response = Console.ReadLine().ToLower();
                    } while (response != "yes" && response != "no"); //loops if wrong answer is put in
                    if (response == "yes")
                    {
                        cont = true;
                    }
                    else
                    {
                        cont = false;
                        ;
                    }
                }
                while (cont == true);

                for (int i = 0; i <= inputnums.Count - 2; i++)
                {
                    for (int x = 0; x <= inputnums.Count - 2; x++)
                    {
                        if (Convert.ToInt32(inputnums[x]) > Convert.ToInt32(inputnums[x + 1]))
                        {
                            int p = Convert.ToInt32(inputnums[x + 1]); //temp variable
                            inputnums[x + 1] = inputnums[x];
                            inputnums[x] = p;
                        }
                    }
                }

                Console.Write("The sorted numbers are: ");
                foreach (int num in inputnums)
                {
                    Console.Write(num + ",");
                }
                Console.ReadLine();
            }
            catch
            {
                Console.WriteLine("Please enter a valid input");
            }





        }
    }
}
