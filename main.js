(function () {
  "use strict";
  var C = window.NUMEN;
  if (!C) return;

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var get = function (path) { return path.split(".").reduce(function (o, k) { return o == null ? o : o[k]; }, C); };
  var el = function (tag, attrs, children) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k];
      else if (k === "class") n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  };
  var wa = function (msg) {
    return "https://wa.me/" + C.contacto.whatsappNumero + "?text=" + encodeURIComponent(msg);
  };
  var videoById = {};
  C.trabajos.videos.forEach(function (v) { videoById[v.id] = v; });

  /* ---------- Textos simples ---------- */
  $$("[data-t]").forEach(function (n) {
    var v = get(n.getAttribute("data-t"));
    if (v) n.textContent = v; else n.remove();
  });
  $$("[data-wa]").forEach(function (a) {
    a.href = wa(C.contacto.mensajeGeneral);
    a.target = "_blank";
    a.rel = "noopener";
  });
  $$("[data-ig]").forEach(function (a) {
    var personal = a.getAttribute("data-ig") === "personal";
    a.href = personal ? C.contacto.instagramPersonal : C.contacto.instagramMarca;
    if (!a.textContent.trim()) a.textContent = "Instagram " + (personal ? C.contacto.instagramPersonalUsuario : C.contacto.instagramMarcaUsuario);
  });

  /* ---------- Menú móvil ---------- */
  var toggle = $(".menu-toggle"), nav = $("#nav");
  var setMenu = function (open) {
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
  };
  toggle.addEventListener("click", function () { setMenu(toggle.getAttribute("aria-expanded") !== "true"); });
  $$("a", nav).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.body.classList.contains("menu-open")) { setMenu(false); toggle.focus(); }
  });

  /* ---------- Tarjetas de video ---------- */
  function videoCard(v) {
    var btn = el("button", {
      type: "button", class: "video-thumb",
      "aria-label": "Reproducir video de " + v.categoria
    }, [
      el("img", { src: "assets/video/" + v.id + ".jpg", alt: "", loading: "lazy", width: "540", height: "960" }),
      el("span", { class: "video-tag", text: v.categoria }),
      el("span", { class: "play", "aria-hidden": "true" })
    ]);
    btn.addEventListener("click", function () { openViewer(v, btn); });
    return el("li", { class: "video-card", "data-id": v.id }, [btn]);
  }

  /* ---------- Trabajos: filtros + grilla ---------- */
  var grid = $("#video-grid"), showAll = $("#show-all"), filters = $("#filters");
  var state = { cat: "Todos", all: false };
  C.trabajos.videos
    .slice().sort(function (a, b) { return (b.destacado ? 1 : 0) - (a.destacado ? 1 : 0); })
    .forEach(function (v) { grid.appendChild(videoCard(v)); });

  ["Todos"].concat(C.trabajos.categorias).forEach(function (cat) {
    var b = el("button", { type: "button", class: "chip", "aria-pressed": String(cat === "Todos"), text: cat });
    b.addEventListener("click", function () {
      state.cat = cat;
      $$(".chip", filters).forEach(function (c) { c.setAttribute("aria-pressed", String(c === b)); });
      render();
    });
    filters.appendChild(b);
  });

  function render() {
    $$(".video-card", grid).forEach(function (li) {
      var v = videoById[li.getAttribute("data-id")];
      var inCat = state.cat === "Todos" || v.categoria === state.cat;
      // Con «Todos» se ven los destacados hasta pedir todos; al filtrar se ven todos los de esa categoría.
      li.hidden = !(inCat && (state.all || state.cat !== "Todos" || v.destacado));
    });
    showAll.parentElement.hidden = state.cat !== "Todos" || state.all;
    showAll.setAttribute("aria-expanded", String(state.all));
  }
  showAll.addEventListener("click", function () {
    state.all = true;
    render();
    var firstNew = $$(".video-card", grid).filter(function (li) { return !li.hidden; })[6];
    if (firstNew) firstNew.querySelector(".video-thumb").focus();
  });
  showAll.textContent = "Ver todos los videos (" + C.trabajos.videos.length + ")";
  render();

  /* ---------- Caso Selene ---------- */
  var roles = $("#case-roles");
  C.caso.roles.forEach(function (r) { roles.appendChild(el("li", { text: r })); });
  var caseList = $("#case-videos");
  C.caso.videos.forEach(function (id) { if (videoById[id]) caseList.appendChild(videoCard(videoById[id])); });
  // Resultados del caso (se editan en content.js)
  if (C.caso.metricas && C.caso.metricas.length) {
    var dl = el("dl", { class: "metrics" });
    C.caso.metricas.forEach(function (m) {
      dl.appendChild(el("div", { class: "metric" }, [
        el("dd", { text: m.valor }),
        el("dt", { text: m.etiqueta })
      ]));
    });
    $("#case-metrics").appendChild(dl);
  }

  /* ---------- Planes ---------- */
  var plans = $("#plans");
  C.planes.lista.forEach(function (p, i) {
    var inc = el("ul", { class: "plan-list" });
    p.incluye.forEach(function (t) { inc.appendChild(el("li", { text: t })); });
    var notes = null;
    if (p.notas && p.notas.length) {
      notes = el("ul", { class: "plan-notes" });
      p.notas.forEach(function (t) { notes.appendChild(el("li", { text: t })); });
    }
    plans.appendChild(el("article", { class: "plan", "aria-labelledby": "plan-" + i }, [
      el("p", { class: "plan-count", text: p.piezas }),
      el("h3", { id: "plan-" + i, text: p.nombre }),
      el("p", { class: "plan-for", text: p.para }),
      inc,
      notes,
      el("p", { class: "plan-benefit", text: p.beneficio }),
      el("a", {
        class: "btn btn-dark btn-block", href: wa(C.planes.mensaje(p.nombre)), target: "_blank", rel: "noopener",
        "aria-label": C.planes.boton + ": " + p.nombre + " (abre WhatsApp)", text: C.planes.boton
      })
    ]));
  });

  /* ---------- Proceso ---------- */
  var steps = $("#steps");
  C.proceso.pasos.forEach(function (t, i) {
    steps.appendChild(el("li", {}, [
      el("span", { class: "step-n", "aria-hidden": "true", text: String(i + 1).padStart(2, "0") }),
      el("p", { text: t })
    ]));
  });

  /* ---------- FAQ ---------- */
  var faq = $("#faq-list");
  C.faq.lista.forEach(function (q) {
    faq.appendChild(el("details", {}, [el("summary", { text: q.p }), el("p", { text: q.r })]));
  });

  /* ---------- Carrusel Laura ---------- */
  var track = $("#carousel-track"), slides = C.trabajos.carrusel.diapositivas;
  $("#slide-total").textContent = slides.length;
  slides.forEach(function (s, i) {
    var pic = el("picture", {}, [
      el("source", { type: "image/webp", srcset: "assets/carrusel/" + s.archivo + ".webp" }),
      el("img", {
        src: "assets/carrusel/" + s.archivo + ".jpg", alt: s.alt, width: "720", height: "900",
        loading: i < 2 ? "eager" : "lazy", decoding: "async"
      })
    ]);
    track.appendChild(el("figure", {
      class: "slide", role: "group", "aria-roledescription": "diapositiva",
      "aria-label": (i + 1) + " de " + slides.length
    }, [pic]));
  });
  var slideEls = $$(".slide", track), current = 0;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  function goTo(i) {
    current = Math.max(0, Math.min(slides.length - 1, i));
    var s = slideEls[current];
    track.scrollTo({ left: s.offsetLeft - track.offsetLeft, behavior: reduce.matches ? "auto" : "smooth" });
    updateCount();
  }
  function updateCount() {
    $("#slide-now").textContent = current + 1;
    $$(".carousel-controls .icon-btn").forEach(function (b) {
      var d = +b.getAttribute("data-dir");
      b.disabled = (d < 0 && current === 0) || (d > 0 && current === slides.length - 1);
    });
  }
  $$(".carousel-controls .icon-btn").forEach(function (b) {
    b.addEventListener("click", function () { goTo(current + +b.getAttribute("data-dir")); });
  });
  track.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") { e.preventDefault(); goTo(current + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); goTo(current - 1); }
  });
  var scrollT;
  track.addEventListener("scroll", function () {
    clearTimeout(scrollT);
    scrollT = setTimeout(function () {
      var x = track.scrollLeft, best = 0, bestD = Infinity;
      slideEls.forEach(function (s, i) {
        var d = Math.abs(s.offsetLeft - track.offsetLeft - x);
        if (d < bestD) { bestD = d; best = i; }
      });
      current = best;
      updateCount();
    }, 80);
  }, { passive: true });
  updateCount();

  /* ---------- Visor de video ---------- */
  var viewer = $("#viewer"), vid = $("#viewer-video"), opener = null;
  function openViewer(v, trigger) {
    opener = trigger;
    $("#viewer-title").textContent = v.categoria;
    vid.poster = "assets/video/" + v.id + ".jpg";
    vid.src = "assets/video/" + v.id + ".mp4";
    vid.setAttribute("aria-label", "Video de " + v.categoria);
    if (typeof viewer.showModal === "function") viewer.showModal(); else viewer.setAttribute("open", "");
    document.body.classList.add("viewer-open");
    $("#viewer-close").focus();
    var p = vid.play();
    if (p && p.catch) p.catch(function () { /* el navegador pidió interacción: quedan los controles */ });
  }
  function closeViewer() {
    vid.pause();
    if (viewer.open) viewer.close();
  }
  viewer.addEventListener("close", function () {
    vid.pause();
    vid.removeAttribute("src");
    vid.load();
    document.body.classList.remove("viewer-open");
    if (opener) opener.focus();
  });
  $("#viewer-close").addEventListener("click", closeViewer);
  viewer.addEventListener("click", function (e) { if (e.target === viewer) closeViewer(); });
})();
