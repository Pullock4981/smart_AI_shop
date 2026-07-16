import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 md:pt-24 lg:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
              Curated for your <span className="text-blue-600 block">modern lifestyle.</span>
            </h1>
            <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 mb-10">
              Discover the finest collection of premium products, selected with care and powered by intelligent recommendations just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/products" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
              >
                Shop Now
              </Link>
              <a 
                href="#categories" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-900 bg-gray-100 rounded-full hover:bg-gray-200 transition-all"
              >
                Explore Categories
              </a>
            </div>
          </div>
          
          <div className="flex-1 w-full relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-auto md:h-[600px] w-full">
              {/* Using a placeholder gradient to represent a premium product/hero image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Modern shopping experience" 
                  className="w-full h-full object-cover opacity-90 mix-blend-multiply"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
