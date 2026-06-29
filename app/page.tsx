"use client";

import { useState } from "react";


// ── Design tokens ────────────────────────────────────────────────────────────
const BG      = "#0b0b0c";   // page background
const FG      = "#1C1C1E";   // card / surface
const BORDER  = "#2a2a2e";   // subtle border
const MUTED   = "#6b6b72";   // muted text
const DIM     = "#3a3a3e";   // dimmer surface / disabled bars

// ── helpers ──────────────────────────────────────────────────────────────────
function getPaymentDates() {
  const now = new Date();
  const first = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  const last  = new Date(now.getFullYear(), now.getMonth() + 6, 1);
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  return { firstPayment: fmt(first), lastPayment: fmt(last) };
}

function fmtUSD(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 });
}

// ── Reusable card shell ───────────────────────────────────────────────────────
function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl p-5 ${className}`}
      style={{ background: FG, border: `1px solid ${BORDER}` }}
    >
      {children}
    </div>
  );
}

// ── component ────────────────────────────────────────────────────────────────
export default function LoneHomepage() {
  const [openFaq, setOpenFaq]           = useState<number | null>(0);
  const [loanAmount, setLoanAmount]     = useState(500);
  const [repaymentPeriod, setRepaymentPeriod] = useState(5);

  const monthlyFee     = loanAmount * 0.05;
  const monthlyPayment = loanAmount / repaymentPeriod + monthlyFee;
  const totalRepayable = monthlyPayment * repaymentPeriod;
  const totalFees      = monthlyFee * repaymentPeriod;
  const { firstPayment, lastPayment } = getPaymentDates();

  const faqs = [
    { q: "How quickly can I get a loan from Lone?",
      a: "Once approved, funds are deposited directly to your bank account within minutes. Our streamlined verification process means most applicants receive a decision in under 60 seconds." },
    { q: "What are the eligibility requirements for a short-term loan?", a: "" },
    { q: "Is my personal and financial data secure with Lone?", a: "" },
    { q: "Can I repay my loan early without a penalty?", a: "" },
    { q: "How do I set up automatic repayment for my loan?", a: "" },
  ];

  return (
    <div
      style={{
        background: BG,
        color: "#ffffff",
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <nav
        className="sticky top-0 z-50 backdrop-blur border-b-[#2a2a2e]"
        style={{ background: `${BG}e8`, borderBottom: `1px solid ${BORDER}` }}
      >
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-xl font-black tracking-tight text-emerald-600">
            Lone<span style={{ color: MUTED }}>.</span>
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm" style={{ color: MUTED }}>
            {["How It Works", "Loan Types", "Rates", "Blog", "Support"].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-3 text-sm">
            <a href="/onboarding" className="hover:text-white transition-colors" style={{ color: MUTED }}>Login</a>
            <a
              href="/onboarding"
              className="font-medium px-4 py-1.5 rounded-full transition-colors hover:opacity-90 bg-emerald-600 text-white"
            >
              Apply Now
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs mb-4 flex items-center gap-2" style={{ color: MUTED }}>
            <span className="w-4 h-px inline-block" style={{ background: BORDER }} />
            Trusted by 200,000+ borrowers across the US
          </p>
          <h1 className="text-5xl font-black leading-tight tracking-tight mb-6 text-white">
            Fast, fair loans when you{" "}
            <span style={{ color: "#ffffff", opacity: 0.5 }}>need them most.</span>
          </h1>
          <p className="text-base mb-8 max-w-md" style={{ color: MUTED }}>
            Lone delivers short-term personal loans with transparent fees, no hidden
            charges, and funds in your account within minutes of approval.
          </p>
          <div className="flex gap-3 mb-10">
            <a
              href="#"
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors hover:opacity-90 bg-emerald-600 text-white"
            >
              Check My Rate — No Credit Hit
            </a>
            <a
              href="#"
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors hover:opacity-80"
              style={{ border: `1px solid ${BORDER}`, color: "#ffffff" }}
            >
              See how it works
            </a>
          </div>
          <p className="text-xs mb-3" style={{ color: MUTED }}>
            Regulated and trusted by leading financial institutions
          </p>
          <div className="flex items-center gap-6">
            {["FDIC Insured", "256-bit SSL", "BBB Accredited"].map((brand) => (
              <span key={brand} className="text-xs font-semibold tracking-wide uppercase" style={{ color: MUTED }}>
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Loan Card */}
        <div>
          <Card>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-black text-white">Lone.</span>
              <span
                className="text-[10px] font-semibold px-2 py-1 rounded-full"
                style={{ background: DIM, color: "#ffffff" }}
              >
                Instant Decision
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {/* Approved */}
              <div className="rounded-xl p-4" style={{ background: BG, border: `1px solid ${BORDER}` }}>
                <p className="text-xs mb-1" style={{ color: MUTED }}>Approved Amount</p>
                <p className="text-2xl font-bold text-white">$2,500</p>
                <div className="mt-3 space-y-1.5">
                  {[["Personal Loan","#ffffff"],["5% Monthly Fee","#aaaaaa"],["5-Month Term","#666666"]].map(([label,c])=>(
                    <div key={label} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: c }} />
                      <span className="text-xs font-medium" style={{ color: "#cccccc" }}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Monthly */}
              <div className="rounded-xl p-4 " style={{ background: BG, border: `1px solid ${BORDER}` }}>
                <p className="text-xs mb-1" style={{ color: MUTED }}>Monthly Payment</p>
                <p className="text-2xl font-bold text-emerald-600">$625</p>
                <p className="text-[10px] mb-2" style={{ color: MUTED }}>/ month</p>
                {/* <div className="flex items-end gap-1 h-10">
                  {[100,100,100,100,100].map((h,i)=>(
                    <div key={i} className="flex-1 rounded-sm" style={{ height:`${h}%`, background: i < 2 ? "#ffffff" : DIM }} />
                  ))}
                </div> */}
                  <div className="flex items-end gap-1 h-10">
                  {[100, 100, 100, 100, 100].map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-sm ${i < 2 ? "bg-emerald-500" : "bg-emerald-200"}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <p className="text-[10px] mt-1" style={{ color: MUTED }}>5 payments remaining</p>
              </div>
            </div>
            {/* Activity */}
            <div className="rounded-xl p-4" style={{ background: BG, border: `1px solid ${BORDER}` }}>
              <p className="text-xs mb-3" style={{ color: MUTED }}>Loan Activity</p>
              <div className="space-y-2">
                {[
                  ["Funds Deposited",    "+$2,500.00", true],
                  ["Payment 1 Received", "-$625.00",   false],
                  ["Payment 2 Received", "-$625.00",   false],
                ].map(([name, amt, positive]) => (
                  <div key={`${name}`} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full" style={{ background: positive ? "#ffffff" : DIM }} />
                      <span className="text-xs" style={{ color: "#cccccc" }}>{name}</span>
                    </div>
                    <span className="text-xs font-semibold" style={{ color: positive ? "#ffffff" : MUTED }}>
                      {amt}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ── LOAN CALCULATOR ── */}
      <section className="py-20" style={{ background: FG }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs mb-2 flex items-center justify-center gap-2" style={{ color: MUTED }}>
              <span className="w-4 h-px" style={{ background: BORDER }} />
              Loan Calculator
            </p>
            <h2 className="text-4xl font-black tracking-tight text-white">
              Know exactly what you'll pay
            </h2>
            <p className="mt-3 max-w-md mx-auto text-sm" style={{ color: MUTED }}>
              No surprises. Adjust your loan amount and repayment period to see your
              monthly payment, fees, and schedule — before you apply.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
            {/* Controls */}
            <div className="rounded-2xl p-8 space-y-8" style={{ background: BG, border: `1px solid ${BORDER}` }}>
              {/* Loan amount slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-white">Loan Amount</label>
                  <span className="text-2xl font-black text-white">{fmtUSD(loanAmount)}</span>
                </div>
                <input
                  type="range" min={100} max={5000} step={50} value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #ffffff ${((loanAmount-100)/(5000-100))*100}%, ${DIM} ${((loanAmount-100)/(5000-100))*100}%)`,
                    accentColor: "#ffffff",
                  }}
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: MUTED }}>
                  <span>$100</span><span>$5,000</span>
                </div>
              </div>

              {/* Repayment slider */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-white">Repayment Period</label>
                  <span className="text-2xl font-black text-white">
                    {repaymentPeriod}{" "}
                    <span className="text-base font-semibold" style={{ color: MUTED }}>months</span>
                  </span>
                </div>
                <input
                  type="range" min={1} max={12} step={1} value={repaymentPeriod}
                  onChange={(e) => setRepaymentPeriod(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #ffffff ${((repaymentPeriod-1)/11)*100}%, ${DIM} ${((repaymentPeriod-1)/11)*100}%)`,
                    accentColor: "#ffffff",
                  }}
                />
                <div className="flex justify-between text-xs mt-1" style={{ color: MUTED }}>
                  <span>1 month</span><span>12 months</span>
                </div>
              </div>

              {/* Quick-select pills */}
              <div>
                <p className="text-xs font-medium mb-3" style={{ color: MUTED }}>Quick select period</p>
                <div className="flex gap-2 flex-wrap">
                  {[1,2,3,5,6,9,12].map((m) => (
                    <button
                      key={m}
                      onClick={() => setRepaymentPeriod(m)}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"
                      style={{
                        background: repaymentPeriod === m ? "#ffffff" : DIM,
                        color:      repaymentPeriod === m ? BG : "#aaaaaa",
                      }}
                    >
                      {m}mo
                    </button>
                  ))}
                </div>
              </div>

              <a
                href="#"
                className="block w-full text-center py-3 rounded-xl font-semibold text-sm transition-colors hover:opacity-90"
                style={{ background: "#ffffff", color: BG }}
              >
                Apply for {fmtUSD(loanAmount)} →
              </a>
              <p className="text-[10px] text-center -mt-4" style={{ color: MUTED }}>
                Checking eligibility won't affect your credit score.
              </p>
            </div>

            {/* Summary */}
            <div className="space-y-4">
              {/* Monthly hero */}
              <div className="rounded-2xl p-6" style={{ background: "#ffffff", color: BG }}>
                <p className="text-sm font-medium mb-1" style={{ color: "#555" }}>Monthly Payment</p>
                <p className="text-5xl font-black mb-1">{fmtUSD(monthlyPayment)}</p>
                <p className="text-sm" style={{ color: "#666" }}>
                  for {repaymentPeriod} month{repaymentPeriod !== 1 ? "s" : ""}
                </p>
              </div>

              {/* Breakdown grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["Monthly Fee (5%)", fmtUSD(monthlyFee),      "per month"],
                  ["Total Fees",        fmtUSD(totalFees),       "over loan term"],
                  ["Total Repayable",   fmtUSD(totalRepayable),  "principal + fees"],
                  ["You Receive",       fmtUSD(loanAmount),      "deposited to you"],
                ].map(([label, value, sub]) => (
                  <div key={label} className="rounded-2xl p-5" style={{ background: BG, border: `1px solid ${BORDER}` }}>
                    <p className="text-xs mb-1" style={{ color: MUTED }}>{label}</p>
                    <p className="text-xl font-bold text-white">{value}</p>
                    <p className="text-[10px] mt-1" style={{ color: MUTED }}>{sub}</p>
                  </div>
                ))}
              </div>

              {/* Payment schedule */}
              <div className="rounded-2xl p-5" style={{ background: BG, border: `1px solid ${BORDER}` }}>
                <p className="text-xs font-semibold mb-3 uppercase tracking-wide" style={{ color: MUTED }}>
                  Payment Schedule
                </p>
                <div className="space-y-3">
                  {/* First */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold" style={{ background: FG, color: "#ffffff" }}>
                        1st
                      </div>
                      <div>
                        <p className="text-xs font-medium text-white">First Payment</p>
                        <p className="text-[10px]" style={{ color: MUTED }}>{firstPayment}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-white">{fmtUSD(monthlyPayment)}</span>
                  </div>

                  {/* Progress bars */}
                  <div className="flex gap-1.5 my-1">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 h-2 rounded-full"
                        style={{ background: i < repaymentPeriod ? "#ffffff" : DIM }}
                      />
                    ))}
                  </div>

                  {/* Last */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold" style={{ background: FG, color: MUTED }}>
                        Last
                      </div>
                      <div>
                        <p className="text-xs font-medium text-white">Final Payment</p>
                        <p className="text-[10px]" style={{ color: MUTED }}>{lastPayment}</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-white">{fmtUSD(monthlyPayment)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DARK FEATURES ── */}
      <section className="py-20" style={{ background: BG }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-14">
            <div>
              <p className="text-xs mb-3 flex items-center gap-2" style={{ color: MUTED }}>
                <span className="w-4 h-px" style={{ background: BORDER }} />
                Built for Borrowers
              </p>
              <h2 className="text-4xl font-black leading-tight text-white">
                Borrow smarter, repay easier with Lone
              </h2>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm mb-6" style={{ color: MUTED }}>
                Whether it's an unexpected bill or a short-term cash gap, Lone gives
                you fast access to funds with total transparency. No confusing terms,
                no surprise charges — ever.
              </p>
              <div>
                <a
                  href="#"
                  className="px-5 py-2 rounded-full text-sm transition-colors hover:opacity-80 inline-block"
                  style={{ border: `1px solid ${BORDER}`, color: "#ffffff" }}
                >
                  View loan options →
                </a>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* F1 */}
            <Card>
              <div className="rounded-xl p-4 mb-4" style={{ background: BG }}>
                <p className="text-xs mb-2" style={{ color: MUTED }}>Application Status</p>
                {[["Identity Check","✓ Complete",true],["Credit Review","✓ Complete",true],["Funds Transfer","In Progress",false]].map(([s,v,done])=>(
                  <div key={s} className="flex justify-between text-xs mb-1">
                    <span style={{ color: MUTED }}>{s}</span>
                    <span className="font-semibold" style={{ color: done ? "#ffffff" : "#aaaaaa" }}>{v}</span>
                  </div>
                ))}
              </div>
              <h3 className="font-bold text-base mb-2 text-white">Decisions in 60 Seconds</h3>
              <p className="text-xs" style={{ color: MUTED }}>
                Our automated engine reviews your application instantly and delivers
                a real decision — not a placeholder.
              </p>
            </Card>

            {/* F2 */}
            <Card>
              <div className="rounded-xl p-4 mb-4 text-center" style={{ background: BG }}>
                <p className="text-xs mb-1" style={{ color: MUTED }}>Your Loan</p>
                <p className="text-3xl font-black text-white">$1,500</p>
                <p className="text-xs mt-1" style={{ color: MUTED }}>Deposited in 3 mins</p>
                <div className="mt-3 flex justify-center gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-8 h-2 rounded-full" style={{ background: i<=3 ? "#ffffff" : DIM }} />
                  ))}
                </div>
              </div>
              <h3 className="font-bold text-base mb-2 text-white">Funds in Minutes</h3>
              <p className="text-xs" style={{ color: MUTED }}>
                After approval, your money lands in your bank account via instant
                transfer — no waiting until next business day.
              </p>
            </Card>

            {/* F3 */}
            <Card>
              <div className="rounded-xl p-4 mb-4" style={{ background: BG }}>
                <p className="text-xs mb-2" style={{ color: MUTED }}>Loan Breakdown</p>
                {[["Principal","$1,000"],["Total Fees","$250"],["Total Cost","$1,250"]].map(([k,v])=>(
                  <div key={k} className="flex justify-between text-xs mb-1">
                    <span style={{ color: MUTED }}>{k}</span>
                    <span className="font-semibold text-white">{v}</span>
                  </div>
                ))}
              </div>
              <h3 className="font-bold text-base mb-2 text-white">Transparent Flat Fees</h3>
              <p className="text-xs" style={{ color: MUTED }}>
                A simple 5% monthly fee — no APR confusion, no compounding interest
                traps. What you see is what you pay.
              </p>
            </Card>

            {/* F4 */}
            <Card>
              <div className="rounded-xl p-4 mb-4" style={{ background: BG }}>
                <p className="text-xs mb-2" style={{ color: MUTED }}>Auto-Pay Schedule</p>
                {[["May 1","$625.00",true],["Jun 1","$625.00",true],["Jul 1","$625.00",false]].map(([d,a,done])=>(
                  <div key={d} className="flex justify-between text-xs mb-1">
                    <span style={{ color: MUTED }}>{d}</span>
                    <span className="font-semibold" style={{ color: done ? "#ffffff" : MUTED }}>{a}</span>
                  </div>
                ))}
              </div>
              <h3 className="font-bold text-base mb-2 text-white">Set & Forget Repayments</h3>
              <p className="text-xs" style={{ color: MUTED }}>
                Link your bank account and let auto-pay handle the rest. Never miss
                a payment or incur a late fee.
              </p>
            </Card>

            {/* F5 — wide */}
            <Card className="md:col-span-2">
              <div className="rounded-xl p-4 mb-4 flex items-center justify-between" style={{ background: BG }}>
                <div>
                  <p className="text-xs mb-1" style={{ color: MUTED }}>Credit Score Impact</p>
                  <p className="text-2xl font-black text-white">Soft Pull Only</p>
                  <p className="text-xs mt-1" style={{ color: "#aaaaaa" }}>Won't affect your credit score</p>
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
                    <span className="text-xl font-black text-white ml-1">720</span>
                  </div>
                  <p className="text-[10px]" style={{ color: MUTED }}>Your score stays intact</p>
                </div>
              </div>
              <h3 className="font-bold text-base mb-2 text-white">Borrow Without the Credit Worry</h3>
              <p className="text-xs" style={{ color: MUTED }}>
                Checking your eligibility uses only a soft inquiry — completely
                invisible to other lenders and bureau scoring models.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20" style={{ background: FG }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs mb-2 flex items-center justify-center gap-2" style={{ color: MUTED }}>
              <span className="w-4 h-px" style={{ background: BORDER }} />
              FAQ
            </p>
            <h2 className="text-4xl font-black tracking-tight text-white">
              Common questions about Lone
            </h2>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${BORDER}` }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-white transition-colors hover:opacity-80"
                  style={{ background: BG }}
                >
                  <span>{faq.q}</span>
                  <span className="text-lg leading-none ml-4" style={{ color: MUTED }}>
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && faq.a && (
                  <div className="px-5 pb-4 text-sm" style={{ background: BG, color: MUTED }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-3 mt-10">
            <a
              href="#"
              className="px-5 py-2 rounded-full text-sm font-medium transition-colors hover:opacity-80"
              style={{ border: `1px solid ${BORDER}`, color: "#ffffff" }}
            >
              See All FAQs
            </a>
            <a
              href="#"
              className="px-5 py-2 rounded-full text-sm font-medium transition-colors hover:opacity-90 bg-emerald-600 text-white"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20" style={{ background: BG }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs mb-3 flex items-center gap-2" style={{ color: MUTED }}>
              <span className="w-4 h-px" style={{ background: BORDER }} />
              Testimonials
            </p>
            <h2 className="text-4xl font-black mb-4 text-white">What our borrowers say</h2>
            <p className="text-sm" style={{ color: MUTED }}>
              Real stories from real people who used Lone to bridge the gap. No
              paid actors, no cherry-picked reviews.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { text: "I needed $800 for a car repair and had the money in my account within 10 minutes of being approved. Lone literally saved my week.", author: "Marcus T.", role: "Electrician, Texas", rating: 5 },
              { text: "The fee structure is so clear. I knew exactly what I'd owe before I even applied. Other lenders hide everything in fine print.", author: "Priya R.", role: "Nurse, California", rating: 5 },
              { text: "I was skeptical at first but the auto-pay setup was dead simple and I never missed a payment. Would 100% use again.", author: "James W.", role: "Freelance Designer, New York", rating: 5 },
            ].map((t) => (
              <Card key={t.author}>
                <p className="text-sm mb-4 italic" style={{ color: "#cccccc" }}>&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white">{t.author}</p>
                    <p className="text-xs" style={{ color: MUTED }}>{t.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xs">★</span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24" style={{ background: FG }}>
        <div className="max-w-7xl mx-auto px-6 text-center mb-14">
          <h2 className="text-4xl font-black tracking-tight mb-4 text-white">
            Ready to get the funds{" "}
            <span className="text-emerald-600">you need today?</span>
          </h2>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: MUTED }}>
            Apply in under 3 minutes. No paperwork, no branch visits. Just fast,
            fair lending built for real life.
          </p>
          <div className="flex items-center justify-center gap-3 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-full px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-white"
              style={{ background: BG, border: `1px solid ${BORDER}` }}
            />
            <button
              className="px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors hover:opacity-90 bg-emerald-600 text-white"
            >
              Get Started
            </button>
          </div>
          <p className="text-xs mt-4" style={{ color: MUTED }}>
            No credit score impact · Funds in minutes · Clear flat fees
          </p>
        </div>

        {/* Bottom preview */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl p-5" style={{ background: BG, border: `1px solid ${BORDER}` }}>
            <div className="grid grid-cols-3 gap-4">
              {/* Card A */}
              <div className="rounded-xl p-4" style={{ background: FG, border: `1px solid ${BORDER}` }}>
                <p className="text-xs mb-1" style={{ color: MUTED }}>Active Loan</p>
                <p className="text-xl font-bold text-white">$2,500</p>
                <div className="mt-3 space-y-1">
                  {[["Personal Loan","#fff"],["5% Monthly Fee","#888"],["5-Month Term","#555"]].map(([v,c])=>(
                    <div key={v} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: c }} />
                      <span className="text-xs" style={{ color: "#cccccc" }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Card B */}
              <div className="rounded-xl p-4" style={{ background: FG, border: `1px solid ${BORDER}` }}>
                <p className="text-xs mb-1" style={{ color: MUTED }}>Repayment Progress</p>
                <p className="text-xl font-bold text-white">$1,250 left</p>
                <div className="mt-3 flex items-end gap-1 h-10">
                  {[100,100,60,30,10].map((h,i)=>(
                    <div
                      key={i}
                      className={`flex-1 rounded-sm ${i < 2 ? "bg-emerald-500" : "bg-emerald-200"}`}
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>
              {/* Card C */}
              <div className="rounded-xl p-4" style={{ background: FG, border: `1px solid ${BORDER}` }}>
                <p className="text-xs mb-2" style={{ color: MUTED }}>Upcoming Payments</p>
                <div className="space-y-1.5">
                  {[["Jun 1","$625"],["Jul 1","$625"],["Aug 1","$625"]].map(([d,v])=>(
                    <div key={d} className="flex justify-between text-xs">
                      <span style={{ color: MUTED }}>{d}</span>
                      <span className="font-semibold text-white">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-16" style={{ background: BG, borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div>
              <span className="text-xl font-black mb-3 block text-white">
                Lone<span style={{ color: MUTED }}>.</span>
              </span>
              <p className="text-xs leading-relaxed" style={{ color: MUTED }}>
                Lone offers fast, transparent short-term personal loans to help you
                navigate life's unexpected expenses — with zero hidden fees and funds
                in your account within minutes.
              </p>
              <div className="flex gap-3 mt-4">
                {["f","t","in","yt","ig"].map((s)=>(
                  <a
                    key={s}
                    href="#"
                    className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] transition-colors hover:opacity-80"
                    style={{ background: FG, color: MUTED, border: `1px solid ${BORDER}` }}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
            {[
              { title: "Loan Products", links: ["Personal Loans","Emergency Loans","Payday Advance","Medical Loans","Debt Consolidation"] },
              { title: "Company",       links: ["About Us","Responsible Lending","Careers","Press","Partnerships"] },
              { title: "Resources",     links: ["Loan Calculator","Borrower Guide","Blog","FAQs","Contact Support"] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-bold mb-4 text-white">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-xs hover:text-white transition-colors" style={{ color: MUTED }}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-2" style={{ borderTop: `1px solid ${BORDER}` }}>
            <p className="text-xs" style={{ color: MUTED }}>© 2024 Lone Inc. All rights reserved.</p>
            <p className="text-xs text-center" style={{ color: MUTED }}>
              Loans subject to eligibility. Representative example: $500 over 5 months at 5% monthly fee, total repayable $625.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}