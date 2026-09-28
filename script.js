/* Sollmarine - меню, корзина, плиты */
"use strict";
const MENU = [{"id":"sets","name":"Сеты на компанию","items":[{"id":"fish-mix-set","n":"Сет из рыбы большой","d":"Лосось, сазан, судак, кефаль, креветки в панировке, стейк из осетра, карась, картофельные шарики, луковые кольца, соусы","p":36000,"t":"Хит","i":1},{"id":"set-malyi","n":"Сет из рыбы малый","d":"Сазан, судак, кефаль, рыбные стрипсы, лук зеленый, маринованный лук, лимон, соус шашлычный и чесночный","p":11490,"i":1},{"id":"set-ptica","n":"Сет из птицы","d":"Большой сет из курицы, перепелки, колбасок и овощей гриль для компании на 4-5 человек.","p":16900,"i":1},{"id":"set-myaso","n":"Сет из мяса","d":"Премиальный мясной сет с говядиной, кониной, ребрами и овощами гриль.","p":37900,"i":1}]},{"id":"osetr","name":"Осётр","items":[{"id":"osetr-steak","n":"Стейк осётр со спаржей","d":"Премиальный стейк из осетра со спаржей и изысканным вкусом.","p":6900,"t":"Фирменное","i":1},{"id":"osetr-grechotto","n":"Осётр гречотто","d":"Осетр, гречка, грибное рагу, масло базилик, сливки, грибы эноки","p":6490,"i":1},{"id":"fishbarmak-osetr","n":"Фишбармак из осетра","d":"Авторская версия фишбармака с осетром и насыщенным рыбным вкусом.","p":4500,"i":1},{"id":"telnoe-osetr","n":"Тельное из осетра","d":"Нежное блюдо из осетра в традиционном стиле с деликатной текстурой.","p":4200,"i":1},{"id":"gedza-osetr","n":"Гёдза с осетром","d":"Деликатные гёдза с начинкой из осетра и мягким рыбным вкусом.","p":4100,"i":1}]},{"id":"fish","name":"Рыба","items":[{"id":"dorado","n":"Дорадо запеченная","d":"Запеченная дорадо с деликатным морским вкусом и легким ароматом.","p":7390,"i":1},{"id":"sibas","n":"Сибас запеченный","d":"Запеченный сибас с нежным филе и чистым морским вкусом.","p":6290,"i":1},{"id":"semga","n":"Стейк из семги","d":"Сочный стейк из семги с мягким вкусом и нежной текстурой.","p":6590,"i":1},{"id":"sazan","n":"Сазан","d":"Сазан, сметана, лимон, лук маринованный, лук зеленый, соус чесночный, соус шашлычный, мука","p":6000,"v":["жареный","запечённый"],"i":1},{"id":"kefal","n":"Кефаль","d":"Кефаль, сметана, лимон, лук маринованный, лук зеленый, соус чесночный, соус шашлычный, мука","p":3300,"t":"Хит","v":["жареная","запечённая"],"i":1},{"id":"sudak","n":"Судак","d":"Судак, сметана, лимон, лук маринованный, лук зеленый, соус чесночный, соус шашлычный, мука","p":4190,"v":["жареный","запечённый"],"i":1}]},{"id":"steaks","name":"Стейки и мясо","items":[{"id":"ribai","n":"Стейк Рибай","d":"Сочный премиальный стейк с насыщенной мраморной текстурой.","p":9700,"t":"Премиум","i":1},{"id":"t-bone","n":"Стейк Т-бон","d":"Классический стейк на кости с ярким мясным вкусом.","p":9700,"i":1},{"id":"shato","n":"Стейк Шато","d":"Нежный стейк с мягкой текстурой и деликатным вкусом.","p":6990,"i":1},{"id":"shef-steik-konina","n":"Шеф-стейк из конины","d":"Фирменный стейк из конины с выразительным и благородным вкусом.","p":7900},{"id":"govyazhi-rebra","n":"Говяжьи ребра с молодым картофелем","d":"Сочные говяжьи ребра с молодым картофелем и насыщенным мясным вкусом.","p":6990,"i":1},{"id":"tomlenaya-konina","n":"Томленая конина в соусе чимичури","d":"Мягкая томленая конина с ярким ароматным соусом чимичури.","p":6900,"i":1},{"id":"stroganov","n":"Мясо по-строгановски с пюре","d":"Нежное мясо в сливочном соусе с мягким картофельным пюре.","p":3900,"i":1}]},{"id":"poultry","name":"Птица","items":[{"id":"cyplenok-gril","n":"Цыпленок гриль с овощами","d":"Сочный цыпленок гриль с ароматными овощами для сбалансированного ужина.","p":3270,"i":1},{"id":"kurica-milanski","n":"Курица по-милански","d":"Нежная курица в золотистой корочке в итальянском стиле.","p":3270,"i":1},{"id":"perepelka","n":"Перепелка со сливочным портабелло","d":"Деликатная перепелка со сливочным грибным вкусом.","p":2890,"i":1},{"id":"frikase","n":"Фрикасе с блинчиками","d":"Нежное фрикасе с мягкими блинчиками и домашним настроением.","p":2500,"i":1},{"id":"krylyshki-baffalo","n":"Крылышки «Баффало»","d":"Пикантные куриные крылышки в стиле «Баффало» с ярким вкусом.","p":3270,"i":1},{"id":"kur-frikadelki","n":"Куриные фрикадельки с пюре","d":"Сочные куриные фрикадельки с нежным картофельным пюре.","p":2000}]},{"id":"hot","name":"Горячие закуски","items":[{"id":"krevetki-pivnye","n":"Креветки пивные","d":"Креветки пивные, кинза, соус шрирача, сливочное масло, чеснок, лимон","p":5890,"t":"Хит","i":1},{"id":"krevetki-tempura","n":"Креветки темпура","d":"Креветки в легкой темпуре с хрустящей оболочкой и нежной серединой.","p":3900,"i":1},{"id":"rybnye-stripsy","n":"Рыбные стрипсы","d":"Филе судака, картофельные чипсы, соус тартар","p":2500,"i":1},{"id":"pivnoi-set","n":"Пивной сет","d":"Чесночные гренки, сырные палочки, луковые кольца, картофельные шарики, арахис, жареный чечил, чесночный соус, кетчуп","p":5890,"i":1},{"id":"kolbaski","n":"Ассорти колбасок","d":"Сытное ассорти из курицы, говядины и конины для мясной компании.","p":5500,"i":1},{"id":"chechil","n":"Чечил жареный","d":"Жареный чечил с тягучей текстурой и насыщенным сырным вкусом.","p":1390,"i":1},{"id":"syrnye-palochki","n":"Сырные палочки","d":"Нежные сырные палочки в хрустящей корочке для любителей сыра.","p":2300,"i":1},{"id":"lukovye-kolca","n":"Луковые кольца","d":"Хрустящие луковые кольца в легкой панировке с приятной сладостью лука.","p":1590,"i":1},{"id":"naggetsy","n":"Куриные наггетсы","d":"Золотистые куриные наггетсы с аппетитной хрустящей корочкой.","p":1600,"i":1},{"id":"grenki","n":"Хрустящие гренки","d":"Ароматные гренки с хрустящей текстурой, отлично подходящие к напиткам.","p":1190,"i":1}]},{"id":"snacks","name":"Холодные закуски","items":[{"id":"kazy-osetr","n":"Казы с осетриной","d":"Осетрина, соус сливочный, зелень, помидоры черри, черный хлеб","p":5989,"i":1},{"id":"zakuska-k-vinu","n":"Закуска к вину","d":"Сыры Блю чиз, Пармезан, Моцарелла, Чеддер, сырные крекеры, груша, карамельные фундук-грецкий орех, мед, оливки, мята","p":7590,"i":1},{"id":"russkaya-zakuska","n":"Русская закуска","d":"Маринованные шампиньоны, огурцы, лук, помидоры черри, капуста квашенная, сельдь в масле, бородинский хлеб, лук зеленый, обжаренный картофель, укроп","p":3890,"i":1},{"id":"ovoschnaya-narezka","n":"Овощная нарезка","d":"Помидоры, огурец свежий, лук маринованный, лук красный, кинза, зеленый лук, сладкий перец, оливки, маслины","p":2890,"i":1}]},{"id":"salads","name":"Салаты","items":[{"id":"salat-moreprodukty","n":"Салат с морепродуктами","d":"Микс салата, помидоры черри, маринованный лук, огурцы свежие, кукуруза в соусе свит чили, креветки тигровые, мидии, кальмары, бальзамическая заправка","p":3890,"i":1},{"id":"salat-rukkola-losos","n":"Салат рукола лосось","d":"Руккола, лосось, помидоры черри Конфи, кедровые орешки, сыр фета, медово-горчичная заправка","p":3790,"i":1},{"id":"cezar-krevetki","n":"Цезарь с креветками","d":"Романо, помидоры черри, куриное яйцо, Сыр Пармезан, хрустящий краст, креветки тигровые, соус Цезарь","p":3400,"i":1},{"id":"cezar-kurica","n":"Цезарь с курицей","d":"Романо, помидоры черри, куриное яйцо, сыр Пармезан, хрустящий краст, куриное филе, соус Цезарь","p":3100,"i":1},{"id":"teplyi-salat-konina","n":"Теплый с кониной","d":"Сытный теплый салат с кониной и гармоничным сочетанием свежих ингредиентов.","p":3300,"i":1},{"id":"horiatiki","n":"Хориатики с соусом сальса Верде","d":"Легкий салат с ярким свежим соусом сальса Верде.","p":2900,"i":1},{"id":"achuchuk","n":"Ачучук","d":"Помидоры, лук красный, петрушка, кинза, перец чили, винный уксус","p":1890,"i":1},{"id":"salat-baklazhany","n":"Салат с хрустящими баклажанами","d":"Баклажаны, помидоры, чеснок, лук маринованный, кинза свежая, азиатская заправка","p":2899}]},{"id":"soups","name":"Супы","items":[{"id":"tom-yam","n":"Том-ям с рисом","d":"Мидии, креветки, кальмары, лосось, грибы эноки, помидоры черри, кинза, кокосовое молоко, рис","p":4390,"t":"Острое","i":1},{"id":"rybnaya-solyanka","n":"Рыбная солянка","d":"Насыщенный рыбный суп с глубоким вкусом и легкой пикантностью.","p":3200,"i":1},{"id":"uha","n":"Уха по-царски","d":"Рыбный бульон, сазан, семга, лук, морковь, картофель молодой, укроп, зеленый лук","p":2900,"i":1},{"id":"gribnoi-krem-sup","n":"Грибной крем-суп","d":"Нежный крем-суп с насыщенным грибным ароматом и мягкой текстурой.","p":2900,"i":1},{"id":"pohmelnyi-sup","n":"Похмельный супчик","d":"Сытный и бодрящий суп с насыщенным вкусом для восстановления сил.","p":2500,"i":1},{"id":"sup-lapsha","n":"Суп лапша куриная","d":"Легкий куриный суп с лапшой, идеально подходящий для уютного обеда.","p":2200,"i":1},{"id":"sup-frikadelki","n":"Суп с фрикадельками","d":"Домашний суп с нежными фрикадельками и согревающим вкусом.","p":2200,"i":1}]},{"id":"pasta","name":"Паста","items":[{"id":"pasta-moreprodukty","n":"Паста с морепродуктами","d":"Лингвини, томатный соус, кальмары, креветки тигровые, мидии, петрушка, масло базилик, перец чили, Пармезан","p":3890,"i":1},{"id":"pasta-losos-pesto","n":"Паста с лососем и соусом песто","d":"Ароматная паста с лососем и свежим соусом песто.","p":3790,"t":"Рекомендуем","i":1},{"id":"fettuchini","n":"Фетучини с курицей и грибами","d":"Фетучини, куриное филе, шампиньоны, грибное рагу, соус сырный, петрушка, Пармезан, оливковое масло","p":3190,"i":1},{"id":"pappardelle-konina","n":"Паппарделле с кониной","d":"Широкая паста с кониной и насыщенным мясным вкусом.","p":2900,"i":1},{"id":"spagetti-boloneze","n":"Спагетти болоньезе","d":"Классическая паста с мясным соусом болоньезе и насыщенным томатным вкусом.","p":2600,"i":1},{"id":"pasta-frikadelki","n":"Паста с фрикадельками","d":"Сытная паста с мясными фрикадельками в домашнем стиле.","p":2100,"i":1}]},{"id":"pizza","name":"Пицца и бургеры","items":[{"id":"pizza-pepperoni","n":"Пицца «Пепперони»","d":"Классическая пицца 30 см с пикантной пепперони и расплавленным сыром.","p":3590,"i":1},{"id":"pizza-ohotnichya","n":"Пицца «Охотничья»","d":"Ароматная пицца с охотничьими колбасками и выразительным мясным вкусом.","p":4100,"i":1},{"id":"pizza-kurica-griby","n":"Пицца «Курица с грибами»","d":"Нежная пицца с курицей, грибами и мягким сливочным акцентом.","p":3790,"i":1},{"id":"pizza-boloneze","n":"Пицца «Болоньезе»","d":"Сытная пицца 30см с мясным соусом болоньезе и насыщенным вкусом.","p":3200,"i":1},{"id":"pizza-margarita","n":"Пицца «Маргарита»","d":"Легкая классическая пицца с томатами, сыром и простым гармоничным вкусом.","p":3100,"i":1},{"id":"burger-fish","n":"Бургер Sollmarine Fish","d":"Булочка бриошь, филе судака, соус чесночный, шпинат, лук маринованный, помидоры свежие, бургер соус, сыр чеддер, картофельные диперы, соус кетчуп","p":3990,"i":1},{"id":"burger-govyadina","n":"Бургер с рваной говядиной","d":"Булочка бриошь, рваная говядина, соус bbq, маринованные огурчики, соус бургер, лук красный, сыр чеддер, романо, картофельные дипперы, соус кетчуп","p":4090,"i":1},{"id":"pizza-4-syra","n":"Пицца «Четыре сыра»","d":"Тонкое хрустящее тесто, насыщенный сливочный соус и гармоничное сочетание четырех видов сыра. Нежная ароматная и тягучая, идеальный выбор для любителей сыра","p":3489},{"id":"pizza-moreprodukty","n":"Пицца с морепродуктами","d":"Тонкое хрустящее тесто, нежный томатный соус, ароматный сыр и щедрая начинка из морепродуктов, сочное сочетание вкусов моря","p":4300}]},{"id":"banquet-menu","name":"Банкетные блюда","items":[{"id":"fishbarmak","n":"Фишбармак","d":"Рыбная версия бешбармака на 5-6 человек с насыщенным вкусом и подачей, рассчитанной на большую компанию.","p":39000,"t":"Фирменное","i":1},{"id":"kuyrdak","n":"Куырдак из баранины","d":"Сытный куырдак из баранины на 5-6 человек с насыщенным мясным вкусом, идеально подходящий для общего стола.","p":36900,"i":1},{"id":"osetrina-ris","n":"Осетрина с рисом и овощами","d":"Праздничное блюдо из осетрины с рисом и овощами 1.5 кг для большой компании из 4-6 человек","p":39900},{"id":"baranya-noga","n":"Запеченная баранья нога с овощами","d":"Большая запеченная баранья нога весом 4 кг с ароматными овощами - эффектное банкетное блюдо для компании из 5-6 человек.","p":44500},{"id":"beshbarmak","n":"Бешбармак","d":"Традиционный бешбармак на 5-6 человек с казы и жая - сытное национальное блюдо для душевного застолья.","p":33500}]},{"id":"sides","name":"Гарниры и соусы","items":[{"id":"kartofelnye-shariki","n":"Картофельные шарики","d":"Хрустящие картофельные шарики с мягкой серединой.","p":1290,"i":1},{"id":"molodoi-kartofel","n":"Молодой картофель","d":"Нежный молодой картофель с простым и домашним вкусом.","p":990,"i":1},{"id":"ovoschi-gril","n":"Овощи гриль","d":"Ароматные овощи гриль с легким дымным вкусом.","p":1790,"i":1},{"id":"ris","n":"Рис припущенный","d":"Легкий припущенный рис как универсальный гарнир к рыбе и мясу.","p":790,"i":1},{"id":"dolki","n":"Картофельные дольки","d":"Золотистые картофельные дольки с аппетитной корочкой.","p":1490},{"id":"pure","n":"Картофельное пюре","d":"Нежное картофельное пюре с мягкой кремовой текстурой.","p":790},{"id":"brokkoli","n":"Брокколи в соусе","d":"Нежная брокколи в соусе как легкое дополнение к основному блюду.","p":1900},{"id":"sparzha","n":"Спаржа","d":"Деликатная спаржа для изысканного дополнения к мясу или рыбе.","p":2490},{"id":"hleb","n":"Свежевыпеченный хлеб","d":"Белый или ржаной, свежей выпечки","p":450},{"id":"sous-2203","n":"Соус чесночный","d":"Нежный чесночный соус с ароматным и сливочным оттенком.","p":400},{"id":"sous-2204","n":"Соус шрирача-микс","d":"Пикантный соус с острой ноткой для яркого вкуса блюд.","p":400},{"id":"sous-2205","n":"Соус кетчуп","d":"Классический томатный соус к закускам, картофелю и мясу.","p":400},{"id":"sous-2206","n":"Соус табаско","d":"Острый соус для тех, кто любит выразительную пикантность.","p":400},{"id":"sous-2207","n":"Соус тар-тар","d":"Нежный соус с легкой кислинкой, особенно подходящий к рыбе.","p":400},{"id":"sous-2208","n":"Соус сырный","d":"Мягкий сырный соус с насыщенным сливочным вкусом.","p":400},{"id":"sous-2209","n":"Соус BBQ","d":"Дымный соус барбекю для мяса, бургеров и горячих закусок.","p":400}]},{"id":"desserts","name":"Десерты","items":[{"id":"desert-dnya","n":"Десерт дня","d":"Свежий десерт дня от кухни для приятного завершения трапезы.","p":1900},{"id":"morozhenoe","n":"Мороженое","d":"Нежное мороженое с прохладным сливочным вкусом.","p":1680},{"id":"frukty","n":"Фруктовое ассорти","d":"Свежее фруктовое ассорти для легкого и яркого завершения стола.","p":4900}]},{"id":"drinks","name":"Напитки","items":[{"id":"lim-2213","n":"Лимонад «Груша-бузина»","d":"Освежающий лимонад с нежной сладостью груши и ароматом бузины. 1 л","p":2800,"i":1},{"id":"lim-2214","n":"Лимонад «Киви-яблоко»","d":"Яркий фруктовый лимонад с кисло-сладким вкусом киви и яблока. 1 л","p":2800,"i":1},{"id":"lim-2215","n":"Лимонад «Смородина-маракуйя»","d":"Тропическое сочетание маракуйи и насыщенной смородины. 1 л","p":2800,"i":1},{"id":"lim-2216","n":"Лимонад «Ягодный»","d":"Освежающий лимонад с насыщенным вкусом спелых ягод. 1 л","p":2800,"i":1},{"id":"smuzi-2217","n":"Смузи «Ананас-щавель»","d":"Освежающий смузи с тропическим ананасом и легкой кислинкой щавеля. 250 мл","p":2500,"i":1},{"id":"smuzi-2218","n":"Смузи «Клубника-банан»","d":"Нежный фруктовый смузи с классическим сочетанием клубники и банана. 250 мл","p":2300,"i":1},{"id":"smuzi-2219","n":"Смузи «Тропический»","d":"Яркий микс тропических фруктов с освежающим вкусом. 250 мл","p":2300,"i":1},{"id":"milk-2221","n":"Молочный коктейль «Орео-шоколад»","d":"Густой молочный коктейль с шоколадом и печеньем Oreo. 300 мл","p":2200,"i":1},{"id":"milk-2222","n":"Молочный коктейль «Классический»","d":"Насыщенный коктейль с арахисовыми нотами и вкусом печенья. 300 мл","p":1900,"i":1},{"id":"milk-2224","n":"Молочный коктейль «Банановый»","d":"Сладкий молочный коктейль с бананом. 300 мл","p":2100,"i":1},{"id":"mock-2226","n":"Безалкогольный «Пина Колада»","d":"Легкий сливочный коктейль с ананасовым соком. 250 мл","p":1900,"i":1},{"id":"mock-2227","n":"Безалкогольный «Мохито»","d":"Освежающий напиток с лаймом, мятой и содовой. 250 мл","p":2200,"i":1},{"id":"mock-2228","n":"Безалкогольный «Фирменный»","d":"Авторский тропический коктейль с кисло-сладким вкусом. 250 мл","p":2300,"i":1}]}];
const WA = "77081806825";
const VER = ((document.currentScript && document.currentScript.src.match(/[?&]v=([^&]+)/)) || [])[1] || "1";
let lang = "ru";
const L = {};
const T = (ru) => (lang !== "ru" && L[lang] && L[lang].ui[ru]) || ru;
const tm = (id, f) => { const d = lang !== "ru" && L[lang] && L[lang].menu; return (d && (f === "cat" ? d.cats[id] : d.items[id] && d.items[id][f])) || null; };
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const clamp = (v) => Math.max(0, Math.min(1, v));
const fmt = (n) => n.toLocaleString("ru-RU") + " ₸";
const byId = {};
MENU.forEach((c) => c.items.forEach((it) => { it.cat = c.id; byId[it.id] = it; }));
const cN = (c) => tm(c.id, "cat") || c.name;
const iN = (it) => tm(it.id, "n") || it.n;
const iD = (it) => tm(it.id, "d") || it.d;
const iT = (it) => tm(it.id, "t") || it.t;
const iV = (it) => tm(it.id, "v") || it.v;

