"use client";
import React, { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Modal from "@/app/components/Modal";

export default function Apply() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    loanAmount: "",
    monthlyIncome: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => setOpenModal(!openModal);

  const handleInputChange = (e:any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setOpenModal(true);
  };

  return (
    <main className="bg-gray-900 text-white">
      {openModal && <Modal toggleModal={toggleModal} />}
      <Header />
      <section className="h-screen">
        <form
          className="max-w-xl mx-auto mt-10 flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Your Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 px-2.5 py-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John Edwards"
              required
            />
          </div>

          <div>
            <label
              htmlFor="loanAmount"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              How much money do you need?
            </label>
            <input
              type="number"
              id="loanAmount"
              value={formData.loanAmount}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="5000"
              data-currency="USD"
              required
            />
          </div>

          <div>
            <label
              htmlFor="monthlyIncome"
              className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >
              How much do you make a month?
            </label>
            <input
              type="number"
              id="monthlyIncome"
              value={formData.monthlyIncome}
              onChange={handleInputChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="5000"
              data-currency="USD"
              required
            />
            <p
              id="helper-text-explanation"
              className="mt-2 text-sm text-gray-500 dark:text-gray-400"
            >
              We'll never share your details. Read our{" "}
              <a
                href="#"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-6 py-3 lg:px-8 lg:py-5 text-base font-medium text-center border rounded-lg focus:ring-4 text-white border-gray-700 bg-sky-500 hover:bg-blue-500 focus:ring-gray-800 mt-10"
          >
            Apply
          </button>
        </form>
      </section>
      <Footer />
    </main>
  );
}
