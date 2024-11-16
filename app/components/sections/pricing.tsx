export function Pricing() {
  return (
    <section className="bg-gradient-to-b from-background to-muted py-20">
      <div className="container mx-auto px-4">
        <h2
          className="mb-12 scroll-mt-20 text-center font-bold text-3xl"
          id="pricing"
        >
          Simple, Transparent Pricing
        </h2>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {/* Monthly Plan */}
          <div className="rounded-xl bg-background p-6 shadow-lg">
            <h3 className="mb-4 font-semibold text-xl">Monthly Plan</h3>
            <p className="mb-2 font-bold text-4xl text-primary">$79</p>
            <p className="mb-6 text-muted-foreground">
              Per scan, billed monthly
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Everything in Quarterly Plan
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Monthly progress tracking
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Priority booking
              </li>
            </ul>
          </div>

          {/* Quarterly Plan */}
          <div className="relative rounded-xl border-2 border-primary bg-background p-6 shadow-lg">
            <div className="-top-4 -translate-x-1/2 absolute left-1/2 transform rounded-full bg-primary px-4 py-1 text-primary-foreground text-sm">
              Popular Choice
            </div>
            <h3 className="mb-4 font-semibold text-xl">Quarterly Plan</h3>
            <p className="mb-2 font-bold text-4xl text-primary">$89</p>
            <p className="mb-6 text-muted-foreground">
              Per scan, billed quarterly
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Everything in Single Scan
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Progress tracking
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Quarterly comparison reports
              </li>
            </ul>
          </div>

          {/* Single Scan */}
          <div className="rounded-xl bg-background p-6 shadow-lg">
            <h3 className="mb-4 font-semibold text-xl">Single Scan</h3>
            <p className="mb-2 font-bold text-4xl text-primary">$99</p>
            <p className="mb-6 text-muted-foreground">One-time scan</p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Full body composition analysis
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Detailed report
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                15-minute consultation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