/* ---------- меню ---------- */
const plural = (n) => { if (lang !== "ru" && L[lang].dish) return n + L[lang].dish(n); const m10 = n % 10, m100 = n % 100; return n + (m10 === 1 && m100 !== 11 ? " блюдо" : m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14) ? " блюда" : " блюд"); };
function renderMenu() {
  $("#catLane").innerHTML = MENU.map((c) => `<button class="cat" type="button" data-cat="${c.id}">${cN(c)}</button>`).join("");
  $("#menuBody").innerHTML = MENU.map((c, k) => {
    const ph = c.items.filter((i) => i.i), rows = c.items.filter((i) => !i.i);
    const pv = MENU[k - 1], nx = MENU[k + 1];
    return `<section class="mcat" id="${c.id}" aria-label="${cN(c)}"${k ? " hidden" : ""}>
      <h3>${cN(c)} <small>${plural(c.items.length)}</small></h3>
      ${ph.length ? `<div class="grid">${ph.map(dishHTML).join("")}</div>` : ""}
      ${rows.length ? `<div class="mrows">${rows.map(rowHTML).join("")}</div>` : ""}
      <div class="mcat-nav">${pv ? `<button type="button" data-cat-go="${pv.id}"><svg width="16" height="16" style="transform:scaleX(-1)"><use href="#ic-ar"/></svg><span>${cN(pv)}</span></button>` : ""}${nx ? `<button type="button" class="nx" data-cat-go="${nx.id}"><span>${cN(nx)}</span><svg width="16" height="16"><use href="#ic-ar"/></svg></button>` : ""}</div>
    </section>`;
  }).join("");
}
const varHTML = (it) => it.v ? `<div class="vr" role="group" aria-label="${T("Приготовление")}">${iV(it).map((v, i) => `<button type="button" class="vr-b" data-vid="${it.id}" data-vi="${i}" aria-pressed="${(vsel[it.id] || 0) === i}">${v}</button>`).join("")}</div>` : "";
function dishHTML(it) {
  return `<article class="dish rv" data-id="${it.id}">
    <div class="dish-ph"><img src="assets/menu/${it.id}.webp" alt="${iN(it)}" loading="lazy" width="480" height="480">${it.t ? `<span class="tag">${iT(it)}</span>` : ""}</div>
    <div class="dish-b"><h4 class="dish-n">${iN(it)}</h4><p class="dish-d">${iD(it)}</p>${varHTML(it)}
      <div class="dish-f"><span class="price">${fmt(it.p)}</span><span class="ctl" data-ctl="${it.id}"></span></div>
    </div></article>`;
}
function rowHTML(it) {
  return `<div class="mrow" data-id="${it.id}"><div class="mrow-tx"><b>${iN(it)}</b>${it.d ? `<span>${iD(it)}</span>` : ""}</div><span class="price">${fmt(it.p)}</span><span class="ctl" data-ctl="${it.id}"></span></div>`;
}

