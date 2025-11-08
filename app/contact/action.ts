'use server';

import { redirect } from 'next/navigation';

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  // Validation basique
  if (!name || !email || !subject || !message) {
    throw new Error('Tous les champs sont obligatoires');
  }

  // TODO: Implémenter l'envoi d'email
  // Exemple avec nodemailer, SendGrid, etc.
  console.log('Contact form submission:', {
    name,
    email,
    subject,
    message,
    date: new Date().toISOString(),
  });

  // Rediriger après succès
  redirect('/contact?success=true');
}
