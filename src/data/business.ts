// Datos del taller. Cambia aquí y se actualiza en toda la web.

export const name = 'Autotalleres Carmovil';
export const foundedYear = 1991;
export const foundingDate = '1991-08-06';

// Dominio de la web (sin barra final). También está en astro.config.mjs (site).
export const siteUrl = 'https://autotallerescarmovil.es';

export const address = {
	street: 'C/ La Fragua 12',
	city: 'Tres Cantos, Madrid',
	postalCode: '28760',
	locality: 'Tres Cantos',
	region: 'Madrid',
	country: 'ES',
};

// Coordenadas del taller para Google (en Maps: clic derecho sobre el taller → copiar coordenadas).
// Déjalo en null si no las tienes.
export const geo: { latitude: number; longitude: number } | null = null;

// Zonas desde las que suelen venir clientes. Salen en la home y en los datos para Google.
export const areasServed = [
	'Tres Cantos',
	'Colmenar Viejo',
	'Soto de Viñuelas',
	'Alcobendas',
	'San Sebastián de los Reyes',
	'Madrid norte',
];
export const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Autotalleres+Carmovil+C%2F+La+Fragua+12+Tres+Cantos';
export const mapsEmbedUrl = 'https://www.google.com/maps?q=C%2F+La+Fragua+12,+Tres+Cantos,+Madrid&output=embed';

export const phone = '91 803 43 53';
export const phoneHref = 'tel:+34918034353';

// Déjalo vacío ('') para no mostrarlo.
export const email = 'info@autotallerescarmovil.es';

// Horario. Cada fila tiene uno o varios tramos; sin tramos se muestra "Cerrado".
export const hours = [
	{ days: 'Lunes a jueves', times: ['8:00 – 14:00', '15:00 – 18:00'] },
	{ days: 'Viernes', times: ['8:00 – 15:00'] },
	{ days: 'Fin de semana', times: [] },
];

// El mismo horario en el formato que entiende Google. Si cambias el de arriba, cambia también este.
export const openingHoursSpecification = [
	{ dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '08:00', closes: '14:00' },
	{ dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '15:00', closes: '18:00' },
	{ dayOfWeek: ['Friday'], opens: '08:00', closes: '15:00' },
];

// Fichas del taller en otras webs (Google las usa para confirmar que es el mismo negocio).
export const googleProfileUrl = 'https://maps.app.goo.gl/gKEygdNWA8ns4R299';
export const cgaUrl = 'https://tallerescga.com/taller/autotalleres-carmovil';
export const asetraUrl = 'https://asetramadrid.com/autotalleres-carmovilsl/';
// Déjalo vacío ('') para no enlazar.
export const petronasUrl = '';