/* ---------- корзина ---------- */
let cart = {};
try { cart = JSON.parse(localStorage.getItem("sm_cart") || "{}") || {}; } catch (e) { cart = {}; }
const base = (k) => k.split("~")[0];
const vsel = {};
const keyOf = (id) => byId[id].v ? id + "~" + (vsel[id] || 0) : id;
const nameOf = (k, ru) => { const it = byId[base(k)], v = k.split("~")[1], vs = ru ? it.v : iV(it); return (ru ? it.n : iN(it)) + (v !== undefined && it.v ? " (" + vs[+v] + ")" : ""); };
Object.keys(cart).forEach((k) => { if (!byId[base(k)] || !(cart[k] > 0)) delete cart[k]; });
const save = () => { try { localStorage.setItem("sm_cart", JSON.stringify(cart)); } catch (e) {} };
const count = () => Object.values(cart).reduce((a, b) => a + b, 0);
const total = () => Object.entries(cart).reduce((a, [k, q]) => a + (byId[base(k)].p || 0) * q, 0);
const hasAsk = () => Object.keys(cart).some((k) => !byId[base(k)].p);

function ctlHTML(id) {
  const q = cart[id] || 0;
  return q ? `<span class="qty"><button type="button" data-dec="${id}" aria-label="${T("Убрать одну")}">−</button><b>${q}</b><button type="button" data-inc="${id}" aria-label="${T("Добавить ещё")}">+</button></span>`
           : `<button class="add" type="button" data-inc="${id}" aria-label="${T("В корзину")}">+</button>`;
}
function syncCart() {
  $$("[data-ctl]").forEach((el) => { el.innerHTML = ctlHTML(keyOf(el.dataset.ctl)); });
  const n = count(), t = total();
  $$("[data-cart-sum]").forEach((el) => { el.textContent = fmt(t); });
  $$("[data-cart-count]").forEach((el) => { el.textContent = n; el.hidden = !n; });
  $$("[data-cart-total]").forEach((el) => { el.textContent = fmt(t); });
  const note = $("#orderNote");
  note.hidden = !hasAsk();
  note.textContent = T("Цену позиций без стоимости назовёт оператор при подтверждении.");
  const list = $("#cartList");
  const ids = Object.keys(cart);
  list.innerHTML = ids.length ? ids.map((id) => { const it = byId[base(id)]; return `<div class="ci">${it.i ? `<img src="assets/menu/${it.id}.webp" alt="">` : `<i class="ci-ph"></i>`}<div><b>${nameOf(id)}</b><small>${fmt(it.p * cart[id])}</small></div>${ctlHTML(id)}</div>`; }).join("")
    : `<p class="cart-empty">${T("Корзина пуста. Добавьте блюда из меню кнопкой «+».")}</p>`;
  $("#orderForm").hidden = !ids.length;
  save();
}
let toastT;
function toast(msg) { const t = $("#toast"); t.textContent = msg; t.classList.add("on"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("on"), 1800); }
document.addEventListener("click", (e) => {
  const inc = e.target.closest("[data-inc]"), dec = e.target.closest("[data-dec]");
  if (inc) { const id = inc.dataset.inc; const first = !cart[id]; cart[id] = (cart[id] || 0) + 1; syncCart(); if (first) toast(nameOf(id) + T(" - в корзине")); $$(".cart-btn").forEach((b) => { b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump"); }); }
  const vb = e.target.closest("[data-vid]");
  if (vb) { vsel[vb.dataset.vid] = +vb.dataset.vi; $$(`[data-vid="${vb.dataset.vid}"]`).forEach((b) => b.setAttribute("aria-pressed", String(b === vb))); syncCart(); }
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
const langLine = () => lang === "en" ? "Язык гостя: английский (English)" : lang === "kk" ? "Язык гостя: казахский" : null;
function openWA(text) { window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(text), "_blank"); }
$("#orderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  if (f.elements.company.value) return;
  if (!check(f, mode === "delivery" ? ["name", "phone", "address"] : ["name", "phone"])) return;
  const lines = Object.keys(cart).map((id, i) => { const it = byId[base(id)], q = cart[id]; return `${i + 1}. ${nameOf(id, true)} x${q} - ${fmt(it.p * q)}`; });
  const v = (n) => f.elements[n].value.trim();
  const msg = ["Здравствуйте! Заказ с сайта Sollmarine", "", ...lines, "",
    "Итого: " + fmt(total()) + (hasAsk() ? " + позиции без цены" : ""),
    "Способ: " + (mode === "delivery" ? "доставка" : "самовывоз"),
    mode === "delivery" ? "Адрес: " + v("address") : v("time") ? "Заберу: " + v("time") : null,
    "Имя: " + v("name"), "Телефон: " + v("phone"),
    v("comment") ? "Комментарий: " + v("comment") : null, langLine()].filter((x) => x !== null);
  openWA(msg.join("\n"));
  cart = {}; syncCart(); drawer.hidden = true; lock(false);
  toast(T("Заказ открыт в WhatsApp - отправьте сообщение"));
});
$("#bookForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = e.target;
  if (f.elements.company.value) return;
  if (!check(f, ["name", "phone", "date", "time"])) return;
  const d = f.elements.date.value.split("-").reverse().join(".");
  const msg = ["Здравствуйте! Бронь стола с сайта Sollmarine", "Дата: " + d + ", " + f.elements.time.value, "Гостей: " + f.elements.guests.value,
    "Имя: " + f.elements.name.value.trim(), "Телефон: " + f.elements.phone.value.trim(),
    f.elements.comment.value.trim() ? "Пожелания: " + f.elements.comment.value.trim() : "", langLine()].filter(Boolean);
  openWA(msg.join("\n"));
  book.hidden = true; lock(false);
  toast(T("Бронь открыта в WhatsApp - отправьте сообщение"));
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

/* ---------- вкладки меню ---------- */
let curCat = "";
function showCat(id) {
  if (!MENU.some((c) => c.id === id)) return;
  curCat = id;
  $$(".mcat").forEach((sec) => { sec.hidden = sec.id !== id; });
  $$(".cat").forEach((b) => b.classList.toggle("on", b.dataset.cat === id));
  const on = $(".cat.on"), lane = $("#catLane");
  if (on) lane.scrollTo({ left: on.offsetLeft - lane.offsetLeft - 40, behavior: "smooth" });
  $$(`#${id} .rv`).forEach((el) => el.classList.add("in"));
}

/* ---------- переходы по якорям ---------- */
const hdrH = () => $("#hdr").offsetHeight;
function naturalTop(el) {
  const main = $("main");
  if (el.parentElement === main) { let y = main.offsetTop; for (const c of main.children) { if (c === el) return y; y += c.offsetHeight; } }
  return el.getBoundingClientRect().top + scrollY;
}
function targetTop(el) {
  if (el.classList.contains("plate") && getComputedStyle(el).position === "sticky") return naturalTop(el);
  let off = hdrH() + 24;
  if (el.classList.contains("mcat")) off = hdrH() + $("#cats").offsetHeight + 4;
  if (el.id === "top" || el.id === "hero") return 0;
  return naturalTop(el) - off;
}
function go(id, smooth) {
  const el = document.getElementById(id); if (!el) return;
  if (el.classList.contains("mcat")) showCat(id);
  window.scrollTo({ top: Math.max(0, targetTop(el)), behavior: smooth ? "smooth" : "auto" });
}
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#"]'); if (!a) return;
  const id = a.getAttribute("href").slice(1); if (!id || !document.getElementById(id)) return;
  e.preventDefault(); closeMenu(); go(id, true);
  history.replaceState(null, "", id === "top" ? location.pathname + location.search : "#" + id);
});
function pickCat(id) {
  showCat(id);
  const top = targetTop(document.getElementById(id));
  if (scrollY > top + 4) window.scrollTo({ top, behavior: "auto" });
  history.replaceState(null, "", "#" + id);
}
$("#catLane").addEventListener("click", (e) => { const b = e.target.closest("[data-cat]"); if (b) pickCat(b.dataset.cat); });
$("#menuBody").addEventListener("click", (e) => { const b = e.target.closest("[data-cat-go]"); if (b) { showCat(b.dataset.catGo); window.scrollTo({ top: targetTop(document.getElementById(b.dataset.catGo)), behavior: "smooth" }); history.replaceState(null, "", "#" + b.dataset.catGo); } });

/* ---------- плиты, подсветка категорий, панель ---------- */
let plates = [], ticking = false;
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
  const c = $("#contacts").getBoundingClientRect().top;
  $("#mbar").classList.toggle("on", y > vh * 0.55 && c > vh * 0.5);
}
const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };

