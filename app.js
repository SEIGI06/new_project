/**
 * FINANCE AFFILIATE BLOG - JavaScript Application
 * 
 * Architecture Overview:
 * - Data Management: In-memory storage (no localStorage due to sandbox restrictions)
 * - Routing: Hash-based SPA navigation
 * - SEO: Dynamic meta tags and JSON-LD structured data
 * - Performance: Lazy loading, debouncing, pagination
 * 
 * File Structure Emulation:
 * - blogData: Simulates blog-posts.json
 * - productsData: Simulates products.json
 * - seoConfig: Simulates seo-config.json
 * - affiliatePrograms: Simulates affiliates.json
 */

// ========================================
// DATA LAYER (Simulating JSON files)
// ========================================

/**
 * Blog posts data - In production, this would be fetched from an API or JSON file
 * Represents: data/blog-posts.json
 */
const blogData = [
  {
    id: 1,
    slug: 'meilleur-compte-courant-2025',
    title: 'Meilleur Compte Courant 2025 : Comparatif des Banques',
    category: 'Finance',
    tags: ['Banques', 'Comparatif', 'Argent'],
    description: 'Guide complet pour trouver le meilleur compte courant en 2025 avec nos recommandations d\'affiliation',
    image_cover: '/assets/images/bank-comparison.jpg',
    author: 'Jean Finance',
    date: '2025-11-08',
    content: `
      <h2>Introduction au Choix du Compte Courant</h2>
      <p>Choisir le bon compte courant est une décision financière importante qui peut vous faire économiser des centaines d'euros par an. Dans ce guide complet, nous analysons les meilleures offres bancaires de 2025.</p>
      
      <h2>Critères Essentiels pour Choisir sa Banque</h2>
      <p>Avant de vous lancer, voici les éléments à considérer :</p>
      <ul>
        <li><strong>Frais bancaires</strong> : Cotisation de carte, frais de tenue de compte</li>
        <li><strong>Services en ligne</strong> : Application mobile, gestion en ligne</li>
        <li><strong>Réseau d'agences</strong> : Proximité et disponibilité</li>
        <li><strong>Service client</strong> : Disponibilité et réactivité</li>
        <li><strong>Produits associés</strong> : Épargne, crédit, assurance</li>
      </ul>
      
      <h2>Top 3 des Comptes Courants 2025</h2>
      <p>Après analyse approfondie, voici notre podium des meilleures banques en 2025.</p>
      
      <h3>1. Banque Digitale Pro - Notre Choix #1</h3>
      <p>Avec zéro frais de tenue de compte et une application mobile primée, Banque Digitale Pro s'impose comme le leader des néobanques françaises. Idéale pour les utilisateurs connectés qui privilégient la simplicité et les économies.</p>
      
      <h3>2. Banque Traditionnelle Premium</h3>
      <p>Pour ceux qui préfèrent le contact humain, cette banque historique offre un excellent compromis entre services en ligne et réseau d'agences physiques.</p>
      
      <h3>3. Banque Jeune Innovante</h3>
      <p>Spécialement conçue pour les 18-30 ans, cette banque propose des offres adaptées aux besoins des jeunes actifs avec des fonctionnalités de gestion budgétaire avancées.</p>
      
      <h2>Comment Ouvrir un Compte Courant</h2>
      <p>L'ouverture d'un compte courant est désormais simplifiée grâce au digital. Voici les étapes :</p>
      <ol>
        <li>Comparez les offres (utilisez notre tableau comparatif ci-dessus)</li>
        <li>Préparez vos documents (pièce d'identité, justificatif de domicile)</li>
        <li>Remplissez le formulaire en ligne</li>
        <li>Validez votre identité (vidéo ou courrier)</li>
        <li>Recevez votre carte bancaire sous 5-10 jours</li>
      </ol>
      
      <h2>Conclusion</h2>
      <p>Le choix d'un compte courant dépend essentiellement de votre profil et de vos besoins. Les banques en ligne offrent généralement les meilleures conditions tarifaires, tandis que les banques traditionnelles rassurent par leur présence physique. N'hésitez pas à profiter des offres de bienvenue pour tester plusieurs établissements.</p>
    `,
    affiliate_products: [
      {
        name: 'Banque Digitale Pro',
        url: 'https://affiliate.bank1.com/ref=bestblog',
        commission: '15€',
        description: 'Compte sans frais avec 15€ offerts à l\'inscription'
      }
    ],
    faq: [
      {
        q: 'Quelle banque choisir pour un compte courant ?',
        a: 'Cela dépend de vos besoins. Pour les utilisateurs digitaux, nous recommandons Banque Digitale Pro. Pour ceux qui préfèrent le contact humain, une banque traditionnelle sera plus adaptée.'
      },
      {
        q: 'Combien coûte un compte courant ?',
        a: 'Les frais varient de 0€ (banques en ligne) à 10€/mois (banques traditionnelles). Notre comparatif vous aide à trouver l\'offre la plus économique.'
      },
      {
        q: 'Peut-on avoir plusieurs comptes courants ?',
        a: 'Oui, il est tout à fait légal d\'avoir plusieurs comptes courants dans différentes banques. C\'est même recommandé pour diversifier vos services bancaires.'
      }
    ]
  },
  {
    id: 2,
    slug: 'guide-investissement-debutant',
    title: 'Guide Investissement Débutant : Par où commencer ?',
    category: 'Investissement',
    tags: ['Bourse', 'Débutant', 'Épargne'],
    description: 'Commencez votre parcours d\'investisseur avec nos conseils éprouvés',
    image_cover: '/assets/images/investment-guide.jpg',
    author: 'Marie Invest',
    date: '2025-11-05',
    content: `
      <h2>Pourquoi Investir ?</h2>
      <p>L'investissement est le meilleur moyen de faire fructifier votre argent sur le long terme. Contrairement à l'épargne traditionnelle qui offre des rendements faibles, l'investissement permet de viser des rendements plus élevés en acceptant une certaine prise de risque.</p>
      
      <h2>Les Bases de l'Investissement</h2>
      <p>Avant de vous lancer, il est essentiel de comprendre quelques concepts fondamentaux :</p>
      
      <h3>Le Triangle de l'Investissement</h3>
      <p>Tout investissement se caractérise par trois dimensions :</p>
      <ul>
        <li><strong>Rendement</strong> : Le gain potentiel de votre investissement</li>
        <li><strong>Risque</strong> : La probabilité de perdre une partie de votre capital</li>
        <li><strong>Liquidité</strong> : La facilité à récupérer votre argent rapidement</li>
      </ul>
      
      <h2>Par Où Commencer ?</h2>
      <p>Voici notre méthode en 5 étapes pour débuter sereinement :</p>
      
      <h3>1. Constituez votre Épargne de Précaution</h3>
      <p>Avant d'investir, assurez-vous d'avoir 3 à 6 mois de dépenses en épargne de sécurité sur un Livret A ou LDD.</p>
      
      <h3>2. Définissez vos Objectifs</h3>
      <p>Court terme (moins de 3 ans), moyen terme (3-10 ans) ou long terme (plus de 10 ans) ? Votre horizon d'investissement déterminera votre stratégie.</p>
      
      <h3>3. Évaluez votre Profil de Risque</h3>
      <p>Êtes-vous prudent, équilibré ou dynamique ? Votre tolérance au risque guidera le choix de vos placements.</p>
      
      <h3>4. Diversifiez vos Placements</h3>
      <p>Ne mettez jamais tous vos œufs dans le même panier. Répartissez vos investissements entre différentes classes d'actifs.</p>
      
      <h3>5. Investissez Régulièrement</h3>
      <p>L'investissement programmé permet de lisser les risques et de profiter de la puissance des intérêts composés.</p>
      
      <h2>Les Meilleurs Supports pour Débuter</h2>
      <p>Pour un débutant, nous recommandons de commencer par :</p>
      <ul>
        <li><strong>Assurance-vie</strong> : Enveloppe fiscale avantageuse et diversifiée</li>
        <li><strong>PEA</strong> : Idéal pour investir en actions européennes avec fiscalité réduite</li>
        <li><strong>ETF</strong> : Fonds indiciels peu coûteux pour diversifier facilement</li>
      </ul>
      
      <h2>Erreurs à Éviter</h2>
      <p>Attention à ces pièges classiques du débutant :</p>
      <ul>
        <li>Investir sans épargne de sécurité</li>
        <li>Se lancer sans formation minimale</li>
        <li>Chercher le placement miracle</li>
        <li>Paniquer lors des baisses de marché</li>
        <li>Négliger la fiscalité</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>L'investissement est un marathon, pas un sprint. Commencez petit, formez-vous continuellement et restez discipliné. Les résultats viendront avec le temps et la patience.</p>
    `,
    affiliate_products: [
      {
        name: 'Broker Investissement',
        url: 'https://affiliate.broker.com/ref=bestblog',
        commission: '2%',
        description: 'Plateforme d\'investissement avec 0 commission sur les ETF'
      }
    ],
    faq: [
      {
        q: 'Quel montant minimum pour commencer à investir ?',
        a: 'On peut commencer avec aussi peu que 50€ par mois grâce aux investissements programmés. L\'important est la régularité, pas le montant initial.'
      },
      {
        q: 'Est-ce le bon moment pour investir ?',
        a: 'Le meilleur moment pour investir était hier, le deuxième meilleur moment est aujourd\'hui. Sur le long terme, le timing d\'entrée a peu d\'importance si vous investissez régulièrement.'
      }
    ]
  },
  {
    id: 3,
    slug: 'comparatif-assurance-vie-2025',
    title: 'Comparatif Assurance Vie 2025 : Les Meilleures Offres',
    category: 'Finance',
    tags: ['Assurance', 'Épargne', 'Comparatif'],
    description: 'Notre sélection des meilleures assurances vie en 2025 selon leur rendement, frais et qualité de gestion',
    image_cover: '/assets/images/insurance-comparison.jpg',
    author: 'Jean Finance',
    date: '2025-10-28',
    content: `
      <h2>Qu'est-ce qu'une Assurance Vie ?</h2>
      <p>L'assurance vie est le placement préféré des Français, et pour cause : elle combine souplesse, fiscalité avantageuse et potentiel de rendement attractif. Mais toutes les assurances vie ne se valent pas.</p>
      
      <h2>Critères de Sélection</h2>
      <p>Pour établir ce comparatif, nous avons analysé :</p>
      <ul>
        <li>Les frais de gestion et d'entrée</li>
        <li>La performance des fonds en euros</li>
        <li>L'offre d'unités de compte</li>
        <li>La qualité du service client</li>
        <li>Les options de gestion (libre, pilotée, sous mandat)</li>
      </ul>
      
      <h2>Notre Top 3</h2>
      <p>Découvrez les contrats qui se démarquent en 2025...</p>
    `,
    affiliate_products: [],
    faq: []
  }
];

