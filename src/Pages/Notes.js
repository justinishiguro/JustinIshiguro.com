import React from "react";

function Notes() {
  return (
    <div className="pb-4 px-2 sm:px-6">
      <div className="flex flex-col">
        <div
          className="inline-block flex items-center justify-center"
          id="apsc-160-notes"
        >
          <h1 className="py-4 font-bold text-2xl hover:text-gray-500 font-serif text-center">
            APSC 160 Notes
          </h1>
        </div>
        <p className="">
          APSC160 is a first year engineering course at UBC. It is an
          introduction to programming class using the language C. The first half
          of the course focuses on basic programming concepts and control flow
          structures, such as logical expressions, if statements, while/for
          loops, functions, file IO, and arrays. The second half of the course
          looks at Excel and Arduino. I have created notes for each topic to
          make the learning process easier for students taking the course.
        </p>

        <div className="flex justify-center py-4">
          <div className="w-6/12">
            <div className="flex justify-center">
              <h1 className="pb-1 font-bold underline font-serif text-sm sm:text-lg">
                TABLE OF CONTENTS
              </h1>
            </div>
            <div className="flex justify-center text-center">
              <ul className="space-y-2">
                <li>
                  <ul className="space-y-1">
                    <a
                      href="#topic-1"
                      className="underline hover:text-sky-500 font-semibold"
                    >
                      Binary/Hexadecimal
                    </a>
                    <li className="text-sm">
                      <a
                        href="#decimal-to-binary"
                        className="hover:text-amber-500"
                      >
                        Decimal To Binary
                      </a>
                    </li>
                    <li className="text-sm">
                      <a
                        href="#binary-to-decimal"
                        className="hover:text-amber-500"
                      >
                        Binary To Decimal
                      </a>
                    </li>
                    <li className="text-sm">
                      <a
                        href="#decimal-to-hexadecimal"
                        className="hover:text-amber-500"
                      >
                        Decimal To Hexadecimal
                      </a>
                    </li>
                    <li className="text-sm">
                      <a
                        href="#hexadecimal-to-decimal"
                        className="hover:text-amber-500"
                      >
                        Hexadecimal To Decimal
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#examples-1" className="hover:text-amber-500">
                        Practice Questions
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="space-y-1">
                    <a
                      href="#topic-2"
                      className="underline hover:text-sky-500 font-semibold"
                    >
                      Creating Your Own Program/Fundamentals
                    </a>
                    <li className="text-sm">
                      <a href="#data-types" className="hover:text-amber-500">
                        Data Types
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#operators" className="hover:text-amber-500">
                        Operators
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#input-output" className="hover:text-amber-500">
                        Input/Output
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#examples-2" className="hover:text-amber-500">
                        Practice Questions
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="space-y-1">
                    <a
                      href="#topic-3"
                      className="underline hover:text-sky-500 font-semibold"
                    >
                      Control
                    </a>
                    <li className="text-sm">
                      <a href="#if-else" className="hover:text-amber-500">
                        If/Else
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#while-loop" className="hover:text-amber-500">
                        While Loop
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#examples-3" className="hover:text-amber-500">
                        Practice Questions
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <ul className="space-y-1">
                    <a
                      href="#topic-4"
                      className="underline hover:text-sky-500 font-semibold"
                    >
                      File Input/Output
                    </a>
                    <li className="text-sm">
                      <a href="#file-input" className="hover:text-amber-500">
                        How To Read From A File
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#file-output" className="hover:text-amber-500">
                        How To Write To A File
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <ul className="space-y-1">
                    <a
                      href="#topic-5"
                      className="underline hover:text-sky-500 font-semibold"
                    >
                      Functions
                    </a>
                    <li className="text-sm">
                      <a href="#examples-5" className="hover:text-amber-500">
                        Practice Questions
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <ul className="space-y-1">
                    <a
                      href="#topic-5.5"
                      className="underline hover:text-sky-500 font-semibold"
                    >
                      For Loops
                    </a>
                    <li className="text-sm">
                      <a href="#examples-4" className="hover:text-amber-500">
                        Practice Questions
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <ul className="space-y-1">
                    <a
                      href="#topic-6"
                      className="underline hover:text-sky-500 font-semibold"
                    >
                      Arrays
                    </a>
                    <li className="text-sm">
                      <a href="#1D-array" className="hover:text-amber-500">
                        1-D Arrays
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#2D-array" className="hover:text-amber-500">
                        2-D Arrays
                      </a>
                    </li>
                    <li className="text-sm">
                      <a href="#examples-6" className="hover:text-amber-500">
                        Practice Questions
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    href="#topic-7"
                    className="underline hover:text-sky-500 font-semibold"
                  >
                    Arduino
                  </a>
                </li>
                <li>
                  <ul className="space-y-1">
                    <a
                      href="#topic-8"
                      className="underline hover:text-sky-500 font-semibold"
                    >
                      Strings
                    </a>
                    <li className="text-sm">
                      <a href="#examples-7" className="hover:text-amber-500">
                        Practice Questions
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="inline-block flex">
          <h2
            id="topic-1"
            className="py-4 font-bold text-lg hover:text-gray-500 font-serif"
          >
            Binary/Hexadecimal
          </h2>
        </div>
        <p className="pb-4">
          The first unit that you will look at is how to convert decimal values
          to binary or Hexadecimal and vice versa. We will first look at
          converting a decimal value into binary:
        </p>

        <div>
          <h1
            id="decimal-to-binary"
            className="pb-1 font-bold underline font-serif text-sm"
          >
            Decimal To Binary:
          </h1>
          <ul className="px-4 list-disc space-y-2">
            <li>
              Step 1: Divide the number by 2 and note down the remainder (Ex. 52
              / 2 = 26 with remainder 0, 23 / 2 = 11 with remainder 1)
            </li>
            <li>
              Step 2: Repeat Step 1 by dividing the result by 2 (noting down the
              remainder again) until you get 0 as the quotient
            </li>
            <li>
              Step 3: Now you should have a list of 1's and 0's noted down. To
              write the number in binary, reverse this list from the last
              remainder you got to the first remainder (reverse order)
            </li>
          </ul>
          <div>
            <p className="pt-2">
              <span className="underline">Example:</span> Convert the decimal
              number 23 into binary. First, we will divide 23 by 2, so we will
              get 11 remainder 1. So our remainder list consists of "1". Then we
              will divide 11 by 2, so we will get 5 remainder 1. Our remainder
              list consists of "11". Then we will divide 5 by 2, so we will get
              2 remainder 1. Our remainder list consists of "111". Then we will
              divide 2 by 2, so we will get 1 remainder 0. Our remainder list
              consists of "1110". Finally, we will divide 1 by 2 and get 0
              remainder 1. Our remainder list consists of "11101". Since 0 is
              our quotient now, we are done. We will now reverse our remainder
              list to get a value of "10111". Therefore, the binary
              representation of 23 is 10111.
            </p>
          </div>
        </div>

        <div>
          <h1
            id="binary-to-decimal"
            className="pt-4 pb-1 font-bold underline font-serif text-sm"
          >
            Binary To Decimal:
          </h1>
          <ul className="px-4 list-disc space-y-2">
            <li>
              Step 1: Multiply every digit (starting from the right) by the
              powers of 2, starting with 2<sup>0</sup>. Then, increase the
              exponent by 1 each time you move digits.
            </li>
            <li>
              Step 2: Now, sum up all of these values that you obtained for each
              digit. This will give you the decimal representation of the binary
              number.
            </li>
          </ul>
          <div>
            <p className="pt-2">
              <span className="underline">Example:</span> Convert the binary
              number 111 into a decimal representation. I would start at the
              rightmost digit and multiply this by 2<sup>0</sup>: 1 * 2
              <sup>0</sup> = 1. Then move left to the middle digit and increase
              the exponent by 1, so 1 * 2<sup>1</sup> = 2. Then, increase the
              exponent by 1 each time you move digits. For example, if we have
              "111", I would start at the rightmost digit and multiply this by 2
              <sup>0</sup>: 1 * 2<sup>0</sup> = 1. Then move left to the
              leftmost digit and increase the exponent by 1, so 1 * 2
              <sup>2</sup> = 4. Then summing these values up, I get 1 + 2 + 4 =
              7. Therefore, the decimal representation of 111 is 7.
            </p>
          </div>
        </div>

        <div>
          <h1
            id="decimal-to-hexadecimal"
            className="pt-4 pb-1 font-bold underline font-serif text-sm"
          >
            Decimal To Hexadecimal:
          </h1>
          <ul className="px-4 list-disc space-y-2">
            <li>
              Step 1: Similar to decimal to binary, divide the number by 16 and
              note down the remainder (using A for 10, B for 11, C for 12, D for
              13, E for 14, F for 15).
            </li>
            <li>
              Step 2: Repeat step 1 by dividing the result by 16 (noting down
              the remainder again) until you get 0 as the quotient
            </li>
            <li>
              Step 3: To write the number in hexadecimal, reverse this list from
              the last remainder you got to the first remainder (reverse order)
            </li>
          </ul>
          <div>
            <p className="pt-2">
              <span className="underline">Example:</span> Convert the decimal
              number 75 into hexadecimal. First, we would divide 75 by 16, so we
              will get 4 remainder 11. So our remainder list consists of "B" (B
              is the hexadecimal representation of 11). Then we will divide 4 by
              16, so we will get 0 remainder 4. Our remainder list consists of
              "B4". Since 0 is our quotient now, we are done. We will now
              reverse our remainder list to get a value of "4B". Therefore, the
              binary representation of 75 is 4B.
            </p>
          </div>
        </div>

        <div>
          <h1
            id="hexadecimal-to-decimal"
            className="pt-4 pb-1 font-bold underline font-serif text-sm"
          >
            Hexadecimal To Decimal:
          </h1>
          <ul className="px-4 list-disc space-y-2">
            <li>
              Step 1: Multiply every digit (starting from the right) by the
              powers of 16, starting with 16<sup>0</sup>. Then, increase the
              exponent by 1 each time you move digits.
            </li>
            <li>
              Step 2: Now, sum up all of these values that you obtained for each
              digit. This will give you the decimal representation of the
              hexadecimal number.
            </li>
          </ul>
          <div>
            <p className="pt-2">
              <span className="underline">Example:</span> Convert the
              hexadecimal number AB3 into a decimal representation. I would
              start at the rightmost digit and multiply this by 16<sup>0</sup>:
              3 * 16<sup>0</sup> = 3. Then move left to the middle digit and
              increase the exponent by 1, so B(11) * 16<sup>0</sup>: 1 * 2
              <sup>1</sup> = 176. Then move left to the leftmost digit and
              increase the exponent by 1, so A(10) * 16<sup>2</sup> = 2560. Then
              summing these values up, I get 3 + 176 + 2560 = 2739. Therefore,
              the decimal representation of AB3 is 0x2739 ("0x" is syntax to
              signify hexadecimal).
            </p>
          </div>
        </div>

        {/*Table*/}
        <div className="flex items-center justify-center py-4" id="examples-1">
          <div className="w-11/12 sm:w-6/12 py-4 flex">
            <table className="w-full border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 bg-gray-100" colspan="2">
                    Practice Questions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 border text-center">Question:</td>
                  <td className="py-2 border text-center px-2">Answer:</td>
                </tr>
                <tr>
                  <td className="py-2 border text-center">
                    Convert the decimal number 29 into binary representation.
                  </td>
                  <td className="py-2 border text-center">11101</td>
                </tr>
                <tr>
                  <td className="py-2 border text-center">
                    Convert the binary number 10011 into decimal representation.
                  </td>
                  <td className="py-2 border text-center">19</td>
                </tr>
                <tr>
                  <td className="py-2 border text-center">
                    Convert the decimal number 823 into hexadecimal
                    representation.
                  </td>
                  <td className="py-2 border text-center">0x337</td>
                </tr>
                <tr>
                  <td className="py-2 border text-center">
                    Convert the hexadecimal number AAA into decimal
                    representation.
                  </td>
                  <td className="py-2 border text-center">2730</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/*Table*/}

        <div>
          <div className="inline-block flex">
            <h2
              id="topic-2"
              className="py-4 font-bold text-lg hover:text-gray-500 font-serif"
            >
              Creating Your First Program/Fundamentals
            </h2>
          </div>
          <p className="pb-4">
            Before looking at actual programming topics, you should understand
            basic C syntax and good coding practices:
          </p>

          <div className="flex justify-center text-[8px] sm:text-xs">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="text-green-500">&nbsp;/*</span> <br />
                  <span className="text-green-500">&nbsp;* Author:</span> <br />
                  <span className="text-green-500">
                    &nbsp;* Student Number:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">
                    &nbsp;* Lab Section:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;* Date:</span> <br />
                  <span className="text-green-500">&nbsp;* Purpose:</span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;*/</span> <br />
                  <br />
                  <span className="text-blue-400">#include</span>{" "}
                  &lt;stdio.h&gt;
                  <br />
                  <span className="text-blue-400">#include</span>{" "}
                  &lt;stdlib.h&gt;
                  <br />
                  <br />
                  <span className="text-green-400">/* constants */</span>
                  <br />
                  #define CONSTANTNAME 100
                  <br />
                  <br />
                  <span className="text-blue-400">int</span> main(
                  <span className="text-blue-400">void</span>) &#123;
                  <br />
                  <br />
                  <span className="text-green-400">
                    &nbsp;&nbsp;// your code
                  </span>
                  <br />
                  <br />
                  &nbsp;&nbsp;system(
                  <span className="text-green-400">"PAUSE"</span>
                  );
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">return 0;</span>
                  <br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>

          <div className="py-4">
            <p className="pb-1 underline">
              The code shown above will be like a template during the entire
              term for APSC 160.
            </p>
            <ul className="px-4 list-disc space-y-2">
              <li>
                Including personal information at the beginning of the code,
                such as name and student number is good coding practice
              </li>
              <li>
                The stdio.h library enables input and output operations in C
                programming
              </li>
              <li>
                The stdlib.h library provides functions for memory allocation
                and other utility functions
              </li>
              <li>
                Constants can be defined before the int main(void) function
              </li>
              <li>
                The main code of the program goes directly under the int
                main(void) function
              </li>
              <li>
                At the end of the code, the line system("PAUSE"); temporarily
                halts program execution and allows the user to view the output
                before it closes
              </li>
              <li>
                The line return 0; at the end of the main function indicates a
                successful termination of the program
              </li>
            </ul>
          </div>

          <div className="">
            <h1
              id="data-types"
              className="pb-1 font-bold underline font-serif text-sm"
            >
              Data Types:
            </h1>
            <p>
              Data types are used in all programming languages to define the
              "nature" of data that can be stored in variables. For example an
              "int" is used to store integer values (1, 10, 9233, etc) and a
              "double" is used to store decimal values (1.211, 2.22, etc.). I
              will explain more common data types below.
            </p>
            <div className="flex items-center justify-center">
              <div className="w-11/12 sm:w-6/12 py-4 flex">
                <table className="w-full border border-gray-200">
                  <tbody>
                    <tr className="bg-gray-100">
                      <td className="py-2 border text-center font-bold w-1/4">
                        Data Type:
                      </td>
                      <td className="py-2 border text-center font-bold">
                        Description:
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 border text-center text-blue-400 w-1/4">
                        int
                      </td>
                      <td className="py-2 border text-center whitespace-normal px-1">
                        As described above, the int data type is used to store
                        integer values (whole numbers) without any decimal
                        places.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 border text-center text-blue-400 w-1/4">
                        double
                      </td>
                      <td className="py-2 border text-center whitespace-normal px-1">
                        The double data type is used to store floating-point
                        numbers, which are numbers with decimal places.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 border text-center text-blue-400 w-1/4">
                        char
                      </td>
                      <td className="py-2 border text-center whitespace-normal px-1">
                        The char data type is used to store individual
                        characters. It can represent any single character such
                        as letters, digits, or special symbols.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 border text-center text-blue-400 w-1/4">
                        void
                      </td>
                      <td className="py-2 border text-center whitespace-normal px-1">
                        The void data type is used to indicate the absence of a
                        type or a return value. Note that this type is not that
                        important and will make more sense later.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <p className="">
            <span className="underline">How To Declare A Variable:</span>{" "}
            Declaring a variable is always the same syntax: first is the
            variable type (int, double, etc.), followed by the variable name.
            You can optionally set this variable to some value using an equals
            sign followed by the value you want to set it to. Note that in both
            cases, the statement should end with a semi-colon.
          </p>

          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="text-blue-400">int</span> main(
                  <span className="text-blue-400">void</span>
                  ) &#123;
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;int</span>{" "}
                  variableName
                  <span className="text-gray-400">;</span>
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;double</span> x =
                  <span className="text-blue-400"> 10.1</span>
                  <span className="text-gray-400">;</span>
                  <br />
                  <br />
                  <span className="text-green-400">
                    &nbsp;&nbsp;// ...more code
                  </span>
                  <br />
                  <br />
                  &nbsp;&nbsp;system(
                  <span className="text-green-400">"PAUSE"</span>
                  );
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">return 0;</span>
                  <br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>

          <p className="pt-4">
            You can set these variables to some value later on in your code.
            Also note that it is good practice to give your variables good names
            so that other people are able to understand your code (I did not do
            this).
          </p>

          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="text-blue-400">int</span> main(
                  <span className="text-blue-400">void</span>
                  ) &#123;
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;int</span>{" "}
                  variableName
                  <span className="text-gray-400">;</span>
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;double</span> x =
                  <span className="text-blue-400"> 10.1</span>
                  <span className="text-gray-400">;</span>
                  <br />
                  <br />
                  <span className="text-green-400">
                    &nbsp;&nbsp;// ...more code
                  </span>
                  <br />
                  <br />
                  &nbsp;&nbsp;x =
                  <span className="text-blue-400">&nbsp;220.112</span>
                  <br />
                  &nbsp;&nbsp;variableName =
                  <span className="text-blue-400">&nbsp;123</span>
                  <br />
                  <br />
                  <span className="text-green-400">
                    &nbsp;&nbsp;// ...more code
                  </span>
                  <br />
                  <br />
                  &nbsp;&nbsp;system(
                  <span className="text-green-400">"PAUSE"</span>
                  );
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">return 0;</span>
                  <br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>

          <div className="pt-4">
            <h1
              id="operators"
              className="pb-1 font-bold underline font-serif text-sm"
            >
              Operators:
            </h1>
            <p>
              Operators in C are symbols or special characters that perform
              various operations on operands (variables, constants, or
              expressions). They allow you to manipulate values and perform
              computations. The first type we will discuss are arithmetic
              operators (add, subtract, multiply, divide, modulus):
            </p>
            <div className="flex items-center justify-center py-4">
              <div className="w-3/12 py-4 flex">
                <table className="w-full border border-gray-200">
                  <tbody>
                    <tr className="bg-gray-100">
                      <td className="py-2 border text-center font-bold">
                        Operator:
                      </td>
                      <td className="py-2 border text-center font-bold">
                        C Syntax:
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 border text-center">Add</td>
                      <td className="py-2 border text-center whitespace-normal px-1">
                        x + y
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 border text-center">Subtract</td>
                      <td className="py-2 border text-center whitespace-normal px-1">
                        x - y
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 border text-center">Multiply</td>
                      <td className="py-2 border text-center whitespace-normal px-1">
                        x * y
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 border text-center">Divide</td>
                      <td className="py-2 border text-center whitespace-normal px-1">
                        x / y
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 border text-center">Modulus</td>
                      <td className="py-2 border text-center whitespace-normal px-1">
                        x % y
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p>
              <span className="font-bold">Note:</span> the modulus (%) operator
              returns the remainder of the division between two operands.
            </p>

            <p className="pt-4">
              There are other operators such as relational operators (equal to:
              ==, not equal to: !=, less than: &lt;, greater than: &gt;, etc.)
              and logical operators (AND: &&, OR: ||, NOT: !), but we will
              return to this later.
            </p>
          </div>
          <p className="pt-2">
            <span className="underline">Casting:</span> One question you may
            have is what if you try to add two different types together or if
            you divide two ints, what will the result be? This is why we need
            casting. Casting refers to the process of converting one data type
            to another or a more formal definition: it allows you to explicitly
            change the interpretation of a value to a different data type.
            Casting is useful when you want to perform operations that involve
            different data types.
          </p>
          <p className="pt-4">
            For example, if you have two variables of type int, and you want to
            divide them and store the result in a variable of type double, you
            would need to cast one of the variables to double before performing
            the division. This ensures that the division operation is carried
            out with double precision and that the result is stored as a double.
          </p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="text-blue-400">int</span> main(
                  <span className="text-blue-400">void</span>
                  ) &#123;
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;int</span> x =
                  <span className="text-blue-400"> 12</span>
                  <span className="text-gray-400">;</span>
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;int</span> y =
                  <span className="text-blue-400"> 5</span>
                  <span className="text-gray-400">;</span>
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;int</span> result
                  = (<span className="text-blue-400">double</span>)x / y;
                  <span className="text-green-400">
                    &nbsp;&nbsp;// Casting x to double
                  </span>
                  <br />
                  <br />
                  <span className="text-green-400">
                    &nbsp;&nbsp;// result = 2.4
                  </span>
                  <br />
                  <br />
                  &nbsp;&nbsp;system(
                  <span className="text-green-400">"PAUSE"</span>
                  );
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">return 0;</span>
                  <br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>
        </div>
        <p className="pt-4">
          <span className="font-bold">Note:</span> without casting, result would
          equal 2.00000 as 5 divides into 12 only two times. Typically, this
          result is useless which is why casting is so helpful sometimes.
        </p>

        <div>
          <div className="pt-4">
            <h1
              id="input-output"
              className="pb-1 font-bold underline font-serif text-sm"
            >
              Input/Output:
            </h1>
            <p>
              In order to read user input as well as display text to the user,
              you need to use "printf()" and "scanf()" functions.
            </p>
            <p className="pt-2">
              <span className="underline">Input:</span> The printf function is
              used for outputting data to the console or terminal. It allows you
              to display text, variables, and formatted values on the screen.
              The general syntax of printf is:
            </p>
            <div className="flex justify-center text-[8px] sm:text-xs pt-4">
              <div className="w-11/12 sm:w-9/12 pb-4">
                <div className="bg-gray-200 p-2 rounded-t">
                  <span className="text-gray-600 font-semibold">C</span>
                </div>
                <pre className="bg-gray-800 p-4 rounded-b">
                  <code className="text-white">
                    <span className="">printf(</span>
                    <span className="text-green-400">"some string"</span>,
                    optional arguments);
                  </code>
                </pre>
              </div>
            </div>

            <ul className="px-4 list-disc space-y-2">
              <li>
                The first argument is a string which can contain text and format
                specifiers (this will make more sense with an example - see
                below).
              </li>
              <li>
                The second argument is optional which contains values to be
                printed, which are inserted into the format string based on the
                corresponding format specifiers (again, this will make more
                sense with an example - see below).
              </li>
            </ul>
            <p className="font-bold pt-2">Example #1:</p>
            <div className="flex justify-center text-[8px] sm:text-xs pt-4">
              <div className="w-11/12 sm:w-9/12 pb-4">
                <div className="bg-gray-200 p-2 rounded-t">
                  <span className="text-gray-600 font-semibold">C</span>
                </div>
                <pre className="bg-gray-800 p-4 rounded-b">
                  <code className="text-white">
                    <span className="">printf(</span>
                    <span className="text-green-400">"Hello World!"</span>);
                  </code>
                </pre>
              </div>
            </div>

            <div className="flex justify-center text-[8px] sm:text-xs pt-4">
              <div className="w-11/12 sm:w-9/12 pb-4">
                <div className="bg-gray-200 p-2 rounded-t">
                  <span className="text-gray-600 font-semibold">Output</span>
                </div>
                <pre className="bg-gray-800 p-4 rounded-b">
                  <code className="text-white">
                    <span className="">Hello World!</span>
                  </code>
                </pre>
              </div>
            </div>
            <p className="pt-2">
              In this example, there are no format specifiers, and the string is
              simply outputted to the screen when the program is ran.
            </p>

            <p className="font-bold pt-4">Example #2:</p>
            <div className="flex justify-center text-[8px] sm:text-xs pt-4">
              <div className="w-11/12 sm:w-9/12 pb-4">
                <div className="bg-gray-200 p-2 rounded-t">
                  <span className="text-gray-600 font-semibold">C</span>
                </div>
                <pre className="bg-gray-800 p-4 rounded-b">
                  <code className="text-white">
                    <span className="text-blue-400">int</span>
                    <span className=""> numberOfApples = </span>
                    <span className="text-blue-400">200</span>;
                    <br />
                    <span className="">printf(</span>
                    <span className="text-green-400">
                      "Justin has %d apples."
                    </span>
                    , numberOfApples);
                  </code>
                </pre>
              </div>
            </div>

            <div className="flex justify-center text-[8px] sm:text-xs pt-4">
              <div className="w-11/12 sm:w-9/12 pb-4">
                <div className="bg-gray-200 p-2 rounded-t">
                  <span className="text-gray-600 font-semibold">Output</span>
                </div>
                <pre className="bg-gray-800 p-4 rounded-b">
                  <code className="text-white">
                    <span className="">Justin has 200 apples.</span>
                  </code>
                </pre>
              </div>
            </div>
            <p className="pt-2">
              In this example, there is a format specifier, so the string is
              outputted to the screen, with the value stored in the variable
              "numberOfApples" replacing the "%d" specifier.
            </p>

            <p className="pt-4">
              <span className="font-bold">Note:</span> Notice that I wrote the
              variable name "numberOfApples" with weird capitalization. This
              capitalization is often refered to as "camel casing" and is very
              common in programming in any language. Camel case is a naming
              convention where multiple words are joined together, and each word
              (except the first one) starts with a capital letter.
            </p>

            <div className="flex items-center justify-center pt-4">
              <div className="w-6/12 pt-4 flex">
                <table className="w-full border border-gray-200">
                  <tbody>
                    <tr className="bg-gray-100">
                      <td className="py-2 border text-center font-bold">
                        Format Specifier:
                      </td>
                      <td className="py-2 border text-center font-bold">
                        Description:
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 border text-center">%d</td>
                      <td className="py-2 border text-center whitespace-normal px-1">
                        Used for formatting integer values
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 border text-center">%lf</td>
                      <td className="py-2 border text-center whitespace-normal px-1">
                        Used for formatting double values
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 border text-center">%c</td>
                      <td className="py-2 border text-center whitespace-normal px-1">
                        Used for formatting characters
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 border text-center">%f</td>
                      <td className="py-2 border text-center whitespace-normal px-1">
                        Used for formatting floating-point values
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="pt-2 text-center">
              Depending on the variable type, as shown above there are different
              format specifiers.
            </p>
            <p className="pt-4">
              <span className="underline">Output:</span> The scanf function is
              used for reading input from the user. It allows you to accept data
              from the user and store it in variables. The general syntax of
              scanf is:
            </p>

            <div className="flex justify-center text-[8px] sm:text-xs pt-4">
              <div className="w-11/12 sm:w-9/12 pb-4">
                <div className="bg-gray-200 p-2 rounded-t">
                  <span className="text-gray-600 font-semibold">C</span>
                </div>
                <pre className="bg-gray-800 p-4 rounded-b">
                  <code className="text-white">
                    <span className="">scanf(</span>
                    <span className="text-green-400">"%d"</span>,
                    &variableName);
                  </code>
                </pre>
              </div>
            </div>

            <p>
              Note that the syntax is almost identical to printf with an added
              "&" symbol in front of the variable name. You can think of scanf
              as "storing" the value that the user types into the variable. This
              will make more sense with a few examples.
            </p>

            <p className="font-bold pt-2">Example #1:</p>
            <div className="flex justify-center text-[8px] sm:text-xs pt-4">
              <div className="w-11/12 sm:w-9/12 pb-4">
                <div className="bg-gray-200 p-2 rounded-t">
                  <span className="text-gray-600 font-semibold">C</span>
                </div>
                <pre className="bg-gray-800 p-4 rounded-b">
                  <code className="text-white">
                    <span className="text-blue-400">int </span>numberOfApples;
                    <br />
                    <br />
                    <span className="">printf(</span>
                    <span className="text-green-400">
                      "How many apples would you like to purchase? "
                    </span>
                    );
                    <br />
                    <span className="">scanf(</span>
                    <span className="text-green-400">"%d"</span>,
                    &numberOfApples);
                    <br />
                    <span className="">printf(</span>
                    <span className="text-green-400">
                      "We are preparing %d apples for you.\n"
                    </span>
                    , numberOfApples);
                  </code>
                </pre>
              </div>
            </div>

            <div className="flex justify-center text-[8px] sm:text-xs pt-4">
              <div className="w-11/12 sm:w-9/12 pb-4">
                <div className="bg-gray-200 p-2 rounded-t">
                  <span className="text-gray-600 font-semibold">Output</span>
                </div>
                <pre className="bg-gray-800 p-4 rounded-b">
                  <code className="text-white">
                    <span className="">
                      How many apples would you like to purchase?{" "}
                    </span>
                    <span className="text-red-400">250</span>
                    <br />
                    <span>We are preparing 250 apples for you.</span>
                  </code>
                </pre>
              </div>
            </div>

            <p className="pt-4">
              <span className="font-bold">Note:</span> The "\n" syntax means new
              line, so the next printf statement you write will be on the next
              line. It is good practice to include this as it looks much more
              readable to the user. Also feel free to test this code out or make
              your own examples on an online C compiler such as{" "}
              <a
                className="underline"
                href="https://www.programiz.com/c-programming/online-compiler/"
                target="_blank"
              >
                this one.
              </a>
            </p>

            <div
              className="flex items-center justify-center py-4"
              id="examples-2"
            >
              <div className="w-11/12 sm:w-6/12 pt-4 flex">
                <table className="w-full border border-gray-200">
                  <thead>
                    <tr>
                      <th className="py-2 bg-gray-100" colspan="2">
                        Practice Questions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 border text-center font-semibold">
                        Question:
                      </td>
                      <td className="py-2 border text-center px-2 font-semibold">
                        Answer:
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 border text-center">
                        Write a simple program to ask the user for an integer
                        then double it and print out the result.
                      </td>
                      <td className="py-2 border text-center">
                        <a
                          href="https://codebeautify.org/alleditor/y23fc94c6"
                          target="_blank"
                          className="underline hover:text-blue-400"
                        >
                          Solution
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 border text-center">
                        Write a program to ask the user for two values of type
                        double then return the sum of the two values.
                      </td>
                      <td className="py-2 border text-center">
                        <a
                          href="https://codebeautify.org/alleditor/y23280be5"
                          target="_blank"
                          className="underline hover:text-blue-400"
                        >
                          Solution
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 border text-center">
                        Ask the user for an integer value and print the value
                        divided by 10 (by casting).
                      </td>
                      <td className="py-2 border text-center">
                        <a
                          href="https://codebeautify.org/alleditor/y23ce29d7"
                          target="_blank"
                          className="underline hover:text-blue-400"
                        >
                          Solution
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="pb-4">
              <span className="font-bold">Note:</span> You are not able to run
              the solutions on that website so again feel free to test the
              solutions as well as your own code on an online C compiler such as{" "}
              <a
                className="underline"
                href="https://www.programiz.com/c-programming/online-compiler/"
                target="_blank"
              >
                this one.
              </a>
            </p>
          </div>
        </div>

        <div>
          <div className="inline-block flex">
            <h3
              id="topic-3"
              className="py-4 font-bold text-lg hover:text-gray-500 font-serif"
            >
              Control
            </h3>
          </div>
          <p className="">
            Control structures are used to control the flow of execution within
            a program. They determine which statements are executed and when,
            based on certain conditions or criteria. However, before we look at
            these we should first understand the relational operators (logical
            expressions):
          </p>
          <div className="flex items-center justify-center py-4">
            <div className="w-11/12 sm:w-6/12 pt-4 flex">
              <table className="w-full border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-2 bg-gray-100" colSpan="3">
                      Logical Expressions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 border text-center font-semibold">
                      Expression:
                    </td>
                    <td className="py-2 border text-center px-2 font-semibold">
                      Explaination:
                    </td>
                    <td className="py-2 border text-center font-semibold">
                      C Syntax:
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 border text-center">X and Y</td>
                    <td className="py-2 border text-center">
                      True if both X and Y are true
                    </td>
                    <td className="py-2 border text-center">X && Y</td>
                  </tr>
                  <tr>
                    <td className="py-2 border text-center">X or Y</td>
                    <td className="py-2 border text-center">
                      True if either X or Y is true
                    </td>
                    <td className="py-2 border text-center">X || Y</td>
                  </tr>
                  <tr>
                    <td className="py-2 border text-center">X equals Y</td>
                    <td className="py-2 border text-center">
                      True if X is equal to Y
                    </td>
                    <td className="py-2 border text-center">X == Y</td>
                  </tr>
                  <tr>
                    <td className="py-2 border text-center">Not X</td>
                    <td className="py-2 border text-center">
                      True if X is false, false if X is true
                    </td>
                    <td className="py-2 border text-center">!X</td>
                  </tr>
                  <tr>
                    <td className="py-2 border text-center">
                      X is less than Y
                    </td>
                    <td className="py-2 border text-center">
                      True if X is numerically less than Y{" "}
                    </td>
                    <td className="py-2 border text-center">X &lt; Y</td>
                  </tr>
                  <tr>
                    <td className="py-2 border text-center">
                      X is less than or equal to Y
                    </td>
                    <td className="py-2 border text-center">
                      True if X is numerically less than or equal to Y
                    </td>
                    <td className="py-2 border text-center">X &lt;= Y</td>
                  </tr>

                  <tr>
                    <td className="py-2 border text-center">
                      X is not equal to Y
                    </td>
                    <td className="py-2 border text-center">
                      True if X is not equal to Y
                    </td>
                    <td className="py-2 border text-center">X != Y</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="pb-4">
            Now that we have looked at logical expressions, we can look at the
            different control structures:
          </p>

          <div>
            <h1
              id="if-else"
              className="pb-1 font-bold underline font-serif text-sm"
            >
              If/Else:
            </h1>
            <p className="pb-1">
              The if/else statement is used for conditional execution of code.
              It allows you to check a condition and perform different actions
              based on whether the condition is true or false. This is the
              general "skeleton" of an if/else loop:
            </p>
            <div className="flex justify-center text-[8px] sm:text-xs pt-4">
              <div className="w-11/12 sm:w-9/12 pb-4">
                <div className="bg-gray-200 p-2 rounded-t">
                  <span className="text-gray-600 font-semibold">C</span>
                </div>
                <pre className="bg-gray-800 p-4 rounded-b">
                  <code className="text-white">
                    <span className="text-blue-400">if </span>(condition) {"{"}
                    <br />
                    <span className="text-green-400">
                      &nbsp;&nbsp;// code run if condition true
                    </span>
                    <br />
                    <span className="">{"}"}</span>
                    <br />
                    <br />
                    <span className="text-blue-400">else</span> {"{"}
                    <br />
                    <span className="text-green-400">
                      &nbsp;&nbsp;// code run if condition false
                    </span>
                    <br />
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>
            <p>
              The code inside the if block will be executed if the condition is
              true. If the condition is false, the code inside the else block
              will be executed instead. Note that the else block is optional. We
              can add additional blocks called "else if" statements which allow
              you to specify additional conditions to be checked if the
              preceding if statement's condition evaluates to false:
            </p>

            <div className="flex justify-center text-[8px] sm:text-xs pt-4">
              <div className="w-11/12 sm:w-9/12 pb-4">
                <div className="bg-gray-200 p-2 rounded-t">
                  <span className="text-gray-600 font-semibold">C</span>
                </div>
                <pre className="bg-gray-800 p-4 rounded-b">
                  <code className="text-white">
                    <span className="text-blue-400">if </span>(condition1) {"{"}
                    <br />
                    <span className="text-green-400">
                      &nbsp;&nbsp;// code run if condition1 true
                    </span>
                    <br />
                    <span className="">{"}"}</span>
                    <br />
                    <br />
                    <span className="text-blue-400">
                      else if{" "}
                    </span>(condition2) {"{"}
                    <br />
                    <span className="text-green-400">
                      &nbsp;&nbsp;// code run if condition2 true, condition1
                      false
                    </span>
                    <br />
                    <span className="">{"}"}</span>
                    <br />
                    <br />
                    <span className="text-blue-400">else</span> {"{"}
                    <br />
                    <span className="text-green-400">
                      &nbsp;&nbsp;// code run if condition1 and condition2 are
                      false
                    </span>
                    <br />
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>

            <p className="font-bold pt-2">Example #1:</p>
            <div className="flex justify-center text-[8px] sm:text-xs pt-4">
              <div className="w-11/12 sm:w-9/12 pb-4">
                <div className="bg-gray-200 p-2 rounded-t">
                  <span className="text-gray-600 font-semibold">C</span>
                </div>
                <pre className="bg-gray-800 p-4 rounded-b">
                  <code className="text-white">
                    <span className="text-blue-400">int</span> x = 10;
                    <br />
                    <br />
                    <span className="text-blue-400">if </span>(x &lt; 10) {"{"}
                    <br />
                    &nbsp;&nbsp;printf(
                    <span className="text-green-400">"x is small.\n"</span>);
                    <br />
                    <span className="">{"}"}</span>
                    <br />
                    <br />
                    <span className="text-blue-400">else if </span>(x == 10){" "}
                    {"{"}
                    <br />
                    &nbsp;&nbsp;printf(
                    <span className="text-green-400">
                      "x is equal to 10.\n"
                    </span>
                    );
                    <br />
                    <span className="">{"}"}</span>
                    <br />
                    <br />
                    <span className="text-blue-400">else</span> {"{"}
                    <br />
                    &nbsp;&nbsp;printf(
                    <span className="text-green-400">"x is big.\n"</span>);
                    <br />
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>
            <div className="flex justify-center text-[8px] sm:text-xs pt-4">
              <div className="w-11/12 sm:w-9/12 pb-4">
                <div className="bg-gray-200 p-2 rounded-t">
                  <span className="text-gray-600 font-semibold">Output</span>
                </div>
                <pre className="bg-gray-800 p-4 rounded-b">
                  <code className="text-white">
                    <span className="">x is equal to 10.</span>
                  </code>
                </pre>
              </div>
            </div>
            <p>
              If we changed the value of x to some other integer (smaller than
              10 or larger than 10), the output would change. You will use
              if/else statements a ton so I will provide additional practice at
              the end of this topic.
            </p>
          </div>

          <div>
            <h1
              id="while-loop"
              className="pb-1 pt-4 font-bold underline font-serif text-sm"
            >
              While Loop:
            </h1>
            <p className="pb-1">
              The while loop allows you to repeatedly execute a block of code as
              long as a given condition is true. This is the general syntax of a
              while loop:
            </p>
            <div className="flex justify-center text-[8px] sm:text-xs pt-4">
              <div className="w-11/12 sm:w-9/12 pb-4">
                <div className="bg-gray-200 p-2 rounded-t">
                  <span className="text-gray-600 font-semibold">C</span>
                </div>
                <pre className="bg-gray-800 p-4 rounded-b">
                  <code className="text-white">
                    <span className="text-blue-400">while </span>(condition){" "}
                    {"{"}
                    <br />
                    <span className="text-green-400">
                      &nbsp;&nbsp;// code run as long as condition true
                    </span>
                    <br />
                    <span className="">{"}"}</span>
                    <br />
                  </code>
                </pre>
              </div>
            </div>

            <p className="font-bold pt-2">Example #1:</p>
            <div className="flex justify-center text-[8px] sm:text-xs pt-4">
              <div className="w-11/12 sm:w-9/12 pb-4">
                <div className="bg-gray-200 p-2 rounded-t">
                  <span className="text-gray-600 font-semibold">C</span>
                </div>
                <pre className="bg-gray-800 p-4 rounded-b">
                  <code className="text-white">
                    <span className="text-blue-400">int</span> x = 10;
                    <br />
                    <br />
                    <span className="text-blue-400">while </span>(x &gt;= 0){" "}
                    {"{"}
                    <br />
                    &nbsp;&nbsp;printf(
                    <span className="text-green-400">"%d "</span>, x);
                    <br />
                    <span>&nbsp;&nbsp;x = x - 1;</span>
                    <br />
                    <span className="">{"}"}</span>
                  </code>
                </pre>
              </div>
            </div>

            <div className="flex justify-center text-[8px] sm:text-xs pt-4">
              <div className="w-11/12 sm:w-9/12 pb-4">
                <div className="bg-gray-200 p-2 rounded-t">
                  <span className="text-gray-600 font-semibold">Output</span>
                </div>
                <pre className="bg-gray-800 p-4 rounded-b">
                  <code className="text-white">
                    <span className="">10 9 8 7 6 5 4 3 2 1 0 </span>
                  </code>
                </pre>
              </div>
            </div>
            <p>
              The code inside the while block will be executed repeatedly until
              the condition becomes false. It's essential to ensure that the
              condition eventually becomes false to prevent an infinite loop.
            </p>
            <p className="pt-4">
              <span className="font-bold">Note:</span> You can use the "break"
              keyword to exit the loop before its normal termination condition
              is met. When a break statement is encountered inside a loop, the
              loop is immediately exited.
            </p>
            <p className="pt-4">
              <span className="underline">Do-While Loop:</span> Another variant
              of the while loop is a do-while loop. They are very similar, but
              the do-while loop guarantees that the code block is executed at
              least once, regardless of the condition. This is the general
              syntax of a do-while loop:
            </p>
            <div className="flex justify-center text-[8px] sm:text-xs pt-4">
              <div className="w-11/12 sm:w-9/12 pb-4">
                <div className="bg-gray-200 p-2 rounded-t">
                  <span className="text-gray-600 font-semibold">C</span>
                </div>
                <pre className="bg-gray-800 p-4 rounded-b">
                  <code className="text-white">
                    <span className="text-blue-400">do </span> {"{"}
                    <br />
                    <span className="text-green-400">
                      &nbsp;&nbsp;// code to be executed
                    </span>
                    <br />
                    <span className="">{"}"}</span>
                    <span className="text-blue-400">&nbsp;while</span>
                    &nbsp;(condition);
                    <br />
                  </code>
                </pre>
              </div>
            </div>
            <p>
              The code block within the do statement is executed first, and then
              the condition is evaluated. If the condition is true, the loop
              will continue to execute the code block again. If the condition is
              false, the loop terminates, and the program continues with the
              statement following the do-while loop.
            </p>
            <p className="font-bold pt-2">Example #1:</p>
            <div className="flex justify-center text-[8px] sm:text-xs pt-4">
              <div className="w-11/12 sm:w-9/12 pb-4">
                <div className="bg-gray-200 p-2 rounded-t">
                  <span className="text-gray-600 font-semibold">C</span>
                </div>
                <pre className="bg-gray-800 p-4 rounded-b">
                  <code className="text-white">
                    <span className="text-blue-400">int</span> x = 0;
                    <br />
                    <br />
                    <span className="text-blue-400">do </span> {"{"}
                    <br />
                    &nbsp;&nbsp;printf(
                    <span className="text-green-400">"%d "</span>, x);
                    <br />
                    &nbsp;&nbsp;x++;
                    <br />
                    {"}"}
                    <span className="text-blue-400">&nbsp;while</span> (x &lt;
                    10);
                  </code>
                </pre>
              </div>
            </div>
            <div className="flex justify-center text-[8px] sm:text-xs pt-4">
              <div className="w-11/12 sm:w-9/12 pb-4">
                <div className="bg-gray-200 p-2 rounded-t">
                  <span className="text-gray-600 font-semibold">Output</span>
                </div>
                <pre className="bg-gray-800 p-4 rounded-b">
                  <code className="text-white">
                    <span className="">0 1 2 3 4 5 6 7 8 9 </span>
                  </code>
                </pre>
              </div>
            </div>
            <p className="pt-4">
              <span className="font-bold">Note:</span> You might be wondering
              what "x++" means? "x++" is the exact same as writing x = x + 1,
              similarly "x--" is the same as writing x = x - 1. The syntax is
              just much easier to write.
            </p>
          </div>

          <div
            className="flex items-center justify-center py-4"
            id="examples-3"
          >
            <div className="w-11/12 sm:w-6/12 pt-4 flex">
              <table className="w-full border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-2 bg-gray-100" colspan="2">
                      Practice Questions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 border text-center font-semibold">
                      Question:
                    </td>
                    <td className="py-2 border text-center px-2 font-semibold">
                      Answer:
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 border text-center">x</td>
                    <td className="py-2 border text-center">
                      <a
                        href="https://codebeautify.org/alleditor/y23fb59b4"
                        target="_blank"
                        className="underline hover:text-blue-400"
                      >
                        Solution
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 border text-center">
                      Write a program that takes an integer input from the user
                      and prints: "too small." if the value is less than 15,
                      "too big." if the value is greater than 15, and "correct!"
                      if the value is equal to 15.
                    </td>
                    <td className="py-2 border text-center">
                      <a
                        href="https://codebeautify.org/alleditor/y234507ca"
                        target="_blank"
                        className="underline hover:text-blue-400"
                      >
                        Solution
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 border">
                      <div className="flex flex-col items-center">
                        <p className="text-center">x</p>
                      </div>
                    </td>
                    <td className="py-2 border text-center">
                      <a
                        href="https://codebeautify.org/alleditor/y23a0f153"
                        target="_blank"
                        className="underline hover:text-blue-400"
                      >
                        Solution
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-block flex">
            <h3
              id="topic-4"
              className="py-4 font-bold text-lg hover:text-gray-500 font-serif"
            >
              File Input/Output
            </h3>
          </div>
          <p className="pb-4">
            File input/output allows you to read data from and write data to
            files on your computer's storage. Typically, you can follow a sort
            of template when dealing with files:
          </p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="text-green-500">&nbsp;/*</span> <br />
                  <span className="text-green-500">&nbsp;* Author:</span> <br />
                  <span className="text-green-500">
                    &nbsp;* Student Number:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">
                    &nbsp;* Lab Section:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;* Date:</span> <br />
                  <span className="text-green-500">&nbsp;* Purpose:</span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;*/</span> <br />
                  <br />
                  <span className="text-blue-400">#include</span>{" "}
                  &lt;stdio.h&gt;
                  <br />
                  <br />
                  <span className="text-blue-400">#define</span> INPUTFILE
                  "fileName.txt"
                  <br />
                  <br />
                  <span className="text-blue-400">int</span> main(
                  <span className="text-blue-400">void</span>) &#123;
                  <br />
                  <br />
                  <span>&nbsp;&nbsp;FILE *file;</span>
                  <br />
                  <br />
                  &nbsp;&nbsp;file = fopen(INPUTFILE,&nbsp;
                  <span className="text-green-400">"r"</span>);
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;if</span>(file ==
                  NULL)&nbsp;{"{"}
                  <br />
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;printf(</span>
                  <span className="text-green-400">
                    "Error opening the file!\n"
                  </span>
                  );
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;else</span>&nbsp;
                  {"{"}
                  <br />
                  <span className="text-green-400">
                    &nbsp;&nbsp;&nbsp;&nbsp;// access file
                  </span>
                  <br />
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;fclose(file);</span>
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  <br />
                  &nbsp;&nbsp;system(
                  <span className="text-green-400">"PAUSE"</span>
                  );
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">return 0;</span>
                  <br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>
        </div>
        <ul className="px-4 list-disc space-y-2">
          <li>
            Inside the main function, a file pointer named file is declared.
            This pointer will be used to handle the file.
          </li>
          <li>
            The fopen function is called to open the file specified by the
            INPUTFILE macro in read mode ("r"). The return value of fopen is
            assigned to the file pointer.
          </li>
          <li>
            The code checks if the file pointer file is NULL, which indicates
            that the file could not be opened. If it is NULL, an error message
            is printed.
          </li>
          <li>
            If the file is successfully opened, the code inside the else block
            is executed. In this case, the file is accessed (you can perform
            read or write operations here). Once the operations are completed,
            the fclose function is called to close the file.
          </li>
        </ul>
        <p className="pt-4">
          Do not worry if you do not fully understand this code. Typically, the
          questions asked will follow this template, where you will add your own
          code to the body of the else statement.
        </p>
        <h1
          id="file-input"
          className="pb-1 pt-4 font-bold underline font-serif text-sm"
        >
          How To Read From A File (File Input):
        </h1>
        <p className="pb-1">
          In order to read data from a file, you can use fscanf, which is very
          similar to scanf. The fscanf function has the following general syntax
        </p>
        <div className="flex justify-center text-[8px] sm:text-xs pt-4">
          <div className="w-11/12 sm:w-9/12 pb-4">
            <div className="bg-gray-200 p-2 rounded-t">
              <span className="text-gray-600 font-semibold">Output</span>
            </div>
            <pre className="bg-gray-800 p-4 rounded-b">
              <code className="text-white">
                <span className="">fscanf(file, </span>
                <span className="text-green-400">"%lf"</span>, &variable);
              </code>
            </pre>
          </div>
        </div>

        <ul className="px-4 list-disc space-y-2">
          <li>
            The first parameter represents the file from which you want to read
            the data.
          </li>
          <li>
            The second parameter is a string that specifies the format of the
            data you want to read from the file ("%d", "%lf", etc.).
          </li>
          <li>
            The last parameter represents the variable where the read data will
            be stored.
          </li>
        </ul>

        <p className="pt-4">
          fscanf returns an integer value that indicates the number of items
          successfully matched and assigned according to the format specifier in
          the format string. So to read/iterate through a file, we can do the
          following:
        </p>
        <div className="flex justify-center text-[8px] sm:text-xs pt-4">
          <div className="w-11/12 sm:w-9/12 pb-4">
            <div className="bg-gray-200 p-2 rounded-t">
              <span className="text-gray-600 font-semibold">Output</span>
            </div>
            <pre className="bg-gray-800 p-4 rounded-b">
              <code className="text-white">
                <span className="text-blue-400">while</span>(fscanf(file,&nbsp;
                <span className="text-green-400">"%lf"</span>, &variable) == 1){" "}
                {"{"}
                <br />
                <span className="text-green-400">
                  &nbsp;&nbsp;// do something
                </span>
                <br />
                {"}"}
              </code>
            </pre>
          </div>
        </div>

        <p className="pb-1 underline">In this example:</p>
        <ul className="px-4 list-disc space-y-2">
          <li>
            We are using a while loop to read decimal numbers from a file using
            the fscanf function.
          </li>
          <li>
            If the return value from fscanf is 1, it means that fscanf
            successfully read and assigned a decimal number from the file.
          </li>
          <li>
            The program continues to read the numbers from the file until it
            reaches the end (fscanf returns -1).
          </li>
        </ul>

        <p className="font-bold pt-6">Example #1:</p>
        <div className="flex justify-center text-[8px] sm:text-xs pt-4">
          <div className="w-11/12 sm:w-9/12 pb-4">
            <div className="bg-gray-200 p-2 rounded-t">
              <span className="text-gray-600 font-semibold">numbers.txt</span>
            </div>
            <pre className="bg-gray-800 p-4 rounded-b">
              <code className="text-white">
                <span className="">12</span>
                <br />
                <span className="">20</span>
                <br />
                <span className="">11</span>
                <br />
                <span className="">23</span>
                <br />
                <span className="">1</span>
              </code>
            </pre>
          </div>
        </div>
        <div className="flex justify-center text-[8px] sm:text-xs pt-4">
          <div className="w-11/12 sm:w-9/12 pb-4">
            <div className="bg-gray-200 p-2 rounded-t">
              <span className="text-gray-600 font-semibold">C</span>
            </div>
            <pre className="bg-gray-800 p-4 rounded-b">
              <code className="text-white">
                <span className="text-green-500">&nbsp;/*</span> <br />
                <span className="text-green-500">&nbsp;* Author:</span> <br />
                <span className="text-green-500">
                  &nbsp;* Student Number:
                </span>{" "}
                <br />
                <span className="text-green-500">
                  &nbsp;* Lab Section:
                </span>{" "}
                <br />
                <span className="text-green-500">&nbsp;* Date:</span> <br />
                <span className="text-green-500">&nbsp;* Purpose:</span> <br />
                <span className="text-green-500">&nbsp;*/</span> <br />
                <br />
                <span className="text-blue-400">#include</span> &lt;stdio.h&gt;
                <br />
                <br />
                <span className="text-blue-400">#define</span> INPUTFILE
                "numbers.txt"
                <br />
                <br />
                <span className="text-blue-400">int</span> main(
                <span className="text-blue-400">void</span>) &#123;
                <br />
                <br />
                <span>&nbsp;&nbsp;FILE *file;</span>
                <br />
                <br />
                <span className="text-blue-400">&nbsp;&nbsp;int</span> sum = 0;
                <br />
                <span className="text-blue-400">&nbsp;&nbsp;int</span> value;
                <br />
                <br />
                &nbsp;&nbsp;file = fopen(INPUTFILE,&nbsp;
                <span className="text-green-400">"r"</span>);
                <br />
                <br />
                <span className="text-blue-400">&nbsp;&nbsp;if</span>(file ==
                NULL)&nbsp;{"{"}
                <br />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;printf(</span>
                <span className="text-green-400">
                  "Error opening the file!\n"
                </span>
                );
                <br />
                <span className="text-blue-400">
                  &nbsp;&nbsp;&nbsp;&nbsp;return 1
                </span>
                ;
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                <br />
                <span className="text-blue-400">&nbsp;&nbsp;else</span>&nbsp;
                {"{"}
                <br />
                <span className="text-blue-400">
                  &nbsp;&nbsp;&nbsp;&nbsp;while
                </span>
                (fscanf(file,&nbsp;
                <span className="text-green-400">"%d"</span>, &value) == 1){" "}
                {"{"}
                <br />
                <span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sum = sum + value;
                </span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                <br />
                <br />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;fclose(file);</span>
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                <br />
                <span>&nbsp;&nbsp;printf(</span>
                <span className="text-green-400">
                  "The sum of the numbers is %d."
                </span>
                , sum);
                <br />
                <br />
                &nbsp;&nbsp;system(
                <span className="text-green-400">"PAUSE"</span>
                );
                <br />
                &nbsp;&nbsp;<span className="text-blue-400">return 0;</span>
                <br />
                &#125;
              </code>
            </pre>
          </div>
        </div>
        <div className="flex justify-center text-[8px] sm:text-xs pt-4">
          <div className="w-11/12 sm:w-9/12 pb-4">
            <div className="bg-gray-200 p-2 rounded-t">
              <span className="text-gray-600 font-semibold">Output</span>
            </div>
            <pre className="bg-gray-800 p-4 rounded-b">
              <code className="text-white">
                <span className="">The sum of the numbers is 67.</span>
              </code>
            </pre>
          </div>
        </div>
        <p className="pt-4">
          <span className="font-bold">Note:</span> Instead of writing "sum = sum
          + value", I could also write "sum += value" which means the same
          thing.
        </p>
        <h1
          id="file-output"
          className="pb-1 pt-4 font-bold underline font-serif text-sm"
        >
          How To Write To A File (File Output):
        </h1>
        <p className="pb-1">
          In order to write data from a file, you can use fprint, which is very
          similar to printf. The fprintf function has the following general
          syntax
        </p>
        <div className="flex justify-center text-[8px] sm:text-xs pt-4">
          <div className="w-11/12 sm:w-9/12 pb-4">
            <div className="bg-gray-200 p-2 rounded-t">
              <span className="text-gray-600 font-semibold">Output</span>
            </div>
            <pre className="bg-gray-800 p-4 rounded-b">
              <code className="text-white">
                <span className="">fprintf(file, </span>
                <span className="text-green-400">"format string"</span>, var1,
                ..., varN);
              </code>
            </pre>
          </div>
        </div>

        <ul className="px-4 list-disc space-y-2">
          <li>
            The first parameter represents the file from which you want to write
            the data to.
          </li>
          <li>
            The second parameter is a string that specifies the format of the
            data you want to write to the file ("%d", "%lf", etc.).
          </li>
          <li>
            The last parameter(s) are the variables whose values you want to
            write to the file. They correspond to the format specifiers in the
            format string.
          </li>
        </ul>

        <p className="pt-4">
          This is very similar to reading from a file, so we will go through a
          quick example.
        </p>
        <p className="font-bold pt-6">Example #1:</p>
        <div className="flex justify-center text-[8px] sm:text-xs pt-4">
          <div className="w-11/12 sm:w-9/12 pb-4">
            <div className="bg-gray-200 p-2 rounded-t">
              <span className="text-gray-600 font-semibold">C</span>
            </div>
            <pre className="bg-gray-800 p-4 rounded-b">
              <code className="text-white">
                <span className="text-green-500">&nbsp;/*</span> <br />
                <span className="text-green-500">&nbsp;* Author:</span> <br />
                <span className="text-green-500">
                  &nbsp;* Student Number:
                </span>{" "}
                <br />
                <span className="text-green-500">
                  &nbsp;* Lab Section:
                </span>{" "}
                <br />
                <span className="text-green-500">&nbsp;* Date:</span> <br />
                <span className="text-green-500">&nbsp;* Purpose:</span> <br />
                <span className="text-green-500">&nbsp;*/</span> <br />
                <br />
                <span className="text-blue-400">#include</span> &lt;stdio.h&gt;
                <br />
                <br />
                <span className="text-blue-400">#define</span> OUTPUTFILE
                "textfile.txt"
                <br />
                <br />
                <span className="text-blue-400">int</span> main(
                <span className="text-blue-400">void</span>) &#123;
                <br />
                <br />
                <span>&nbsp;&nbsp;FILE *file;</span>
                <br />
                <br />
                <span className="text-blue-400">&nbsp;&nbsp;int</span> num1
                =&nbsp;
                <span className="text-blue-400">10</span>;
                <br />
                <span className="text-blue-400">&nbsp;&nbsp;int</span> num2
                =&nbsp;
                <span className="text-blue-400">20</span>;
                <br />
                <span className="text-blue-400">&nbsp;&nbsp;int</span> num3
                =&nbsp;
                <span className="text-blue-400">30</span>;
                <br />
                <br />
                &nbsp;&nbsp;file = fopen(OUTPUTFILE,&nbsp;
                <span className="text-green-400">"w"</span>);
                <br />
                <br />
                <span className="text-blue-400">&nbsp;&nbsp;if</span>(file ==
                NULL)&nbsp;{"{"}
                <br />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;printf(</span>
                <span className="text-green-400">
                  "Error opening the file!\n"
                </span>
                );
                <br />
                <span className="text-blue-400">
                  &nbsp;&nbsp;&nbsp;&nbsp;return 1
                </span>
                ;
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                <br />
                <span className="text-blue-400">&nbsp;&nbsp;else</span>&nbsp;
                {"{"}
                <br />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;fprintf(file, </span>
                <span className="text-green-400">"%d %d %d"</span>, num1, num2,
                num3);
                <br />
                <span>&nbsp;&nbsp;&nbsp;&nbsp;fclose(file);</span>
                <br />
                &nbsp;&nbsp;{"}"}
                <br />
                <br />
                &nbsp;&nbsp;system(
                <span className="text-green-400">"PAUSE"</span>
                );
                <br />
                &nbsp;&nbsp;<span className="text-blue-400">return 0;</span>
                <br />
                &#125;
              </code>
            </pre>
          </div>
        </div>
        <div className="flex justify-center text-[8px] sm:text-xs pt-4">
          <div className="w-11/12 sm:w-9/12 pb-4">
            <div className="bg-gray-200 p-2 rounded-t">
              <span className="text-gray-600 font-semibold">textfile.txt</span>
            </div>
            <pre className="bg-gray-800 p-4 rounded-b">
              <code className="text-white">
                <span className="">10 20 30</span>
              </code>
            </pre>
          </div>
        </div>

        <div>
          <div className="inline-block flex">
            <h3
              id="topic-5"
              className="py-4 font-bold text-lg hover:text-gray-500 font-serif"
            >
              Functions
            </h3>
          </div>
          <p className="pb-4">
            A function is a block of code that performs a specific task. It's a
            way to organize and reuse code, making your programs more modular
            and easier to understand. Functions always follow this template:
          </p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="text-blue-400">returnType</span>{" "}
                  functionName(parameter1, parameter2, ...) &#123;
                  <br />
                  <span className="text-green-400">
                    &nbsp;&nbsp;// Function body (code)
                  </span>
                  <br />
                  <span className="text-green-400">
                    &nbsp;&nbsp;// Perform tasks here
                  </span>
                  <br />
                  <span className="text-green-400">
                    &nbsp;&nbsp;// Optionally, return a value using the return
                    statement
                  </span>
                  <br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>
          <ul className="px-4 list-disc space-y-2">
            <li>
              returnType: This specifies the type of value that the function
              returns, such as int, double, void (no return value), etc.
            </li>
            <li>functionName: This is the name you give to your function.</li>
            <li>
              parameter1, parameter2: These are variables that you can pass to
              the function, which it can use to perform its tasks. Parameters
              are optional, and you can have none or multiple parameters. Each
              parameter has a type and a name.
            </li>
            <li>
              Function Body: This is where you write the actual code for the
              function. It consists of a series of statements enclosed within
              curly braces {}. The statements define what the function does when
              it is called.
            </li>
            <li>
              Return Statement: If the function has a return type other than
              void, you can use the return statement to send a value back to the
              code that called the function. The return statement also exits the
              function, so any code after it won't be executed.
            </li>
          </ul>

          <p className="pb-4">
            We will go over a few examples to help you understand functions.
          </p>

          <p className="pt-2">
            <span className="font-bold">Example #1:</span> Say in your code you
            have to print out multiple addition calculations. We could write
            code that looks like this that would work, but could become very
            confusing to someone else reading our code and could lose its
            neatness:
          </p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="text-green-500">&nbsp;/*</span> <br />
                  <span className="text-green-500">&nbsp;* Author:</span> <br />
                  <span className="text-green-500">
                    &nbsp;* Student Number:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">
                    &nbsp;* Lab Section:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;* Date:</span> <br />
                  <span className="text-green-500">&nbsp;* Purpose:</span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;*/</span> <br />
                  <br />
                  <span className="text-blue-400">#include</span>{" "}
                  &lt;stdio.h&gt;
                  <br />
                  <br />
                  <span className="text-blue-400">int</span> main(
                  <span className="text-blue-400">void</span>) &#123;
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;int</span> val1 =
                  <span className="text-blue-400">&nbsp;10</span>
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;int</span> val2 =
                  <span className="text-blue-400">&nbsp;213</span>
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;int</span> sum;
                  <br />
                  <br />
                  <span>&nbsp;&nbsp;sum = val1 + val2;</span>
                  <br />
                  <br />
                  &nbsp;&nbsp;printf(
                  <span className="text-green-400">
                    "The sum of %d and %d is %d.\n"
                  </span>
                  , val1, val2, sum);
                  <br />
                  <br />
                  <span>&nbsp;&nbsp;val1 = 15;</span>
                  <br />
                  <span>&nbsp;&nbsp;val2 = 17;</span>
                  <br />
                  <br />
                  <span>&nbsp;&nbsp;sum = val1 + val2;</span>
                  <br />
                  <br />
                  &nbsp;&nbsp;printf(
                  <span className="text-green-400">
                    "The sum of %d and %d is %d.\n"
                  </span>
                  , val1, val2, sum);
                  <br />
                  <br />
                  <span>&nbsp;&nbsp;val1 = 1;</span>
                  <br />
                  <span>&nbsp;&nbsp;val2 = 2;</span>
                  <br />
                  <br />
                  <span>&nbsp;&nbsp;sum = val1 + val2;</span>
                  <br />
                  <br />
                  &nbsp;&nbsp;printf(
                  <span className="text-green-400">
                    "The sum of %d and %d is %d.\n"
                  </span>
                  , val1, val2, sum);
                  <br />
                  <br />
                  <span>&nbsp;&nbsp;val1 = 14;</span>
                  <br />
                  <span>&nbsp;&nbsp;val2 = 18;</span>
                  <br />
                  <br />
                  <span>&nbsp;&nbsp;sum = val1 + val2;</span>
                  <br />
                  <br />
                  &nbsp;&nbsp;printf(
                  <span className="text-green-400">
                    "The sum of %d and %d is %d.\n"
                  </span>
                  , val1, val2, sum);
                  <br />
                  <br />
                  &nbsp;&nbsp;system(
                  <span className="text-green-400">"PAUSE"</span>
                  );
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">return 0;</span>
                  <br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">Output</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="">The sum of 10 and 213 is 223.</span>
                  <br />
                  <span className="">The sum of 15 and 17 is 32.</span>
                  <br />
                  <span className="">The sum of 1 and 2 is 3.</span>
                  <br />
                  <span className="">The sum of 14 and 18 is 32.</span>
                </code>
              </pre>
            </div>
          </div>
          <p className="pb-4 underline">
            We only made four calculations and the code is already getting
            confusing to look at. We can replace this repeated code with a
            function to reduce repetition:
          </p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="text-green-500">&nbsp;/*</span> <br />
                  <span className="text-green-500">&nbsp;* Author:</span> <br />
                  <span className="text-green-500">
                    &nbsp;* Student Number:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">
                    &nbsp;* Lab Section:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;* Date:</span> <br />
                  <span className="text-green-500">&nbsp;* Purpose:</span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;*/</span> <br />
                  <br />
                  <span className="text-blue-400">#include</span>{" "}
                  &lt;stdio.h&gt;
                  <br />
                  <br />
                  <span className="text-blue-400">void</span> add(
                  <span className="text-blue-400">int</span> number1,
                  <span className="text-blue-400"> int</span> number2) &#123;
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;int </span>sum =
                  number1 + number2;
                  <br />
                  &nbsp;&nbsp;printf(
                  <span className="text-green-400">
                    "The sum of %d and %d is %d.\n"
                  </span>
                  , number1, number2, sum);
                  <br />
                  &#125;
                  <br />
                  <br />
                  <span className="text-blue-400">int</span> main(
                  <span className="text-blue-400">void</span>) &#123;
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;add</span>(
                  <span className="text-blue-400">10</span>,
                  <span className="text-blue-400"> 213</span>);
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;add</span>(
                  <span className="text-blue-400">15</span>,
                  <span className="text-blue-400"> 17</span>);
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;add</span>(
                  <span className="text-blue-400">1</span>,
                  <span className="text-blue-400"> 2</span>);
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;add</span>(
                  <span className="text-blue-400">14</span>,
                  <span className="text-blue-400"> 18</span>);
                  <br />
                  <br />
                  &nbsp;&nbsp;system(
                  <span className="text-green-400">"PAUSE"</span>
                  );
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">return 0;</span>
                  <br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">Output</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="">The sum of 10 and 213 is 223.</span>
                  <br />
                  <span className="">The sum of 15 and 17 is 32.</span>
                  <br />
                  <span className="">The sum of 1 and 2 is 3.</span>
                  <br />
                  <span className="">The sum of 14 and 18 is 32.</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
        <p className="pb-1 underline">
          This code has the exact same functionality as the above, but is much
          easier to follow. Some of the syntax may be confusing, so I will try
          my best to clarify:
        </p>
        <ul className="px-4 list-disc space-y-2">
          <li>
            "void" is the return type of the function. Here, void means that the
            function does not return any value. It is used when the function
            performs a task but does not produce a result that needs to be used
            elsewhere in the program. This will make more sense when we look at
            additional examples.
          </li>
          <li>
            "add" is the name of the function (same as naming a variable - can
            be anything but make it something that makes sense).
          </li>
          <li>
            "(int number1, int number2)" specifies the parameters that the
            function takes. In this case, the add function expects two integer
            values as inputs, which will be referred to as number1 and number2
            inside the function. Note that "number1" and "number2" are variables
            that can only be used within the function.
          </li>
        </ul>

        <p className="pt-6">
          <span className="font-bold">Example #2:</span> What if we want to
          create a function that takes two doubles and returns the product of
          them?
        </p>
        <div className="flex justify-center text-[8px] sm:text-xs pt-4">
          <div className="w-11/12 sm:w-9/12 pb-4">
            <div className="bg-gray-200 p-2 rounded-t">
              <span className="text-gray-600 font-semibold">C</span>
            </div>
            <pre className="bg-gray-800 p-4 rounded-b">
              <code className="text-white">
                <span className="text-green-500">&nbsp;/*</span> <br />
                <span className="text-green-500">&nbsp;* Author:</span> <br />
                <span className="text-green-500">
                  &nbsp;* Student Number:
                </span>{" "}
                <br />
                <span className="text-green-500">
                  &nbsp;* Lab Section:
                </span>{" "}
                <br />
                <span className="text-green-500">&nbsp;* Date:</span> <br />
                <span className="text-green-500">&nbsp;* Purpose:</span> <br />
                <span className="text-green-500">&nbsp;*/</span> <br />
                <br />
                <span className="text-blue-400">#include</span> &lt;stdio.h&gt;
                <br />
                <br />
                <span className="text-blue-400">double</span> multiply(
                <span className="text-blue-400">double</span> double1,
                <span className="text-blue-400"> double</span> double2) &#123;
                <br />
                <span className="text-blue-400">&nbsp;&nbsp;double </span>
                multiplyValue = double1 * double2;
                <br />
                <span className="text-blue-400">&nbsp;&nbsp;return </span>
                multiplyValue;
                <br />
                &#125;
                <br />
                <br />
                <span className="text-blue-400">int</span> main(
                <span className="text-blue-400">void</span>) &#123;
                <br />
                <span className="text-blue-400">&nbsp;&nbsp;double</span>{" "}
                product;
                <br />
                <br />
                &nbsp;&nbsp;product ={" "}
                <span className="text-blue-400">multiply</span>(
                <span className="text-blue-400">2.2</span>,
                <span className="text-blue-400"> 3.3</span>);
                <br />
                &nbsp;&nbsp;printf(
                <span className="text-green-400">"Product = %lf.\n"</span>
                , product);
                <br />
                <br />
                &nbsp;&nbsp;product ={" "}
                <span className="text-blue-400">multiply</span>(
                <span className="text-blue-400">1.1</span>,
                <span className="text-blue-400"> 10.22</span>);
                <br />
                &nbsp;&nbsp;printf(
                <span className="text-green-400">"Product = %lf.\n"</span>
                , product);
                <br />
                <br />
                &nbsp;&nbsp;product ={" "}
                <span className="text-blue-400">multiply</span>(
                <span className="text-blue-400">2.244</span>,
                <span className="text-blue-400"> 0.501</span>);
                <br />
                &nbsp;&nbsp;printf(
                <span className="text-green-400">"Product = %lf.\n"</span>
                , product);
                <br />
                <br />
                &nbsp;&nbsp;product ={" "}
                <span className="text-blue-400">multiply</span>(
                <span className="text-blue-400">0.001</span>,
                <span className="text-blue-400"> 100.331</span>);
                <br />
                &nbsp;&nbsp;printf(
                <span className="text-green-400">"Product = %lf.\n"</span>
                , product);
                <br />
                <br />
                &nbsp;&nbsp;system(
                <span className="text-green-400">"PAUSE"</span>
                );
                <br />
                &nbsp;&nbsp;<span className="text-blue-400">return 0;</span>
                <br />
                &#125;
              </code>
            </pre>
          </div>
        </div>
        <div className="flex justify-center text-[8px] sm:text-xs pt-4">
          <div className="w-11/12 sm:w-9/12 pb-4">
            <div className="bg-gray-200 p-2 rounded-t">
              <span className="text-gray-600 font-semibold">Output</span>
            </div>
            <pre className="bg-gray-800 p-4 rounded-b">
              <code className="text-white">
                <span className="">Product = 7.260000.</span>
                <br />
                <span className="">Product = 11.242200.</span>
                <br />
                <span className="">Product = 1.125744.</span>
                <br />
                <span className="">Product = 0.100331.</span>
              </code>
            </pre>
          </div>
        </div>
        <p className="pb-4">
          This example is very similar to Example #1, but the return type is a
          "double" instead of "void" which means that a double value is returned
          from the function. That is why we can create a variable (which we
          called product of type double) and make this equal to the function
          call since a double is returned.
        </p>
        <div className="flex items-center justify-center py-4" id="examples-5">
          <div className="w-11/12 sm:w-6/12 pt-4 flex">
            <table className="w-full border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 bg-gray-100" colspan="2">
                    Practice Questions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 border text-center font-semibold">
                    Question:
                  </td>
                  <td className="py-2 border text-center px-2 font-semibold">
                    Answer:
                  </td>
                </tr>
                <tr>
                  <td className="py-2 border text-center px-4">
                    Write a function that accepts three integers as input
                    parameters. The function should calculate the product of the
                    three numbers and print out the result.
                  </td>
                  <td className="py-2 border text-center">
                    <a
                      href="https://codebeautify.org/alleditor/y2329efe0"
                      target="_blank"
                      className="underline hover:text-blue-400"
                    >
                      Solution
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 border text-center px-4">
                    Write a function that accepts two integers as input
                    parameters. The function should calculate and return the
                    remainder obtained when the first number is divided by the
                    second number using the modulo operator (%).
                  </td>
                  <td className="py-2 border text-center">
                    <a
                      href="https://codebeautify.org/alleditor/y234d013d"
                      target="_blank"
                      className="underline hover:text-blue-400"
                    >
                      Solution
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 border text-center px-4">
                    Create a function that takes two doubles as input
                    parameters. The function should calculate the average of the
                    two numbers and return the result as a double.
                  </td>
                  <td className="py-2 border text-center">
                    <a
                      href="https://codebeautify.org/alleditor/y2325583f"
                      target="_blank"
                      className="underline hover:text-blue-400"
                    >
                      Solution
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="inline-block flex">
            <h3
              id="topic-5.5"
              className="py-4 font-bold text-lg hover:text-gray-500 font-serif"
            >
              For Loops
            </h3>
          </div>
          <p className="pb-1">
            The for loop is a type of loop (similar to a while loop) that allows
            you to repeatedly execute a block of code for a specific number of
            times. It consists of three parts: initialization, condition, and
            iteration. If you are able to understand for loops, it will make
            learning arrays much easier. This is the general syntax of a for
            loop (notice the semicolon syntax):
          </p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="text-blue-400">for </span>(initialization;
                  condition; iteration) {"{"}
                  <br />
                  <span className="text-green-400">
                    &nbsp;&nbsp;// code executed each iteration
                  </span>
                  <br />
                  <span className="">{"}"}</span>
                  <br />
                </code>
              </pre>
            </div>
          </div>
          <p className="pb-4">
            The initialization is usually used to set the loop counter, the
            condition specifies the condition for continuing the loop, and the
            iteration defines how the loop counter is updated after each
            iteration. The code inside the for block will be executed repeatedly
            until the condition becomes false.
          </p>
          <p className="font-bold pt-2">Example #1:</p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="text-blue-400">int</span> iterator = 0;
                  <br />
                  <br />
                  <span className="text-blue-400">for </span>(iterator; iterator
                  &lt; 5; iterator++) {"{"}
                  <br />
                  &nbsp;&nbsp;printf(
                  <span className="text-green-400">"%d "</span>, iterator);
                  <br />
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">Output</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="">0 1 2 3 4</span>
                </code>
              </pre>
            </div>
          </div>
          <p className="font-bold pt-6">Example #2:</p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="text-blue-400">for </span>(
                  <span className="text-blue-400">int </span>i = 0; i &lt;= 10;
                  i+=2) {"{"}
                  <br />
                  &nbsp;&nbsp;printf(
                  <span className="text-green-400">"%d "</span>, i);
                  <br />
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">Output</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="">0 2 4 6 8 10</span>
                </code>
              </pre>
            </div>
          </div>

          <p className="pb-4" id="nested-for-loop">
            In this example, we declared the iteration variable inside the loop.
            This is very common as this limits the "scope" of this variable to
            the for loop only, meaning that you cannot use this variable outside
            of your for loop (which is good as it reduces errors). We also
            incremented this value by two each iteration instead of one. You can
            start to do more interesting things with for loops, such as creating
            designs/symmetry. However, to do this we need to introduce nested
            for loops, which is a for loop "inside" another for loop. Look at
            the example below:
          </p>
          <p className="font-bold pt-2">Example #3:</p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="text-blue-400">for </span>(
                  <span className="text-blue-400">int </span>i = 0; i &lt; 5;
                  i++) {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">for </span>(
                  <span className="text-blue-400">int </span>j = 0; j &lt; 5;
                  j++) {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;printf(
                  <span className="text-green-400">"* "</span>);
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  <span>&nbsp;&nbsp;printf(</span>
                  <span className="text-green-400">"\n"</span>);
                  <br />
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">Output</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="">* * * * *</span>
                  <br />
                  <span className="">* * * * *</span>
                  <br />
                  <span className="">* * * * *</span>
                  <br />
                  <span className="">* * * * *</span>
                  <br />
                  <span className="">* * * * *</span>
                </code>
              </pre>
            </div>
          </div>
          <p className="pb-1 underline">
            This is a bit more complex than the first two examples, so I will
            try my best to explain what is happening:
          </p>
          <ul className="px-4 list-decimal space-y-2">
            <li>
              The outer loop initializes a variable "i" to 0 and continues as
              long as "i" is less than 5. It controls the number of rows in the
              pattern.
            </li>
            <li>
              Inside the outer loop, we have a second inner loop that
              initializes a variable "j" to 0 and continues as long as "j" is
              less than 5. It controls the number of asterisks in each row.
            </li>
            <li>
              For each iteration of the inner loop, a single asterisk followed
              by a space is printed using the "printf("* ")" statement.
            </li>
            <li>
              After the inner loop completes all 5 iterations, a newline
              character ("\n") is printed using "printf("\n")"". This moves the
              cursor to the next line, starting a new row in the pattern.
            </li>
            <li>
              The outer loop then increments "i" by 1 and repeats the process
              until "i" is no longer less than 5.
            </li>
            <li>
              This entire process results in the printing of a square pattern
              with 5 rows and 5 columns.
            </li>
          </ul>
          <p className="py-4">
            You can start to create cool designs such as triangles, or diamonds
            too:
          </p>
          <p className="font-bold pt-2">Example #4:</p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="text-blue-400">for </span>(
                  <span className="text-blue-400">int </span>i = 5; i &gt; 0;
                  i--) {"{"}
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">for </span>(
                  <span className="text-blue-400">int </span>j = i; j &gt; 0;
                  j--) {"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;printf(
                  <span className="text-green-400">"* "</span>);
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  <span>&nbsp;&nbsp;printf(</span>
                  <span className="text-green-400">"\n"</span>);
                  <br />
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">Output</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="">* * * * *</span>
                  <br />
                  <span className="">* * * * </span>
                  <br />
                  <span className="">* * * </span>
                  <br />
                  <span className="">* * </span>
                  <br />
                  <span className="">* </span>
                </code>
              </pre>
            </div>
          </div>
          <p className="pb-1 underline">
            This example is similar to Example #3, but it prints out a triangle.
            Here is a description of what is happening:
          </p>
          <ul className="px-4 list-decimal space-y-2">
            <li>
              The outer loop initializes a variable "i" to 5 and continues as
              long as "i" is greater than 0. It controls the number of rows in
              the pattern and decrements "i" by 1 on each iteration.
            </li>
            <li>
              Inside the outer loop, we have a second inner loop that
              initializes a variable "j" to the value of "i" and continues as
              long as "j" is greater than 0. It controls the number of asterisks
              to be printed in each row and decrements "j" by 1 on each
              iteration.
            </li>
            <li>
              For each iteration of the inner loop, an asterisk "*" followed by
              a space is printed using the printf("* ") statement.
            </li>
            <li>
              After the inner loop completes all its iterations, a newline
              character (\n) is printed using printf("\n"). This starts a new
              line, creating a new row in the pattern.
            </li>
            <li>
              The outer loop then decrements "i" by 1 and repeats the process
              until "i" is no longer greater than 0.
            </li>
            <li>
              This entire process results in the printing of a descending
              pattern of asterisks, with the number of asterisks in each row
              decreasing from 5 to 1.
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center py-4" id="examples-4">
          <div className="w-11/12 sm:w-6/12 pt-4 flex">
            <table className="w-full border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 bg-gray-100" colspan="2">
                    Practice Questions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 border text-center font-semibold">
                    Question:
                  </td>
                  <td className="py-2 border text-center px-2 font-semibold">
                    Answer:
                  </td>
                </tr>
                <tr>
                  <td className="py-2 border text-center">
                    Write a program to ask the user for an integer and print two
                    times the value five times (Ex. Input: 10, Output: 20, 40,
                    80, 160, 320).
                  </td>
                  <td className="py-2 border text-center">
                    <a
                      href="https://codebeautify.org/alleditor/y23fb59b4"
                      target="_blank"
                      className="underline hover:text-blue-400"
                    >
                      Solution
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 border text-center">x</td>
                  <td className="py-2 border text-center">
                    <a
                      href="https://codebeautify.org/alleditor/y234507ca"
                      target="_blank"
                      className="underline hover:text-blue-400"
                    >
                      Solution
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="py-2 border">
                    <div className="flex flex-col items-center">
                      <p className="text-center">Create this design:</p>
                      <div className="align-left">
                        * * * * *<br />
                        * * * *<br />
                        * * *<br />
                        * *<br />
                        *<br />
                        *<br />
                        * *<br />
                        * * *<br />
                        * * * *<br />
                        * * * * *<br />
                      </div>
                    </div>
                  </td>
                  <td className="py-2 border text-center">
                    <a
                      href="https://codebeautify.org/alleditor/y23a0f153"
                      target="_blank"
                      className="underline hover:text-blue-400"
                    >
                      Solution
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="inline-block flex">
            <h3
              id="topic-6"
              className="py-4 font-bold text-lg hover:text-gray-500 font-serif"
            >
              Arrays
            </h3>
          </div>

          <div>
            <h1
              id="1D-array"
              className="pb-1 font-bold underline font-serif text-sm"
            >
              1-D Arrays:
            </h1>
          </div>
          <p className="pb-4">
            Arrays are collections of elements of the same data type. It
            provides a way to store multiple values under a single name. Arrays
            are commonly used for tasks that involve working with multiple
            related data items, such as a list of numbers or a collection of
            doubles. For example, say we want to store the integer values of 10
            different types of apples. We can create an array of integers type
            that can store 10 values:
          </p>

          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="text-blue-400">int </span>apples[
                  <span className="text-blue-400">10</span>];
                </code>
              </pre>
            </div>
          </div>

          <p>
            What we have done here is created an array of type "int" of size 10,
            however we have not actually stored any values in it. There are
            various ways to write data to arrays, but this is the simplest way:
          </p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="text-blue-400">int </span>apples[
                  <span className="text-blue-400">10</span>] = {"{"}
                  <span className="text-blue-400">1</span>,{" "}
                  <span className="text-blue-400">3</span>,{" "}
                  <span className="text-blue-400">2</span>,{" "}
                  <span className="text-blue-400">6</span>,{" "}
                  <span className="text-blue-400">2</span>,{" "}
                  <span className="text-blue-400">1</span>,{" "}
                  <span className="text-blue-400">9</span>,{" "}
                  <span className="text-blue-400">100</span>,{" "}
                  <span className="text-blue-400">20</span>,{" "}
                  <span className="text-blue-400">2</span>
                  {"}"};
                </code>
              </pre>
            </div>
          </div>

          <p>
            We have now assigned a value to every "index" in the array. Now, say
            that we want to access the second value in our array. In C, array
            indexing starts from 0. To access an element, you use the array name
            followed by the index enclosed in square brackets:
          </p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="text-blue-400">int </span>applePrice = apples
                  {"["}
                  <span className="text-blue-400">1</span>
                  {"]"};
                </code>
              </pre>
            </div>
          </div>
          <p>
            What we have done here is retrieved the value at index 1 in our
            array and assigned it to a variable called "applePrice". If we do
            not need to assign the value to a variable, we can also print out
            the value:
          </p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span>printf(</span>
                  <span className="text-green-400">
                    "The price of the second apple is $%d."
                  </span>
                  , apples{"["}
                  <span className="text-blue-400">1</span>
                  {"]"});
                </code>
              </pre>
            </div>
          </div>

          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">Output</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span>The price of the second apple is $3.</span>
                </code>
              </pre>
            </div>
          </div>
          <p className="pb-4">
            Printing out one value in an array isn't usually too helpful.
            Typically, you will use{" "}
            <a href="#topic-5.5" className="underline hover:text-gray-400">
              for loops
            </a>{" "}
            to iterate through an array (maybe to find the maximum or minimum
            apple price, or calculate the sum of prices):
          </p>
          <p className="pt-2">
            <span className="font-bold">Example #1:</span> Calculate the sum of
            all apple prices:
          </p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="text-green-500">&nbsp;/*</span> <br />
                  <span className="text-green-500">&nbsp;* Author:</span> <br />
                  <span className="text-green-500">
                    &nbsp;* Student Number:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">
                    &nbsp;* Lab Section:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;* Date:</span> <br />
                  <span className="text-green-500">&nbsp;* Purpose:</span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;*/</span> <br />
                  <br />
                  <span className="text-blue-400">#include</span>{" "}
                  &lt;stdio.h&gt;
                  <br />
                  <br />
                  #define SIZE 10
                  <br />
                  <br />
                  <span className="text-blue-400">int</span> main(
                  <span className="text-blue-400">void</span>) &#123;
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;int </span>apples[
                  <span className="">SIZE</span>] = {"{"}
                  <span className="text-blue-400">1</span>,{" "}
                  <span className="text-blue-400">3</span>,{" "}
                  <span className="text-blue-400">2</span>,{" "}
                  <span className="text-blue-400">6</span>,{" "}
                  <span className="text-blue-400">2</span>,{" "}
                  <span className="text-blue-400">1</span>,{" "}
                  <span className="text-blue-400">9</span>,{" "}
                  <span className="text-blue-400">100</span>,{" "}
                  <span className="text-blue-400">20</span>,{" "}
                  <span className="text-blue-400">2</span>
                  {"}"};
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;int</span> sum =
                  <span className="text-blue-400">&nbsp;0</span>;
                  <br />
                  <br />
                  <span>&nbsp;&nbsp;for(</span>
                  <span className="text-blue-400">int </span>i = 0; i &lt; SIZE;
                  i++){"{"}
                  <br />
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;sum += apples{"["}i{"]"};
                  </span>
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  <br />
                  &nbsp;&nbsp;printf(
                  <span className="text-green-400">
                    "The sum of the array is %d.\n"
                  </span>
                  , sum);
                  <br />
                  <br />
                  &nbsp;&nbsp;system(
                  <span className="text-green-400">"PAUSE"</span>
                  );
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">return 0;</span>
                  <br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">Output</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="">The sum of the array is 146.</span>
                </code>
              </pre>
            </div>
          </div>
          <p className="pb-4">
            What we did here was iterate through all 10 elements in the array
            (apples[0], apples[1], apples[2],...) and each iteration we added to
            the sum. I declared a constant called "SIZE" rather than directly
            using "10" as during the course, typically for the problems, you
            will be given a parameter called size (you will not know the value).
            This will make more sense as we look at more examples:
          </p>

          <p className="pt-2">
            <span className="font-bold">Example #2:</span> Write a function that
            takes an array (of type int) and the size of the array and returns
            the maximum integer value:
          </p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">Solution</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="text-green-500">&nbsp;/*</span> <br />
                  <span className="text-green-500">&nbsp;* Author:</span> <br />
                  <span className="text-green-500">
                    &nbsp;* Student Number:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">
                    &nbsp;* Lab Section:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;* Date:</span> <br />
                  <span className="text-green-500">&nbsp;* Purpose:</span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;*/</span> <br />
                  <br />
                  <span className="text-blue-400">#include</span>{" "}
                  &lt;stdio.h&gt;
                  <br />
                  <br />
                  <span className="text-blue-400">int</span> maximum(
                  <span className="text-blue-400">int </span>arr{"[]"},{" "}
                  <span className="text-blue-400">int </span>size) &#123;
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;int</span> maxVal
                  =<span className="text-blue-400">&nbsp;-1</span>;
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;for</span>(
                  <span className="text-blue-400">int </span>i = 0; i &lt; size;
                  i++){"{"}
                  <br />
                  <span className="text-blue-400">
                    &nbsp;&nbsp;&nbsp;&nbsp;if
                  </span>
                  (arr[i] &gt; maxVal){"{"}
                  <br />
                  <span>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxVal = arr[i];
                  </span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;return</span>
                  &nbsp;maxVal;
                  <br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">Test</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b text-[5px] sm:text-xs">
                <code className="text-white">
                  <span className="text-blue-400">int</span> main(
                  <span className="text-blue-400">void</span>) &#123;
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;int </span>values[
                  <span className="text-blue-400">10</span>] = {"{"}
                  <span className="text-blue-400">20022</span>,{" "}
                  <span className="text-blue-400">1</span>,{" "}
                  <span className="text-blue-400">100</span>,{" "}
                  <span className="text-blue-400">10992</span>,{" "}
                  <span className="text-blue-400">2000</span>,{" "}
                  <span className="text-blue-400">11112</span>,{" "}
                  <span className="text-blue-400">91211</span>,{" "}
                  <span className="text-blue-400">10021</span>,{" "}
                  <span className="text-blue-400">2022</span>,{" "}
                  <span className="text-blue-400">1000</span>
                  {"}"};
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;int </span>maxNum
                  =&nbsp;
                  <span>maximum(values, </span>
                  <span className="text-blue-400">10</span>);
                  <br />
                  <br />
                  <span>&nbsp;&nbsp;printf(</span>
                  <span className="text-green-400">
                    "The maximum value is %d."
                  </span>
                  , maxNum);
                  <br />
                  <br />
                  &nbsp;&nbsp;system(
                  <span className="text-green-400">"PAUSE"</span>
                  );
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">return 0;</span>
                  <br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>

          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">Output</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="">The maximum value is 91211.</span>
                </code>
              </pre>
            </div>
          </div>

          <p>
            What we did in this example was created a "temporary" variable to
            hold the maximum value. We set this variable to -1 but we could have
            also set it to the value at index 0. At each iteration in the for
            loop, we checked if the value at that index was greater than our
            maximum value at that time. If it was, then we updated our maximum
            value variable to the value at that index. We do this until we reach
            the end of the for loop, and at the end, the variable "maxVal" will
            contain the maximum value in the array. Note that the "Test" is just
            to show you how the code works but you will usually just be required
            to create the function. Whenever dealing with arrays, you will
            typically have to use some sort of iterative loop (while or for), so
            if you are not comfortable with using these, you should revise{" "}
            <a href="#topic-5.5" className="underline hover:text-gray-400">
              for loops
            </a>{" "}
            before continuing. We will now look at 2-D arrays which are a
            similar to what we have looked at so far.
          </p>

          <div>
            <h1
              id="2D-array"
              className="pt-4 pb-1 font-bold underline font-serif text-sm"
            >
              2-D Arrays:
            </h1>
          </div>
          <p>
            You can think of a 2-D array, also known as a two-dimensional array,
            as a table with rows and columns. It's used to store data in a
            grid-like structure where each cell can be accessed using two
            indices: one for the row and one for the column. We can initialize a
            2-D array like this:
          </p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="text-blue-400">int </span>example[
                  <span className="text-blue-400">4</span>][
                  <span className="text-blue-400">3</span>];
                </code>
              </pre>
            </div>
          </div>
          <p>
            The "[4]" is the number of rows in our array and "[3]" is the number
            of columns in our array. If we want to initialize the values inside
            of this 2-D array, we can do the following:
          </p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b text-[5px] sm:text-xs">
                <code className="text-white">
                  <span className="text-blue-400">int </span>example[
                  <span className="text-blue-400">3</span>][
                  <span className="text-blue-400">4</span>] ={" {{"}
                  <span className="text-blue-400">1</span>,{" "}
                  <span className="text-blue-400">2</span>,{" "}
                  <span className="text-blue-400">3</span>
                  {"}"}, {"{"}
                  <span className="text-blue-400">4</span>,{" "}
                  <span className="text-blue-400">5</span>,{" "}
                  <span className="text-blue-400">6</span>
                  {"}"}, {"{"}
                  <span className="text-blue-400">7</span>,{" "}
                  <span className="text-blue-400">8</span>,{" "}
                  <span className="text-blue-400">9</span>
                  {"}"}, {"{"}
                  <span className="text-blue-400">10</span>,{" "}
                  <span className="text-blue-400">11</span>,{" "}
                  <span className="text-blue-400">12</span>
                  {"}"}
                  {"}"};
                </code>
              </pre>
            </div>
          </div>
          <p>
            Similar to 1-D arrays, if we want to access a certain value in our
            array, you use the array name followed by the index (both row and
            column) enclosed in square brackets:
          </p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="text-blue-400">int </span>value = example[
                  <span className="text-blue-400">1</span>][
                  <span className="text-blue-400">1</span>];
                  <br />
                  <span>printf(</span>
                  <span className="text-green-400">"%d"</span>, value);
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">Output</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="">5</span>
                </code>
              </pre>
            </div>
          </div>
          <p className="pb-4">
            Typically, accessing one value in a 2-D array isn't too important.
            Often when working with 2-D arrays, we utilize nested for loops, so
            I would recommend reviewing{" "}
            <a
              href="#nested-for-loop"
              className="underline hover:text-gray-400"
            >
              nested for loops
            </a>{" "}
            before continuing.
          </p>
          <p className="pt-2">
            <span className="font-bold">Example #1:</span> Determine the largest
            integer value in the given 2-D array:
          </p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b text-[5px] sm:text-xs">
                <code className="text-white">
                  <span className="text-green-500">&nbsp;/*</span> <br />
                  <span className="text-green-500">&nbsp;* Author:</span> <br />
                  <span className="text-green-500">
                    &nbsp;* Student Number:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">
                    &nbsp;* Lab Section:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;* Date:</span> <br />
                  <span className="text-green-500">&nbsp;* Purpose:</span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;*/</span> <br />
                  <br />
                  <span className="text-blue-400">#include</span>{" "}
                  &lt;stdio.h&gt;
                  <br />
                  <br />
                  #define ROW 3
                  <br />
                  #define COL 3
                  <br />
                  <br />
                  <span className="text-blue-400">int</span> main(
                  <span className="text-blue-400">void</span>) &#123;
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;int </span>
                  exampleArray[
                  <span className="text-blue-400">ROW</span>][
                  <span className="text-blue-400">COL</span>] ={" {{"}
                  <span className="text-blue-400">100</span>,{" "}
                  <span className="text-blue-400">212</span>,{" "}
                  <span className="text-blue-400">31</span>
                  {"}"}, {"{"}
                  <span className="text-blue-400">14</span>,{" "}
                  <span className="text-blue-400">500</span>,{" "}
                  <span className="text-blue-400">679</span>
                  {"}"}, {"{"}
                  <span className="text-blue-400">71</span>,{" "}
                  <span className="text-blue-400">81</span>,{" "}
                  <span className="text-blue-400">19</span>
                  {"}"}
                  {"}"};
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;int</span> max =
                  <span className="text-blue-400">&nbsp;-1</span>;
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;for</span>(
                  <span className="text-blue-400">int </span>i = 0; i &lt; ROW;
                  i++){"{"}
                  <br />
                  <span className="text-blue-400">
                    &nbsp;&nbsp;&nbsp;&nbsp;for
                  </span>
                  (<span className="text-blue-400">int </span>j = 0; j &lt; COL;
                  j++){"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-blue-400">if</span>(exampleArray[i][j]
                  &gt; max){"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>max = exampleArray[i][j];</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  <br />
                  &nbsp;&nbsp;printf(
                  <span className="text-green-400">
                    "The maximum number in the 2-D array is %d.\n"
                  </span>
                  , max);
                  <br />
                  <br />
                  &nbsp;&nbsp;system(
                  <span className="text-green-400">"PAUSE"</span>
                  );
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">return 0;</span>
                  <br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">Output</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="">
                    The maximum number in the 2-D array is 679.
                  </span>
                </code>
              </pre>
            </div>
          </div>
          <p>
            What we are doing in this example is utilizing a nested for loop in
            order to successfully iterate through all of the elements in the 2-D
            array. Our first for loop begins at row 0, then we enter the inner
            for loop where we start at column 0. We check if the element in row
            0, column 0 is greater than the previous max value (-1), and update
            the max value to 100. Our inner for loop then increments and we
            repeat the same steps with the element at row 0, column 1. We repeat
            this until we reach the final column, then come back to the outer
            for loop. We keep repeating these steps until we reach the final
            row. After these for loops complete, we have successfully iterated
            through all of the elements. We then print out the max value. You
            can think of a 2-D array like a matrix or a chess board (as shown
            below). We start at 100, move to 212, then move to 31. We then move
            down a row and move left to right again, then repeat this until all
            of the elements have been reached.
          </p>
          <div className="flex justify-center items-center pt-6 pb-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-300 p-4 text-center">100</div>
              <div className="bg-gray-300 p-4 text-center">212</div>
              <div className="bg-gray-300 p-4 text-center">31</div>

              <div className="bg-gray-300 p-4 text-center">14</div>
              <div className="bg-gray-300 p-4 text-center">500</div>
              <div className="bg-gray-300 p-4 text-center">679</div>

              <div className="bg-gray-300 p-4 text-center">71</div>
              <div className="bg-gray-300 p-4 text-center">81</div>
              <div className="bg-gray-300 p-4 text-center">19</div>
            </div>
          </div>
          <p>
            As you can see, nested for loops are important when working with 2-D
            arrays. If you are comfortable with nested for loops, 2-D arrays
            should not be too difficult, so we will look at another example to
            become more familiar with them:
          </p>
          <p className="pt-6">
            <span className="font-bold">Example #2:</span> Write a function that
            takes a 2-D array (of type int), the number of rows, number of
            columns, and a threshold value as parameters and returns the number
            of values greater than (or equal to) the threshold value:
          </p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">Solution</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b text-[5px] sm:text-xs">
                <code className="text-white">
                  <span className="text-green-500">&nbsp;/*</span> <br />
                  <span className="text-green-500">&nbsp;* Author:</span> <br />
                  <span className="text-green-500">
                    &nbsp;* Student Number:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">
                    &nbsp;* Lab Section:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;* Date:</span> <br />
                  <span className="text-green-500">&nbsp;* Purpose:</span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;*/</span> <br />
                  <br />
                  <span className="text-blue-400">#include</span>{" "}
                  &lt;stdio.h&gt;
                  <br />
                  <br />
                  <span className="text-blue-400">int</span> thresholdNum(
                  <span className="text-blue-400">int </span>arr
                  {"[][ARRAY_COLS]"},{" "}
                  <span className="text-blue-400">int </span>rows,{" "}
                  <span className="text-blue-400">int </span>cols,{" "}
                  <span className="text-blue-400">int </span>threshold) &#123;
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;int</span> count =
                  <span className="text-blue-400">&nbsp;0</span>;
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;for</span>(
                  <span className="text-blue-400">int </span>i = 0; i &lt; rows;
                  i++){"{"}
                  <br />
                  <span className="text-blue-400">
                    &nbsp;&nbsp;&nbsp;&nbsp;for
                  </span>
                  (<span className="text-blue-400">int </span>j = 0; j &lt;
                  cols; j++){"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-blue-400">if</span>(arr[i][j]
                  {" >="} threshold){"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>count++;</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;return</span>
                  &nbsp;count;
                  <br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center text-[6px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">Test</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b text-[5px] sm:text-xs">
                <code className="text-white">
                  #define ARRAY_ROWS 4
                  <br />
                  #define ARRAY_COLS 3
                  <br />
                  <br />
                  <span className="text-blue-400">int</span> main(
                  <span className="text-blue-400">void</span>) &#123;
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;int </span>
                  exampleArray2[
                  <span className="text-blue-400">ARRAY_ROWS</span>][
                  <span className="text-blue-400">ARRAY_COLS</span>] ={" {{"}
                  <span className="text-blue-400">12</span>,{" "}
                  <span className="text-blue-400">10</span>,{" "}
                  <span className="text-blue-400">1</span>
                  {"}"},{"{"}
                  <span className="text-blue-400">14</span>,{" "}
                  <span className="text-blue-400">5</span>,{" "}
                  <span className="text-blue-400">67</span>
                  {"}"}, {"{"}
                  <span className="text-blue-400">149</span>,{" "}
                  <span className="text-blue-400">2</span>,{" "}
                  <span className="text-blue-400">99</span>
                  {"}"}, {"{"}
                  <span className="text-blue-400">7</span>,{" "}
                  <span className="text-blue-400">8</span>,{" "}
                  <span className="text-blue-400">17</span>
                  {"}"}
                  {"}"};
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;int </span>
                  thresholdValue =<span className="text-blue-400"> 25</span>;
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;int </span>
                  numOverThreshold =&nbsp;
                  <span>thresholdNum(exampleArray2, </span>
                  <span className="">ARRAY_ROWS</span>,{" "}
                  <span className="">ARRAY_COLS</span>,{" "}
                  <span className="">thresholdValue</span>);
                  <br />
                  <br />
                  <span>&nbsp;&nbsp;printf(</span>
                  <span className="text-green-400">
                    "The number of values over the threshold value is %d."
                  </span>
                  , numOverThreshold);
                  <br />
                  <br />
                  &nbsp;&nbsp;system(
                  <span className="text-green-400">"PAUSE"</span>
                  );
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">return 0;</span>
                  <br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>

          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">Output</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="">
                    The number of values over the threshold value is 3.
                  </span>
                </code>
              </pre>
            </div>
          </div>
          <p>
            As you can see, most 2-D array questions involve some sort of nested
            for loop, so most of the time when you see a 2-D array, implement
            some sort of nested loop (could also use while loops but I prefer
            for loops).
          </p>
          <div
            className="flex items-center justify-center py-4"
            id="examples-6"
          >
            <div className="w-11/12 sm:w-6/12 pt-4 flex">
              <table className="w-full border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-2 bg-gray-100" colspan="2">
                      Practice Questions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 border text-center font-semibold">
                      Question:
                    </td>
                    <td className="py-2 border text-center px-2 font-semibold">
                      Answer:
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 border text-center">xxx</td>
                    <td className="py-2 border text-center">
                      <a
                        href="https://codebeautify.org/alleditor/y23fc94c6"
                        target="_blank"
                        className="underline hover:text-blue-400"
                      >
                        Solution
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 border text-center">xxx</td>
                    <td className="py-2 border text-center">
                      <a
                        href="https://codebeautify.org/alleditor/y23280be5"
                        target="_blank"
                        className="underline hover:text-blue-400"
                      >
                        Solution
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 border text-center">xxx</td>
                    <td className="py-2 border text-center">
                      <a
                        href="https://codebeautify.org/alleditor/y23ce29d7"
                        target="_blank"
                        className="underline hover:text-blue-400"
                      >
                        Solution
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-block flex">
            <h3
              id="topic-7"
              className="py-4 font-bold text-lg hover:text-gray-500 font-serif"
            >
              Arduino
            </h3>
          </div>
          <p className="pb-4">
            For the Arduino unit, you will do all of your work with a virtual
            Arduino board on{" "}
            <a
              className="underline"
              target="_blank"
              href="https://www.tinkercad.com/"
            >
              Tinkercad
            </a>
            {". "}
            The questions always involve a "setup" and "loop" function. The
            setup funciton is to declare certain pins on the Arduino board as
            inputs or outputs, such as buttons and LEDs. The loop function
            continuously loops while the program is running. The most common
            example is programming an LED light to turn on and off. The code
            would look something like this:
          </p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C++</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b text-[5px] sm:text-xs">
                <code className="text-white">
                  <span className="text-green-500">&nbsp;/*</span> <br />
                  <span className="text-green-500">&nbsp;* Author:</span> <br />
                  <span className="text-green-500">
                    &nbsp;* Student Number:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">
                    &nbsp;* Lab Section:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;* Date:</span> <br />
                  <span className="text-green-500">&nbsp;* Purpose:</span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;*/</span> <br />
                  <br />
                  <br />
                  <span className="text-purple-400">void</span> setup() &#123;
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;</span>
                  pinMode(
                  <span className="text-green-400">13</span>, OUTPUT);
                  <br />
                  <span className="text-green-400">
                    &nbsp;&nbsp;// Can declare more inputs and outputs here.
                  </span>
                  <br />
                  &#125;
                  <br />
                  <br />
                  <span className="text-purple-400">void</span> loop() &#123;
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;</span>
                  digitalWrite(
                  <span className="text-green-400">13</span>, HIGH);
                  <br />
                  &nbsp;&nbsp;delay(<span className="text-green-400">100</span>
                  );
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;</span>
                  digitalWrite(
                  <span className="text-green-400">13</span>, LOW);
                  <br />
                  &nbsp;&nbsp;delay(<span className="text-green-400">100</span>
                  );
                  <br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>
          <p>
            In this example, we declared pin 13 on the Arduino board as an
            output (this is where the LED is connected). In the loop, we set pin
            13 to "HIGH", signaling to turn the LED on. We then delayed for 100
            milliseconds so we can see the LED actually blinking, then turned
            the LED off and delayed again. Since this code is in the loop
            function, this code continues to run until the program is stopped,
            so the light keeps blinking on and off.
            <br />
            <br />
            The other type of question that you will have is dealing with
            inputs, such as buttons or switches. We will look at another problem
            which uses a switch to turn an LED light on and off:
          </p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C++</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b text-[5px] sm:text-xs">
                <code className="text-white">
                  <span className="text-green-500">&nbsp;/*</span> <br />
                  <span className="text-green-500">&nbsp;* Author:</span> <br />
                  <span className="text-green-500">
                    &nbsp;* Student Number:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">
                    &nbsp;* Lab Section:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;* Date:</span> <br />
                  <span className="text-green-500">&nbsp;* Purpose:</span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;*/</span> <br />
                  <br />
                  <br />
                  <span className="text-purple-400">int</span> switchState;
                  <br />
                  <br />
                  <span className="text-purple-400">void</span> setup() &#123;
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;</span>
                  pinMode(
                  <span className="text-green-400">0</span>, INPUT);
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;</span>
                  pinMode(
                  <span className="text-green-400">1</span>, OUTPUT);
                  <br />
                  &#125;
                  <br />
                  <br />
                  <span className="text-purple-400">void</span> loop() &#123;
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;</span>
                  switchState = digitalRead(
                  <span className="text-green-400">0</span>);
                  <br />
                  <br />
                  <span className="text-purple-400">&nbsp;&nbsp;if</span>
                  (switchState == HIGH) &#123;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(1, HIGH);
                  <br />
                  &nbsp;&nbsp;&#125;
                  <br />
                  <br />
                  <span className="text-purple-400">&nbsp;&nbsp;else</span>{" "}
                  &#123;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;digitalWrite(1, LOW);
                  <br />
                  &nbsp;&nbsp;&#125;
                  <br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>
          <p>
            We first declared a variable called switchState of type int which we
            will use in the loop funciton. Under this in the setup function, we
            declared pin 0 as an input, and pin 1 as an output, meaning that our
            switch is connected to pin 0 and our LED is connected to pin 1. In
            the loop function, we use our switchState variable to hold the
            status of our switch (either HIGH = 1 or LOW = 0). We then turn the
            LED on if switchState is HIGH (the switch is on) or turn the LED off
            if switchState is LOW (the switch if off). Again, since this is in
            the loop function, the program continuously runs this code until the
            program is turned off.
          </p>
        </div>

        <div>
          <div className="inline-block flex">
            <h3
              id="topic-8"
              className="py-4 font-bold text-lg hover:text-gray-500 font-serif"
            >
              Strings
            </h3>
          </div>
          <p className="pb-4">
            The final unit that you will look at is strings. Strings in C are
            much different than other languages you may be familiar with such as
            Java or Python. Strings in C are actually 1-D arrays of type char
            terminated by a null character ('\0'). There are two ways you would
            initialize a string:
          </p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="text-blue-400">char</span> hello1[] = {"{"}
                  <span className="text-green-400">'h'</span>,{" "}
                  <span className="text-green-400">'e'</span>,{" "}
                  <span className="text-green-400">'l'</span>,{" "}
                  <span className="text-green-400">'l'</span>,{" "}
                  <span className="text-green-400">'o'</span>,{" "}
                  <span className="text-green-400">'\0'</span>
                  {"}"};
                  <br />
                  <span className="text-green-400">// or</span>
                  <br />
                  <span className="text-blue-400">char</span> hello2[] ={" "}
                  <span className="text-green-400">"hello"</span>;
                </code>
              </pre>
            </div>
          </div>
          <p>
            The types of questions you will see are usually require iterating
            through the character array, so a for loop would be the most helpful
            for string questions:
          </p>
          <p className="pt-6">
            <span className="font-bold">Example #1:</span> Write a function that
            returns the number of 'a' characters in a given string:
          </p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b text-[5px] sm:text-xs">
                <code className="text-white">
                  <span className="text-green-500">&nbsp;/*</span> <br />
                  <span className="text-green-500">&nbsp;* Author:</span> <br />
                  <span className="text-green-500">
                    &nbsp;* Student Number:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">
                    &nbsp;* Lab Section:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;* Date:</span> <br />
                  <span className="text-green-500">&nbsp;* Purpose:</span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;*/</span>
                  <br />
                  <br />
                  <span className="text-blue-400">int</span> countA(
                  <span className="text-blue-400">char</span> str{"[]"}) &#123;
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;int </span>
                  count = <span className="text-blue-400">0</span>;
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;for</span>(
                  <span className="text-blue-400">int </span>i = 0; str[i] !=
                  <span className="text-green-400"> '\0'</span>; i++) {"{"}
                  <br />
                  <span className="text-blue-400">
                    &nbsp;&nbsp;&nbsp;&nbsp;if
                  </span>
                  (str[i] ==
                  <span className="text-green-400"> 'a'</span>){"{"}
                  <br />
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;count++;</span>
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">return </span>
                  count;
                  <br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">Test</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b text-[5px] sm:text-xs">
                <code className="text-white">
                  <span className="text-green-500">&nbsp;/*</span> <br />
                  <span className="text-green-500">&nbsp;* Author:</span> <br />
                  <span className="text-green-500">
                    &nbsp;* Student Number:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">
                    &nbsp;* Lab Section:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;* Date:</span> <br />
                  <span className="text-green-500">&nbsp;* Purpose:</span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;*/</span> <br />
                  <br />
                  <span className="text-blue-400">#include</span>{" "}
                  &lt;stdio.h&gt;
                  <br />
                  <br />
                  <span className="text-blue-400">int</span> main(
                  <span className="text-blue-400">void</span>) &#123;
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;char </span>arr[]
                  = "aabbaaa";
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;int </span>
                  numberOfA = countA(arr);
                  <br />
                  &nbsp;&nbsp;printf(
                  <span className="text-green-400">
                    "The number of a's in the string %s is %d."
                  </span>
                  , arr, numberOfA);
                  <br />
                  <br />
                  &nbsp;&nbsp;system(
                  <span className="text-green-400">"PAUSE"</span>
                  );
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">return 0;</span>
                  <br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">Output</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="">
                    The number of a's in the string aabbaaa is 5.
                  </span>
                </code>
              </pre>
            </div>
          </div>
          <p>
            In this example, we used a for loop to iterate through the inputted
            string until we reached the '\0' character at the end of the string.
            We checked if the character at each index was equal to 'a' and
            incremented the count variable if it was. We can think of the string
            like this:
          </p>
          <div className="flex justify-center items-center pt-4">
            <div className="grid grid-cols-8 gap-4 text-xs sm:text-base">
              <div className="bg-gray-300 p-4 text-center">a</div>
              <div className="bg-gray-300 p-4 text-center">a</div>
              <div className="bg-gray-300 p-4 text-center">b</div>
              <div className="bg-gray-300 p-4 text-center">b</div>
              <div className="bg-gray-300 p-4 text-center">a</div>
              <div className="bg-gray-300 p-4 text-center">a</div>
              <div className="bg-gray-300 p-4 text-center">a</div>
              <div className="bg-gray-300 p-4 text-center">\0</div>
            </div>
          </div>
          <p className="pt-4">
            So we start at the first character (a) and check if it is equal to
            'a' (which it is so we increment count by 1). We then move to the
            second and continue iterating through the array. When we reach the
            '\0' character, we exit the for loop and return the value stored in
            count.
            <br />
            <br />
            We are also able to modify a string and will look at this in the
            next example:
          </p>
          <p className="pt-6">
            <span className="font-bold">Example #2:</span> Given an input string
            (of maximum 32 characters), switch all of the 'a' characters to 'c'
            and all of the 'b' characters to 'd'.
          </p>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">C</span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b text-[5px] sm:text-xs">
                <code className="text-white">
                  <span className="text-green-500">&nbsp;/*</span> <br />
                  <span className="text-green-500">&nbsp;* Author:</span> <br />
                  <span className="text-green-500">
                    &nbsp;* Student Number:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">
                    &nbsp;* Lab Section:
                  </span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;* Date:</span> <br />
                  <span className="text-green-500">&nbsp;* Purpose:</span>{" "}
                  <br />
                  <span className="text-green-500">&nbsp;*/</span> <br />
                  <br />
                  <span className="text-blue-400">#include</span>{" "}
                  &lt;stdio.h&gt;
                  <br />
                  <br />
                  <span className="text-blue-400">int</span> main(
                  <span className="text-blue-400">void</span>) &#123;
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;char </span>arr[
                  <span className="text-blue-400">32</span>];
                  <br />
                  &nbsp;&nbsp;printf(
                  <span className="text-green-400">"Enter a string: "</span>);
                  <br />
                  &nbsp;&nbsp;fgets(arr,
                  <span className="text-blue-400"> 32</span>, stdin);
                  <br />
                  <br />
                  <span className="text-blue-400">&nbsp;&nbsp;for</span>(
                  <span className="text-blue-400">int </span>i = 0; arr[i] !=
                  <span className="text-green-400"> '\0'</span>; i++){"{"}
                  <br />
                  <span className="text-blue-400">
                    &nbsp;&nbsp;&nbsp;&nbsp;if
                  </span>
                  (arr[i] ==
                  <span className="text-green-400"> 'a'</span>){"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[i] =
                  <span className="text-green-400"> 'c'</span>;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  <span className="text-blue-400">
                    &nbsp;&nbsp;&nbsp;&nbsp;else if
                  </span>
                  (arr[i] ==
                  <span className="text-green-400"> 'b'</span>){"{"}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arr[i] =
                  <span className="text-green-400"> 'd'</span>;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;{"}"}
                  <br />
                  &nbsp;&nbsp;{"}"}
                  <br />
                  <br />
                  &nbsp;&nbsp;printf(
                  <span className="text-green-400">
                    "The new string is %s."
                  </span>
                  , arr);
                  <br />
                  <br />
                  &nbsp;&nbsp;system(
                  <span className="text-green-400">"PAUSE"</span>
                  );
                  <br />
                  &nbsp;&nbsp;<span className="text-blue-400">return 0;</span>
                  <br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>
          <div className="flex justify-center text-[8px] sm:text-xs pt-4">
            <div className="w-11/12 sm:w-9/12 pb-4">
              <div className="bg-gray-200 p-2 rounded-t">
                <span className="text-gray-600 font-semibold">
                  Output (Example)
                </span>
              </div>
              <pre className="bg-gray-800 p-4 rounded-b">
                <code className="text-white">
                  <span className="">Enter a string: aaabbb</span>
                  <br />
                  The new string is cccddd.
                </code>
              </pre>
            </div>
          </div>
          <p>
            Instead of using scanf() as we have previously seen, in this example
            I used fgets(). When working with strings, you may run into problems
            using scanf() such as working with problems with empty inputs and
            reading '\n'. fgets() takes three parameters in: the first is where
            the result should be stored, the second is the maximum number of
            characters to be read (including the final null-character), and the
            final parameter is where the string is read from. In APSC160 this
            will always be stdin which stands for standard input - this is where
            you type the input for the program to read.
            <br />
            <br />
            The problems you will see will require you to iterate through a
            string to either read or modify characters from it, so practice with
            the questions below to become more comfortable with strings.
          </p>
          <div
            className="flex items-center justify-center py-4"
            id="examples-7"
          >
            <div className="w-11/12 sm:w-6/12 pt-4 flex">
              <table className="w-full border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-2 bg-gray-100" colspan="2">
                      Practice Questions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 border text-center font-semibold">
                      Question:
                    </td>
                    <td className="py-2 border text-center px-2 font-semibold">
                      Answer:
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 border text-center">xxx</td>
                    <td className="py-2 border text-center">
                      <a
                        href="https://codebeautify.org/alleditor/y23fc94c6"
                        target="_blank"
                        className="underline hover:text-blue-400"
                      >
                        Solution
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 border text-center">xxx</td>
                    <td className="py-2 border text-center">
                      <a
                        href="https://codebeautify.org/alleditor/y23280be5"
                        target="_blank"
                        className="underline hover:text-blue-400"
                      >
                        Solution
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 border text-center">xxx</td>
                    <td className="py-2 border text-center">
                      <a
                        href="https://codebeautify.org/alleditor/y23ce29d7"
                        target="_blank"
                        className="underline hover:text-blue-400"
                      >
                        Solution
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <a href="#apsc-160-notes" className="fixed bottom-2 right-2 p-2 bg-white border-black border rounded-md hover:bg-sky-200 flex items-center">
  <h2 className="font-bold text-md font-serif flex items-center space-x-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
      />
    </svg>
    <p>Back to top</p>
  </h2>
</a>
    </div>
  );
}

export default Notes;
