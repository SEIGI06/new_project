import Link from 'next/link';
import BlogList from '@/components/blog/BlogList';
import Newsletter from '@/components/ui/Newsletter';
import AdsenseAd from '@/components/ui/AdsenseAd';
import { generateOrganizationSchema } from '@/lib/seo/jsonld';
import blogPosts from '@/data/blog-posts.json';
import products from '@/data/products.json';

export default function HomePage() {
  // Prendre les 6 articles les plus récents
  const recentPosts = blogPosts.slice(0, 6);
  
  // Prendre les 3 produits phares
  const featuredProducts = products.filter(p => p.featured).slice(0, 3);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema()),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bienvenue sur votre Blog Finance & Affiliation
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Conseils, comparatifs et guides pour optimiser vos finances personnelles
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/blog"
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Découvrir le Blog
            </Link>
            <Link
              href="/products"
              className="bg-accent text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-dark transition"
            >
              Voir les Produits
            </Link>
          </div>
        </div>
      </section>

      {/* AdSense - Bannière Header */}
      <AdsenseAd slot="header" format="horizontal" />

      {/* Articles Récents */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Articles Récents</h2>
          <Link href="/blog" className="text-primary hover:underline">
            Voir tous les articles →
          </Link>
        </div>
        <BlogList posts={recentPosts} />
      </section>

      {/* Produits Phares */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Produits Recommandés</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.slug}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">
                    {product.rating} ⭐
                  </span>
                  <Link
                    href={`/products/${product.slug}`}
                    className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
                  >
                    Voir détails
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Newsletter />
      </section>

      {/* AdSense - Footer */}
      <AdsenseAd slot="footer" format="horizontal" />
    </>
  );
}
