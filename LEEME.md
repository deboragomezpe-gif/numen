# NUMEN — Web (primera versión local)

Sitio estático de una sola página: HTML + CSS + JavaScript, sin dependencias ni compilación.
Publicado en GitHub Pages: https://deboragomezpe-gif.github.io/numen/

## Cómo verla en tu compu

**Opción rápida:** doble clic en `sitio/index.html`.

**Opción recomendada** (simula un servidor real; los videos cargan mejor). Desde la carpeta `AGENCIA`:

```bash
python -m http.server 8080 --directory sitio
```

Después abrí http://localhost:8080 en el navegador. Para verla en el celular conectado al mismo Wi-Fi, usá la IP de la compu (por ejemplo `http://192.168.0.10:8080`).

## Cómo editar textos y planes

Todo el contenido está en **`content.js`**: textos de cada sección, planes, preguntas frecuentes, títulos y roles de los videos, enlaces de WhatsApp e Instagram. Editá entre comillas, guardá y recargá.

- **Resultado de Selene:** `caso.metricas` muestra el «+80 % en ventas». Para quitarlo o cambiarlo, editá esa línea.
- **Videos:** cada uno muestra solo su categoría. `nombre` es una referencia interna y no aparece en la web. `destacado: true` define los 6 que se ven al entrar (dos por categoría); el resto aparece con «Ver todos los videos» o al filtrar.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | Estructura y metadatos SEO |
| `styles.css` | Diseño (mobile-first) |
| `main.js` | Filtros, carrusel, visor de video y menú |
| `content.js` | **Contenido editable** |
| `assets/` | Copias web optimizadas (los originales de `MATERIALES/` no se tocaron) |

### Correspondencia de recursos

| Copia web | Original en `MATERIALES/` |
|---|---|
| `img/numen-logo.png` | `numenn.png` (recortado, fondo transparente) |
| `img/favicon.png`, `img/og-numen.jpg` | `numenn.png` |
| `img/debora-portada-*.{jpg,webp}` | `Retrato editorial con MacBook en estudio negro.png` |
| `img/debora-presentacion-*.{jpg,webp}` | `Retrato profesional con MacBook plateada.png` |
| `carrusel/laura-1…7.{jpg,webp}` | `Lau/1.png … 7.png` (mismo orden) |
| `video/selene-preferis.mp4` | `¿Vos cuál preferís 📲🙌🏻…mp4` |
| `video/selene-canje.mp4` | `¿Queres cambiar tu celu sin gastar demás…mp4` |
| `video/selene-android.mp4` | `¿Tenes Android y queres pasarte a iphone…mp4` |
| `video/selene-accesorio.mp4` | `Coméntame que accesorio queres que regalemos…mp4` |
| `video/comenta-chat.mp4` | `Comenta “chat” y te daremos una asesoría…mp4` |
| `video/empieza-100.mp4` | `Empieza solo con 100 USD…mp4` |
| `video/riqueza-mentalidad.mp4` | `La riqueza empieza mucho antes…mp4` |
| `video/quiz-estrategia.mp4` | `AQNpaAGjAoP6oayc…mp4` |
| `video/repetir-lo-que-funciona.mp4` | `Ya no necesitás complicar tu operativa…mp4` |
| `video/clase-comunidad.mp4` | `Este lunes daré una clase…mp4` |
| `video/siervo.mp4` | `siervo malvado.mp4` (versión editada) |
| `video/pedir-no-es-rogar.mp4` | `Pedir no es rogar…mp4` |
| `video/jardin.mp4` | `si tu le pediste un jardin.mp4` |
| `video/camino.mp4` | `Responde “Camino”…mp4` |
| `video/carta.mp4` | `carta 2.mp4` |

Cada video tiene su portada `.jpg` (fotograma real del archivo). Los videos se convirtieron a 720 × 1280 H.264.

## Decisiones

- **Categorías (5 videos cada una):** Negocios (Selene + «Comentá chat»), Educación (trading y la clase para la comunidad), Marca personal (Siervo, Pedir no es rogar, Jardín, Camino, Carta). Se cambian en `content.js`.
- **Tarjetas:** sin títulos, nombres de clientes ni roles; solo la etiqueta de categoría. El carrusel conserva su título y no muestra nombres.
- **Caso Selene:** redactado en plural («desarrollamos, realizamos, editamos»), con el resultado de +80 % en ventas informado por NUMEN.
- **Videos:** no se cargan al abrir la página (solo las portadas). Se reproducen al tocar, en un visor con cierre, Escape y retorno del foco; al cerrar se pausa y se libera el video. Nunca hay autoplay al cargar.
- **Planes:** sin precios ni monedas. Cada «Consultar este plan» abre WhatsApp con «Hola, quiero consultar por el plan [nombre].»
- **Tipografía:** Archivo (Google Fonts). Sin internet cae a Helvetica/Arial.
- **SEO:** título, descripción, Open Graph y `canonical` apuntando a https://deboragomezpe-gif.github.io/numen/. Si se conecta un dominio propio, actualizar esas URLs en `index.html`.

## Validación realizada

En el navegador, a 360 px, 375 px y 1440 px:
- Sin desbordes horizontales en ningún ancho.
- 41 recursos referenciados cargan sin errores; la consola no muestra errores.
- Funcionan el menú móvil (Escape incluido), los filtros, «Ver los nueve», el carrusel (botones y flechas del teclado) y el visor de video (reproducción, cierre, pausa y foco).
- Los enlaces de WhatsApp (general y por plan) e Instagram apuntan a los datos del brief.
- La página no contiene precios, monedas ni «más vendido».

**Límites:** no se probó en un iPhone ni en un Android físicos ni en Safari, ni se hizo una auditoría automática de accesibilidad o contraste.

## Recursos ausentes y pendientes

- **No falta ningún archivo** del inventario del brief.
- Pendiente: rol exacto en el carrusel (no se muestra).
- Sin testimonios, logos de clientes ni años de experiencia, como pide el brief.
