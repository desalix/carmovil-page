// Reseñas de Google elegidas a mano. Salen en la home, en este orden.
// date: tal como sale en Google ("hace 7 meses"). No se actualiza solo: revísalo de vez en cuando.
// url: enlace a la reseña en Google Maps (en Maps: la reseña → Compartir → Copiar enlace).

export interface Review {
	author: string;
	rating: 1 | 2 | 3 | 4 | 5;
	date: string;
	url: string;
	text: string;
}

// Perfil del taller en Google Maps, para "Ver todas las reseñas".
export { googleProfileUrl } from './business';

// Nota media y número total de reseñas en Google, tal como salen en el perfil. Revísalo de vez en cuando.
// Déjalo en null para no mostrarlo.
export const googleRating: { value: number; count: number } | null = null;

export const reviews: Review[] = [
	{
		author: 'Ana Belén Rincón Castejón',
		rating: 5,
		date: 'hace 7 meses',
		url: 'https://www.google.com/maps/contrib/111304137524767990558/reviews?hl=es',
		text: '100% recomendable.\nNunca había ido y tenía una urgencia (cambiar una bombilla para pasar la ITV) y llegué súper tarde, una hora antes de que cierren. Me atendieron super amables, y fueron super rápidos y eficientes. Volveré seguro. Muchas gracias!!!',
	},
	{
		author: 'Juan Navarro',
		rating: 5,
		date: 'hace 5 meses',
		url: 'https://www.google.com/maps/contrib/100790852307004709423/reviews?hl=es',
		text: 'Buen servicio y fiabilidad. Te explican las reparaciones y tienes oportunidad de verificar y llevarte la pieza cambiada. Hace años una avería similar y, entonces, el servicio oficial de la marca tardó días en diagnosticar y reparar. Aquí, en cambio, han ido muy rápido.',
	},
	{
		author: 'Dania Diez',
		rating: 5,
		date: 'hace 10 meses',
		url: 'https://www.google.com/maps/contrib/106120542111372331083/reviews?hl=es',
		text: 'Desde el primer momento me atendieron con amabilidad y transparencia. El equipo es muy profesional, explican todo con claridad. Son rápidos y mi coche quedó perfecto. Los precios son justos y el trato al cliente es impecable. Se nota que les importa hacer bien su trabajo y que el cliente quede satisfecho. Sin duda, lo recomendaría a cualquiera que busque un taller de confianza.',
	},
	{
		author: 'Antonio San Juan',
		rating: 5,
		date: 'hace un año',
		url: 'https://www.google.com/maps/contrib/116827792910993856216/reviews?hl=es',
		text: 'Un taller de diez. El trato fue cercano y muy profesional, me explicaron todo con claridad y el precio fue muy bueno. Da gusto encontrar talleres donde se nota que saben lo que hacen y lo hacen muy bien. Sin duda volveré cada vez que mi coche lo necesite. 100% recomendable.',
	},
	{
		author: 'Pio Daniel Morales',
		rating: 4,
		date: 'hace 5 años',
		url: 'https://www.google.com/maps/contrib/112554643138531188214/reviews?hl=es',
		text: 'Llevo casi 30 años siendo cliente de este taller, es pequeño, pero con personal dispuesto a ayudar al cliente, entre ellos José y Juan mecánicos y en administración Sandra. No es un taller de lujo en el que pagas según entras, es un taller que yo lo pondría como muy familiar. Me gusta por los trabajos que realizan y por la empatía en el trato personal.',
	},
	{
		author: 'Maribel Alameda',
		rating: 5,
		date: 'hace 2 años',
		url: 'https://www.google.com/maps/contrib/107470230470951711649/reviews?hl=es',
		text: 'Vine recomendada por una amiga y los casi tres años que llevo con ellos estoy encantada. Siempre atentos y muy buenos profesionales. Mi coche está mejor q nunca de atendido y revisado.\nRecomendable. Gracias por todo chicos y chicas de la recepción. Sois maravillosos.',
	},
	{
		author: 'Oscar Javier Sanchez Linares',
		rating: 5,
		date: 'hace 5 meses',
		url: 'https://www.google.com/maps/contrib/108712849202954731184/reviews?hl=es',
		text: 'Como siempre muy contento con el servicio de reparación. Muy amables, tratan de darte cita lo antes posible y siempre me resuelven todos los problemas del coche.',
	},
];
