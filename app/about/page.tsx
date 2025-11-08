import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos',
  description: 'Découvrez notre équipe et notre mission',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          À propos de nous
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 text-center">
            Notre mission est de vous aider à prendre les meilleures décisions financières.
          </p>

          <h2>Qui sommes-nous ?</h2>
          <p>
            Nous sommes une équipe passionnée par la finance personnelle et l'investissement.
            Notre objectif est de démocratiser l'accès à l'information financière de qualité
            et d'aider chacun à optimiser sa situation financière.
          </p>

          <h2>Notre mission</h2>
          <p>
            Nous créons du contenu éducatif, des comparatifs objectifs et des guides pratiques
            pour vous permettre de :
          </p>
          <ul>
            <li>Mieux gérer votre budget</li>
            <li>Optimiser votre épargne</li>
            <li>Investir intelligemment</li>
            <li>Choisir les meilleurs produits financiers</li>
          </ul>

          <h2>Nos valeurs</h2>
          <ul>
            <li><strong>Transparence</strong> : Nous indiquons clairement nos liens d'affiliation</li>
            <li><strong>Objectivité</strong> : Nos avis sont indépendants et basés sur des recherches approfondies</li>
            <li><strong>Qualité</strong> : Nous vérifions toutes nos informations</li>
            <li><strong>Accessibilité</strong> : Un contenu clair et compréhensible par tous</li>
          </ul>

          <h2>Divulgation</h2>
          <p>
            Ce site contient des liens d'affiliation. Lorsque vous cliquez sur certains liens
            et effectuez un achat, nous pouvons recevoir une commission
