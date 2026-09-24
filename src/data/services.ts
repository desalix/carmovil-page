// Servicios del taller. Cada uno tiene su propia página en /servicios/<slug>.
// El slug es la URL: usa las palabras que la gente busca en Google, en minúsculas y con guiones.

export interface Service {
	slug: string;
	title: string;
	// Frase corta para listados (home y /servicios).
	summary: string;
	// Texto para la descripción de Google (máx. ~155 caracteres).
	metaDescription: string;
	intro: string;
	includes: string[];
	whenToCome: string[];
}

export const services: Service[] = [
	{
		slug: 'cambio-de-aceite',
		title: 'Cambio de aceite',
		summary: 'Aceite y filtros adecuados para tu motor, según el plan del fabricante.',
		metaDescription:
			'Cambio de aceite y filtros en Tres Cantos. Usamos el aceite que indica el fabricante de tu coche. Taller multimarca desde 1991.',
		intro:
			'Cambiamos el aceite y los filtros con el tipo y la cantidad que indica el fabricante de tu coche, y dejamos anotado el cambio para la próxima revisión.',
		includes: [
			'Vaciado del aceite usado y relleno con aceite nuevo',
			'Cambio del filtro de aceite',
			'Revisión y cambio, si hace falta, de los filtros de aire, habitáculo y combustible',
			'Comprobación de niveles: refrigerante, frenos y limpiaparabrisas',
			'Puesta a cero del indicador de mantenimiento',
		],
		whenToCome: [
			'Cuando se enciende el aviso de mantenimiento del cuadro',
			'Cuando se cumplen los kilómetros o el tiempo del plan del fabricante',
			'Si el nivel de aceite baja entre cambios',
		],
	},
	{
		slug: 'revisiones-y-mantenimiento',
		title: 'Revisiones y mantenimiento',
		summary: 'Niveles, filtros y elementos de desgaste, dentro y fuera del periodo de garantía.',
		metaDescription:
			'Revisiones y mantenimiento del coche en Tres Cantos, dentro y fuera del periodo de garantía. Taller multimarca desde 1991.',
		intro:
			'Hacemos las revisiones que marca el fabricante, dentro y fuera del periodo de garantía, y te avisamos de lo que conviene cambiar antes de que dé problemas.',
		includes: [
			'Revisión según el plan de mantenimiento del fabricante',
			'Comprobación de niveles y filtros',
			'Revisión de elementos de desgaste: frenos, neumáticos, correas y amortiguadores',
			'Informe de lo que está bien y de lo que conviene cambiar',
		],
		whenToCome: [
			'Cuando toca la revisión anual o por kilómetros',
			'Antes de un viaje largo',
			'Si has comprado un coche de segunda mano y no conoces su historial',
		],
	},
	{
		slug: 'pre-itv',
		title: 'PRE-ITV',
		summary: 'Revisamos el coche antes de la inspección para que no haya sorpresas.',
		metaDescription:
			'Revisión PRE-ITV en Tres Cantos. Comprobamos tu coche antes de la inspección y reparamos lo necesario para que pase a la primera.',
		intro:
			'Revisamos los mismos puntos que se miran en la ITV y reparamos lo que haga falta, para que pases la inspección a la primera.',
		includes: [
			'Luces, intermitentes y señalización',
			'Frenos y suspensión',
			'Neumáticos y dirección',
			'Emisiones y posibles fugas',
			'Limpiaparabrisas, cinturones y elementos de seguridad',
		],
		whenToCome: [
			'Unos días antes de tu cita en la ITV',
			'Si la ITV anterior salió desfavorable',
			'Si el coche tiene algún testigo encendido en el cuadro',
		],
	},
	{
		slug: 'diagnostico-de-averias',
		title: 'Diagnóstico de averías',
		summary: 'Maquinaria de diagnosis para localizar el fallo antes de cambiar ninguna pieza.',
		metaDescription:
			'Diagnóstico de averías en Tres Cantos con maquinaria de diagnosis. Localizamos el fallo antes de cambiar ninguna pieza.',
		intro:
			'Conectamos el coche a nuestra maquinaria de diagnosis para encontrar el origen del fallo. Te explicamos qué pasa y cuánto cuesta arreglarlo antes de tocar nada.',
		includes: [
			'Lectura de códigos de avería de las centralitas',
			'Comprobación de sensores y actuadores',
			'Prueba del coche para reproducir el fallo',
			'Presupuesto de la reparación antes de empezar',
		],
		whenToCome: [
			'Si se enciende un testigo en el cuadro',
			'Si el coche pierde potencia, tironea o consume más de lo normal',
			'Si notas ruidos, olores o vibraciones nuevas',
		],
	},
	{
		slug: 'electricidad-y-electronica',
		title: 'Electricidad y electrónica',
		summary: 'Averías eléctricas y electrónicas del vehículo.',
		metaDescription:
			'Reparación de averías eléctricas y electrónicas del coche en Tres Cantos: batería, arranque, carga, luces y centralitas.',
		intro:
			'Localizamos y reparamos averías eléctricas y electrónicas, desde una batería que no carga hasta fallos de centralitas y sensores.',
		includes: [
			'Baterías, arranque y sistema de carga',
			'Luces y cableado',
			'Sensores y centralitas',
			'Elevalunas, cierre centralizado y otros equipos eléctricos',
		],
		whenToCome: [
			'Si al coche le cuesta arrancar',
			'Si falla alguna luz o equipo eléctrico',
			'Si aparecen avisos eléctricos en el cuadro',
		],
	},
	{
		slug: 'inyeccion-diesel-y-gasolina',
		title: 'Inyección diésel y gasolina',
		summary: 'Diagnóstico y reparación del sistema de inyección.',
		metaDescription:
			'Reparación de inyección diésel y gasolina en Tres Cantos. Diagnóstico de inyectores y del sistema de alimentación.',
		intro:
			'Diagnosticamos y reparamos el sistema de inyección de motores diésel y gasolina, para que el motor recupere su potencia y su consumo normal.',
		includes: [
			'Diagnóstico del sistema de inyección',
			'Comprobación y sustitución de inyectores',
			'Revisión de la alimentación de combustible',
			'Cambio de filtros de combustible',
		],
		whenToCome: [
			'Si el motor pierde potencia o tironea',
			'Si sale humo negro o blanco por el escape',
			'Si el consumo ha subido sin motivo',
		],
	},
	{
		slug: 'frenos',
		title: 'Frenos',
		summary: 'Pastillas, discos y líquido de frenos.',
		metaDescription:
			'Cambio de pastillas, discos y líquido de frenos en Tres Cantos. Revisamos todo el sistema de frenado de tu coche.',
		intro: 'Revisamos todo el sistema de frenado y cambiamos las piezas gastadas para que el coche frene como debe.',
		includes: [
			'Cambio de pastillas y discos',
			'Cambio del líquido de frenos',
			'Revisión de pinzas, latiguillos y freno de mano',
		],
		whenToCome: [
			'Si oyes chirridos o roces al frenar',
			'Si el pedal está blando o va muy abajo',
			'Si el volante vibra al frenar',
			'Si se enciende el testigo de frenos',
		],
	},
	{
		slug: 'mecanica-general',
		title: 'Mecánica general',
		summary: 'Desde el mantenimiento diario hasta reparaciones complejas.',
		metaDescription:
			'Taller de mecánica general en Tres Cantos. Reparaciones de motor, embrague, distribución y suspensión en coches de todas las marcas.',
		intro:
			'Reparamos coches de todas las marcas, desde el mantenimiento diario hasta las reparaciones más complejas.',
		includes: ['Motor y distribución', 'Embrague', 'Suspensión y dirección', 'Refrigeración', 'Escape'],
		whenToCome: [
			'Si notas ruidos o vibraciones que antes no estaban',
			'Si el coche pierde líquido',
			'Si el embrague patina o cuesta meter las marchas',
		],
	},
	{
		slug: 'coches-hibridos',
		title: 'Coches híbridos',
		summary: 'También reparamos y mantenemos vehículos híbridos.',
		metaDescription:
			'Mantenimiento y reparación de coches híbridos en Tres Cantos. Taller multimarca con experiencia en vehículos híbridos.',
		intro: 'Hacemos el mantenimiento y las reparaciones de coches híbridos, igual que de los de combustión.',
		includes: [
			'Revisiones según el plan del fabricante',
			'Mantenimiento del motor de combustión',
			'Diagnóstico de averías',
			'Frenos, suspensión y resto de la mecánica',
		],
		whenToCome: [
			'Cuando toca la revisión',
			'Si aparece algún aviso del sistema híbrido',
			'Si notas que el coche gasta más de lo habitual',
		],
	},
];
