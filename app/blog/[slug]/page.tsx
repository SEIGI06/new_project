import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/blog/Breadcrumb';
import RelatedPosts from '@/components/blog/RelatedPosts';
import AffiliateBox from '@/components/blog/AffiliateBox';
import AdsenseAd from '@/components/ui/AdsenseAd';
import Sidebar from '@/components/layout/Sidebar';
import { generateBlogPostSchema } from '@/lib/seo/jsonld';
import { formatDate } from '@/lib/utils/formatters';
import blogPosts from '@/data/blog-posts.json';

type Props = {
  params: { slug: string };
};

// Générer les métadonnées dynamiquement
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: 'Article non trouvé',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Équipe éditoriale'],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

// Générer les routes statiques
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Articles similaires (même catégorie)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBlogPostSchema(post)),
        }}
      />

      <article className="min-h-screen bg-white">
        {/* En-tête de l'article */}
        <header className="bg-gray-900 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb category={post.category} title={post.title} />
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-300">
              <span>{formatDate(post.date)}</span>
              <span>•</span>
              <span>{post.readTime || '5 min de lecture'}</span>
              <span>•</span>
              <Link
                href={`/category/${post.category}`}
                className="text-accent hover:underline"
              >
                {post.category}
              </Link>
            </div>
          </div>
        </header>

        {/* Image principale */}
        {post.image && (
          <div className="relative w-full h-[400px] md:h-[500px]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contenu principal */}
            <div className="lg:col-span-2">
              {/* AdSense - Top article */}
              <AdsenseAd slot="in-article-top" format="rectangle" />

              {/*
