import type { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 'serv-1',
    number: '01',
    title: 'Portrait Photography',
    tagline: 'Retratos de autor con profundidad psicológica y carácter editorial.',
    description:
      'Sesiones individuales o de personajes públicos diseñadas para capturar la autenticidad, la presencia y la dimensión humana del sujeto a través del dominio del claroscuro y la luz suave de estudio.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    deliverables: [
      'Dirección artística personalizada y moodboard previo',
      'Sesión de 3 a 4 horas en locación o estudio atelier',
      'Curaduría de 15 a 25 piezas maestras en ultra alta resolución',
      'Gradación tonal artesanal y revelado digital sin compresión',
      'Licencia de uso para prensa, perfiles institucionales y publicaciones',
    ],
    process: [
      { step: '01', name: 'Entrevista Conceptual', description: 'Definición del tono emocional, vestuario y objetivos comunicativos.' },
      { step: '02', name: 'Diseño Lumínico', description: 'Esquema de iluminación específico adaptado a la morfología y carácter.' },
      { step: '03', name: 'La Sesión Guiada', description: 'Espacio distendido y dirección natural para capturar momentos genuinos.' },
      { step: '04', name: 'Curaduría & Entrega', description: 'Selección privada en galería digital y revelado tonal minucioso.' },
    ],
    fictitiousPriceRange: 'Desde UF 25 (Valor referencial de ejemplo — Demostración)',
  },
  {
    id: 'serv-2',
    number: '02',
    title: 'Fashion Editorial',
    tagline: 'Narrativas visuales vanguardistas para publicaciones de moda y diseñadores.',
    description:
      'Dirección de arte integral para producciones de alta costura y editoriales de temporada. Transformamos conceptos de diseño en piezas cinematográficas que transmiten movimiento, textura y sofisticación.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85',
    deliverables: [
      'Concept board y coordinación de iluminación en set o exteriores',
      'Jornada completa de rodaje con equipo de cámara de medio formato',
      'Lookbook completo + 12 piezas editoriales para portada y doble página',
      'Formatos optimizados para imprenta offset de lujo y plataformas digitales',
    ],
    process: [
      { step: '01', name: 'Investigación Estética', description: 'Análisis de la colección, texturas textiles y referencias cromáticas.' },
      { step: '02', name: 'Scouting de Locaciones', description: 'Búsqueda de espacios arquitectónicos y contrastes naturales.' },
      { step: '03', name: 'Producción Editorial', description: 'Ejecución con precisión de tiempos, cambios de vestuario y estilismo.' },
      { step: '04', name: 'Masterización Cromática', description: 'Color grading de nivel cinematográfico para coherencia de serie.' },
    ],
    fictitiousPriceRange: 'Desde UF 45 (Valor referencial de ejemplo — Demostración)',
  },
  {
    id: 'serv-3',
    number: '03',
    title: 'Brand Campaigns',
    tagline: 'Imágenes icónicas que consolidan el posicionamiento de marcas exclusivas.',
    description:
      'Creación de imaginería de alto impacto para campañas de branding premium. Diseñado para firmas que buscan diferenciarse radicalmente de la estética genérica de bancos de imágenes.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85',
    deliverables: [
      'Alineación estratégica con el equipo creativo de la marca',
      'Producción multilocación con iluminación continua de cine',
      'Banco de imágenes hero y contenido de apoyo narrativo',
      'Adaptaciones multiformato para vía pública, packaging y campañas digitales',
    ],
    process: [
      { step: '01', name: 'Brief Estratégico', description: 'Comprensión del público objetivo y valores centrales de la marca.' },
      { step: '02', name: 'Preproducción Técnica', description: 'Storyboard detallado, plan de rodaje y casting de talento.' },
      { step: '03', name: 'Producción en Set', description: 'Captura tethering en tiempo real para supervisión de dirección de arte.' },
      { step: '04', name: 'Post-procesado Comercial', description: 'Retoque de precisión, composición y perfiles de color ICC.' },
    ],
    fictitiousPriceRange: 'Desde UF 60 (Valor referencial de ejemplo — Demostración)',
  },
  {
    id: 'serv-4',
    number: '04',
    title: 'Architectural Photography',
    tagline: 'Rigor geométrico, luz natural y perspectiva para arquitectura de vanguardia.',
    description:
      'Documentación de obras residenciales, corporativas y de interiorismo. Respetamos la visión del arquitecto mediante el control estricto de las líneas convergentes y el estudio minucioso de la trayectoria solar.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    deliverables: [
      'Estudio previo del ciclo de luz solar en el emplazamiento',
      'Fotografía con ópticas descentrables (tilt-shift) de ultra resolución',
      'Tomas diurnas, crepusculares (hora azul) e iluminación de interiorismo',
      '15 a 30 planos generales y de detalle constructivo',
    ],
    process: [
      { step: '01', name: 'Análisis Planimétrico', description: 'Revisión de planos arquitectónicos y recorrido espacial del proyecto.' },
      { step: '02', name: 'Plan Solar', description: 'Programación de tomas según la incidencia lumínica en cada fachada.' },
      { step: '03', name: 'Captura de Rigor', description: 'Nivelación óptica milimétrica y exposiciones múltiples controladas.' },
      { step: '04', name: 'Fusión Tonal Neutra', description: 'Limpieza de distracciones visuales y calibración cromática fiel.' },
    ],
    fictitiousPriceRange: 'Desde UF 35 (Valor referencial de ejemplo — Demostración)',
  },
  {
    id: 'serv-5',
    number: '05',
    title: 'Event Photography',
    tagline: 'Fotoperiodismo de autor para galas privadas y acontecimientos culturales.',
    description:
      'Cobertura discreta y elegante que huye de las fotos posadas convencionales. Inmortalizamos la atmósfera, la conversación espontánea y los instantes trascendentes con sensibilidad cinematográfica.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85',
    deliverables: [
      'Presencia no invasiva con ópticas fijas silenciosas',
      'Cobertura continua de hasta 8 horas',
      'Galería privada protegida por contraseña para anfitriones e invitados',
      'Selección de momentos clave entregada en 48 horas en avance',
    ],
    process: [
      { step: '01', name: 'Cronograma del Evento', description: 'Mapeo de hitos clave, protocolo y locaciones principales.' },
      { step: '02', name: 'Inspección de Luz', description: 'Ajuste a las condiciones lumínicas del espacio sin flash intrusivo.' },
      { step: '03', name: 'Cobertura Invisible', description: 'Fotografía documental empática capturada en segundo plano.' },
      { step: '04', name: 'Storytelling Final', description: 'Edición secuencial que narra el evento como una historia viva.' },
    ],
    fictitiousPriceRange: 'Desde UF 30 (Valor referencial de ejemplo — Demostración)',
  },
  {
    id: 'serv-6',
    number: '06',
    title: 'Product Photography',
    tagline: 'Objetos esculpidos por la luz: lujo, texturas y precisión milimétrica.',
    description:
      'Bodegones contemporáneos y tomas de producto para relojería, perfumes, alta joyería y piezas de diseño. Destacamos materiales nobles, brillos calculados y pureza volumétrica.',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=85',
    deliverables: [
      'Montaje de set en estudio atelier con macro-iluminación dedicada',
      'Focus-stacking para nitidez absoluta en toda la profundidad del objeto',
      'Composiciones de concepto y catálogo con fondo puro o contextualizado',
      'Archivos TIFF 16-bit listos para preimpresión y packaging de lujo',
    ],
    process: [
      { step: '01', name: 'Estudio de Materiales', description: 'Análisis de reflexiones en metales, vidrios, piedras o cuero.' },
      { step: '02', name: 'Diseño de Set', description: 'Construcción de soportes y gradientes de luz milimétricos.' },
      { step: '03', name: 'Macro-captura', description: 'Apilamiento de foco de hasta 40 disparos por plano.' },
      { step: '04', name: 'Micro-retoque', description: 'Eliminación microscópica de polvo y perfección de aristas.' },
    ],
    fictitiousPriceRange: 'Desde UF 28 (Valor referencial de ejemplo — Demostración)',
  },
];
