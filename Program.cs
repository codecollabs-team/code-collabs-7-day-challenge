using System;

namespace Day1 //Praise Olawuni
{
    class Converter
    {
        public static string toString(int n)
        {
            int m; //n is the second digit in the input if there is one
            string wordvalue = "";
            string[] digitsandteens = {"zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "forteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" };
            string[] tens = { "", "", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety " };

            //try loop
            try
            {
                if (n < 20) //minus ten
                {
                    wordvalue += digitsandteens[n]; 
                }
                else if (n > 19 && n < 100)
                {
                    m = n % 10; // gets the last digit.
                    n /= 10; //this gets the firt digit
                    wordvalue += tens[n];
                    wordvalue += digitsandteens[m];
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("error! " + e);
            }
            return wordvalue;
        }

 
        public static int toInteger(string number)
        {
            number = number.ToLower(); //handles different cases.
            string[] digitsandteens = { "", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "forteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" };
            string[] tens = { "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"};
            string word1;
            string word2;
            int num = 0;

            try
            {
                Char[] seperator = { '-', ' ' };
                String[] splitword = number.Split(seperator);
                word1 = splitword[0];
                num = Array.IndexOf(tens, word1) * 10;

                if (splitword.Length < 2)
                {
                    word2 = "";
                    num += Array.IndexOf(digitsandteens, word2);
                }
                else
                {
                    word2 = splitword[1];
                    num += (Array.IndexOf(digitsandteens, word2) - 1);
                }
            }
            catch(Exception e)
            {
                Console.WriteLine("error! " + e);
            }
                return num;
        }

        static void Main(string[] args)
        {
            Console.WriteLine(toInteger("Fifty-two"));
            Console.WriteLine(toString(47));
        }
    }
}