/**
 * Products data - Simulates data/products.json
 */
const productsData = [
  {
    id: 1,
    name: 'Banque Digitale Pro',
    slug: 'banque-digitale-pro',
    category: 'Banques',
    image: '/assets/images/bank-pro.jpg',
    description: 'Compte courant sans frais avec application mobile primée',
    affiliate_link: 'https://affiliate.bank1.com/ref=bestblog',
    pros: ['Sans frais mensuels', 'Application mobile intuitive', 'Support client 24/7', 'Paiements instantanés'],
    cons: ['Peu d\'agences physiques', 'Dépôts d\'espèces limités']
  },
  {
    id: 2,
    name: 'Broker Investissement Pro',
    slug: 'broker-invest-pro',
    category: 'Investissement',
    image: '/assets/images/broker-pro.jpg',
    description: 'Plateforme d\'investissement avec 0% commission sur les ETF',
    affiliate_link: 'https://affiliate.broker.com/ref=bestblog',
    pros: ['0% commission ETF', 'Interface professionnelle', 'Outils d\'analyse avancés', 'Formation gratuite'],
    cons: ['Interface complexe pour débutants', 'Frais sur actions individuelles']
  },
  {
    id: 3,
    name: 'Assurance Vie Optimale',
    slug: 'assurance-vie-optimale',
    category: 'Assurance',
    image: '/assets/images/insurance-optimal.jpg',
    description: 'Contrat d\'assurance vie avec frais réduits et large choix d\'UC',
    affiliate_link: 'https://affiliate.insurance.com/ref=bestblog',
    pros: ['Frais de gestion 0.6%', '700+ supports', 'Fonds euro performant', 'Gestion pilotée incluse'],
    cons: ['Versement initial 1000€', 'Pas de retrait les 2 premières années']
  }
];

