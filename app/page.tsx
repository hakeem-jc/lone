import Header from "./components/Header";

export default function Home() {
  return (
    <main className="dark:bg-gray-900 text-white">
      <Header />
      <section className="flex px-12 py-10 h-screen">
        <div className="mr-auto place-self-center ">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
            Fast Loans for Fair Prices
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">
            Get a low rate one month loan in your bank account in minutes
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-10 py-5 text-base font-medium text-center border rounded-lg 0 focus:ring-4  text-white border-gray-700 bg-sky-500 hover:bg-blue-500 focus:ring-gray-800"
          >
            Apply for a Loan
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="/fintech.png"
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
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-center border rounded-lg 0 focus:ring-4  text-white border-gray-700 bg-sky-500 hover:bg-blue-500 focus:ring-gray-800"
          >
            Apply
          </a>
        </div>
      </section>

      <footer className="bottom-0 left-0 z-20 w-full p-4 border-t  shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-800 border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="./" className="hover:underline">
          Lone Inc™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </main>
  );
}
