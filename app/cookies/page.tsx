import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique des cookies',
  description: 'Informations sur l\'utilisation des cookies sur notre site',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Politique des cookies</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <h2>Qu'est-ce qu'un cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte stocké sur votre appareil lorsque vous visitez
            un site web. Les cookies permettent au site de mémoriser vos actions et préférences.
          </p>

          <h2>Types de cookies utilisés</h2>

          <h3>1. Cookies strictement nécessaires</h3>
          <p>
            Ces cookies sont essentiels au fonctionnement du site. Ils ne peuvent pas être désactivés.
          </p>
          <ul>
            <li>Cookies de session</li>
            <li>Cookies de sécurité</li>
          </ul>

          <h3>2. Cookies de performance</h3>
          <p>
            Ces cookies collectent des informations sur la façon dont vous utilisez notre site.
          </p>
          <ul>
            <li><strong>Google Analytics :</strong> Analyse du trafic et du comportement des visiteurs</li>
            <li>Durée de conservation : 24 mois</li>
          </ul>

          <h3>3. Cookies de publicité</h3>
          <p>
            Ces cookies sont utilisés pour afficher des publicités pertinentes.
          </p>
          <ul>
            <li><strong>Google AdSense :</strong> Affichage de publicités personnalisées</li>
            <li>Durée de conservation : Variable selon le fournisseur</li>
          </ul>

          <h3>4. Cookies de liens d'affiliation</h3>
          <p>
            Ces cookies suivent les clics sur nos liens d'affiliation pour nous permettre
            de recevoir une commission.
          </p>

          <h2>Gestion des cookies</h2>
          <p>Vous pouvez gérer vos préférences de cookies de plusieurs façons :</p>

          <h3>Via votre navigateur</h3>
          <ul>
            <li><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
            <li><strong>Firefox :</strong> Options → Vie privée et sécurité → Cookies</li>
            <li><strong>Safari :</strong> Préférences → Confidentialité</li>
            <li><strong>Edge :</strong> Paramètres → Cookies et autorisations de site</li>
          </ul>

          <h3>Outils de gestion</h3>
          <p>Vous pouvez également utiliser ces outils :</p>
          <ul>
            <li>
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                Module de désactivation Google Analytics
              </a>
            </li>
            <li>
              <a href="https://www.youronlinechoices.com/fr/" target="_blank" rel="noopener noreferrer">
                Your Online Choices
              </a>
            </li>
          </ul>

          <h2>Conséquences du refus des cookies</h2>
          <p>
            Si vous refusez les cookies non essentiels, certaines fonctionnalités du site
            peuvent être limitées, mais la navigation reste possible.
          </p>

          <h2>Cookies tiers</h2>
          <p>Certains cookies proviennent de services tiers :</p>
          <ul>
            <li><strong>Google Analytics :</strong> Pour l'analyse d'audience</li>
            <li><strong>Google AdSense :</strong> Pour la publicité</li>
            <li><strong>Partenaires d'affiliation :</strong> Pour le suivi des commissions</li>
          </ul>
          <p>
            Ces services ont leurs propres politiques de confidentialité. Nous vous invitons
            à les consulter pour plus d'informations.
          </p>

          <h2>Mises à jour</h2>
          <p>
            Cette politique peut être mise à jour pour refléter les changements dans nos pratiques
            ou la législation. La date de dernière mise à jour est indiquée en haut de cette page.
          </p>

          <h2>Contact</h2>
          <p>
            Pour toute question sur notre utilisation des cookies :{' '}
            <a href="/contact">contactez-nous</a>.
          </p>
        </div>
      </div>
    </div>
  );
}


