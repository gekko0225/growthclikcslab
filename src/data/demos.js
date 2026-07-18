export const demos = [
  {
    slug: 'estetica',
    niche: 'Centros de estética',
    business: 'Piel Renovada',
    tagline: 'Reserva de citas + antes/después',
    description: 'Galería de resultados, agenda de tratamientos y reseñas destacadas en la portada.',
    color: '#1F6F54',
    colorDark: '#164F3D',
    gradient: 'linear-gradient(150deg,#164F3D,#2E8F6E 75%)',
    rating: '4.8',
  },
  {
    slug: 'medicos',
    niche: 'Médicos y clínicas',
    business: 'Clínica Bienestar',
    tagline: 'Especialidades claras, agenda directa',
    description: 'Servicios explicados en lenguaje simple, EPS/particular y botón de cita en cada sección.',
    color: '#25506E',
    colorDark: '#0F1F2C',
    gradient: 'linear-gradient(150deg,#0F1F2C,#25506E 75%)',
    rating: '4.9',
  },
  {
    slug: 'abogados',
    niche: 'Abogados',
    business: 'Restrepo & Asociados',
    tagline: 'Confianza primero, formulario después',
    description: 'Áreas de práctica, trayectoria y un formulario de consulta que no suena a spam.',
    color: '#8A6C4B',
    colorDark: '#3E3021',
    gradient: 'linear-gradient(150deg,#3E3021,#8A6C4B 75%)',
    rating: '5.0',
  },
  {
    slug: 'dentistas',
    niche: 'Dentistas',
    business: 'Sonrisa Total',
    tagline: 'Sonrisas, tratamientos y agenda',
    description: 'Casos visuales, tratamientos con precio de referencia y agenda con recordatorio por WhatsApp.',
    color: '#B85A6E',
    colorDark: '#5E2A38',
    gradient: 'linear-gradient(150deg,#5E2A38,#B85A6E 75%)',
    rating: '4.9',
  },
];

export const whatsappNumber = '573189862259';

export function waLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
