import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, ArrowRight, Loader } from 'lucide-react';
import { productsApi, Product, getImageUrl } from '../services/api';

const BestSalesSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        setLoading(true);
        const bestSellers = await productsApi.getBesSellerProducts();        
        setProducts(bestSellers);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch best sellers');
      } finally {
        setLoading(false);
      }
    };

    fetchBestSellers();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || products.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, products.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (loading) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Best Selling Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular drone solutions trusted by professionals worldwide.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Loader className="h-12 w-12 text-blue-600 animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  if (error || products.length === 0) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Best Selling Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular drone solutions trusted by professionals worldwide.
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-500">
              {error || 'No best selling products available at the moment.'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gray-50" aria-labelledby="best-sales-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="best-sales-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Best Selling Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most popular drone solutions trusted by professionals worldwide.
          </p>
        </div>

        {/* Gallery Container */}
        <div 
          className="relative overflow-x-auto no-scrollbar"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Products Gallery */}
          <div 
            className="flex transition-transform duration-700 ease-out"            
          >
            {products.map((product:any) => (
              <div
                key={product.documentId}
                className="w-80 flex-shrink-0 mx-4"
              >
                <Link
                  to={`/product/${product.documentId}`}
                  className="block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative h-72 overflow-hidden">
                    {/* Best Seller Badge */}
                    {/* <div className="absolute top-4 left-4 z-10">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center shadow-lg">
                        <Star className="h-4 w-4 mr-1 fill-current" />
                        Best Seller
                      </div>
                    </div> */}

                    {/* Action Button */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Product Image */}
                    {product.display_image ? (
                      <img
                        src={getImageUrl(product?.display_image.formats.small.url)}
                        alt={product.product_name}
                        loading="lazy"
                        decoding="async"
                        width="320"
                        height="288"
                        className="w-full h-full object-cover transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                        <span className="text-blue-600 font-bold text-xl">
                          {product.product_name}
                        </span>
                      </div>
                    )}

                    {/* Content Overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {product.product_name}
                      </h3>
                      <p className="text-gray-300 text-sm line-clamp-2 mb-3">
                        {product.product_description?.replace(/[#*]/g, '').substring(0, 100)}...
                      </p>
                      <div className="flex items-center text-green-400 text-sm">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                        Available Now
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {/* <button
            onClick={prevSlide}
            aria-label="Previous product"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next product"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
          >
            <ChevronRight className="h-5 w-5" />
          </button> */}
        </div>

        {/* Dot Indicators */}
        {/* <div className="flex justify-center mt-8 space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to product ${index + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div> */}

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Products
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSalesSection;