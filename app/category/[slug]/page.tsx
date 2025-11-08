import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogList from '@/components/blog/BlogList';
import Sidebar from '@/components/layout/Sidebar';
import blogPosts from '@/data/blog-posts.json';
import categories from '@/data/categories.json';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = categories.find((c) => c.slug === params.slug);

  if (!category) {
    return { title: 'Catégorie non trouvée' };
  }

  return {
    title: `${category.name} - Blog`,
    description: category.description,
  };
}

export async function generateStaticParams() {
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export default function CategoryPage({ params }: Props) {
  const category = categories.find((c) => c.slug === params.slug);

  if (!category) {
    notFound();
  }

  // Filtrer les articles par catégorie
  const categoryPosts = blogPosts.filter((p) => p.category === params.slug);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête catégorie */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {category.name}
          </h1>
          <p className="text-xl text-gray-600">{category.description}</p>
          <div className="mt-4">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">
              {categoryPosts.length} article{categoryPosts.length > 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Layout avec sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {categoryPosts.length > 0 ? (
              <BlogList posts={categoryPosts} />
            ) : (
              <p className="text-center text-gray-500 py-12">
                Aucun article dans cette catégorie pour le moment.
              </p>
            )}
          </div>

          <aside className="lg:col-span-1">
            <Sidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
