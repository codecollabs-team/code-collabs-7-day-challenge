using System;
using System.Collections;

namespace Day3
{
    class Converter
    {
        public static String ToBinary(int input)
        {
            string answer = "";
            int remainder;
            try
            {
   
            while (input > 1)
            {
                remainder = input % 2;
                answer += Convert.ToString(remainder);
                input /= 2;
            }
            answer += Convert.ToString(input);

            char[] numbers = answer.ToCharArray();
            Array.Reverse(numbers);
            answer = new string(numbers);
                Console.WriteLine(answer);
            }
            catch(Exception e)
            {
                Console.WriteLine("Error! Please try it again");
                Console.WriteLine(e);
            }
            return answer;
        }

        public static int ToDecimal(string input)
        {
            int answer = 0;
            try
            {
            answer = Convert.ToInt32(input, 2); //the 2 allowed me to specify what base the input number is to convert
            Console.WriteLine(answer);
            }
            catch
            {
                Console.WriteLine("You have not entered a binary value please try again");
            }

            return answer;
        }

        static void Main(string[] args)
        {
            ToBinary(12);
            ToDecimal("0110");
        }
    }
}
