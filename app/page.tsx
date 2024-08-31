"use client";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")?.substring(1);
    const targetElement = targetId ? document.getElementById(targetId) : null;
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <Header />

      <section className="flex flex-col lg:flex-row px-4 lg:px-12 py-10 min-h-screen">
        <div className="mr-auto place-self-center mb-10 lg:mb-0">
          <h1 className="max-w-2xl mb-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none text-white">
            Fast Loans for Fair Prices
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 text-base md:text-lg lg:text-xl text-gray-400">
            Need cash fast? We've got you covered. Our digital lending app
            provides quick, hassle-free loans to help you manage unexpected
            expenses or seize sudden opportunities.
          </p>
          <a
            href="#apply"
            onClick={handleScroll}
            className="inline-flex items-center justify-center px-5 py-3 lg:px-10 lg:py-5 text-base font-medium text-center border rounded-lg focus:ring-4 text-white border-gray-700 bg-sky-500 hover:bg-blue-500 focus:ring-gray-800"
          >
            Learn More
          </a>
        </div>
        <div className="flex lg:w-1/2">
          <img
            src="/fintech.png"
            alt="mockup"
            className="w-full h-auto object-contain"
          />
        </div>
      </section>

      <section
        id="apply"
        className="flex justify-center items-center min-h-screen pb-10 lg:pb-20 px-4"
      >
        <div className="text-center w-full max-w-4xl">
          <h1 className="text-center text-3xl lg:text-5xl font-semibold mb-6 lg:mb-4 mt-2">
            Ready to take the next step?
          </h1>
          <div className="p-4 lg:p-8 mx-auto text-left">
            <h2 className="text-xl lg:text-2xl font-semibold mb-4">
              Here's how it works:
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse mb-6">
                <tbody>
                  {[
                    [
                      "Apply in Minutes:",
                      "Our streamlined application process takes just a few taps. No paperwork, no waiting in lines.",
                    ],
                    [
                      "Instant Decision:",
                      "Our advanced AI evaluates your application in real-time, providing an immediate lending decision.",
                    ],
                    [
                      "Fast Funding:",
                      "Once approved, get up to $5,000 deposited directly into your bank account within minutes.",
                    ],
                    [
                      "Flexible Repayment:",
                      "Choose a repayment term that works for you, from 1 to 3 months.",
                    ],
                    [
                      "Transparent Pricing:",
                      "We believe in full disclosure. Our competitive rates are clearly displayed, and we never charge hidden fees.",
                    ],
                    [
                      "Secure and Confidential:",
                      "Your financial data is protected with bank-level encryption, ensuring your privacy and security.",
                    ],
                  ].map(([title, description], index, array) => (
                    <tr
                      key={index}
                      className={
                        index !== array.length - 1
                          ? "border-b border-gray-700"
                          : ""
                      }
                    >
                      <td className="py-2 pr-4 font-semibold align-top">
                        {title}
                      </td>
                      <td className="py-2">{description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-base lg:text-lg">
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
            className="inline-flex items-center justify-center px-6 py-3 lg:px-8 lg:py-4 text-base font-medium text-center border rounded-lg focus:ring-4 text-white border-gray-700 bg-sky-500 hover:bg-blue-500 focus:ring-gray-800 mt-2"
          >
            Apply Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
