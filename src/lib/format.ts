export const EUR = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' });

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });
}