/**
 * SEO Configuration - Simulates data/seo-config.json
 */
const seoConfig = {
  site_title: 'Finance & Affiliation - Le Blog',
  site_description: 'Blog d\'expertise en finance, banques et investissement avec recommandations affiliées',
  site_url: 'https://finance-affiliate-blog.com',
  default_image: '/assets/images/default-og.jpg',
  social_links: {
    twitter: 'https://twitter.com/financeblog',
    facebook: 'https://facebook.com/financeblog',
    linkedin: 'https://linkedin.com/company/financeblog'
  }
};

/**
 * Affiliate Programs - Simulates data/affiliates.json
 */
const affiliatePrograms = [
  {
    name: 'Banque Digitale',
    commission: '15€ par inscription',
    tracking_domain: 'affiliate.bank1.com'
  },
  {
    name: 'Broker Investissement',
    commission: '2%',
    tracking_domain: 'affiliate.broker.com'
  }
];

// ========================================
// STATE MANAGEMENT
// ========================================

/**
 * Application state - In-memory storage
 * No localStorage due to sandbox restrictions
 */
const appState = {
  currentView: 'home',
  currentArticle: null,
  currentFilters: {
    category: 'all',
    search: ''
  },
  currentPage: 1,
  articlesPerPage: 5,
  cookieConsent: false,
  newsletterSubscribers: [] // In production: API endpoint
};

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Debounce function for search optimization
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Format date to French locale
 */
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Generate slug from text
 */
function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Scroll to element smoothly
 */
function scrollToElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Track affiliate link click (in production: send to analytics)
 */
function trackAffiliateClick(productName, url) {
  console.log(`[Analytics] Affiliate click: ${productName} - ${url}`);
  // In production: send to Google Analytics, Facebook Pixel, etc.
}

// ========================================
// SEO FUNCTIONS
// ========================================

/**
 * Update page meta tags dynamically
 */
function updateMetaTags(data) {
  document.title = data.title || seoConfig.site_title;
  
  // Update meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', data.description || seoConfig.site_description);
  }
  
  // Update canonical URL
  let canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', data.url || seoConfig.site_url);
  }
  
  // Update Open Graph tags
  updateOGTag('og:title', data.title || seoConfig.site_title);
  updateOGTag('og:description', data.description || seoConfig.site_description);
  updateOGTag('og:url', data.url || seoConfig.site_url);
  updateOGTag('og:image', data.image || seoConfig.default_image);
  
  // Update Twitter Card tags
  updateOGTag('twitter:title', data.title || seoConfig.site_title);
  updateOGTag('twitter:description', data.description || seoConfig.site_description);
  updateOGTag('twitter:image', data.image || seoConfig.default_image);
}

function updateOGTag(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`);
  if (tag) {
    tag.setAttribute('content', content);
  }
}

/**
 * Generate JSON-LD structured data
 */
function generateBlogPostingSchema(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': article.title,
    'description': article.description,
    'image': seoConfig.site_url + article.image_cover,
    'author': {
      '@type': 'Person',
      'name': article.author
    },
    'publisher': {
      '@type': 'Organization',
      'name': seoConfig.site_title,
      'logo': {
        '@type': 'ImageObject',
        'url': seoConfig.site_url + '/assets/images/logo.png'
      }
    },
    'datePublished': article.date,
    'dateModified': article.date,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `${seoConfig.site_url}/blog/${article.slug}`
    }
  };
}

function generateFAQSchema(faqItems) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqItems.map(item => ({
      '@type': 'Question',
      'name': item.q,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.a
      }
    }))
  };
}

function generateBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };
}

/**
 * Inject JSON-LD schema into page
 */
function injectSchema(schema) {
  // Remove existing dynamic schemas
  document.querySelectorAll('script[data-schema="dynamic"]').forEach(el => el.remove());
  
  // Create new schema script
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.setAttribute('data-schema', 'dynamic');
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

// ========================================
// CONTENT RENDERING FUNCTIONS
// ========================================

/**
 * Render featured articles on homepage
 */
function renderFeaturedArticles() {
  const container = document.getElementById('featuredArticles');
  if (!container) return;
  
  const featured = blogData.slice(0, 3);
  
  container.innerHTML = featured.map(article => `
    <article class="article-card" data-article-id="${article.id}">
      <img src="${article.image_cover}" alt="${article.title}" class="article-card-image" loading="lazy">
      <div class="article-card-content">
        <span class="article-card-category">${article.category}</span>
        <h3 class="article-card-title">${article.title}</h3>
        <p class="article-card-description">${article.description}</p>
        <div class="article-card-footer">
          <span>${formatDate(article.date)}</span>
          <a href="#article/${article.slug}" class="btn btn--sm btn--primary">Lire Plus</a>
        </div>
      </div>
    </article>
  `).join('');
  
  // Add click handlers
  container.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.tagName !== 'A') {
        const articleId = parseInt(card.getAttribute('data-article-id'));
        const article = blogData.find(a => a.id === articleId);
        if (article) {
          window.location.hash = `#article/${article.slug}`;
        }
      }
    });
  });
}

/**
 * Render blog articles list with filters
 */
function renderArticlesList() {
  const container = document.getElementById('articlesList');
  if (!container) return;
  
  // Apply filters
  let filteredArticles = blogData;
  
  if (appState.currentFilters.category !== 'all') {
    filteredArticles = filteredArticles.filter(
      article => article.category === appState.currentFilters.category
    );
  }
  
  if (appState.currentFilters.search) {
    const searchTerm = appState.currentFilters.search.toLowerCase();
    filteredArticles = filteredArticles.filter(article =>
      article.title.toLowerCase().includes(searchTerm) ||
      article.description.toLowerCase().includes(searchTerm) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }
  
  // Pagination
  const startIndex = (appState.currentPage - 1) * appState.articlesPerPage;
  const endIndex = startIndex + appState.articlesPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, endIndex);
  
  // Render articles
  container.innerHTML = paginatedArticles.map(article => `
    <article class="article-card" data-article-id="${article.id}">
      <img src="${article.image_cover}" alt="${article.title}" class="article-card-image" loading="lazy">
      <div class="article-card-content">
        <span class="article-card-category">${article.category}</span>
        <h3 class="article-card-title">${article.title}</h3>
        <p class="article-card-description">${article.description}</p>
        <div class="article-card-footer">
          <span>Par ${article.author} • ${formatDate(article.date)}</span>
          <a href="#article/${article.slug}" class="btn btn--sm btn--primary">Lire Plus</a>
        </div>
      </div>
    </article>
  `).join('');
  
  // Add click handlers
  container.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.tagName !== 'A') {
        const articleId = parseInt(card.getAttribute('data-article-id'));
        const article = blogData.find(a => a.id === articleId);
        if (article) {
          window.location.hash = `#article/${article.slug}`;
        }
      }
    });
  });
  
  // Render pagination
  renderPagination(filteredArticles.length);
}

/**
 * Render pagination controls
 */
function renderPagination(totalArticles) {
  const container = document.getElementById('pagination');
  if (!container) return;
  
  const totalPages = Math.ceil(totalArticles / appState.articlesPerPage);
  
  if (totalPages <= 1) {
    container.innerHTML = '';
    return;
  }
  
  let paginationHTML = '';
  
  // Previous button
  if (appState.currentPage > 1) {
    paginationHTML += `<button class="pagination-button" data-page="${appState.currentPage - 1}">Précédent</button>`;
  }
  
  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    if (i === appState.currentPage) {
      paginationHTML += `<button class="pagination-button active" data-page="${i}">${i}</button>`;
    } else if (i === 1 || i === totalPages || (i >= appState.currentPage - 1 && i <= appState.currentPage + 1)) {
      paginationHTML += `<button class="pagination-button" data-page="${i}">${i}</button>`;
    } else if (i === appState.currentPage - 2 || i === appState.currentPage + 2) {
      paginationHTML += `<span>...</span>`;
    }
  }
  
  // Next button
  if (appState.currentPage < totalPages) {
    paginationHTML += `<button class="pagination-button" data-page="${appState.currentPage + 1}">Suivant</button>`;
  }
  
  container.innerHTML = paginationHTML;
  
  // Add click handlers
  container.querySelectorAll('.pagination-button').forEach(button => {
    button.addEventListener('click', () => {
      appState.currentPage = parseInt(button.getAttribute('data-page'));
      renderArticlesList();
      scrollToElement('#blog');
    });
  });
}

/**
 * Render article detail page
 */
function renderArticleDetail(slug) {
  const article = blogData.find(a => a.slug === slug);
  if (!article) {
    console.error('Article not found:', slug);
    window.location.hash = '#blog';
    return;
  }
  
  // Update state
  appState.currentArticle = article;
  appState.currentView = 'article';
  
  // Update SEO
  updateMetaTags({
    title: `${article.title} | ${seoConfig.site_title}`,
    description: article.description,
    url: `${seoConfig.site_url}/blog/${article.slug}`,
    image: seoConfig.site_url + article.image_cover
  });
  
  // Inject structured data
  injectSchema(generateBlogPostingSchema(article));
  
  if (article.faq && article.faq.length > 0) {
    injectSchema(generateFAQSchema(article.faq));
  }
  
  // Breadcrumb schema
  injectSchema(generateBreadcrumbSchema([
    { name: 'Accueil', url: seoConfig.site_url },
    { name: 'Blog', url: `${seoConfig.site_url}/#blog` },
    { name: article.category, url: `${seoConfig.site_url}/#blog?category=${article.category}` },
    { name: article.title, url: `${seoConfig.site_url}/blog/${article.slug}` }
  ]));
  
  // Render breadcrumb
  const breadcrumb = document.getElementById('breadcrumb');
  if (breadcrumb) {
    breadcrumb.innerHTML = `
      <a href="#home">Accueil</a> / 
      <a href="#blog">Blog</a> / 
      <a href="#blog?category=${article.category}">${article.category}</a> / 
      <span>${article.title}</span>
    `;
  }
  
  // Populate article content
  document.getElementById('articleCategory').textContent = article.category;
  document.getElementById('articleDate').textContent = formatDate(article.date);
  document.getElementById('articleTitle').textContent = article.title;
  document.getElementById('articleDescription').textContent = article.description;
  document.getElementById('articleAuthor').textContent = article.author;
  
  const articleImage = document.getElementById('articleImage');
  articleImage.src = article.image_cover;
  articleImage.alt = article.title;
  
  document.getElementById('articleBody').innerHTML = article.content;
  
  // Render affiliate products
  if (article.affiliate_products && article.affiliate_products.length > 0) {
    const affiliateBox = document.getElementById('affiliateBox');
    const affiliateProducts = document.getElementById('affiliateProducts');
    
    affiliateBox.style.display = 'block';
    affiliateProducts.innerHTML = article.affiliate_products.map(product => `
      <div class="affiliate-product">
        <div class="affiliate-product-info">
          <h4>${product.name}</h4>
          <p>${product.description || ''}</p>
          <span class="affiliate-product-commission">Commission: ${product.commission}</span>
        </div>
        <a href="${product.url}" target="_blank" rel="noopener noreferrer sponsored" 
           class="btn btn--primary affiliate-link" 
           data-product="${product.name}">
          Voir l'Offre →
        </a>
      </div>
    `).join('');
    
    // Track affiliate clicks
    affiliateProducts.querySelectorAll('.affiliate-link').forEach(link => {
      link.addEventListener('click', (e) => {
        const productName = link.getAttribute('data-product');
        trackAffiliateClick(productName, link.href);
      });
    });
  } else {
    document.getElementById('affiliateBox').style.display = 'none';
  }
  
  // Render FAQ
  if (article.faq && article.faq.length > 0) {
    const faqSection = document.getElementById('faqSection');
    const faqList = document.getElementById('faqList');
    
    faqSection.style.display = 'block';
    faqList.innerHTML = article.faq.map((item, index) => `
      <div class="faq-item" data-faq-index="${index}">
        <div class="faq-question">
          <span>${item.q}</span>
          <span class="faq-toggle">+</span>
        </div>
        <div class="faq-answer">${item.a}</div>
      </div>
    `).join('');
    
    // Add FAQ toggle handlers
    faqList.querySelectorAll('.faq-item').forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
  } else {
    document.getElementById('faqSection').style.display = 'none';
  }
  
  // Render related articles
  renderRelatedArticles(article);
  
  // Show article detail section
  document.getElementById('articleDetail').style.display = 'block';
  document.querySelector('.featured-section').style.display = 'none';
  document.getElementById('blog').style.display = 'none';
  document.getElementById('products').style.display = 'none';
  document.getElementById('about').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Render related articles based on category and tags
 */
function renderRelatedArticles(currentArticle) {
  const container = document.getElementById('relatedArticles');
  if (!container) return;
  
  // Find related articles (same category, exclude current)
  const related = blogData
    .filter(article => 
      article.id !== currentArticle.id && 
      (article.category === currentArticle.category || 
       article.tags.some(tag => currentArticle.tags.includes(tag)))
    )
    .slice(0, 3);
  
  if (related.length === 0) {
    container.innerHTML = '<p>Aucun article connexe pour le moment.</p>';
    return;
  }
  
  container.innerHTML = related.map(article => `
    <article class="article-card">
      <img src="${article.image_cover}" alt="${article.title}" class="article-card-image" loading="lazy">
      <div class="article-card-content">
        <span class="article-card-category">${article.category}</span>
        <h3 class="article-card-title">${article.title}</h3>
        <p class="article-card-description">${article.description}</p>
        <div class="article-card-footer">
          <span>${formatDate(article.date)}</span>
          <a href="#article/${article.slug}" class="btn btn--sm btn--primary">Lire Plus</a>
        </div>
      </div>
    </article>
  `).join('');
}

/**
 * Render products grid
 */
function renderProducts() {
  const container = document.getElementById('productsGrid');
  if (!container) return;
  
  container.innerHTML = productsData.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
      <div class="product-content">
        <span class="product-category">${product.category}</span>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        
        ${product.pros && product.pros.length > 0 ? `
          <div class="product-pros-cons">
            <div class="product-pros">
              <h4>✓ Avantages</h4>
              <ul>
                ${product.pros.map(pro => `<li>${pro}</li>`).join('')}
              </ul>
            </div>
          </div>
        ` : ''}
        
        ${product.cons && product.cons.length > 0 ? `
          <div class="product-pros-cons">
            <div class="product-cons">
              <h4>✗ Inconvénients</h4>
              <ul>
                ${product.cons.map(con => `<li>${con}</li>`).join('')}
              </ul>
            </div>
          </div>
        ` : ''}
        
        <a href="${product.affiliate_link}" target="_blank" rel="noopener noreferrer sponsored" 
           class="btn btn--primary btn--full-width affiliate-link" 
           data-product="${product.name}">
          Voir l'Offre →
        </a>
      </div>
    </div>
  `).join('');
  
  // Track affiliate clicks
  container.querySelectorAll('.affiliate-link').forEach(link => {
    link.addEventListener('click', () => {
      const productName = link.getAttribute('data-product');
      trackAffiliateClick(productName, link.href);
    });
  });
}

/**
 * Render sidebar categories
 */
function renderCategories() {
  const container = document.getElementById('categoryList');
  if (!container) return;
  
  // Get unique categories with counts
  const categories = {};
  blogData.forEach(article => {
    categories[article.category] = (categories[article.category] || 0) + 1;
  });
  
  container.innerHTML = Object.entries(categories)
    .map(([category, count]) => `
      <li>
        <a href="#blog?category=${category}" class="category-link" data-category="${category}">
          <span>${category}</span>
          <span class="category-count">(${count})</span>
        </a>
      </li>
    `).join('');
  
  // Add click handlers
  container.querySelectorAll('.category-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const category = link.getAttribute('data-category');
      appState.currentFilters.category = category;
      appState.currentPage = 1;
      document.getElementById('categoryFilter').value = category;
      renderArticlesList();
      scrollToElement('#blog');
    });
  });
}

/**
 * Render popular articles in sidebar
 */
function renderPopularArticles() {
  const container = document.getElementById('popularArticles');
  if (!container) return;
  
  const popular = blogData.slice(0, 5);
  
  container.innerHTML = popular.map(article => `
    <div class="popular-article-item" data-slug="${article.slug}">
      <img src="${article.image_cover}" alt="${article.title}" class="popular-article-image" loading="lazy">
      <div class="popular-article-content">
        <h4 class="popular-article-title">${article.title}</h4>
        <time class="popular-article-date">${formatDate(article.date)}</time>
      </div>
    </div>
  `).join('');
  
  // Add click handlers
  container.querySelectorAll('.popular-article-item').forEach(item => {
    item.addEventListener('click', () => {
      const slug = item.getAttribute('data-slug');
      window.location.hash = `#article/${slug}`;
    });
  });
}

