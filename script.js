/* Sollmarine - меню, корзина, плиты */
"use strict";
const MENU = [{"id":"sets","name":"Сеты на компанию","items":[{"id":"fish-mix-set","n":"Fish Mix Set","d":"Большой рыбный сет: жареная рыба, креветки, соусы. На компанию","p":null,"t":"Хит"},{"id":"set-malyi","n":"Сет «Малый»","d":"Ассорти жареной рыбы с соусами, на 2-3 человек","p":null},{"id":"fishbarmak","n":"Фишбармак","d":"Рыба с картофелем, овощами и сливочным соусом на резном табаке","p":null,"t":"Фирменное"}]},{"id":"osetr","name":"Осётр","items":[{"id":"osetr-steak","n":"Стейк из осетрины","d":"Со спаржей и сливочным соусом","p":null,"t":"Фирменное"},{"id":"osetr-grechotto","n":"Осётр с гречотто","d":"Филе осетра на гречневом ризотто","p":null},{"id":"fishbarmak-osetr","n":"Фишбармак из осетра","d":"Осётр, домашнее тесто, овощи, бульон","p":null},{"id":"telnoe-osetr","n":"Тельное из осетра","d":"Рыбные котлеты с картофельным пюре","p":null},{"id":"gedza-osetr","n":"Гёдза с осетром","d":"Японские пельмени с начинкой из осетра","p":null}]},{"id":"fish","name":"Рыба","items":[{"id":"dorado","n":"Дорадо запечённая","d":"Целиком, с овощами и лимоном","p":null},{"id":"sibas","n":"Сибас запечённый","d":"Целиком, с овощами и лимоном","p":null},{"id":"sazan","n":"Сазан","d":"Жареный, с соусами","p":null},{"id":"kefal","n":"Кефаль","d":"Жареная, с маринованным луком и соусом","p":null}]},{"id":"hot","name":"Горячие закуски","items":[{"id":"krevetki-pivnye","n":"Креветки пивные","d":"Отборные креветки в пикантном фирменном соусе","p":5890,"t":"Хит"},{"id":"krevetki-tempura","n":"Креветки темпура","d":"Хрустящие креветки в кляре, с картофелем фри","p":3900},{"id":"rybnye-stripsy","n":"Рыбные стрипсы","d":"Кусочки белой рыбы в панировке","p":2500},{"id":"chechil","n":"Чечил жареный","d":"Хрустящий сыр-косичка с лимоном","p":null},{"id":"kolbaski","n":"Ассорти колбасок","d":"С картофелем и горчицей","p":null},{"id":"syrnye-palochki","n":"Сырные палочки","d":"Моцарелла в хрустящей корочке","p":2300},{"id":"lukovye-kolca","n":"Луковые кольца","d":"Хрустящие кольца во фритюре","p":1590},{"id":"naggetsy","n":"Куриные наггетсы","d":"С сырным соусом","p":null},{"id":"kartofelnye-shariki","n":"Картофельные шарики","d":"С сырным соусом","p":null},{"id":"grenki","n":"Хрустящие гренки","d":"Из бородинского хлеба, с соусом","p":null}]},{"id":"snacks","name":"Закуски","items":[{"id":"zakuska-k-vinu","n":"Закуска к вину","d":"Сыры, фрукты, орехи и крекеры","p":7590},{"id":"perchiki-tonato","n":"Перчики тонато","d":"Фаршированные перчики с соусом из тунца","p":4100},{"id":"russkaya-zakuska","n":"Русская закуска","d":"Соленья, грибы, сало, бородинский хлеб","p":null},{"id":"ovoschnaya-narezka","n":"Овощная нарезка","d":"Свежие овощи, зелень, оливки","p":null}]},{"id":"salads","name":"Салаты","items":[{"id":"salat-moreprodukty","n":"Салат с морепродуктами","d":"Микс салата, креветки, кальмары, мидии","p":3890},{"id":"salat-rukkola-losos","n":"Руккола с лососем","d":"Руккола, лосось, черри, сыр","p":3790},{"id":"cezar-krevetki","n":"Цезарь с креветками","d":"Романо, креветки, яйцо, пармезан","p":null},{"id":"teplyi-salat-konina","n":"Тёплый салат с кониной","d":"Конина, овощи, кунжут","p":null},{"id":"achuchuk","n":"Ачучук","d":"Томаты, лук, кинза","p":null}]},{"id":"soups","name":"Супы","items":[{"id":"tom-yam","n":"Том-ям с рисом","d":"Острый тайский суп с морепродуктами, рис отдельно","p":4390,"t":"Острое"},{"id":"rybnaya-solyanka","n":"Рыбная солянка","d":"Сборная солянка с красной и белой рыбой","p":3200},{"id":"gribnoi-krem-sup","n":"Грибной крем-суп","d":"Бархатный суп из грибов со сливками","p":2900},{"id":"pohmelnyi-sup","n":"Похмельный супчик","d":"Наваристый согревающий суп","p":2500},{"id":"sup-lapsha","n":"Куриный суп-лапша","d":"Домашний куриный суп с лапшой","p":2200},{"id":"sup-frikadelki","n":"Суп с фрикадельками","d":"Лёгкий бульон, фрикадельки, овощи","p":null}]},{"id":"steaks","name":"Стейки и мясо","items":[{"id":"ribai","n":"Стейк Рибай","d":"Мраморная говядина, грибы, картофель, соус","p":9700,"t":"Премиум"},{"id":"t-bone","n":"Стейк Т-бон","d":"Стейк на Т-образной кости","p":9700},{"id":"shato","n":"Стейк Шато","d":"Стейк из вырезки с авторским соусом","p":6990},{"id":"shef-steik-konina","n":"Шеф-стейк из конины","d":"Фирменный стейк из конины","p":7900},{"id":"govyazhi-rebra","n":"Говяжьи рёбра","d":"Томлёные рёбра с молодым картофелем","p":6990},{"id":"tomlenaya-konina","n":"Томлёная конина","d":"В соусе чимичури, с рисом","p":6900},{"id":"stroganov","n":"Мясо по-строгановски","d":"С картофельным пюре","p":null}]},{"id":"poultry","name":"Птица","items":[{"id":"perepelka","n":"Перепёлка","d":"Со сливочным портобелло","p":null},{"id":"cyplenok-gril","n":"Цыплёнок гриль","d":"С овощами гриль","p":null},{"id":"kurica-milanski","n":"Курица по-милански","d":"Куриная отбивная в панировке с салатом","p":null},{"id":"krylyshki-baffalo","n":"Крылышки «Баффало»","d":"С молодым картофелем и соусом","p":null},{"id":"frikase","n":"Фрикасе с блинчиками","d":"Курица в сливочном соусе","p":null}]},{"id":"pasta","name":"Паста","items":[{"id":"pasta-moreprodukty","n":"Паста с морепродуктами","d":"Креветки, мидии, кальмары в соусе","p":3890},{"id":"pasta-losos-pesto","n":"Паста с лососем и песто","d":"Лосось и ароматный соус песто","p":3790,"t":"Рекомендуем"},{"id":"fettuchini","n":"Феттучини с курицей и грибами","d":"Куриное филе, шампиньоны, сливочный соус","p":3190},{"id":"pappardelle-konina","n":"Паппарделле с кониной","d":"Широкая паста с томлёной кониной","p":2900},{"id":"spagetti-boloneze","n":"Спагетти болоньезе","d":"Классическая паста с мясным соусом","p":2600},{"id":"pasta-frikadelki","n":"Паста с фрикадельками","d":"Сливочный соус, фрикадельки","p":null}]},{"id":"pizza","name":"Пицца и бургеры","items":[{"id":"pizza-grusha","n":"Пицца с голубым сыром и грушей","d":"Сыр с плесенью, груша, мёд","p":4290},{"id":"pizza-ohotnichya","n":"Пицца «Охотничья»","d":"Охотничьи колбаски, корнишоны, маслины, 30 см","p":4100},{"id":"pizza-pepperoni","n":"Пицца «Пепперони»","d":"Острая салями, моцарелла, 30 см","p":3590},{"id":"pizza-boloneze","n":"Пицца «Болоньезе»","d":"Соус болоньезе, моцарелла, 30 см","p":3200},{"id":"pizza-margarita","n":"Пицца «Маргарита»","d":"Томаты, моцарелла, 30 см","p":3100},{"id":"pizza-kurica-griby","n":"Пицца с курицей и грибами","d":"Курица, грибы, шпинат, моцарелла","p":null},{"id":"burger-fish","n":"Бургер Sollmarine Fish","d":"Рыбная котлета, картофельные шарики, соус","p":null},{"id":"burger-govyadina","n":"Бургер с рваной говядиной","d":"С картофелем фри и соусом","p":null}]},{"id":"sides","name":"Гарниры","items":[{"id":"ovoschi-gril","n":"Овощи гриль","d":"Баклажан, перец, томаты, лук, шампиньоны","p":null},{"id":"molodoi-kartofel","n":"Молодой картофель","d":"Обжаренный, с зелёным луком","p":null},{"id":"ris","n":"Рис припущенный","d":"С кунжутом","p":null}]}];
const WA = "77081806825";
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const clamp = (v) => Math.max(0, Math.min(1, v));
const fmt = (n) => n.toLocaleString("ru-RU") + " ₸";
const byId = {};
MENU.forEach((c) => c.items.forEach((it) => { it.cat = c.id; byId[it.id] = it; }));

