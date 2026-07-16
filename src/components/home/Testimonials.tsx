const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Verified Buyer",
    content: "The quality of the products I received exceeded my expectations. Shipping was incredibly fast, and the packaging was beautiful.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Tech Enthusiast",
    content: "SmartShop's curation is top-notch. I found exactly what I needed without having to sift through thousands of irrelevant products.",
    rating: 5
  },
  {
    name: "Elena Rodriguez",
    role: "Verified Buyer",
    content: "Customer service is exceptional. I had an issue with sizing and they resolved it immediately. Will definitely be shopping here again.",
    rating: 4
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Loved by Customers</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Don't just take our word for it. Here's what our community has to say.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, idx) => (
                  <svg key={idx} className={`w-5 h-5 ${idx < t.rating ? 'fill-current' : 'text-gray-200'}`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-8 italic">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