/* ---------- постеры и видео акций ---------- */
const viewer = $("#viewer"), vImg = $("#viewerImg"), vVid = $("#viewerVid");
function closeViewer() { viewer.hidden = true; vVid.pause(); vVid.removeAttribute("src"); vVid.load(); lock(false); }
document.addEventListener("click", (e) => {
  const st = e.target.closest("[data-story],[data-video]");
  if (st) {
    const vid = st.dataset.video;
    vImg.hidden = !!vid; vVid.hidden = !vid;
    if (vid) { vVid.src = vid; vVid.play().catch(() => {}); } else { vImg.src = st.dataset.story; vImg.alt = st.querySelector("img").alt; }
    viewer.hidden = false; lock(true);
  }
  if (e.target.closest("[data-viewer-close]")) closeViewer();
});
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !viewer.hidden) closeViewer(); });
const loopIO = "IntersectionObserver" in window ? new IntersectionObserver((es) => es.forEach((en) => {
  const v = en.target;
  if (en.isIntersecting) { if (!v.src) v.src = v.dataset.loop; v.play().catch(() => {}); } else if (v.src) { v.pause(); }
}), { threshold: 0.55 }) : null;
$$("video[data-loop]").forEach((v) => { v.addEventListener("playing", () => v.classList.add("is-live")); if (loopIO) loopIO.observe(v); });