// ========================================
// NAVIGATION & ROUTING
// ========================================

/**
 * Handle hash-based routing
 */
function handleRoute() {
  const hash = window.location.hash.slice(1) || 'home';
  const [route, ...params] = hash.split('/');
  
  // Hide all sections first
  document.getElementById('articleDetail').style.display = 'none';
  document.querySelector('.featured-section').style.display = 'none';
  document.getElementById('blog').style.display = 'none';
  document.getElementById('products').style.display = 'none';
  document.getElementById('about').style.display = 'none';
  document.getElementById('contact').style.display = 'none';
  
  // Update navbar active state
  document.querySelectorAll('.navbar-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${route.split('?')[0]}`) {
      link.classList.add('active');
    }
  });
  
  // Route handling
  switch (route) {
    case 'home':
      document.querySelector('.featured-section').style.display = 'block';
      updateMetaTags({
        title: seoConfig.site_title,
        description: seoConfig.site_description,
        url: seoConfig.site_url,
        image: seoConfig.default_image
      });
      break;
      
    case 'blog':
      document.getElementById('blog').style.display = 'block';
      renderArticlesList();
      // Parse query params
      const urlParams = new URLSearchParams(hash.split('?')[1] || '');
      const category = urlParams.get('category');
      if (category) {
        appState.currentFilters.category = category;
        document.getElementById('categoryFilter').value = category;
        renderArticlesList();
      }
      break;
      
    case 'article':
      if (params.length > 0) {
        renderArticleDetail(params[0]);
      } else {
        window.location.hash = '#blog';
      }
      break;
      
    case 'products':
      document.getElementById('products').style.display = 'block';
      break;
      
    case 'about':
      document.getElementById('about').style.display = 'block';
      break;
      
    case 'contact':
      document.getElementById('contact').style.display = 'block';
      break;
      
    default:
      window.location.hash = '#home';
  }
}

// ========================================
// LEGAL PAGES
// ========================================

