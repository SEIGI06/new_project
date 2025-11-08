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

Cloner le repository
git clone https://github.com/SEIGI06/new_project.git
cd new_project

Installer les dépendances
npm install

Copier le fichier d'environnement
cp .env.example .env.local

Lancer en mode développement
npm run dev

text

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du Projet

new_project/
├── app/ # Next.js App Router (pages et routes)
├── components/ # Composants React réutilisables
├── lib/ # Logique métier et utilitaires
├── data/ # Données JSON (articles, produits, config)
├── styles/ # Styles globaux
├── public/ # Assets statiques
└── types/ # Types TypeScript

text

## 🚀 Scripts Disponibles

npm run dev # Développement (port 3000)
npm run build # Build production
npm start # Lancer en production
npm run lint # Linter le code

text

## 📝 Ajouter un Article de Blog

1. Éditez `data/blog-posts.json`
2. Ajoutez votre article avec la structure suivante :

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

text

## 🚀 Déploiement

### Vercel (Recommandé)

Le plus simple : connectez votre repo GitHub à Vercel.

### Netlify

Le site est déjà configuré pour Netlify. Connectez simplement votre repo GitHub.

### Docker

docker build -t affiliate-blog .
docker run -p 3000:3000 affiliate-blog

text

## 🎯 SEO

Le site inclut automatiquement :

- ✅ Meta tags optimisés pour chaque page
- ✅ Open Graph et Twitter Cards
- ✅ JSON-LD Schema (BlogPosting, Organization, Breadcrumb)
- ✅ Sitemap XML généré dynamiquement
- ✅ Robots.txt optimisé
- ✅ Images optimisées (next/image)

## 📊 Google AdSense

Le site est pré-configuré avec des emplacements AdSense optimisés :

- Header (bannière 728x90)
- Sidebar (rectangles 300x250)
- In-content (articles de blog)
- Footer

Modifiez `NEXT_PUBLIC_ADSENSE_ID` dans `.env.local` avec votre ID AdSense.

## 📄 Pages Incluses

- 🏠 **Accueil** : Hero section, articles récents, produits phares
- 📝 **Blog** : Liste des articles avec filtres par catégorie
- 📄 **Articles** : Pages individuelles avec SEO optimisé
- 🛍️ **Produits** : Comparatifs et reviews de produits d'affiliation
- ℹ️ **À propos** : Présentation du site
- 📧 **Contact** : Formulaire de contact fonctionnel
- 🔒 **Confidentialité** : Politique de confidentialité RGPD
- 🍪 **Cookies** : Politique de cookies

## 🔧 Configuration

Créez un fichier `.env.local` à la racine avec vos variables :

NEXT_PUBLIC_SITE_URL=https://votresite.com
NEXT_PUBLIC_SITE_NAME=Votre Site
NEXT_PUBLIC_ADSENSE_ID=ca-pub-XXXXXXXXXX
EMAIL_USER=votre-email@gmail.com
EMAIL_PASS=votre-mot-de-passe-app

text

## 🎨 Personnalisation

### Couleurs

Modifiez `tailwind.config.js` pour changer les couleurs :

colors: {
primary: '#2563eb', // Bleu principal
accent: '#f59e0b', // Orange accent
}

text

### Logo

Remplacez `public/images/logo.svg` par votre logo.

## 📚 Technologies Utilisées

- [Next.js 14](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Typage statique
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [React](https://react.dev/) - Bibliothèque UI

## 📄 Licence

MIT © 2025

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📞 Support

Pour toute question, ouvrez une issue sur GitHub.

---

Fait avec ❤️ pour les créateurs de contenu et marketeurs affiliés
