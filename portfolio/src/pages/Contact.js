import React from "react";


function Contact() {
  return (
    <>
      <section className="text-gray-700 flex items-center justify-center w-screen min-h-screen">
        <div class="max-w-screen-md mx-auto p-5">
          <div class="text-center mb-16">
            <p class="mt-4 text-sm leading-7 text-gray-500 font-regular">
              Contact
            </p>
            <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900 dark:text-blue-500">
              GET IN <span class="text-blue-500 dark:text-gray-200">TOUCH</span>
            </h3>
          </div>

          <form class="w-full">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide  text-blue-500 dark:text-gray-200 text-xs font-bold mb-2" for="grid-first-name">
                  First Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"></input>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide  text-blue-500 dark:text-gray-200 text-xs font-bold mb-2" for="grid-last-name">
                  Last Name
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"></input>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide  text-blue-500 dark:text-gray-200 text-xs font-bold mb-2" for="grid-password">
                  Email Address
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="********@*****.**"></input>
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide  text-blue-500 dark:text-gray-200 text-xs font-bold mb-2" for="grid-password">
                  Your Message
                </label>
                <textarea rows="10" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">

                </textarea>
              </div>
              <div class="flex justify-between w-full px-3">
 
                <button class="shadow bg-blue-500 hover:bg-blue-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded" type="submit">
                  Send Message
                </button>
              </div>

            </div>

          </form>
        </div>
      </section>

    </>
  );
}

export default Contact;