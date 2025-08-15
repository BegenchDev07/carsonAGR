import React, { useState, useEffect } from 'react';
import { Search, Filter, Grid, List, ArrowRight, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';
import { productsApi, Product, Category, Feature, getImageUrl } from '../services/api';

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [productsData, categoriesData, featuresData] = await Promise.all([
          productsApi.getProducts(),
          productsApi.getCategories(),
          productsApi.getFeatures(),
        ]);
        
        setProducts(productsData);
        setCategories(categoriesData);
        setFeatures(featuresData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFeatureToggle = (featureName: string) => {
    setSelectedFeatures(prev => 
      prev.includes(featureName)
        ? prev.filter(f => f !== featureName)
        : [...prev, featureName]
    );
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.product_description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
                           (product.category && product.category.cateogry_name.toLowerCase() === selectedCategory.toLowerCase());
    
    const matchesFeatures = selectedFeatures.length === 0 || 
                           (product.feature && selectedFeatures.includes(product.feature.feature_name));
    
    return matchesSearch && matchesCategory && matchesFeatures;
  });

  // Create category counts including "all"
  const categoryCounts = [
    { id: 'all', name: 'All Products', count: products.length },
    ...categories.map(category => ({
      id: category.cateogry_name.toLowerCase(),
      name: category.cateogry_name,
      count: products.filter(product => 
        product.category && product.category.cateogry_name.toLowerCase() === category.cateogry_name.toLowerCase()
      ).length
    }))
  ];

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categoryCounts.map(category => (
                    <li key={category.id}>
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors duration-300 flex justify-between items-center ${
                          selectedCategory === category.id
                            ? 'bg-blue-100 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-400">({category.count})</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features Filter */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
                <div className="space-y-3">
                  {features.map(feature => (
                    <label key={feature.id} className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        checked={selectedFeatures.includes(feature.feature_name)}
                        onChange={() => handleFeatureToggle(feature.feature_name)}
                      />
                      <span className="ml-2 text-gray-600 capitalize">{feature.feature_name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Filters */}
            <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-colors duration-300 ${
                        viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      <Grid className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-colors duration-300 ${
                        viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'
                      }`}
                    >
                      <List className="h-5 w-5" />
                    </button>
                  </div>
                  
                  <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Sort by: Featured</option>
                    <option>Newest First</option>
                    <option>Oldest First</option>
                    <option>Name A-Z</option>
                    <option>Name Z-A</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredProducts.length} of {products.length} products
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedFeatures([]);
                  }}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredProducts.map(product => (
                  <Link
                    key={product.documentId}
                    to={`/product/${product.documentId}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                  >
                    <div className="relative overflow-hidden">
                      {product.display_image ? (
                        <img
                          src={getImageUrl(product.display_image.url)}
                          alt={product.product_name}
                          loading="lazy"
                          decoding="async"
                          width="400"
                          height="300"
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-lg">
                            {product.product_name}
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end justify-between">
                        <h3 className="text-xl font-bold text-white">
                          {product.product_name}
                        </h3>
                        <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white group-hover:bg-white/30 transition-colors duration-300">
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                    
                    {viewMode === 'list' && (
                      <div className="p-6">
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {product.product_description.replace(/[#*]/g, '').substring(0, 150)}...
                        </p>
                      </div>
                    )}
                  </Link>
                ))}
              </div>
            )}

            
            {filteredProducts.length > 0 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors duration-300">
                    Previous
                  </button>
                  <button className="px-3 py-2 bg-blue-600 text-white rounded-lg">1</button>
                  <button className="px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors duration-300">
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;