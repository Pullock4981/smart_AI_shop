export const Newsletter = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Stay in the loop</h2>
        <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
          Subscribe to our newsletter to get early access to new product launches, exclusive offers, and personalized recommendations.
        </p>
        
        <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input 
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="flex-1 min-w-0 appearance-none rounded-full border border-gray-300 bg-white px-6 py-4 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
            placeholder="Enter your email"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full border border-transparent bg-gray-900 px-8 py-4 text-base font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-400">
          We care about your data. Read our <a href="#" className="underline hover:text-gray-900 transition-colors">Privacy Policy</a>.
        </p>
      </div>
    </section>
  );
};