/* ---------- меню ---------- */
const plural = (n) => { const m10 = n % 10, m100 = n % 100; return n + (m10 === 1 && m100 !== 11 ? " блюдо" : m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14) ? " блюда" : " блюд"); };
function renderMenu() {
  $("#catLane").innerHTML = MENU.map((c) => `<button class="cat" type="button" data-cat="${c.id}">${c.name}</button>`).join("");
  $("#menuBody").innerHTML = MENU.map((c) => `
    <section class="mcat" id="${c.id}" aria-label="${c.name}">
      <h3>${c.name} <small>${plural(c.items.length)}</small></h3>
      <div class="grid">${c.items.map(dishHTML).join("")}</div>
    </section>`).join("");
}
function dishHTML(it) {
  return `<article class="dish rv" data-id="${it.id}">
    <div class="dish-ph"><img src="assets/menu/${it.id}.webp" alt="${it.n}" loading="lazy" width="480" height="480">${it.t ? `<span class="tag">${it.t}</span>` : ""}</div>
    <div class="dish-b"><h4 class="dish-n">${it.n}</h4><p class="dish-d">${it.d}</p>
      <div class="dish-f">${it.p ? `<span class="price">${fmt(it.p)}</span>` : `<span class="price ask">Цена у оператора</span>`}<span class="ctl" data-ctl="${it.id}"></span></div>
    </div></article>`;
}

