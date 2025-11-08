# 🚀 Site Web d'Affiliation et Blog Next.js

Site professionnel optimisé SEO construit avec **Next.js 14**, **TypeScript** et **Tailwind CSS**.

## ✨ Fonctionnalités

- ⚡ **Next.js 14 App Router** avec Server Components
- 📱 **Design responsive** mobile-first
- 🎨 **Tailwind CSS** pour le styling moderne
- 🔍 **SEO optimisé** : meta tags, JSON-LD, sitemap dynamique, robots.txt
- 📝 **Système de blog** complet avec catégories et tags
- 💰 **Intégration liens d'affiliation** avec tracking
- 📊 **Prêt pour Google AdSense** (emplacements optimisés)
- 🌐 **Support multi-langues** (i18n ready)
- ⚙️ **TypeScript** pour la sécurité des types
- 🐳 **Docker ready** pour déploiement

## 🛠️ Installation

\`\`\`bash
# Cloner le repository
git clone https://github.com/SEIGI06/new_project.git
cd new_project

# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env.local

# Lancer en mode développement
npm run dev
\`\`\`

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du Projet

\`\`\`
new_project/
├── app/              # Next.js App Router (pages et routes)
├── components/       # Composants React réutilisables
├── lib/             # Logique métier et utilitaires
├── data/            # Données JSON (articles, produits, config)
├── styles/          # Styles globaux
├── public/          # Assets statiques
└── types/           # Types TypeScript
\`\`\`

## 🚀 Scripts Disponibles

\`\`\`bash
npm run dev       # Développement (port 3000)
npm run build     # Build production
npm start         # Lancer en production
npm run lint      # Linter le code
\`\`\`

## 📝 Ajouter un Article de Blog

1. Éditez \`data/blog-posts.json\`
2. Ajoutez votre article avec la structure suivante :

\`\`\`json
{
  "slug": "mon-article",
  "title": "Titre de l'article",
  "excerpt": "Résumé court",
  "content": "Contenu complet...",
  "category": "finance",
  "tags": ["investissement", "épargne"],
  "image": "/images/article.jpg",
  "date": "2025-11-08"
}
\`\`\`

## 🚀 Déploiement

### Vercel (Recommandé)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Netlify
Le site est déjà configuré pour Netlify. Connectez simplement votre repo GitHub.

### Docker
\`\`\`bash
docker build -t affiliate-blog .
docker run -p 3000:3000 affiliate-blog
\`\`\`

## 🎯 SEO

Le site inclut automatiquement :
- ✅ Meta tags optimisés pour chaque page
- ✅ Open Graph et Twitter Cards
- ✅ JSON-LD Schema (BlogPosting, Organization, Breadcrumb)
- ✅ Sitemap XML généré dynamiquement
- ✅ Robots.txt optimisé
- ✅ Images optimisées (next/image)

## 📄 Licence

MIT © 2025

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.
\`\`\`

### **8. `Dockerfile`**
