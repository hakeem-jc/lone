import Header from "./components/Header";
import Footer from "./components/Footer";

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
          <img src="/fintech.png" alt="mockup" />
        </div>
      </section>

      <section className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className=" text-5xl mb-10">Ready to take the next step?</h1>
          <p className="text-xl mb-8">
            Get thousands in your bank account in minutes with up 3 months to repay with
            no hidden fees
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-center border rounded-lg 0 focus:ring-4  text-white border-gray-700 bg-sky-500 hover:bg-blue-500 focus:ring-gray-800"
          >
            Apply
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