/* ---------- корзина ---------- */
let cart = {};
try { cart = JSON.parse(localStorage.getItem("sm_cart") || "{}") || {}; } catch (e) { cart = {}; }
Object.keys(cart).forEach((k) => { if (!byId[k] || !(cart[k] > 0)) delete cart[k]; });
const save = () => { try { localStorage.setItem("sm_cart", JSON.stringify(cart)); } catch (e) {} };
const count = () => Object.values(cart).reduce((a, b) => a + b, 0);
const total = () => Object.entries(cart).reduce((a, [k, q]) => a + (byId[k].p || 0) * q, 0);
const hasAsk = () => Object.keys(cart).some((k) => !byId[k].p);

function ctlHTML(id) {
  const q = cart[id] || 0;
  return q ? `<span class="qty"><button type="button" data-dec="${id}" aria-label="Убрать одну">−</button><b>${q}</b><button type="button" data-inc="${id}" aria-label="Добавить ещё">+</button></span>`
           : `<button class="add" type="button" data-inc="${id}" aria-label="В корзину">+</button>`;
}
function syncCart() {
  $$("[data-ctl]").forEach((el) => { el.innerHTML = ctlHTML(el.dataset.ctl); });
  const n = count(), t = total();
  $$("[data-cart-sum]").forEach((el) => { el.textContent = fmt(t); });
  $$("[data-cart-count]").forEach((el) => { el.textContent = n; el.hidden = !n; });
  $$("[data-cart-total]").forEach((el) => { el.textContent = fmt(t); });
  const note = $("#orderNote");
  note.hidden = !hasAsk();
  note.textContent = "Цену позиций без стоимости назовёт оператор при подтверждении.";
  const list = $("#cartList");
  const ids = Object.keys(cart);
  list.innerHTML = ids.length ? ids.map((id) => { const it = byId[id]; return `<div class="ci"><img src="assets/menu/${id}.webp" alt=""><div><b>${it.n}</b><small>${it.p ? fmt(it.p * cart[id]) : "цена у оператора"}</small></div>${ctlHTML(id)}</div>`; }).join("")
    : `<p class="cart-empty">Корзина пуста. Добавьте блюда из меню кнопкой «+».</p>`;
  $("#orderForm").hidden = !ids.length;
  save();
}
let toastT;
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("on"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("on"), 1800); }
document.addEventListener("click", (e) => {
  const inc = e.target.closest("[data-inc]"), dec = e.target.closest("[data-dec]");
  if (inc) { const id = inc.dataset.inc; const first = !cart[id]; cart[id] = (cart[id] || 0) + 1; syncCart(); if (first) toast(byId[id].n + " - в корзине"); $$(".cart-btn").forEach((b) => { b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump"); }); }
  if (dec) { const id = dec.dataset.dec; cart[id] = (cart[id] || 0) - 1; if (cart[id] <= 0) delete cart[id]; syncCart(); }
});

/* ---------- модалки ---------- */
const drawer = $("#drawer"), book = $("#bookModal");
function lock(on) { document.documentElement.style.overflow = on ? "hidden" : ""; }
$$("[data-cart-open]").forEach((b) => b.addEventListener("click", () => { closeMenu(); drawer.hidden = false; lock(true); }));
$$("[data-cart-close]").forEach((b) => b.addEventListener("click", () => { drawer.hidden = true; lock(false); }));
function openBook() { closeMenu(); drawer.hidden = true; book.hidden = false; lock(true); const d = book.querySelector('[name="date"]'); if (!d.value) { const t = new Date(); d.value = t.toISOString().slice(0, 10); } }
document.addEventListener("click", (e) => { if (e.target.closest("[data-book]")) { e.preventDefault(); openBook(); } });
$$("[data-book-close]").forEach((b) => b.addEventListener("click", () => { book.hidden = true; lock(false); }));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") { drawer.hidden = true; book.hidden = true; lock(false); closeMenu(); } });

/* ---------- способ получения ---------- */
let mode = "delivery";
function setMode(m) {
  mode = m;
  $$("[data-mode]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.mode === m)));
  $(".f-addr").hidden = m !== "delivery";
  $(".f-time").hidden = m !== "pickup";
}
$$("[data-mode]").forEach((b) => b.addEventListener("click", () => setMode(b.dataset.mode)));

/* ---------- отправка в WhatsApp ---------- */
const digits = (s) => (s || "").replace(/\D/g, "");
function check(form, names) {
  let ok = true;
  names.forEach((n) => { const el = form.elements[n]; const bad = n === "phone" ? digits(el.value).length < 10 : !el.value.trim(); el.classList.toggle("bad", bad); if (bad && ok) { el.focus(); ok = false; } });
  return ok;
}
function openWA(text) { window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(text), "_blank"); }
$("#orderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  if (f.elements.company.value) return;
  if (!check(f, mode === "delivery" ? ["name", "phone", "address"] : ["name", "phone"])) return;
  const lines = Object.keys(cart).map((id, i) => { const it = byId[id], q = cart[id]; return `${i + 1}. ${it.n} x${q}${it.p ? " - " + fmt(it.p * q) : " - цена у оператора"}`; });
  const v = (n) => f.elements[n].value.trim();
  const msg = ["Здравствуйте! Заказ с сайта Sollmarine", "", ...lines, "",
    "Итого: " + fmt(total()) + (hasAsk() ? " + позиции без цены" : ""),
    "Способ: " + (mode === "delivery" ? "доставка" : "самовывоз"),
    mode === "delivery" ? "Адрес: " + v("address") : v("time") ? "Заберу: " + v("time") : null,
    "Имя: " + v("name"), "Телефон: " + v("phone"),
    v("comment") ? "Комментарий: " + v("comment") : null].filter((x) => x !== null);
  openWA(msg.join("\n"));
  cart = {}; syncCart(); drawer.hidden = true; lock(false);
  toast("Заказ открыт в WhatsApp - отправьте сообщение");
});
$("#bookForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  if (f.elements.company.value) return;
  if (!check(f, ["name", "phone", "date", "time"])) return;
  const d = f.elements.date.value.split("-").reverse().join(".");
  const msg = ["Здравствуйте! Бронь стола с сайта Sollmarine", "Дата: " + d + ", " + f.elements.time.value, "Гостей: " + f.elements.guests.value,
    "Имя: " + f.elements.name.value.trim(), "Телефон: " + f.elements.phone.value.trim(),
    f.elements.comment.value.trim() ? "Пожелания: " + f.elements.comment.value.trim() : ""].filter(Boolean);
  openWA(msg.join("\n"));
  book.hidden = true; lock(false);
  toast("Бронь открыта в WhatsApp - отправьте сообщение");
});

/* ---------- мобильное меню ---------- */
const burger = $("#burger"), mnav = $("#mnav");
function closeMenu() { mnav.hidden = true; document.body.classList.remove("menu-open"); burger.setAttribute("aria-expanded", "false"); }
burger.addEventListener("click", () => { const open = mnav.hidden; mnav.hidden = !open; document.body.classList.toggle("menu-open", open); burger.setAttribute("aria-expanded", String(open)); });

/* ---------- ленты со стрелками ---------- */
function laneStep(lane) { const a = lane.children[0], b = lane.children[1]; if (!a) return lane.clientWidth; return b ? b.offsetLeft - a.offsetLeft : a.offsetWidth; }
function laneSync(lane) {
  const max = lane.scrollWidth - lane.clientWidth - 2;
  $$(`[data-prev="${lane.id}"],[data-next="${lane.id}"]`).forEach((b) => {
    b.hidden = max <= 0;
    b.disabled = b.dataset.prev ? lane.scrollLeft <= 2 : lane.scrollLeft >= max;
  });
}
$$("[data-prev],[data-next]").forEach((b) => b.addEventListener("click", () => {
  const lane = document.getElementById(b.dataset.prev || b.dataset.next);
  lane.scrollBy({ left: (b.dataset.prev ? -1 : 1) * laneStep(lane) * (lane.id === "catLane" ? 3 : 1), behavior: "smooth" });
}));

/* ---------- переходы по якорям ---------- */
const hdrH = () => $("#hdr").offsetHeight;
function naturalTop(el) {
  const main = $("main");
  if (el.parentElement === main) { let y = main.offsetTop; for (const c of main.children) { if (c === el) return y; y += c.offsetHeight; } }
  return el.getBoundingClientRect().top + scrollY;
}
function targetTop(el) {
  if (el.classList.contains("plate") && getComputedStyle(el).position === "sticky") return naturalTop(el);
  let off = hdrH() + 8;
  if (el.classList.contains("mcat")) off = hdrH() + $("#cats").offsetHeight + 4;
  if (el.id === "top" || el.id === "hero") return 0;
  return naturalTop(el) - off;
}
function go(id, smooth) {
  const el = document.getElementById(id); if (!el) return;
  window.scrollTo({ top: Math.max(0, targetTop(el)), behavior: smooth ? "smooth" : "auto" });
}
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]'); if (!a) return;
  const id = a.getAttribute("href").slice(1); if (!id || !document.getElementById(id)) return;
  e.preventDefault(); closeMenu(); go(id, true);
  history.replaceState(null, "", id === "top" ? location.pathname + location.search : "#" + id);
});
$("#catLane").addEventListener("click", (e) => { const b = e.target.closest("[data-cat]"); if (b) { go(b.dataset.cat, true); history.replaceState(null, "", "#" + b.dataset.cat); } });

