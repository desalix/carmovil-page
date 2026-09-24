// Datos del taller. Cambia aquí y se actualiza en toda la web.

export const name = 'Autotalleres Carmovil';
export const foundedYear = 1991;

export const address = {
	street: 'C/ La Fragua 12',
	city: 'Tres Cantos, Madrid',
};
export const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Autotalleres+Carmovil+C%2F+La+Fragua+12+Tres+Cantos';
export const mapsEmbedUrl = 'https://www.google.com/maps?q=C%2F+La+Fragua+12,+Tres+Cantos,+Madrid&output=embed';

export const phone = '91 803 43 53';
export const phoneHref = 'tel:+34918034353';

// Déjalo vacío ('') para no mostrarlo.
export const email = '';

// Horario. Cada fila tiene uno o varios tramos; sin tramos se muestra "Cerrado".
export const hours = [
	{ days: 'Lunes a jueves', times: ['8:00 – 14:00', '15:00 – 18:00'] },
	{ days: 'Viernes', times: ['8:00 – 15:00'] },
	{ days: 'Fin de semana', times: [] },
];
