const API_BASE_URL = 'https://api.skyelectronica.com/api';
const API_TOKEN = 'c3d7584196a04d228db33e3323d45898b763d39921475421e9884f55b829c9b299317b39456be7bf5e7565355e2c06fc9ccc50d4b91edf847402fec9f806c202919237d6fefc1850456b42798c85d3192c52dc0c35e8d67694e2db622283f35f41531557e205c78d047b04f2cf096fc9fb473aafb6aec94a3b11589a03944a7a';

interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

interface Image {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ApiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface Product {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  product_name: string;
  product_description: string;
  included: string;
  specification: string;
  category?: Category;
  display_image?: Image;
  secondary_images?: Image[];
  feature?: Feature;
  presentation: any;
}

interface Category {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cateogry_name: string;
}

interface Feature {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  feature_name: string;
}

const apiRequest = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (API_TOKEN) {
    headers['Authorization'] = `Bearer ${API_TOKEN}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

// Helper function to get the full image URL
export const getImageUrl = (imageUrl: string): string => {
  if (imageUrl.startsWith('http')) {
    return imageUrl;
  }
  return `https://api.skyelectronica.com/${imageUrl}`;
};

export const productsApi = {
  // Get all products
  getProducts: async (): Promise<Product[]> => {
    const response = await apiRequest<Product[]>('/products?populate=*');
    return response.data;
  },

  // Get single product by documentId
  getProduct: async (documentId: string): Promise<Product> => {
    const response = await apiRequest<Product>(`/products/${documentId}?populate=*`);
    return response.data;
  },

  // Get all categories
  getCategories: async (): Promise<Category[]> => {
    const response = await apiRequest<Category[]>('/categories');
    return response.data;
  },

  // Get all features
  getFeatures: async (): Promise<Feature[]> => {
    const response = await apiRequest<Feature[]>('/features/');
    return response.data;
  },
};
