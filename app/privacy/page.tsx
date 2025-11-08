import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Notre politique de confidentialité et protection des données',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Politique de confidentialité</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>

          <h2>1. Introduction</h2>
          <p>
            La présente politique de confidentialité décrit comment nous collectons, utilisons,
            stockons et protégeons vos données personnelles conformément au Règlement Général
            sur la Protection des Données (RGPD).
          </p>

          <h2>2. Données collectées</h2>
          <p>Nous collectons les types de données suivants :</p>
          <ul>
            <li><strong>Données de navigation :</strong> Adresse IP, type de navigateur, pages visitées</li>
            <li><strong>Cookies :</strong> Cookies analytiques et de préférence</li>
            <li><strong>Formulaires :</strong> Nom, email (formulaire de contact et newsletter)</li>
          </ul>

          <h2>3. Utilisation des données</h2>
          <p>Vos données sont utilisées pour :</p>
          <ul>
            <li>Améliorer votre expérience utilisateur</li>
            <li>Répondre à vos demandes de contact</li>
            <li>Vous envoyer notre newsletter (avec votre consentement)</li>
            <li>Analyser le trafic du site (Google Analytics)</li>
          </ul>

          <h2>4. Cookies</h2>
          <p>
            Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez gérer
            vos préférences de cookies sur notre <a href="/cookies">page cookies</a>.
          </p>

          <h2>5. Partage des données</h2>
          <p>Nous ne vendons jamais vos données personnelles. Vos données peuvent être partagées avec :</p>
          <ul>
            <li><strong>Google Analytics :</strong> Pour analyser le trafic (données anonymisées)</li>
            <li><strong>Google AdSense :</strong> Pour afficher des publicités pertinentes</li>
          </ul>

          <h2>6. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul>
            <li>Droit d'accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l'effacement ("droit à l'oubli")</li>
            <li>Droit à la portabilité</li>
            <li>Droit d'opposition</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous via notre{' '}
            <a href="/contact">formulaire de contact</a>.
          </p>

          <h2>7. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles
            pour protéger vos données contre tout accès non autorisé, perte ou divulgation.
          </p>

          <h2>8. Conservation des données</h2>
          <p>
            Vos données sont conservées uniquement le temps nécessaire aux finalités pour
            lesquelles elles ont été collectées, conformément à la législation en vigueur.
          </p>

          <h2>9. Liens d'affiliation</h2>
          <p>
            Ce site contient des liens d'affiliation. Lorsque vous cliquez sur ces liens,
            des cookies tiers peuvent être déposés pour le suivi des commissions.
          </p>

          <h2>10. Modifications</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité.
            Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour.
          </p>

          <h2>11. Contact</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité, contactez-nous :
          </p>
          <ul>
            <li>Email : contact@votresite.com</li>
            <li>Formulaire : <a href="/contact">Page contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