const legalContent = {
  privacy: {
    title: 'Politique de Confidentialité',
    content: `
      <h1>Politique de Confidentialité</h1>
      <p><em>Dernière mise à jour : 08 novembre 2025</em></p>
      
      <h2>1. Introduction</h2>
      <p>La présente Politique de Confidentialité décrit la façon dont Finance & Affiliation Blog ("nous", "notre") collecte, utilise et protège vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).</p>
      
      <h2>2. Données Collectées</h2>
      <p>Nous collectons les données suivantes :</p>
      <ul>
        <li><strong>Données de navigation</strong> : Pages visitées, durée de visite, source de trafic</li>
        <li><strong>Données de formulaire</strong> : Nom, email lors de l'inscription newsletter ou contact</li>
        <li><strong>Cookies</strong> : Cookies analytiques et publicitaires (avec votre consentement)</li>
      </ul>
      
      <h2>3. Utilisation des Données</h2>
      <p>Vos données sont utilisées pour :</p>
      <ul>
        <li>Améliorer votre expérience utilisateur</li>
        <li>Vous envoyer notre newsletter (avec votre consentement)</li>
        <li>Répondre à vos demandes de contact</li>
        <li>Analyser le trafic du site</li>
        <li>Afficher des publicités pertinentes</li>
      </ul>
      
      <h2>4. Base Légale du Traitement</h2>
      <p>Nous traitons vos données sur la base de :</p>
      <ul>
        <li>Votre consentement explicite</li>
        <li>Notre intérêt légitime à améliorer nos services</li>
        <li>L'exécution d'un contrat</li>
      </ul>
      
      <h2>5. Partage des Données</h2>
      <p>Nous partageons vos données avec :</p>
      <ul>
        <li><strong>Partenaires d'affiliation</strong> : Lorsque vous cliquez sur nos liens affiliés</li>
        <li><strong>Services tiers</strong> : Google Analytics, AdSense (avec anonymisation IP)</li>
        <li><strong>Hébergeur</strong> : Pour le fonctionnement technique du site</li>
      </ul>
      
      <h2>6. Vos Droits RGPD</h2>
      <p>Vous disposez des droits suivants :</p>
      <ul>
        <li><strong>Droit d'accès</strong> : Obtenir une copie de vos données</li>
        <li><strong>Droit de rectification</strong> : Corriger vos données inexactes</li>
        <li><strong>Droit à l'effacement</strong> : Supprimer vos données</li>
        <li><strong>Droit d'opposition</strong> : Vous opposer au traitement</li>
        <li><strong>Droit à la portabilité</strong> : Récupérer vos données</li>
        <li><strong>Droit de limitation</strong> : Limiter le traitement</li>
      </ul>
      
      <h2>7. Conservation des Données</h2>
      <p>Nous conservons vos données :</p>
      <ul>
        <li>Newsletter : Jusqu'à désinscription</li>
        <li>Formulaire de contact : 3 ans</li>
        <li>Cookies : Selon la durée de vie définie (max 13 mois)</li>
      </ul>
      
      <h2>8. Sécurité</h2>
      <p>Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données : chiffrement SSL, accès restreint, sauvegarde régulière.</p>
      
      <h2>9. Cookies</h2>
      <p>Consultez notre <a href="#" class="legal-link" data-page="cookies">Politique des Cookies</a> pour plus d'informations.</p>
      
      <h2>10. Contact</h2>
      <p>Pour exercer vos droits ou toute question : <a href="#contact">contact@finance-affiliate-blog.com</a></p>
    `
  },
  
  cookies: {
    title: 'Politique des Cookies',
    content: `
      <h1>Politique des Cookies</h1>
      <p><em>Dernière mise à jour : 08 novembre 2025</em></p>
      
      <h2>1. Qu'est-ce qu'un Cookie ?</h2>
      <p>Un cookie est un petit fichier texte stocké sur votre appareil lors de votre visite sur notre site. Les cookies nous aident à améliorer votre expérience et à analyser notre trafic.</p>
      
      <h2>2. Types de Cookies Utilisés</h2>
      
      <h3>Cookies Essentiels (Obligatoires)</h3>
      <p>Ces cookies sont nécessaires au fonctionnement du site :</p>
      <ul>
        <li>Gestion de session</li>
        <li>Sécurité</li>
        <li>Mémorisation du consentement cookies</li>
      </ul>
      
      <h3>Cookies Analytiques (Optionnels)</h3>
      <p>Avec votre consentement, nous utilisons :</p>
      <ul>
        <li><strong>Google Analytics</strong> : Analyse du trafic (IP anonymisée)</li>
        <li>Durée de conservation : 26 mois</li>
        <li>Finalité : Comprendre comment vous utilisez notre site</li>
      </ul>
      
      <h3>Cookies Publicitaires (Optionnels)</h3>
      <p>Avec votre consentement :</p>
      <ul>
        <li><strong>Google AdSense</strong> : Publicités personnalisées</li>
        <li><strong>Cookies d'affiliation</strong> : Suivi des conversions partenaires</li>
        <li>Durée de conservation : 13 mois maximum</li>
      </ul>
      
      <h2>3. Gérer vos Cookies</h2>
      <p>Vous pouvez à tout moment :</p>
      <ul>
        <li>Accepter ou refuser les cookies via notre bandeau</li>
        <li>Modifier vos préférences dans les paramètres de votre navigateur</li>
        <li>Supprimer les cookies existants</li>
      </ul>
      
      <h3>Paramètres Navigateur</h3>
      <ul>
        <li><strong>Chrome</strong> : Paramètres > Confidentialité et sécurité > Cookies</li>
        <li><strong>Firefox</strong> : Options > Vie privée et sécurité</li>
        <li><strong>Safari</strong> : Préférences > Confidentialité</li>
        <li><strong>Edge</strong> : Paramètres > Cookies et autorisations de site</li>
      </ul>
      
      <h2>4. Conséquences du Refus</h2>
      <p>Si vous refusez les cookies non essentiels :</p>
      <ul>
        <li>Le site reste fonctionnel</li>
        <li>Certaines fonctionnalités peuvent être limitées</li>
        <li>Les publicités seront moins pertinentes</li>
      </ul>
      
      <h2>5. Cookies Tiers</h2>
      <p>Nos partenaires peuvent déposer leurs propres cookies :</p>
      <ul>
        <li>Google Analytics : <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Politique Google</a></li>
        <li>Google AdSense : <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Publicités Google</a></li>
      </ul>
      
      <h2>6. Contact</h2>
      <p>Questions sur les cookies : <a href="#contact">contact@finance-affiliate-blog.com</a></p>
    `
  },
  
  terms: {
    title: 'Mentions Légales',
    content: `
      <h1>Mentions Légales</h1>
      
      <h2>1. Éditeur du Site</h2>
      <p>
        <strong>Finance & Affiliation Blog</strong><br>
        Siège social : [Adresse]<br>
        SIRET : [Numéro]<br>
        Email : contact@finance-affiliate-blog.com
      </p>
      
      <h2>2. Directeur de Publication</h2>
      <p>[Nom du directeur de publication]</p>
      
      <h2>3. Hébergeur</h2>
      <p>
        [Nom de l'hébergeur]<br>
        [Adresse]<br>
        [Téléphone]
      </p>
      
      <h2>4. Propriété Intellectuelle</h2>
      <p>L'ensemble du contenu de ce site (textes, images, vidéos, logos) est protégé par le droit d'auteur. Toute reproduction sans autorisation est interdite.</p>
      
      <h2>5. Liens d'Affiliation</h2>
      <p>Ce site contient des liens d'affiliation. Lorsque vous effectuez un achat via ces liens, nous percevons une commission sans frais supplémentaires pour vous. Cette rémunération nous permet de maintenir le site et de produire du contenu gratuit de qualité.</p>
      
      <h2>6. Responsabilité</h2>
      <p>Les informations fournies sur ce site sont à titre informatif. Nous nous efforçons de maintenir les informations à jour mais ne garantissons pas leur exactitude. Les décisions financières relèvent de votre responsabilité.</p>
      
      <h2>7. Données Personnelles</h2>
      <p>Consultez notre <a href="#" class="legal-link" data-page="privacy">Politique de Confidentialité</a> pour connaître la gestion de vos données personnelles.</p>
      
      <h2>8. Cookies</h2>
      <p>Consultez notre <a href="#" class="legal-link" data-page="cookies">Politique des Cookies</a>.</p>
      
      <h2>9. Droit Applicable</h2>
      <p>Le présent site est soumis au droit français. Tout litige relève de la compétence des tribunaux français.</p>
    `
  }
};

