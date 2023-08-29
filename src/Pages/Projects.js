import React from "react";

function About() {
  return (
    <div className="h-5/6 bg-white">
      <div>
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-3 w-full">
            <div className="pt-4 pl-12">
              <div className="inline-block">
                <a
                  href="mailto:justin.ishiguro@gmail.com?subject=Reddit Bot Code Request&body=*This project is still under construction, so I have not uploaded the code to GitHub. If you would like to access the code right now, please feel free to email.*%0A%0A"
                  target="_blank"
                  className="col-span-1 svg-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="2em"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </a>
              </div>
            </div>
            <h1 className="col-span-1 font-bold pt-4 text-md sm:text-2xl hover:text-gray-500 font-serif text-center">
              Engineering Specialization Reddit Bot
            </h1>
            <p className="col-span-1 pt-4 text-right font-bold pr-12 text-xs sm:text-base">
              June 2023 - Present
            </p>
          </div>
          <p className="px-12 pt-4">
            As a personal project, I am creating a Reddit bot that will allow
            users to gather the averages of student's and what specialization
            they got into on the{" "}
            <a
              className="underline"
              target="_blank"
              href="https://www.reddit.com/r/ubcengineering/"
            >
              r/ubcengineering
            </a>{" "}
            page. Students are always trying to see if their first year average
            is sufficient to get into the specialization of their choice, so I
            wanted to make an easy way to collect the averages of past students
            who were accepted to the specialization in previous years.
          </p>
        </div>
        <div className="flex flex-wrap text-sm whitespace-nowrap mx-12">
          <div className="border-[1px] border-blue-200 bg-blue-200 text-blue-800 rounded-2xl mr-2 mt-2 inline-block px-2">
            Python
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-3 w-full">
            <div className="pt-8 pl-12">
              <div className="inline-block">
                <a
                  href="https://github.com/justinishiguro/JustinIshiguro.com"
                  target="_blank"
                  className="col-span-1 svg-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="2em"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </a>
              </div>
            </div>
            <h1 className="col-span-1 font-bold pt-8 text-md sm:text-2xl hover:text-gray-500 font-serif text-center">
              Personal Portfolio Website
            </h1>
            <p className="col-span-1 pt-8 text-right font-bold pr-12 text-xs sm:text-base">
              May 2023 - Present
            </p>
          </div>
          <p className="px-12 pt-4">
            I created this website to become more familiar with React.js and to
            highlight my different projects, more information about me, and
            notes on courses I have taken. I am hosting this website on Netlify
            so I am able to showcase my website to anyone online. I created a
            responsive layout and tested this on multiple different devices
            (iPhone 12 Pro, Pixel 5, etc.) to ensure that my website was
            accessible on several different devices. I also created detailed
            notes (Crash Course) for APSC160 which included practice problems,
            detailed examples, and "Table of Contents" and "Back To Top" buttons
            to access different units.
            <br />
            <br />
            <span className="font-bold">
              What I learned from this project:{" "}
            </span>
            From creating my personal website, I was able to become much more
            comfortable with using React and Tailwind CSS. In the past, I was
            only familiar with traditional CSS and JavaScript, however at my
            first Co-op, my company introduced me to Tailwind CSS and React. To
            gain more practice with using it, I decided to use these two
            frameworks to create this website. Personally, I find it much more
            convinient. By using Tailwind CSS and React, you do not have to have
            separate HTML and CSS files.
          </p>
        </div>
        <div className="flex flex-wrap text-sm whitespace-nowrap mx-12">
          <div className="border-[1px] border-blue-200 bg-blue-200 text-blue-800 rounded-2xl mt-2 inline-block px-2 mr-2">
            Create React App
          </div>
          <div className="border-[1px] border-blue-200 bg-blue-200 text-blue-800 rounded-2xl mr-2 mt-2 inline-block px-2">
            React
          </div>
          <div className="border-[1px] border-blue-200 bg-blue-200 text-blue-800 rounded-2xl mr-2 mt-2 inline-block px-2">
            Tailwind CSS
          </div>
          <div className="border-[1px] border-blue-200 bg-blue-200 text-blue-800 rounded-2xl mt-2 inline-block px-2">
            React Router
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="grid grid-cols-3 w-full">
            <div className="pt-8 pl-12">
              <div className="inline-block">
                <a
                  href="https://github.com/justinishiguro/FitGenius"
                  target="_blank"
                  className="col-span-1 svg-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="2em"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </a>
              </div>
            </div>
            <h1 className="col-span-1 font-bold pt-8 text-md sm:text-2xl hover:text-gray-500 font-serif text-center">
              FitGenius
            </h1>
            <p className="col-span-1 pt-8 text-right font-bold pr-12 text-xs sm:text-base">
              May 2023 - Present
            </p>
          </div>
          <p className="px-12 pt-4">
            As a personal project, I created an application which generates
            personalized workouts for you. I found an exercise API and used this
            to allow users to select the type of exercises they want to perform
            (cardio, powerlifting, etc.), which muscle group they want to
            target, as well as the difficulty level of each exercise.
            Additionally, they can search for specific exercises by directly
            inputting a name. After submitting their choices, a workout
            consisting of 10 exercises is generated for them based on their
            inputs, with instructions on how to perform the exercise as well as
            any equipment that is needed.
            <br />
            <br />A second feature that I added to my application was a page to
            calculate how many calories you burned depending on the type of
            exercise you performed. The form allows you to optionally enter your
            weight and the duration of exercise to provide a more accurate
            result. Please check it out{" "}
            <a
              className="underline"
              href="https://fitgenius1.netlify.app/"
              target="_blank"
            >
              here!
            </a>
            <br />
            <br />
            <span className="font-bold">
              What I learned from this project:{" "}
            </span>
            This project taught me so much about APIs while also improving my
            React and Tailwind CSS skills. The first step was to learn how to
            make an API call using an HTTP request. I first found a{" "}
            <a
              className="underline"
              href="https://api-ninjas.com/api"
              target="_blank"
            >
              website
            </a>{" "}
            to use to make an API call. I first started by trying to print the
            response to the console, and once I was able to successfully read
            the data from the console, I began to design the front-end. I felt
            that the hardest part of this project was creating a form to send
            the user's data. I also learned how to store my private API key in a
            .env file to protect it from other people.
          </p>
        </div>
        <div className="flex flex-wrap text-sm whitespace-nowrap mx-12">
          <div className="border-[1px] border-blue-200 bg-blue-200 text-blue-800 rounded-2xl mr-2 mt-2 inline-block px-2">
            Create React App
          </div>
          <div className="border-[1px] border-blue-200 bg-blue-200 text-blue-800 rounded-2xl mr-2 mt-2 inline-block px-2">
            React
          </div>
          <div className="border-[1px] border-blue-200 bg-blue-200 text-blue-800 rounded-2xl mr-2 mt-2 inline-block px-2">
            Tailwind CSS
          </div>
          <div className="border-[1px] border-blue-200 bg-blue-200 text-blue-800 rounded-2xl mr-2 mt-2 inline-block px-2">
            React Router
          </div>
          <div className="border-[1px] border-blue-200 bg-blue-200 text-blue-800 rounded-2xl mr-2 mt-2 inline-block px-2">
            REST API
          </div>
          <div className="border-[1px] border-blue-200 bg-blue-200 text-blue-800 rounded-2xl mt-2 inline-block px-2">
            Postman
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="grid grid-cols-3 w-full">
            <div className="pt-8 pl-12">
              <div className="inline-block">
                <a
                  href="mailto:justin.ishiguro@gmail.com?subject=Mini-Golf Simulator Code Request&body=*Since this is a school project, I cannot upload the code to GitHhub. Please email to request access to the code.*%0A%0A"
                  target="_blank"
                  className="col-span-1 svg-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="2em"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </a>
              </div>
            </div>
            <h1 className="col-span-1 font-bold pt-8 text-md sm:text-2xl hover:text-gray-500 font-serif text-center">
              "Crash" Linux Shell
            </h1>
            <p className="col-span-1 pt-8 text-right font-bold pr-12 text-xs sm:text-base">
              March 2023 - April 2023
            </p>
          </div>
          <p className="px-12 pt-4">
            In my Computing Systems class (CPEN212), I developed a shell called
            “Crash” from scratch, serving as a simplified version of Linux
            shell. It focused on enabling users to initiate new processes by
            entering commands and capturing signals effectively. I implemented
            signal handlers for SIGQUIT, SIGINT, SIGSTP, and SIGCHILD to
            appropriately handle signals sent from child processes or user input
            such as suspending running processes, terminating foreground
            processes and managing child process completion. I also addressed
            complexities related to signal handling in a multi-process
            environment, effectively managing signal propagation, blocking, and
            unblocking to avoid race conditions and ensure correct handling of
            user and child process signals.
            <br />
            <br />
            <span className="font-bold">
              What I learned from this project:{" "}
            </span>
            Through this project, I became more familiar with programming in C
            and also learned so much about concurrent programming by managing
            multiple processes at the same time. I faced problems with blocking
            and unblocking signals correctly and handling race conditions, but
            was able to resolve these by using the GNU Debugger and through
            implementing various signal handlers.
          </p>
        </div>
        <div className="flex flex-wrap text-sm whitespace-nowrap mx-12">
          <div className="border-[1px] border-blue-200 bg-blue-200 text-blue-800 rounded-2xl mr-2 mt-2 inline-block px-2">
            C
          </div>
          <div className="border-[1px] border-blue-200 bg-blue-200 text-blue-800 rounded-2xl mt-2 inline-block px-2">
            Git
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="grid grid-cols-3 w-full">
            <div className="pt-8 pl-12">
              <div className="inline-block">
                <a
                  href="mailto:justin.ishiguro@gmail.com?subject=Mini-Golf Simulator Code Request&body=*Since this is a school project, I cannot upload the code to GitHhub. Please email to request access to the code.*%0A%0A"
                  target="_blank"
                  className="col-span-1 svg-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="2em"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </a>
              </div>
            </div>
            <h1 className="col-span-1 font-bold pt-8 text-md sm:text-2xl hover:text-gray-500 font-serif text-center">
              Mini-Golf Simulator
            </h1>
            <p className="col-span-1 pt-8 text-right font-bold pr-12 text-xs sm:text-base">
              February 2023 - April 2023
            </p>
          </div>
          <p className="px-12 pt-4">
            During Term 2 of my second year at UBC, I worked with three other
            students to create our own mini-golf simulator. This project was one
            of two that I completed as part of my Computer Engineering Design
            Studio class (CPEN291). We were required to come up with our own
            idea, and at the time there was a popular golf game seen on{" "}
            <a
              className="underline"
              target="_blank"
              href="https://www.tiktok.com/@osgcuties/video/7221976855576874283"
            >
              TikTok
            </a>
            , so we used this as inspiration for our project. We had two months
            to complete this project and were very happy with the final product.
            Since we were required to create everything from scratch, we had to
            assign certain tasks to every member. I worked with other members to
            implement HTTP POST requests to control user's keyboard inputs and
            HTTP GET requests to determine which holes were successfully hit to
            display different messages on front-end. I was also responsible for
            implementing CircuitPython functions to control the servo motors
            within the 3-D printed arm. This included the arm's height, reach,
            and rotation.
            <br />
            <br />
            <span className="font-bold">
              What I learned from this project:{" "}
            </span>
            Overall I learned a ton about front-end languages such as HTML, CSS,
            and JavaScript, utilized MicroPython to control our 3-D printed arm
            (created using OnShape from scratch), and learned how the front and
            back end communicate with each other. It was also the first project
            where we had the freedom to create anything that we wanted, so we
            had to figure out with language or framework worked the best with
            what we wanted to create.
          </p>
        </div>
        <div className="flex flex-wrap text-sm whitespace-nowrap mx-12 pb-4">
          <div className="border-[1px] border-blue-200 bg-blue-200 text-blue-800 rounded-2xl mr-2 mt-2 inline-block px-2">
            JavaScript
          </div>
          <div className="border-[1px] border-blue-200 bg-blue-200 text-blue-800 rounded-2xl mr-2 mt-2 inline-block px-2">
            HTML
          </div>
          <div className="border-[1px] border-blue-200 bg-blue-200 text-blue-800 rounded-2xl mr-2 mt-2 inline-block px-2">
            CSS
          </div>
          <div className="border-[1px] border-blue-200 bg-blue-200 text-blue-800 rounded-2xl mr-2 mt-2 inline-block px-2">
            Git
          </div>
          <div className="border-[1px] border-blue-200 bg-blue-200 text-blue-800 rounded-2xl mr-2 mt-2 inline-block px-2">
            MicroPython
          </div>
          <div className="border-[1px] border-blue-200 bg-blue-200 text-blue-800 rounded-2xl mt-2 inline-block px-2">
            Python
          </div>
        </div>
        <div className="py-4 flex justify-center items-center">
          <div className="aspect-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xMsV1JsLHl0?si=GSChTrm-Uq2RJod0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="w-full aspect-video px-4"
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="grid grid-cols-3 w-full">
            <div className="pt-8 pl-12">
              <div className="inline-block">
                <a
                  href="mailto:justin.ishiguro@gmail.com?subject=Mini-Golf Simulator Code Request&body=*Since this is a school project, I cannot upload the code to GitHhub. Please email to request access to the code.*%0A%0A"
                  target="_blank"
                  className="col-span-1 svg-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="2em"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </a>
              </div>
            </div>
            <h1 className="col-span-1 font-bold pt-8 text-md sm:text-2xl hover:text-gray-500 font-serif text-center">
              Heap Management Allocation System
            </h1>
            <p className="col-span-1 pt-8 text-right font-bold pr-12 text-xs sm:text-base">
              January 2023 - February 2023
            </p>
          </div>
          <p className="px-12 pt-4">
            In my Computing Systems class (CPEN212), I developed an efficient
            memory allocator in Embedded C (similar to malloc function). I
            employed a first-fit allocation strategy and used an implicit
            free-list with coalescing in both directions to optimize memory
            utilization. I also implemented a robust heap consistency checker to
            determine if all blocks in given heap space were allocated, proper
            alignment of blocks on 8-byte boundaries and verified that allocated
            blocks pointed to valid physical memory addresses. After finishing
            the implementation, I designed and executed a comprehensive suite of
            30+ test cases to rigorously assess the accuracy and effectiveness
            of the “malloc” and “free” functions to confirm proper functionality
            of the allocation system. Overall, this project familiarized my with
            coding in C as well as learning conceptual topics such as "malloc"
            and "free".
            <br />
            <br />
            <span className="font-bold">
              What I learned from this project:{" "}
            </span>
            This project taught me a ton about both programming in C as well as
            the theory behind a heap management system. For this project, I had
            to use the GNU Debugger through the Linux command line, so I had to
            utilize this tool in order to efficiently debug my code.
          </p>
        </div>
        <div className="flex flex-wrap text-sm whitespace-nowrap mx-12">
          <div className="border-[1px] border-blue-200 bg-blue-200 text-blue-800 rounded-2xl mr-2 mt-2 inline-block px-2">
            C
          </div>
          <div className="border-[1px] border-blue-200 bg-blue-200 text-blue-800 rounded-2xl mt-2 inline-block px-2">
            Git
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="grid grid-cols-3 w-full">
            <div className="pt-8 pl-12">
              <div className="inline-block">
                <a
                  href="mailto:justin.ishiguro@gmail.com?subject=Mini-Golf Simulator Code Request&body=*Since this is a school project, I cannot upload the code to GitHhub. Please email to request access to the code.*%0A%0A"
                  target="_blank"
                  className="col-span-1 svg-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="2em"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                </a>
              </div>
            </div>
            <h1 className="col-span-1 font-bold pt-8 text-md sm:text-2xl hover:text-gray-500 font-serif text-center">
              Dancing Robot
            </h1>
            <p className="col-span-1 pt-8 text-right font-bold pr-12 text-xs sm:text-base">
              January 2023 - March 2023
            </p>
          </div>
          <p className="px-12 pt-4">
            During Term 2 of my second year, I worked with three other students
            to create a dancing robot using MicroPython. This project was one of
            two that I completed as part of my Computer Engineering Design
            Studio class (CPEN291). We programmed seven creative dance moves, to
            showcase our robot's mobility to our class. We were given 3-D
            printed parts for the robot's body and legs. We used 4 servo motors
            to control the vertical and horizontal movement of the legs, a
            keypad to control which dance move to perform, an LCD board to
            display different face images depending on the dance move in
            progress, and an LED light to blink while dancing. We also used a
            sensor which made the robot back up if set off. We also used a
            speaker and manually selected frequencies to be played when
            performing a dance.
            <br />
            <br />
            <span className="font-bold">
              What I learned from this project:{" "}
            </span>
            This project allowed me to become more familiar with using
            MicroPython. Since my group did not have a ton of experience with
            MicroPython, we first learned how to control the servo motors. After
            successfully moving the servos, I worked with one other member to
            program the LCD board to display an image, while the other two
            members began to create unique dance moves. After much Googling and
            talking to other groups, we were able to display an image on the LCD
            board. After this, we started to load images for different faces for
            the dance moves. After the other two members created the dance
            moves, we collectively worked together to display a different face
            for each dance move. We did this by using a keypad to display a
            certain face while performing a dance move.
          </p>
        </div>

        <div className="flex text-sm pb-4">
          <div className="border-[1px] border-blue-200 bg-blue-200 text-blue-800 rounded-2xl mx-12 mt-2 inline-block px-2">
            MicroPython
          </div>
        </div>
        <div className="pt-4 pb-8 flex justify-center items-center">
          <div className="aspect-video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1zR4XDhJBVc?si=2DNWx8MXKFA1OjXt"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              className="w-full aspect-video px-4"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