/* ---------- языки: RU в разметке, KZ и EN - файлами assets/lang по выбору ---------- */
const SKIP = "script,style,svg,blockquote,#menuBody,#catLane,#cartList,[data-i18n]";
const txtNodes = [], attrEls = [], htmlEls = $$("[data-i18n]").map((el) => [el, el.innerHTML]);
(function collect() {
  const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode: (n) => n.nodeValue.trim() && !n.parentElement.closest(SKIP) ? 1 : 2 });
  let n; while ((n = w.nextNode())) txtNodes.push([n, n.nodeValue]);
  $$("[alt],[aria-label],[placeholder],[title]").forEach((el) => { if (el.closest("#menuBody,#catLane,#cartList")) return; ["alt", "aria-label", "placeholder", "title"].forEach((a) => { if (el.hasAttribute(a) && el.getAttribute(a).trim()) attrEls.push([el, a, el.getAttribute(a)]); }); });
})();
const title0 = document.title;
function applyLang() {
  const d = lang !== "ru" && L[lang];
  txtNodes.forEach(([n, ru]) => { const k = ru.trim(), t = d && d.ui[k]; n.nodeValue = t ? ru.replace(k, t) : ru; });
  attrEls.forEach(([el, a, ru]) => el.setAttribute(a, (d && d.ui[ru]) || ru));
  htmlEls.forEach(([el, ru]) => { el.innerHTML = (d && d.html[el.dataset.i18n]) || ru; });
  document.title = (d && d.ui[title0]) || title0;
  document.documentElement.lang = lang === "kk" ? "kk" : lang;
  $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  $$("[data-lang-extra]").forEach((el) => el.remove());
  if (d && d.extra) Object.entries(d.extra).forEach(([sel, html]) => { const host = $(sel); if (host) host.insertAdjacentHTML("afterend", html); });
  const cur = curCat;
  renderMenu(); showCat(cur || MENU[0].id); syncCart();
  $$(".lane,.cat-lane").forEach(laneSync);
}
function setLang(l, remember) {
  if (!["ru", "kk", "en"].includes(l)) l = "ru";
  if (remember) { try { localStorage.setItem("sm_lang", l); } catch (e) {} }
  if (l === "ru" || L[l]) { lang = l; applyLang(); return; }
  const sc = document.createElement("script");
  sc.src = "assets/lang/" + l + ".js?v=" + VER;
  sc.onload = () => { L[l] = l === "kk" ? window.SITE_KK : window.SITE_EN; if (L[l]) { lang = l; applyLang(); } };
  document.head.appendChild(sc);
}
$$("[data-lang]").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang, true)));

/* ---------- старт ---------- */
renderMenu();
showCat(MENU[0].id);
setMode("delivery");
syncCart();
plates = $$(".plate");
addEventListener("scroll", onScroll, { passive: true });
addEventListener("resize", () => { onScroll(); $$(".lane,.cat-lane").forEach(laneSync); });
$$(".lane,.cat-lane").forEach((l) => { l.addEventListener("scroll", () => laneSync(l), { passive: true }); laneSync(l); });

(function () {
  let l = new URLSearchParams(location.search).get("lang");
  if (l) { try { localStorage.setItem("sm_lang", l); } catch (e) {} }
  else { try { l = localStorage.getItem("sm_lang"); } catch (e) {} }
  if (l && l !== "ru") setLang(l, false);
})();

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
