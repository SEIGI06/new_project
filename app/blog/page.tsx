import { Metadata } from 'next';
import BlogList from '@/components/blog/BlogList';
import CategoryFilter from '@/components/blog/CategoryFilter';
import Sidebar from '@/components/layout/Sidebar';
import blogPosts from '@/data/blog-posts.json';
import categories from '@/data/categories.json';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Tous nos articles sur la finance, l\'investissement et l\'épargne',
  openGraph: {
    title: 'Blog - Tous nos articles',
    description: 'Découvrez nos conseils et guides pratiques',
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Conseils, guides et actualités pour mieux gérer vos finances
          </p>
        </div>

        {/* Filtres par catégorie */}
        <CategoryFilter categories={categories} />

        {/* Layout principal avec sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Articles */}
          <div className="lg:col-span-2">
            <BlogList posts={blogPosts} />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Sidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
