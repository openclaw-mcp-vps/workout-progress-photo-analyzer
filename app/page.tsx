export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff] bg-opacity-10 border border-[#58a6ff] border-opacity-30 rounded-full px-4 py-1 text-[#58a6ff] text-sm mb-6">
          AI-Powered Body Analysis
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Track Muscle Growth from<br />
          <span className="text-[#58a6ff]">Progress Photos Automatically</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your progress photos and let our computer vision AI measure body composition changes, muscle definition, and growth trends over time — no manual tracking needed.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg hover:bg-[#79b8ff] transition-colors text-lg"
        >
          Start Tracking for $6/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>

        <div className="grid grid-cols-3 gap-6 mt-14 text-center">
          <div className="bg-[#161b22] rounded-xl p-5 border border-[#30363d]">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">AI Vision</div>
            <div className="text-sm text-[#8b949e]">Pose detection & body measurement</div>
          </div>
          <div className="bg-[#161b22] rounded-xl p-5 border border-[#30363d]">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">Timeline</div>
            <div className="text-sm text-[#8b949e]">Visual progress over weeks & months</div>
          </div>
          <div className="bg-[#161b22] rounded-xl p-5 border border-[#30363d]">
            <div className="text-2xl font-bold text-[#58a6ff] mb-1">Secure</div>
            <div className="text-sm text-[#8b949e]">Encrypted cloud photo storage</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wider mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$6</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited photo uploads",
              "AI body composition analysis",
              "Muscle group progress tracking",
              "Side-by-side comparison view",
              "Trainer sharing & export",
              "Secure encrypted storage"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] text-[#0d1117] font-semibold py-3 rounded-lg hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the AI analyze my photos?",
              a: "We use TensorFlow.js pose detection to identify body landmarks and measure proportions between muscle groups. The system compares these measurements across your photo history to quantify changes over time."
            },
            {
              q: "Are my photos private and secure?",
              a: "Yes. All photos are encrypted at rest and in transit. Only you can access your photos — we never share or use them for training AI models without explicit consent."
            },
            {
              q: "Can personal trainers use this with clients?",
              a: "Absolutely. You can share progress reports with your trainer via a secure link, or export PDF summaries. Trainers can manage multiple client timelines from a single dashboard."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} FitLens. All rights reserved.
      </footer>
    </main>
  );
}
