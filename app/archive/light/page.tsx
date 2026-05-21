"use client";

import { useState } from "react";

// ── helpers ──────────────────────────────────────────────────────────────────
function getPaymentDates() {
  const now = new Date();
  const first = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const last = new Date(now.getFullYear(), now.getMonth() + 6, 1);
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  return { firstPayment: fmt(first), lastPayment: fmt(last) };
}

function fmtUSD(n: number) {
  return n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
}

// ── component ────────────────────────────────────────────────────────────────
export default function LoneHomepage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Calculator state
  const [loanAmount, setLoanAmount] = useState(500);
  const [repaymentPeriod, setRepaymentPeriod] = useState(5);

  // Calculate monthly fee (5% of loan amount)
  const monthlyFee = loanAmount * 0.05;

  // Calculate monthly payment (loan amount / repayment period + monthly fee)
  const monthlyPayment = loanAmount / repaymentPeriod + monthlyFee;

  // Get first and last payment dates
  const { firstPayment, lastPayment } = getPaymentDates();

  const totalRepayable = monthlyPayment * repaymentPeriod;
  const totalFees = monthlyFee * repaymentPeriod;

  const faqs = [
    {
      q: "How quickly can I get a loan from Lone?",
      a: "Once approved, funds are deposited directly to your bank account within minutes. Our streamlined verification process means most applicants receive a decision in under 60 seconds.",
    },
    { q: "What are the eligibility requirements for a short-term loan?", a: "" },
    { q: "Is my personal and financial data secure with Lone?", a: "" },
    { q: "Can I repay my loan early without a penalty?", a: "" },
    { q: "How do I set up automatic repayment for my loan?", a: "" },
  ];

  return (
    <div className="bg-white font-sans text-gray-900 antialiased">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-xl font-black tracking-tight text-emerald-600">
            Lone<span className="text-gray-900">.</span>
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            {["How It Works", "Loan Types", "Rates", "Blog", "Support"].map((item) => (
              <a key={item} href="#" className="hover:text-gray-900 transition-colors">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 text-sm">
            <a href="#" className="text-gray-600 hover:text-gray-900">Login</a>
            <a href="#" className="bg-emerald-600 text-white px-4 py-1.5 rounded-full hover:bg-emerald-700 transition-colors font-medium">
              Apply Now
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs text-gray-400 mb-4 flex items-center gap-2">
            <span className="w-4 h-px bg-gray-300 inline-block" />
            Trusted by 200,000+ borrowers across the US
          </p>
          <h1 className="text-5xl font-black leading-tight tracking-tight mb-6">
            Fast, fair loans when you{" "}
            <span className="text-emerald-600">need them most.</span>
          </h1>
          <p className="text-gray-500 text-base mb-8 max-w-md">
            Lone delivers short-term personal loans with transparent fees, no hidden
            charges, and funds in your account within minutes of approval.
          </p>
          <div className="flex gap-3 mb-10">
            <a href="#" className="bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors">
              Check My Rate — No Credit Hit
            </a>
            <a href="#" className="border border-gray-200 text-gray-700 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
              See how it works
            </a>
          </div>
          <p className="text-xs text-gray-400 mb-3">
            Regulated and trusted by leading financial institutions
          </p>
          <div className="flex items-center gap-6">
            {["FDIC Insured", "256-bit SSL", "BBB Accredited"].map((brand) => (
              <span key={brand} className="text-xs font-semibold text-gray-400 tracking-wide uppercase">
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Loan Card */}
        <div className="relative">
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-black text-emerald-600">Lone.</span>
              <span className="text-[10px] bg-emerald-50 text-emerald-700 font-semibold px-2 py-1 rounded-full">
                Instant Decision
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-400 mb-1">Approved Amount</p>
                <p className="text-2xl font-bold text-gray-900">$2,500</p>
                <div className="mt-3 space-y-1.5">
                  {[
                    ["Personal Loan", "bg-emerald-500"],
                    ["5% Monthly Fee", "bg-teal-400"],
                    ["5-Month Term", "bg-green-300"],
                  ].map(([label, color]) => (
                    <div key={label} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${color}`} />
                      <span className="text-xs font-medium text-gray-700">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-400 mb-1">Monthly Payment</p>
                <p className="text-2xl font-bold text-gray-900">$625</p>
                <p className="text-[10px] text-gray-400 mb-2">/ month</p>
                <div className="flex items-end gap-1 h-10">
                  {[100, 100, 100, 100, 100].map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-sm ${i < 2 ? "bg-emerald-500" : "bg-emerald-200"}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <p className="text-[10px] text-gray-400 mt-1">5 payments remaining</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <p className="text-xs text-gray-400 mb-3">Loan Activity</p>
              <div className="space-y-2">
                {[
                  ["Funds Deposited", "+$2,500.00", "bg-emerald-500", true],
                  ["Payment 1 Received", "-$625.00", "bg-blue-500", false],
                  ["Payment 2 Received", "-$625.00", "bg-blue-500", false],
                ].map(([name, amt, color, positive]) => (
                  <div key={`${name}${amt}`} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`w-6 h-6 rounded-full ${color}`} />
                      <span className="text-xs text-gray-700">{name}</span>
                    </div>
                    <span className={`text-xs font-semibold ${positive ? "text-emerald-600" : "text-gray-700"}`}>
                      {amt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOAN CALCULATOR SECTION ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs text-gray-400 mb-2 flex items-center justify-center gap-2">
              <span className="w-4 h-px bg-gray-300" />
              Loan Calculator
            </p>
            <h2 className="text-4xl font-black tracking-tight">
              Know exactly what you'll pay
            </h2>
            <p className="text-gray-500 mt-3 max-w-md mx-auto text-sm">
              No surprises. Adjust your loan amount and repayment period to see your
              monthly payment, fees, and schedule — before you apply.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">

            {/* Left — Controls */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 space-y-8">
              {/* Loan Amount */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-700">Loan Amount</label>
                  <span className="text-2xl font-black text-emerald-600">{fmtUSD(loanAmount)}</span>
                </div>
                <input
                  type="range"
                  min={100}
                  max={5000}
                  step={50}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer accent-emerald-600"
                  style={{
                    background: `linear-gradient(to right, #059669 ${((loanAmount - 100) / (5000 - 100)) * 100}%, #e5e7eb ${((loanAmount - 100) / (5000 - 100)) * 100}%)`,
                  }}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>$100</span>
                  <span>$5,000</span>
                </div>
              </div>

              {/* Repayment Period */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-gray-700">Repayment Period</label>
                  <span className="text-2xl font-black text-emerald-600">
                    {repaymentPeriod}{" "}
                    <span className="text-base font-semibold text-gray-500">months</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={12}
                  step={1}
                  value={repaymentPeriod}
                  onChange={(e) => setRepaymentPeriod(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer accent-emerald-600"
                  style={{
                    background: `linear-gradient(to right, #059669 ${((repaymentPeriod - 1) / 11) * 100}%, #e5e7eb ${((repaymentPeriod - 1) / 11) * 100}%)`,
                  }}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1 month</span>
                  <span>12 months</span>
                </div>
              </div>

              {/* Quick-select pills */}
              <div>
                <p className="text-xs text-gray-500 font-medium mb-3">Quick select period</p>
                <div className="flex gap-2 flex-wrap">
                  {[1, 2, 3, 5, 6, 9, 12].map((m) => (
                    <button
                      key={m}
                      onClick={() => setRepaymentPeriod(m)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                        repaymentPeriod === m
                          ? "bg-emerald-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {m}mo
                    </button>
                  ))}
                </div>
              </div>

              <a
                href="#"
                className="block w-full text-center bg-emerald-600 text-white py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-colors text-sm"
              >
                Apply for {fmtUSD(loanAmount)} →
              </a>
              <p className="text-[10px] text-gray-400 text-center -mt-4">
                Checking eligibility won't affect your credit score.
              </p>
            </div>

            {/* Right — Summary */}
            <div className="space-y-4">
              {/* Monthly payment hero */}
              <div className="bg-emerald-600 text-white rounded-2xl p-6">
                <p className="text-sm font-medium text-emerald-100 mb-1">Monthly Payment</p>
                <p className="text-5xl font-black mb-1">{fmtUSD(monthlyPayment)}</p>
                <p className="text-emerald-200 text-xs">
                  for {repaymentPeriod} month{repaymentPeriod !== 1 ? "s" : ""}
                </p>
              </div>

              {/* Breakdown */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <p className="text-xs text-gray-400 mb-1">Monthly Fee (5%)</p>
                  <p className="text-xl font-bold text-gray-900">{fmtUSD(monthlyFee)}</p>
                  <p className="text-[10px] text-gray-400 mt-1">per month</p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <p className="text-xs text-gray-400 mb-1">Total Fees</p>
                  <p className="text-xl font-bold text-gray-900">{fmtUSD(totalFees)}</p>
                  <p className="text-[10px] text-gray-400 mt-1">over loan term</p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <p className="text-xs text-gray-400 mb-1">Total Repayable</p>
                  <p className="text-xl font-bold text-gray-900">{fmtUSD(totalRepayable)}</p>
                  <p className="text-[10px] text-gray-400 mt-1">principal + fees</p>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                  <p className="text-xs text-gray-400 mb-1">You Receive</p>
                  <p className="text-xl font-bold text-emerald-600">{fmtUSD(loanAmount)}</p>
                  <p className="text-[10px] text-gray-400 mt-1">deposited to you</p>
                </div>
              </div>

              {/* Payment schedule dates */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <p className="text-xs text-gray-500 font-semibold mb-3 uppercase tracking-wide">
                  Payment Schedule
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 text-xs font-bold">
                        1st
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-700">First Payment</p>
                        <p className="text-[10px] text-gray-400">{firstPayment}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-gray-900">{fmtUSD(monthlyPayment)}</span>
                  </div>

                  {/* Progress bar */}
                  <div className="flex gap-1.5 my-1">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 h-2 rounded-full ${i < repaymentPeriod ? "bg-emerald-500" : "bg-gray-100"}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center text-gray-500 text-xs font-bold">
                        Last
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-700">Final Payment</p>
                        <p className="text-[10px] text-gray-400">{lastPayment}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-gray-900">{fmtUSD(monthlyPayment)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DARK FEATURES SECTION ── */}
      <section className="bg-gray-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-14">
            <div>
              <p className="text-xs text-gray-400 mb-3 flex items-center gap-2">
                <span className="w-4 h-px bg-gray-600" />
                Built for Borrowers
              </p>
              <h2 className="text-4xl font-black leading-tight">
                Borrow smarter, repay easier with Lone
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-400 text-sm mb-6">
                Whether it's an unexpected bill or a short-term cash gap, Lone gives
                you fast access to funds with total transparency. No confusing terms,
                no surprise charges — ever.
              </p>
              <div>
                <a href="#" className="border border-gray-600 text-white px-5 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors inline-block">
                  View loan options →
                </a>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
              <div className="bg-gray-800 rounded-xl p-4 mb-4">
                <p className="text-xs text-gray-500 mb-2">Application Status</p>
                <div className="space-y-2">
                  {[
                    ["Identity Check", "✓ Complete", "text-emerald-400"],
                    ["Credit Review", "✓ Complete", "text-emerald-400"],
                    ["Funds Transfer", "In Progress", "text-yellow-400"],
                  ].map(([step, status, cls]) => (
                    <div key={step} className="flex justify-between text-xs">
                      <span className="text-gray-400">{step}</span>
                      <span className={`font-semibold ${cls}`}>{status}</span>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="font-bold text-base mb-2">Decisions in 60 Seconds</h3>
              <p className="text-xs text-gray-500">
                Our automated engine reviews your application instantly and delivers
                a real decision — not a placeholder.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
              <div className="bg-gray-800 rounded-xl p-4 mb-4 text-center">
                <p className="text-xs text-gray-500 mb-1">Your Loan</p>
                <p className="text-3xl font-black text-emerald-400">$1,500</p>
                <p className="text-xs text-gray-400 mt-1">Deposited in 3 mins</p>
                <div className="mt-3 flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`w-8 h-2 rounded-full ${i <= 3 ? "bg-emerald-500" : "bg-gray-700"}`} />
                  ))}
                </div>
              </div>
              <h3 className="font-bold text-base mb-2">Funds in Minutes</h3>
              <p className="text-xs text-gray-500">
                After approval, your money lands in your bank account via instant
                transfer — no waiting until next business day.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
              <div className="bg-gray-800 rounded-xl p-4 mb-4">
                <p className="text-xs text-gray-500 mb-2">Loan Breakdown</p>
                <div className="space-y-1 text-xs">
                  {[
                    ["Principal", "$1,000"],
                    ["Total Fees", "$250"],
                    ["Total Cost", "$1,250"],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-gray-400">{k}</span>
                      <span className="text-white font-semibold">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="font-bold text-base mb-2">Transparent Flat Fees</h3>
              <p className="text-xs text-gray-500">
                A simple 5% monthly fee — no APR confusion, no compounding interest
                traps. What you see is what you pay.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
              <div className="bg-gray-800 rounded-xl p-4 mb-4">
                <p className="text-xs text-gray-500 mb-2">Auto-Pay Schedule</p>
                <div className="space-y-1.5">
                  {[
                    ["May 1", "$625.00", "text-emerald-400"],
                    ["Jun 1", "$625.00", "text-emerald-400"],
                    ["Jul 1", "$625.00", "text-gray-400"],
                  ].map(([date, amt, cls]) => (
                    <div key={date} className="flex justify-between text-xs">
                      <span className="text-gray-400">{date}</span>
                      <span className={`font-semibold ${cls}`}>{amt}</span>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="font-bold text-base mb-2">Set & Forget Repayments</h3>
              <p className="text-xs text-gray-500">
                Link your bank account and let auto-pay handle the rest. Never miss
                a payment or incur a late fee.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800 md:col-span-2">
              <div className="bg-gray-800 rounded-xl p-4 mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Credit Score Impact</p>
                  <p className="text-2xl font-black text-white">Soft Pull Only</p>
                  <p className="text-xs text-emerald-400 mt-1">Won't affect your credit score</p>
                </div>
                <div className="text-right">
                  <div className="flex items-end gap-1 mb-1">
                    {[
                      ["bg-red-500", 16],
                      ["bg-yellow-400", 20],
                      ["bg-emerald-400", 24],
                      ["bg-emerald-500", 28],
                      ["bg-emerald-600", 32],
                    ].map(([c, h], i) => (
                      <div key={i} className={`w-3 rounded-sm ${c}`} style={{ height: `${h}px` }} />
                    ))}
                    <span className="text-xl font-black text-emerald-400 ml-1">720</span>
                  </div>
                  <p className="text-[10px] text-gray-500">Your score stays intact</p>
                </div>
              </div>
              <h3 className="font-bold text-base mb-2">Borrow Without the Credit Worry</h3>
              <p className="text-xs text-gray-500">
                Checking your eligibility uses only a soft inquiry — completely
                invisible to other lenders and bureau scoring models.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs text-gray-400 mb-2 flex items-center justify-center gap-2">
              <span className="w-4 h-px bg-gray-300" />
              FAQ
            </p>
            <h2 className="text-4xl font-black tracking-tight">
              Common questions about Lone
            </h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-gray-400 text-lg leading-none ml-4">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && faq.a && (
                  <div className="px-5 pb-4 text-sm text-gray-500">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-3 mt-10">
            <a href="#" className="border border-gray-200 text-gray-700 px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
              See All FAQs
            </a>
            <a href="#" className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors">
              Contact Support
            </a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="bg-gray-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs text-gray-400 mb-3 flex items-center gap-2">
              <span className="w-4 h-px bg-gray-600" />
              Testimonials
            </p>
            <h2 className="text-4xl font-black mb-4">What our borrowers say</h2>
            <p className="text-gray-400 text-sm">
              Real stories from real people who used Lone to bridge the gap. No
              paid actors, no cherry-picked reviews.
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                text: "I needed $800 for a car repair and had the money in my account within 10 minutes of being approved. Lone literally saved my week.",
                author: "Marcus T.",
                role: "Electrician, Texas",
                rating: 5,
              },
              {
                text: "The fee structure is so clear. I knew exactly what I'd owe before I even applied. Other lenders hide everything in fine print.",
                author: "Priya R.",
                role: "Nurse, California",
                rating: 5,
              },
              {
                text: "I was skeptical at first but the auto-pay setup was dead simple and I never missed a payment. Would 100% use again.",
                author: "James W.",
                role: "Freelance Designer, New York",
                rating: 5,
              },
            ].map((t) => (
              <div key={t.author} className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                <p className="text-sm text-gray-300 mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white">{t.author}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xs">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-14">
          <h2 className="text-4xl font-black tracking-tight mb-4">
            Ready to get the funds{" "}
            <span className="text-emerald-600">you need today?</span>
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
            Apply in under 3 minutes. No paperwork, no branch visits. Just fast,
            fair lending built for real life.
          </p>
          <div className="flex items-center justify-center gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap hover:bg-emerald-700 transition-colors">
              Get Started
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            No credit score impact · Funds in minutes · Clear flat fees
          </p>
        </div>

        {/* Bottom dashboard preview */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 shadow-lg">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-400 mb-1">Active Loan</p>
                <p className="text-xl font-bold text-emerald-600">$2,500</p>
                <div className="mt-3 space-y-1">
                  {[
                    ["Personal Loan", "bg-emerald-500"],
                    ["5% Monthly Fee", "bg-teal-400"],
                    ["5-Month Term", "bg-green-300"],
                  ].map(([v, c]) => (
                    <div key={v} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${c}`} />
                      <span className="text-xs text-gray-700">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-400 mb-1">Repayment Progress</p>
                <p className="text-xl font-bold">$1,250 left</p>
                <div className="mt-3 flex items-end gap-1 h-10">
                  {[100, 100, 60, 30, 10].map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-sm ${i < 2 ? "bg-emerald-500" : "bg-emerald-200"}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-400 mb-2">Upcoming Payments</p>
                <div className="space-y-1.5">
                  {[
                    ["Jun 1", "$625"],
                    ["Jul 1", "$625"],
                    ["Aug 1", "$625"],
                  ].map(([d, v]) => (
                    <div key={d} className="flex justify-between text-xs">
                      <span className="text-gray-500">{d}</span>
                      <span className="font-semibold text-gray-800">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-950 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <span className="text-white text-xl font-black mb-3 block">
                Lone<span className="text-emerald-500">.</span>
              </span>
              <p className="text-xs leading-relaxed text-gray-500">
                Lone offers fast, transparent short-term personal loans to help you
                navigate life's unexpected expenses — with zero hidden fees and funds
                in your account within minutes.
              </p>
              <div className="flex gap-3 mt-4">
                {["f", "t", "in", "yt", "ig"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="w-7 h-7 rounded-full bg-gray-800 flex items-center justify-center text-[10px] hover:bg-gray-700 transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
            {[
              {
                title: "Loan Products",
                links: ["Personal Loans", "Emergency Loans", "Payday Advance", "Medical Loans", "Debt Consolidation"],
              },
              {
                title: "Company",
                links: ["About Us", "Responsible Lending", "Careers", "Press", "Partnerships"],
              },
              {
                title: "Resources",
                links: ["Loan Calculator", "Borrower Guide", "Blog", "FAQs", "Contact Support"],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-white text-sm font-bold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-xs hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-xs text-gray-600">© 2024 Lone Inc. All rights reserved.</p>
            <p className="text-xs text-gray-600 text-center">
              Loans subject to eligibility. Representative example: $500 over 5 months at 5% monthly fee, total repayable $625.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}