function showLegalModal(page) {
  const modal = document.getElementById('legalModal');
  const modalBody = document.getElementById('modalBody');
  
  if (legalContent[page]) {
    modalBody.innerHTML = legalContent[page].content;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeLegalModal() {
  const modal = document.getElementById('legalModal');
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

// ========================================
// COOKIE CONSENT
// ========================================

function showCookieBanner() {
  // Check if user already gave consent (using in-memory state)
  if (!appState.cookieConsent) {
    document.getElementById('cookieBanner').style.display = 'block';
  }
}

function acceptCookies() {
  appState.cookieConsent = true;
  document.getElementById('cookieBanner').style.display = 'none';
  console.log('[Analytics] Cookies accepted - Initialize tracking');
  // In production: Initialize Google Analytics, AdSense, etc.
}

function rejectCookies() {
  appState.cookieConsent = false;
  document.getElementById('cookieBanner').style.display = 'none';
  console.log('[Analytics] Cookies rejected - No tracking');
}

// ========================================
// FORM HANDLERS
// ========================================

/**
 * Handle newsletter subscription
 */
function handleNewsletterSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const emailInput = form.querySelector('input[type="email"]');
  const email = emailInput.value;
  
  // Validation
  if (!email || !email.includes('@')) {
    alert('Veuillez entrer une adresse email valide.');
    return;
  }
  
  // Store in memory (in production: send to API)
  appState.newsletterSubscribers.push({ email, date: new Date().toISOString() });
  
  // Success feedback
  alert('Merci pour votre inscription ! Vous recevrez nos prochaines newsletters.');
  form.reset();
  
  console.log('[Newsletter] New subscriber:', email);
  // In production: Send to email service (Mailchimp, SendGrid, etc.)
}

/**
 * Handle contact form submission
 */
function handleContactSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const name = document.getElementById('contactName').value;
  const email = document.getElementById('contactEmail').value;
  const subject = document.getElementById('contactSubject').value;
  const message = document.getElementById('contactMessage').value;
  const messageDiv = document.getElementById('contactFormMessage');
  
  // Validation
  if (!name || !email || !subject || !message) {
    messageDiv.textContent = 'Veuillez remplir tous les champs.';
    messageDiv.className = 'form-message error';
    messageDiv.style.display = 'block';
    return;
  }
  
  if (!email.includes('@')) {
    messageDiv.textContent = 'Veuillez entrer une adresse email valide.';
    messageDiv.className = 'form-message error';
    messageDiv.style.display = 'block';
    return;
  }
  
  // In production: Send to API endpoint
  console.log('[Contact Form] Submission:', { name, email, subject, message });
  
  // Success feedback
  messageDiv.textContent = 'Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.';
  messageDiv.className = 'form-message success';
  messageDiv.style.display = 'block';
  
  // Reset form
  form.reset();
  
  // Hide message after 5 seconds
  setTimeout(() => {
    messageDiv.style.display = 'none';
  }, 5000);
}

// ========================================
// FILTER HANDLERS
// ========================================

function handleCategoryFilter(e) {
  appState.currentFilters.category = e.target.value;
  appState.currentPage = 1;
  renderArticlesList();
}

const handleSearchInput = debounce((e) => {
  appState.currentFilters.search = e.target.value;
  appState.currentPage = 1;
  renderArticlesList();
}, 300);

// ========================================
// NAVIGATION HANDLERS
// ========================================

function handleNavToggle() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
}

// ========================================
// INITIALIZATION
// ========================================

function init() {
  console.log('[App] Initializing Finance Affiliate Blog...');
  
  // Render initial content
  renderFeaturedArticles();
  renderArticlesList();
  renderProducts();
  renderCategories();
  renderPopularArticles();
  
  // Setup event listeners
  
  // Navigation
  window.addEventListener('hashchange', handleRoute);
  document.getElementById('navToggle').addEventListener('click', handleNavToggle);
  
  // Filters
  document.getElementById('categoryFilter').addEventListener('change', handleCategoryFilter);
  document.getElementById('searchInput').addEventListener('input', handleSearchInput);
  
  // Forms
  document.getElementById('newsletterForm').addEventListener('submit', handleNewsletterSubmit);
  document.getElementById('contactForm').addEventListener('submit', handleContactSubmit);
  
  // Legal links
  document.querySelectorAll('.legal-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = link.getAttribute('data-page');
      showLegalModal(page);
    });
  });
  
  // Modal close
  document.getElementById('modalClose').addEventListener('click', closeLegalModal);
  document.getElementById('modalOverlay').addEventListener('click', closeLegalModal);
  
  // Cookie consent
  document.getElementById('acceptCookies').addEventListener('click', acceptCookies);
  document.getElementById('rejectCookies').addEventListener('click', rejectCookies);
  
  // Show cookie banner after delay
  setTimeout(showCookieBanner, 1000);
  
  // Handle initial route
  handleRoute();
  
  console.log('[App] Initialization complete!');
  console.log('[SEO] Sitemap available at: /sitemap.xml');
  console.log('[SEO] Robots.txt available at: /robots.txt');
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ========================================
// EXPORT FOR TESTING (if needed)
// ========================================

// Expose functions for potential external use or testing
window.FinanceBlogApp = {
  renderArticleDetail,
  updateMetaTags,
  trackAffiliateClick,
  blogData,
  productsData,
  seoConfig
};