import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Share2, CheckCircle, Loader } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import GetQuoteModal from '../components/GetQuoteModal';
import ProductDetailModal from '../components/ProductDetailModal';
import { productsApi, Product, getImageUrl } from '../services/api';
import { useMediaQuery } from 'react-responsive'; // For mobile responsiveness

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // To control modal state

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        setError('Product ID is required');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const productData = await productsApi.getProduct(id);
        setProduct(productData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Memoize all images URLs
  const allImageUrls = useMemo(() => {
    if (!product) return [];
    const images: string[] = [];
    if (product.display_image) images.push(getImageUrl(product.display_image.url));
    if (product.secondary_images) {
      images.push(...product.secondary_images.map((img: any) => getImageUrl(img.url)));
    }
    return images;
  }, [product]);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowCopyNotification(true);
      setTimeout(() => setShowCopyNotification(false), 2000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setShowCopyNotification(true);
      setTimeout(() => setShowCopyNotification(false), 2000);
    }
  };

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'specifications', name: 'Specifications' }
  ];

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error: {error || 'Product not found'}</p>
          <Link 
            to="/products"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-blue-600 transition-colors duration-300">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-blue-600 transition-colors duration-300">Products</Link>
          <span>/</span>
          <span className="text-gray-900">{product.product_name}</span>
        </div>

        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <div className="bg-white rounded-2xl p-4 shadow-lg mb-4">
              {allImageUrls.length > 0 ? (
                <img
                  src={allImageUrls[selectedImage]}
                  alt={product.product_name}
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover rounded-xl"
                />
              ) : (
                <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-2xl">
                    {product.product_name}
                  </span>
                </div>
              )}
            </div>
            {allImageUrls.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {allImageUrls.map((url, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`bg-white rounded-xl p-2 shadow-lg transition-all duration-300 ${
                      selectedImage === index ? 'ring-2 ring-blue-600' : 'hover:shadow-xl'
                    }`}
                  >
                    <img
                      src={url}
                      alt={`${product.product_name} ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      width={80}
                      height={80}
                      className="w-full h-20 object-cover rounded-lg"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            {
              !isMobile
              &&
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {product.category?.cateogry_name || 'Product'}
                  </span>
                  <div className="flex items-center">
                    <button 
                      onClick={handleShare}
                      aria-label="Share product link"
                      className="p-2 text-gray-400 hover:text-blue-500 transition-colors duration-300 relative"
                    >
                      <Share2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {product.product_name}
                </h1>

                <div className="text-gray-600 mb-6 leading-relaxed ">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h1: ({children}) => <h2 className="text-xl font-bold text-gray-900 mb-3">{children}</h2>,
                      h2: ({children}) => <h3 className="text-lg font-semibold text-gray-900 mb-2">{children}</h3>,
                      h3: ({children}) => <h4 className="text-base font-semibold text-gray-900 mb-2">{children}</h4>,
                      p: ({children}) => <p className="text-gray-600 leading-relaxed mb-3">{children}</p>,
                      ul: ({children}) => <ul className="list-disc list-inside text-gray-600 mb-3 space-y-1">{children}</ul>,
                      li: ({children}) => <li className="text-gray-600">{children}</li>,
                      strong: ({children}) => <strong className="font-semibold text-gray-900">{children}</strong>,
                      em: ({children}) => <em className="italic text-gray-700">{children}</em>,
                      blockquote: ({children}) => <blockquote className="border-l-4 border-blue-500 pl-3 italic text-gray-700 bg-blue-50 p-3 rounded-r-lg my-3">{children}</blockquote>
                    }}
                  >
                    {product.product_description}
                  </ReactMarkdown>
                </div>

                <div className="mb-6">
                  <button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center"
                  >
                    Request Quote
                  </button>
                </div>                            
              </div>
            }
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-2xl shadow-lg">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-300 ${
                    selectedTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {selectedTab === 'overview' && (
              <div className="space-y-8">
                {/* Show iframe on desktop */}
                {!isMobile ? (
                  <iframe
                    src={'https://api.skyelectronica.com' + product?.presentation.url}
                    sandbox="allow-same-origin allow-scripts allow-popups"
                    className="w-full h-96 transform scale-90 hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  // On mobile show button and modal
                  <>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full h-16 bg-blue-600 text-white rounded-lg"
                    >
                      View Presentation
                    </button>
                    {/* Modal */}
                    {isModalOpen && (                      
                      <>
                        <ProductDetailModal product={product} setIsModalOpen={setIsModalOpen}/>
                      </>            
                    )}

                  </>
                )}
              </div>
            )}

            {selectedTab === 'specifications' && (
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({children}) => <h2 className="text-xl font-bold text-gray-900 mb-3">{children}</h2>,
                    h2: ({children}) => <h3 className="text-lg font-semibold text-gray-900 mb-2">{children}</h3>,
                    h3: ({children}) => <h4 className="text-base font-semibold text-gray-900 mb-2">{children}</h4>,
                    p: ({children}) => <p className="text-gray-600 leading-relaxed mb-3">{children}</p>,
                    ul: ({children}) => <ul className="list-disc list-inside text-gray-600 mb-3 space-y-1">{children}</ul>,
                    li: ({children}) => <li className="text-gray-600">{children}</li>,
                    strong: ({children}) => <strong className="font-semibold text-gray-900">{children}</strong>,
                    em: ({children}) => <em className="italic text-gray-700">{children}</em>,
                    blockquote: ({children}) => <blockquote className="border-l-4 border-blue-500 pl-3 italic text-gray-700 bg-blue-50 p-3 rounded-r-lg my-3">{children}</blockquote>
                  }}
                >
                  {product.specification}
                </ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Copy Notification */}
      {showCopyNotification && (
        <div className="fixed top-24 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center animate-fade-in">
          <CheckCircle className="h-5 w-5 mr-2" />
          <span className="font-medium">Link copied successfully!</span>
        </div>
      )}

      <GetQuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
};

export default ProductDetailPage;
