import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { generateProductSchema } from '@/lib/seo/jsonld';
import products from '@/data/products.json';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return { title: 'Produit non trouvé' };
  }

  return {
    title: `${product.name} - Avis et Test`,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateProductSchema(product)),
        }}
      />

      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image produit */}
            <div className="relative w-full h-[400px] lg:h-[600px]">
              <Image
                src={product.image || '/images/placeholder.jpg'}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Informations produit */}
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-primary">
                  {product.rating} ⭐
                </span>
                <span className="text-gray-600">
                  ({product.reviewCount} avis)
                </span>
              </div>

              <p className="text-xl text-gray-700 mb-8">
                {product.description}
              </p>

              {/* Points forts */}
              {product.pros && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 text-green-600">
                    ✓ Points forts
                  </h3>
                  <ul className="space-y-2">
                    {product.pros.map((pro, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Points faibles */}
              {product.cons && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3 text-red-600">
                    ✗ Points faibles
                  </h3>
                  <ul className="space-y-2">
                    {product.cons.map((con, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-600 mr-2">✗</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Affiliation */}
              <div className="bg-accent/10 border-2 border-accent rounded-lg p-6">
                <p className="text-lg font-semibold mb-4">
                  Offre spéciale disponible !
                </p>
                <a
                  href={product.affiliateLink}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block w-full text-center bg-accent text-white py-4 rounded-lg font-bold text-lg hover:bg-accent-dark transition"
                >
                  Voir l'offre →
                </a>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Lien affilié - Nous touchons une commission
                </p>
              </div>
            </div>
          </div>

          {/* Description détaillée */}
          {product.fullDescription && (
            <div className="mt-16 prose prose-lg max-w-none">
              <h2>Description complète</h2>
              <div dangerouslySetInnerHTML={{ __html: product.fullDescription }} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
