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

      <section className="flex justify-center items-center h-screen py-20">
        <div className="text-center">
          <h1 className="text-center text-5xl mb-10">
            Ready to take the next step?
          </h1>
          <div className="p-8 w-4/6 mx-auto text-left">
            <p className="text-lg mb-6">
              Need cash fast? We've got you covered. Our digital lending app
              provides quick, hassle-free loans to help you manage unexpected
              expenses or seize sudden opportunities.
            </p>

            <h2 className="text-2xl font-semibold mb-4">
              Here's how it works:
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse mb-6">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-semibold  align-top">
                      Apply in Minutes:
                    </td>
                    <td className="py-2 ">
                      Our streamlined application process takes just a few taps.
                      No paperwork, no waiting in lines.
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-semibold  align-top">
                      Instant Decision:
                    </td>
                    <td className="py-2 ">
                      Our advanced AI evaluates your application in real-time,
                      providing an immediate lending decision.
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-semibold  align-top">
                      Fast Funding:
                    </td>
                    <td className="py-2 ">
                      Once approved, get up to $5,000 deposited directly into
                      your bank account within minutes.
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-semibold  align-top">
                      Flexible Repayment:
                    </td>
                    <td className="py-2 ">
                      Choose a repayment term that works for you, from 1 to 3
                      months.
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 pr-4 font-semibold  align-top">
                      Transparent Pricing:
                    </td>
                    <td className="py-2 ">
                      We believe in full disclosure. Our competitive rates are
                      clearly displayed, and we never charge hidden fees.
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-semibold  align-top">
                      Secure and Confidential:
                    </td>
                    <td className="py-2 ">
                      Your financial data is protected with bank-level
                      encryption, ensuring your privacy and security.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-6">
              Whether you're dealing with an emergency expense, consolidating
              debt, or investing in yourself, we're here to provide the
              financial boost you need, when you need it.
            </p>

            <p className="mt-4 text-lg font-semibold">
              Experience the future of lending - fast, fair, and at your
              fingertips.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-center border rounded-lg 0 focus:ring-4  text-white border-gray-700 bg-sky-500 hover:bg-blue-500 focus:ring-gray-800"
          >
            Apply Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
