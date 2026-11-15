/*
 * NUMEN — Contenido editable del sitio
 * --------------------------------------
 * Todos los textos, planes, trabajos y preguntas viven en este archivo.
 * Editá los textos entre comillas y guardá: no hace falta tocar el resto del código.
 *
 * Reglas del brief que conviene respetar al editar:
 * - No agregar precios, importes ni monedas (ni en la web ni en los mensajes de WhatsApp).
 * - No publicar métricas de Selene hasta confirmarlas (ver `caso.metricas`).
 */
window.NUMEN = {
  contacto: {
    whatsappNumero: "5491138383128",
    whatsappVisible: "+54 9 11 3838 3128",
    instagramMarca: "https://www.instagram.com/creacionnumen/",
    instagramMarcaUsuario: "@creacionnumen",
    instagramPersonal: "https://www.instagram.com/milonumenn/",
    instagramPersonalUsuario: "@milonumenn",
    // Mensaje que se precarga al tocar los botones generales de WhatsApp
    mensajeGeneral: "Hola, quiero hablar sobre el contenido de mi marca.",
    ctaPrincipal: "Hablemos de tu contenido"
  },

  portada: {
    etiqueta: "Guiones · Edición · Estrategia",
    titulo: "Tu marca tiene algo que decir. Hagamos que se vea.",
    texto: "Transformamos tus ideas en contenido con identidad: guiones claros, videos cuidados y una comunicación pensada para tu negocio.",
    botonTrabajos: "Ver trabajos"
  },

  trabajos: {
    titulo: "Así se ve el trabajo.",
    categorias: ["Negocios", "Educación", "Marca personal"],
    // Cada video muestra solo su categoría. `destacado: true` = visible al cargar
    // (dos por categoría); el resto aparece con «Ver todos los videos».
    // `nombre` es solo una referencia interna: no se muestra en la web.
    videos: [
      { id: "selene-preferis", nombre: "Vos cuál preferís", categoria: "Negocios", destacado: true },
      { id: "selene-canje", nombre: "Plan canje", categoria: "Negocios", destacado: true },
      { id: "selene-android", nombre: "De Android a iPhone", categoria: "Negocios", destacado: false },
      { id: "selene-accesorio", nombre: "Qué accesorio regalamos", categoria: "Negocios", destacado: false },
      { id: "comenta-chat", nombre: "Comentá chat", categoria: "Negocios", destacado: false },
      { id: "empieza-100", nombre: "Empieza con 100 USD", categoria: "Educación", destacado: true },
      { id: "riqueza-mentalidad", nombre: "La riqueza empieza en tu mentalidad", categoria: "Educación", destacado: true },
      { id: "quiz-estrategia", nombre: "Qué estrategia es mejor", categoria: "Educación", destacado: false },
      { id: "repetir-lo-que-funciona", nombre: "Repetí lo que funciona", categoria: "Educación", destacado: false },
      { id: "clase-comunidad", nombre: "Clase para la comunidad", categoria: "Educación", destacado: false },
      { id: "siervo", nombre: "Siervo malvado", categoria: "Marca personal", destacado: true },
      { id: "pedir-no-es-rogar", nombre: "Pedir no es rogar", categoria: "Marca personal", destacado: true },
      { id: "jardin", nombre: "Si le pediste un jardín", categoria: "Marca personal", destacado: false },
      { id: "camino", nombre: "Camino", categoria: "Marca personal", destacado: false },
      { id: "carta", nombre: "Carta", categoria: "Marca personal", destacado: false }
    ],
    carrusel: {
      titulo: "5 principios que transforman cualquier relación",
      etiqueta: "Proyecto de carrusel · 7 diapositivas",
      // No se atribuye rol (fotografía / texto / diseño) hasta confirmarlo.
      diapositivas: [
        { archivo: "laura-1", alt: "Portada: 5 principios que transforman cualquier relación" },
        { archivo: "laura-2", alt: "Principio 1: Autenticidad radical" },
        { archivo: "laura-3", alt: "Principio 2: Espacio y libertad" },
        { archivo: "laura-4", alt: "Principio 3: Admiración mutua" },
        { archivo: "laura-5", alt: "Principio 4: Comunicación consciente" },
        { archivo: "laura-6", alt: "Principio 5: Amor propio primero" },
        { archivo: "laura-7", alt: "Cierre: el amor no es un destino, es un camino que se construye cada día" }
      ]
    }
  },

  caso: {
    etiqueta: "Caso · Selene Apple Store",
    titulo: "Del guion a la grabación y la edición.",
    texto: "Contenido para mostrar productos, explicar funciones e interactuar con personas. Desarrollamos los guiones, realizamos la grabación y editamos las piezas. El objetivo de la marca está directamente relacionado con las ventas: desde que comenzamos con el contenido, aumentaron un 80 %.",
    roles: ["Guion", "Grabación", "Edición"],
    videos: ["selene-preferis", "selene-accesorio"],
    // Resultados destacados del caso. Para quitar uno, borrá su línea.
    metricas: [
      { valor: "+80 %", etiqueta: "en ventas desde que comenzamos con el contenido" }
    ]
  },

  planes: {
    titulo: "Planes mensuales",
    intro: "Paquetes con una cantidad fija de piezas por mes. Consultá por WhatsApp y te contamos cómo trabajamos cada plan.",
    boton: "Consultar este plan",
    // El mensaje de WhatsApp solo menciona el nombre del plan.
    mensaje: (plan) => `Hola, quiero consultar por el plan ${plan}.`,
    lista: [
      {
        nombre: "Esencial",
        piezas: "12 piezas al mes",
        para: "Para quienes necesitan guiones y videos listos para publicar.",
        incluye: [
          "12 guiones y 12 reels con edición básica al mes, hasta 60 segundos cada uno.",
          "Cortes, limpieza de pausas, subtítulos, música cuando corresponda y aplicación de colores y tipografías.",
          "Textos breves para acompañar las publicaciones.",
          "Entregas por bloques y una ronda de cambios por pieza.",
          "Una reunión mensual de análisis de cuenta y próximos contenidos, de hasta 45 minutos."
        ],
        notas: [
          "El cliente graba y aporta el material siguiendo los guiones.",
          "No incluye publicación, grabación presencial ni gestión de mensajes."
        ],
        beneficio: "Delegás la escritura y edición de 12 piezas para concentrarte en grabar y atender tu negocio."
      },
      {
        nombre: "Presencia Activa",
        piezas: "30 piezas al mes",
        para: "Para quienes necesitan un mes de contenido organizado y publicado.",
        incluye: [
          "30 piezas: 26 reels de hasta 60 segundos y 4 carruseles de hasta seis diapositivas.",
          "Guiones, edición, diseño basado en un sistema visual acordado y textos de publicación.",
          "Calendario mensual de temas.",
          "Optimización inicial de biografía, enlace, destacados y propuesta de publicaciones fijadas.",
          "Programación y publicación en una cuenta de Instagram.",
          "Una reunión mensual de análisis de hasta 45 minutos y reporte breve de resultados disponibles.",
          "Una ronda de cambios por pieza."
        ],
        notas: ["El cliente aporta grabaciones, información y aprobaciones."],
        beneficio: "Centralizás guiones, edición, diseño y programación, con una presencia coherente durante el mes."
      },
      {
        nombre: "Estrategia y Conversión",
        piezas: "30 piezas al mes",
        para: "Para negocios y academias con una oferta definida que quieren conectar su contenido con consultas comerciales.",
        incluye: [
          "30 piezas: 26 reels de hasta 60 segundos y 4 carruseles de hasta seis diapositivas.",
          "Guiones, edición, textos, diseño, programación y publicación en una cuenta de Instagram.",
          "Diagnóstico inicial de marca, audiencia y oferta.",
          "Estrategia mensual de objetivos, mensajes, pilares y recorrido hacia la consulta.",
          "Optimización inicial del perfil y ajustes según estrategia.",
          "12 secuencias de historias al mes, de hasta cuatro pantallas cada una; estrategia y publicación incluidas.",
          "Una campaña comercial mensual para un producto, servicio o academia: promoción continua o lanzamiento acotado. Sus piezas forman parte de los volúmenes anteriores.",
          "Coordinación de llamados a la acción hacia WhatsApp, formulario o página ya existente.",
          "Integración de IA: un cerebro digital para tu empresa o negocio.",
          "Automatización de mensajes y respuestas a los leads.",
          "Dos reuniones mensuales y reporte de resultados con próximos ajustes.",
          "Una ronda de cambios por pieza."
        ],
        notas: [],
        beneficio: "Tu contenido acompaña una oferta concreta, responde dudas y facilita que las personas interesadas den el siguiente paso."
      }
    ]
  },

  proceso: {
    titulo: "Cómo trabajamos",
    pasos: [
      "Conocemos tu marca y definimos el alcance.",
      "Preparamos temas y guiones para aprobación.",
      "Grabás y nos enviás el material.",
      "Producimos y entregamos o publicamos según tu plan.",
      "Revisamos las métricas disponibles y ajustamos."
    ]
  },

  sobre: {
    titulo: "Soy Débora, fundadora de NUMEN.",
    texto: "Trabajo con marcas personales y negocios para convertir sus ideas en contenido claro y con identidad. Mi trabajo combina guiones, edición y planificación; en proyectos presenciales también participo en la grabación. NUMEN reúne esa mirada creativa con un proceso pensado para que comunicar tu marca sea más simple."
  },

  faq: {
    titulo: "Preguntas frecuentes",
    lista: [
      { p: "¿Incluye grabación?", r: "Los planes se basan en material aportado por el cliente. La grabación presencial se consulta y cotiza aparte según ubicación y alcance." },
      { p: "¿Tengo que saber qué decir?", r: "Los planes incluyen guiones; necesitaremos información sobre tu actividad y tu revisión de precisión antes de grabar." },
      { p: "¿Incluye responder mensajes?", r: "Los planes no incluyen community management manual, atención comercial ni cierre de ventas. El plan Estrategia y Conversión sí suma automatizaciones de mensajes y respuestas a los leads. La publicación de piezas está incluida en Presencia Activa y Estrategia y Conversión." },
      { p: "¿Se garantizan seguidores o ventas?", r: "No. Se acuerdan entregables, se trabaja sobre la comunicación y se evalúan los resultados disponibles." },
      { p: "¿Puedo pedir algo diferente?", r: "Sí, por WhatsApp para evaluar y cotizar el alcance." },
      { p: "¿Cuántos cambios incluye?", r: "Una ronda por pieza; cambios de alcance se acuerdan aparte." }
    ]
  },

  cierre: {
    titulo: "Contame qué estás construyendo.",
    texto: "Hablemos de tu marca, del contenido que necesitás y del plan que podemos sostener juntos.",
    pie: "NUMEN — Guiones, edición y estrategia de contenido."
  }
};
