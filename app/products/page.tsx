import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import products from '@/data/products.json';

export const metadata: Metadata = {
  title: 'Produits Recommandés',
  description: 'Comparatifs et reviews des meilleurs produits finance',
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Produits Recommandés
          </h1>
          <p className="text-xl text-gray-600">
            Nos comparatifs et avis sur les meilleurs produits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.slug}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              {product.image && (
                <div className="relative w-full h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                {product.featured && (
                  <span className="inline-block bg-accent text-white text-xs px-3 py-1 rounded-full mb-2">
                    Recommandé
                  </span>
                )}
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {product.rating} ⭐
                  </span>
                  <span className="text-gray-500 text-sm">
                    {product.reviewCount} avis
                  </span>
                </div>
                <Link
                  href={`/products/${product.slug}`}
                  className="block w-full text-center bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition"
                >
                  Voir les détails
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
