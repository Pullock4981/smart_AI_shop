import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string | number;
  title: string;
  price: string | number;
  image: string;
  category?: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export const ProductCard = ({ id, title, price, image, category, rating }: ProductCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1 h-full">
      <Link to={`/products/${id}`} className="aspect-square w-full overflow-hidden bg-white p-4">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="flex flex-col flex-1 p-5 border-t border-gray-50 bg-gray-50/50">
        <div className="flex justify-between items-start mb-2 gap-2">
          {category && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded-full truncate">
              {category}
            </span>
          )}
          {rating && (
            <div className="flex items-center gap-1 shrink-0">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs font-medium text-gray-600">{rating.rate} <span className="text-gray-400">({rating.count})</span></span>
            </div>
          )}
        </div>
        
        <Link to={`/products/${id}`} className="block mb-2 flex-1">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
        </Link>
        
        <div className="mt-auto pt-4 flex items-center justify-between">
          <p className="text-lg font-bold text-gray-900">${typeof price === 'number' ? price.toFixed(2) : price}</p>
          <Link 
            to={`/products/${id}`}
            className="text-xs font-semibold text-gray-900 hover:text-white bg-white hover:bg-gray-900 border border-gray-200 hover:border-gray-900 transition-all px-4 py-2 rounded-full shadow-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
