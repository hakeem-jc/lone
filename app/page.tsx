import Header from "./components/Header";

export default function Home() {
  return (
    <main className="dark:bg-gray-900 text-white w-screen">
      <Header />
      <section className="flex px-8 py-10 h-screen">
        <div className="mr-auto place-self-center ">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Fast Loans for Fair Prices
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            Get a low rate one month loan in your bank account in minutes
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Get Started
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>
      </section>

      <section className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className=" text-5xl mb-10">Ready to take the next step?</h1>
          <p className="text-xl mb-8">
            Get thousands in your bank in minutes with up 3 months to repay with
            no hidden fees ever
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Get Started
          </a>
        </div>
      </section>

      <footer className="p-6 border-t border-gray-600 w-screen text-center">
        <p>Lone Inc</p>
      </footer>
    </main>
  );
}