/* ---------- плиты, подсветка категорий, панель ---------- */
let plates = [], ticking = false, spyCat = "";
function frame() {
  ticking = false;
  const vh = innerHeight, y = scrollY;
  plates.forEach((p) => {
    const T = naturalTop(p), next = p.nextElementSibling;
    const enter = clamp((y - (T - vh)) / vh);
    const exit = next ? clamp((y - (naturalTop(next) - vh)) / vh) : 0;
    p.style.setProperty("--enter", enter.toFixed(3));
    p.style.setProperty("--exit", exit.toFixed(3));
  });
  const line = hdrH() + $("#cats").offsetHeight + 40;
  let cur = "";
  $$(".mcat").forEach((s) => { if (s.getBoundingClientRect().top <= line) cur = s.id; });
  if (cur !== spyCat) {
    spyCat = cur;
    $$(".cat").forEach((b) => b.classList.toggle("on", b.dataset.cat === cur));
    const on = $(".cat.on"), lane = $("#catLane");
    if (on) lane.scrollTo({ left: on.offsetLeft - lane.offsetLeft - 40, behavior: "smooth" });
  }
  const c = $("#contacts").getBoundingClientRect().top;
  $("#mbar").classList.toggle("on", y > vh * 0.55 && c > vh * 0.5);
}
const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };

/* ---------- старт ---------- */
renderMenu();
setMode("delivery");
syncCart();
plates = $$(".plate");
addEventListener("scroll", onScroll, { passive: true });
addEventListener("resize", () => { onScroll(); $$(".lane,.cat-lane").forEach(laneSync); });
$$(".lane,.cat-lane").forEach((l) => { l.addEventListener("scroll", () => laneSync(l), { passive: true }); laneSync(l); });

const io = "IntersectionObserver" in window ? new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { rootMargin: "0px 0px -8% 0px" }) : null;
$$(".rv").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));

const hero = $("#hero");
const hash = decodeURIComponent(location.hash.slice(1));
if (hash && document.getElementById(hash)) {
  hero.style.setProperty("--intro", "1");
  document.documentElement.classList.add("ready");
  requestAnimationFrame(() => { go(hash, false); frame(); });
  addEventListener("load", () => { go(hash, false); frame(); });
} else {
  hero.style.setProperty("--intro", "0");
  requestAnimationFrame(() => {
    document.documentElement.classList.add("ready");
    const t0 = performance.now(), dur = 1400;
    const step = (t) => { const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3); hero.style.setProperty("--intro", e.toFixed(3)); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  });
  frame();
}
