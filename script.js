let categoryPerView = [53];
//let categoryToSlider = [4, 55, 74, 70,];
//let categoryToSlider = [17, 81, 4, 74];
let categoryToSlider = [1185, 17, 44, 74];
let patternSearchCat = `
<a class="search-cat-a" href="/ihrashky-antystres/page1">
<img src="/img/igrushkiantistress.svg" alt="антистрес">
<h2>іграшки антистрес</h2>
</a>
<a class="search-cat-a" href="/holovolomky/page1">
<img src="/img/golovolomki.svg" alt="головоломки">
<h2>головоломки для дітей</h2>
</a>
<a class="search-cat-a" href="/doshky-dlya-malyuvannya/page1">
<img src="/img/doskidlyarisovaniya.svg" alt="дошки">
<h2>дошки для малювання</h2>
</a>
<a class="search-cat-a" href="/derevyani-ihrashky/page1">
<img src="/img/derevyannyeigrushki.svg" alt="дерев'яні">
<h2>дерев'яні іграшки</h2>
</a>
<a class="search-cat-a" href="/dlya-divchatok/page1">
<img src="/img/igrushkidlyadevochek.svg" alt="для дівчаток">
<h2>іграшки для дівчаток</h2>
</a>
<a class="search-cat-a" href="/lyalky/page1">
<img src="/img/kukly.svg" alt="ляльки">
<h2>ляльки дитячі</h2>
</a>
<a class="search-cat-a" href="/dlya-malyukiv/page1">
<img src="/img/igrushkidlyamalyshey.png" alt="для малюків">
<h2>іграшки для малюків</h2>
</a>
<a class="search-cat-a" href="/dlya-khlopchykiv/page1">
<img src="/img/igrushkidlyamalchikov.svg" alt="для хлопчиків">
<h2>іграшки для хлопчиків</h2>
</a>
<a class="search-cat-a" href="/konstruktory/page1">
<img src="/img/detskiekonstruktory.svg" alt="конструктори">
<h2>дитячі конструктори</h2>
</a>
<a class="search-cat-a" href="/ihrashky-na-radiokeruvanni/page1">
<img src="/img/mashinkanaru.svg" alt="радіо іграшки">
<h2>іграшки на радіокеруванні</h2>
</a>
<a class="search-cat-a" href="/muzychni-instrumenty/page1">
<img src="/img/detskiemuzykalnyeisnturmenty.svg" alt="інструменти">
<h2>музичні інструменти</h2>
</a>
<a class="search-cat-a" href="/nastilni-ihry/page1">
<img src="/img/nastolnyeigry.svg" alt="настільні ігри">
<h2>настільні ігри</h2>
</a>
<a class="search-cat-a" href="/dytyachi-knyhy/page1">
<img src="/img/detskieknigi.svg" alt="книги">
<h2>дитячі книги</h2>
</a>
<a class="search-cat-a" href="/rozvivayuchi-igrashki/page1">
<img src="/img/razivayushchieigrushki.svg" alt="розвиток">
<h2>розвиваючі іграшки</h2>
</a>
<a class="search-cat-a" href="/nabory-dlya-tvorchosti/page1">
<img src="/img/plastilintvorchestvo.svg" alt="пластилін">
<h2>Набори для творчості</h2>
</a>
<a class="search-cat-a" href="/fihurky-tvaryn/page1">
<img src="/img/igrushkizhivotnye.svg" alt="тварини">
<h2>фігурки тварин</h2>
</a>
<a class="search-cat-a" href="/elektronika/page1">
<img src="/img/elektronika.svg" alt="електроніка">
<h2>електроніка</h2>
</a>
<a class="search-cat-a" href="/tovary-dlya-sportu/page1">
<img src="/img/sportivnyeirushki.svg" alt="спорт">
<h2>товари для спорту</h2>
</a>
<a class="search-cat-a" href="/transportni-zasoby/page1">
<img src="/img/detskiytransport.svg" alt="транспорт">
<h2>дитячий транспорт</h2>
</a>
<a class="search-cat-a" href="/tovary-dlya-nemovlyat/page1">
<img src="/img/igrushkidlyanovorozhdennkh.svg" alt="для немовлят">
<h2>для немовлят</h2>
</a>
<a class="search-cat-a" href="/myaki-igrashky/page1">
<img src="/img/w2nk_tng5_220609.jpg" alt="м'які">
<h2>м'які іграшки</h2>
</a>
<a class="search-cat-a" href="/dytyacha-zbroya/page1">
<img src="/img/detskoeoruzhie.svg" alt="вода">
<h2>Іграшкова зброя</h2>
</a>
<a class="search-cat-a" href="/odyah-ta-aksesuary/page1">
<img src="/img/odezhdaaksessuary.svg" alt="одяг">
<h2>одяг аксесуари сумки</h2>
</a>
<a class="search-cat-a" href="/ihrashky-dlya-vulytsi/page1">
<img src="/img/igrushkidlyaulitsy.svg" alt="для вулиці">
<h2>іграшки для вулиці</h2>
</a>
<a class="search-cat-a" href="/vse-dlya-svyat/page1">
<img src="/img/christmas-wreath.png" alt="для свят">
<h2>все для свят</h2>
</a>
<a class="search-cat-a" href="/brendovi/page1">
<img src="/img/edinorig3.png" alt="брендові">
<h2>брендові іграшки</h2>
</a>


`

let headerSection = `<!-- Google Tag Manager (noscript) -->
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TKFHHZGW" height="0" width="0"
                  style="display:none;visibility:hidden"></iframe></noscript>
            <!-- End Google Tag Manager (noscript) -->

            <div class="preloader">
               <div class="spinner"></div>
            </div>

            <div class="popup-acc" id="popup">
               <div class="popup-content">
                  <h2>Запит на згоду збору даних</h2>
                  <p>Ми використовуємо файли cookie для поліпшення вашого досвіду. Натисніть "Прийняти", щоб погодитися з нашою
                     політикою конфіденційності.</p>
                  <div class="buttons">
                     <button onclick="reject()">Відхилити</button>
                     <button onclick="consentGrantedAdStorage()">Прийняти</button>
                  </div>
                  <a href="/politics.html">політика конфіденційності</a>
               </div>
            </div>

            <div class="popup__bg">
               <div class="popup">
                  <div class="close-popup">
                     <img src="/img/xmark-solid.svg">
                  </div>
                  <h2>Кошик</h2>

                  <div class="check-wrap">

                  </div>

                  <div class="popup-btns">
                     <a class="popup-btn" href="/katalog.html"><button>Продовжити обирати</button></a>
                     <a class="popup-btn" href="/checkout.php"><button>Оформити замовлення</button></a>
                  </div>


               </div>
            </div>

            <section id="s1">

               <header>
                  <a href="/index.html">
                     <div class="logo">
                        <img src="/img/kiko-logo1X1.png" alt="kiko">

                     </div>
                  </a>

                  <div class="search-wrap">
                     <img src="/img/magnifying-glass-solid.svg" alt="">
                     <label for="search"></label>
                     <input type="text" id="search" placeholder="пошук" autocomplete="off">
                  </div>

                  <div class="menu-el">
                     <a href="/katalog.html">Каталог</a>
                     <a href="#s2">Про компанію</a>
                     <a href="#s7">Контакти</a>
                     <button class="btn-cat tovar cart-sh head open-popup">
                        <span>
                           <img src="/img/cart-shopping-solid.svg" alt="">
                        </span>
                        <span class="count-header">
                           <h6>1</h6>
                        </span>
                     </button>

                  </div>
                  <div class="container">
                     <a id="menu-toggle" class="menu-toggle">
                        <span class="menu-toggle-bar menu-toggle-bar--top"></span>
                        <span class="menu-toggle-bar menu-toggle-bar--middle"></span>
                        <span class="menu-toggle-bar menu-toggle-bar--bottom"></span>
                     </a>
                     <button class="btn-cat tovar cart-sh head small open-popup">
                        <span>
                           <img src="/img/cart-shopping-solid.svg" alt="">
                        </span>
                        <span class="count-header">
                           <h6>1</h6>
                        </span>
                     </button>

                     <nav class="nav">
                        <section class="logo-kiko">
                           <section class="logo-kiko-container">
                              <div class="kiko-k">
                                 <span class="k"></span>
                                 <span class="k"></span>
                                 <span class="k"></span>
                              </div>
                              <div class="kiko-i">
                                 <span class="i"></span>
                                 <span class="i"></span>
                              </div>
                              <div class="kiko-k">
                                 <span class="k"></span>
                                 <span class="k"></span>
                                 <span class="k"></span>
                              </div>
                              <span class="zero"><span class="screen-reader-text">0</span></span>



                           </section>
                        </section>
                        <ul class="nav__list">
                           <li class="nav__list_item"><a class="nav__link" href="/index.html">Головна</a></li>
                           <li class="nav__list_item"><a class="nav__link" href="/katalog.html">Каталог</a></li>
                           <li class="nav__list_item"><a class="nav__link" href="#s2">Про компанію</a></li>
                           <li class="nav__list_item"><a class="nav__link" href="#s7">Контакти</a></li>
                        </ul>

                     </nav>
                  </div>

               </header>

               <div class="search-cat-wrap hide">
                  <div class="search-900-wrap">
                     <img src="/img/magnifying-glass-solid.svg" alt="">
                     <label for="search-s"></label>
                     <input type="text" id="search-s" placeholder="пошук" autocomplete="off">
                  </div>
                  <div class="search-cat">
                     ${patternSearchCat}
                  </div>

               </div>
            </section>`;

let aboutUsSection = `<section id="s2-main">
      <div class="left-side">
         <h2>Про компанію</h2>
         <p>Наша історія почалась з прагнення робити світ яскравішим. Заснована молодою та творчою командою, наша
            компанія стала осередком для унікальних ідей та подарунків, які роблять кожен момент неповторним. Ми віримо
            в магію подарунків та зробимо все можливе, щоб зробити свята ваших дітей найяскравішими!</p>
         <p>KIKO STORE – це не просто продаж товарів. Ми тут, щоб допомогти вам зберегти час та надати впевненість у
            якості, а вільний час дарувати своїй родині.</p>
         <div class="about">
            <!--<div class="logo-about"><h2>6+</h2><p>бла бла</p></div>-->
            <div class="logo-about">
               <h2>1+</h2>
               <p>рік роботи</p>
            </div>
            <div class="logo-about">
               <h2>500+</h2>
               <p>задоволених <br>клієнтів</p>
            </div>
         </div>

      </div>
      <section class="logo-kiko">
         <section class="logo-kiko-container">
            <div class="kiko-k">
               <span class="k"></span>
               <span class="k"></span>
               <span class="k"></span>
            </div>
            <div class="kiko-i">
               <span class="i"></span>
               <span class="i"></span>
            </div>
            <div class="kiko-k">
               <span class="k"></span>
               <span class="k"></span>
               <span class="k"></span>
            </div>
            <span class="zero"><span class="screen-reader-text">0</span></span>



         </section>
      </section>
      </section>`;

let aboutSection2 = `
   <section id="s2">
      <div class="left-side">
         <h1>Про компанію</h1>
         <p>Наша історія почалась з прагнення робити світ яскравішим. Заснована молодою та творчою командою, наша
            компанія стала осередком для унікальних ідей та подарунків, які роблять кожен момент неповторним. Ми віримо
            в магію подарунків та зробимо все можливе, щоб зробити свята ваших дітей найяскравішими!</p>
         <p>KIKO STORE – це не просто продаж товарів. Ми тут, щоб допомогти вам зберегти час та надати впевненість у
            якості, а вільний час дарувати своїй родині.</p>
         <div class="about">
            <!--<div class="logo-about"><h2>6+</h2><p>бла бла</p></div>-->
            <div class="logo-about">
               <h2>1+</h2>
               <p>рік роботи</p>
            </div>
            <div class="logo-about">
               <h2>500+</h2>
               <p>задоволених <br>клієнтів</p>
            </div>
         </div>

      </div>
      <div class="logo-kiko">
         <div class="logo-kiko-container">
            <div class="kiko-k">
               <span class="k"></span>
               <span class="k"></span>
               <span class="k"></span>
            </div>
            <div class="kiko-i">
               <span class="i"></span>
               <span class="i"></span>
            </div>
            <div class="kiko-k">
               <span class="k"></span>
               <span class="k"></span>
               <span class="k"></span>
            </div>
            <span class="zero"><span class="screen-reader-text">0</span></span>
   
   
   
         </div>
      </div>
   </section>
`

let advantagesSection = `<section id="s4">
            <div class="content adv-wrap">
               <h2>Наші переваги</h2>
               <div class="advantages">
                  <h4>швидка доставка</h4>
                  <p>Відправка по Україні компаніями: <br> Нова Пошта, Укрпошта, Meest. <br> Відправляємо кожного дня, термін
                     доставки 1 - 3 дні.
                  </p>
               </div>
               <div class="advantages">
                  <h4>Гарантована якість</h4>
                  <p>Перед відправкою ми ретельно перевіряємо та надійно пакуємо товар.</p>
               </div>
               <div class="advantages">
                  <h4>безпечна оплата</h4>
                  <p>Оплата можлива такими способами: <br>

                     Накладений платіж - готівкою при отриманні у відділеннях компаній перевизника. <br>
                  </p>
               </div>
            </div>
      </section>`;

let footerSection = `<footer id="s7">

      <div class="contacts-footer">

         <section class="logo-kiko">
            <section class="logo-kiko-container">
               <div class="kiko-k">
                  <span class="k"></span>
                  <span class="k"></span>
                  <span class="k"></span>
               </div>
               <div class="kiko-i">
                  <span class="i"></span>
                  <span class="i"></span>
               </div>
               <div class="kiko-k">
                  <span class="k"></span>
                  <span class="k"></span>
                  <span class="k"></span>
               </div>
               <span class="zero"><span class="screen-reader-text">0</span></span>



            </section>
         </section>

      <div class="wrap-contact">
         <!--<div class="logo-c-f"><img class="inv" src="/img/clock-regular.svg" alt=""></div>-->
         <div class="text-c-f">
            <p>Меню</p>
            <a href="/index.html">Головна</a>
            <a href="/katalog.html">Каталог</a>
            <a href="/delivery.html">Доставка</a>
            <a href="/povernenja.html">Обмін та повернення</a>
            <a href="/index.html#s2">Про компанію</a>
            <!--<a href="#">Політика конфіденційності</a>-->
         </div>
      </div>
         
      <div class="wrap-contact">
         <div class="text-c-f">
            <p>Контакти</p>
            <a href="tel:+380950494970">
               <img src="/img/square-phone-solid.svg"></img>
               <p>+380 (95) 049 49 70</p>
            </a>
            <a href="https://t.me/kiko_store_ua" target="_blank">
               <img src="/img/telegram.svg"></img>
               <p>@KIKO_STORE</p>
            </a>
            <a href="mailto:admin@kiko-store.com.ua">
               <img src="/img/envelope-solid.svg"></img>
               <p>admin@kiko-store.com.ua</p>
            </a>
         </div>
      </div>
      <div class="wrap-contact">
         <div class="text-c-f">
            <p>Графік роботи</p>
            <a>Менеджери сайту <br>08:00 - 21:00</a>
         </div>
      </div>
         
      </div>
         
      <div class="policy">
         <a href="/politics.html">Договір публічної оферти</a>
         <p>© 2023 - 2025</p>
      </div>
      </footer>`;

//// node script.js

const cleanUrl = (url) => {
   if (!url) return ''; // Якщо url порожній або undefined, повертаємо порожній рядок
   return url
      .trim() // Видаляємо зайві пробіли з початку та кінця
      .replace(/[«»"’“”]/g, '') // Видаляємо лапки та спеціальні символи
      .replace(/[^a-zA-Z0-9\-_.~]/g, ''); // Видаляємо все, що не входить в стандартний URL
};



const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { parseStringPromise, Builder } = require('xml2js');
const xml2js = require('xml2js');
const { promisify } = require('util');
const builder = require('xmlbuilder');


const parser = new xml2js.Parser();

// Функція для очищення рядків (CDATA, пробіли, переноси)
const cleanText = (text) => text ? text.trim().replace(/\s+/g, ' ') : '';

// Функція для транслітерації українських літер та заміни символів на '-'
function transliterate(text) {
   const map = {
      'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e', 'є': 'ye', 'ж': 'zh',
      'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'yi', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
      'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts',
      'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ь': '', 'ю': 'yu', 'я': 'ya',
      'А': 'A', 'Б': 'B', 'В': 'V', 'Г': 'H', 'Ґ': 'G', 'Д': 'D', 'Е': 'E', 'Є': 'Ye', 'Ж': 'Zh',
      'З': 'Z', 'И': 'Y', 'І': 'I', 'Ї': 'Yi', 'Й': 'Y', 'К': 'K', 'Л': 'L', 'М': 'M', 'Н': 'N',
      'О': 'O', 'П': 'P', 'Р': 'R', 'С': 'S', 'Т': 'T', 'У': 'U', 'Ф': 'F', 'Х': 'Kh', 'Ц': 'Ts',
      'Ч': 'Ch', 'Ш': 'Sh', 'Щ': 'Shch', 'Ь': '', 'Ю': 'Yu', 'Я': 'Ya'
   };

   return text
      .split('')
      .map(char => map[char] || char) // Транслітерація
      .join('')
      .replace(/[^a-zA-Z0-9]/g, '-')  // Замінюємо всі не буквено-цифрові символи на '-'
      .replace(/-+/g, '-')            // Видаляємо повторювані '-'
      .toLowerCase();                 // Приводимо до нижнього регістру
}

const processXML = () => {
   fs.readFile('pr.xml', 'utf8', (err, data) => {
      if (err) throw err;

      parser.parseString(data, (err, result) => {
         if (err) throw err;

         const offers = result.yml_catalog.shop[0].offers[0].offer.map(offer => ({
            _id: offer.$.id,
            available: offer.$.available === 'true',
            old_price: offer.old_price?.[0] || '0',
            categoryBaza_id: offer.categoryBaza?.[0]?.$.id || '',
            categoryBaza: offer.categoryBaza?.[0]?._ || '',
            sectionNew: offer.sectionNew?.[0] || '0',
            pictureMY: offer.pictureMY?.map(img => cleanText(img)) || [],
            pictureURL: offer.pictureURL?.map(url => cleanText(url)) || [],
            myURL: cleanUrl(cleanText(offer.myURL?.[0] || '')),
            url: cleanText(offer.url?.[0] || ''),
            price: offer.price?.[0] || '',
            currencyId: offer.currencyId?.[0] || '',
            categoryId: offer.categoryId?.[0] || '',
            pictures: offer.picture?.map(p => cleanText(p)) || [],
            name: cleanText(offer.name?.[0] || ''),
            name_ua: cleanText(offer.name_ua?.[0] || ''),
            description: cleanText(offer.description?.[0] || ''),
            description_ua: cleanText(offer.description_ua?.[0] || ''),
            vendor: cleanText(offer.vendor?.[0] || ''),
            vendorCode: cleanText(offer.vendorCode?.[0] || ''),
            country_of_origin: cleanText(offer.country_of_origin?.[0] || ''),
            stock_quantity: offer.stock_quantity?.[0] || '',
            perfect: offer.perfect?.[0] || '',
            params: offer.param?.reduce((acc, param) => {
               acc[cleanText(param.$.name)] = cleanText(param._);
               return acc;
            }, {})
         }));

         const categories = result.yml_catalog.shop[0].categories[0].category.map(cat => {
            const name = cleanText(cat._ || '0');
            let dataHref = cleanText(cat.$['data-href'] || '');

            // Якщо data-href порожній, транслітеруємо name
            if (!dataHref) {
               dataHref = transliterate(name);
            }

            return {
               _id: cat.$.id,
               parentId: cat.$.parentId || '0',
               'data-href': dataHref,
               'data-descriptionShort': cleanText(cat.$['data-descriptionShort'] || '0'),
               'data-descriptionLong': cleanText(cat.$['data-descriptionLong'] || '0'),
               name: name
            };
         });

         const output = { offers, categories };

         fs.writeFile('pr.json', JSON.stringify(output, null, 2), err => {
            if (err) throw err;
            //console.log('Файл pr.json успішно створено!');
            readJSON();
         });
      });
   });
};
processXML();


const readJSON = () => {
   fs.readFile('pr.json', 'utf8', (err, jsonData) => {
      if (err) throw err;
      const parsedData = JSON.parse(jsonData);
      //console.log('Кількість offer:', parsedData.offers.length);
      //console.log('Кількість categories:', parsedData.categories.length);

      ///////////////////////////////////////////////////////////////////////////////////////////
      /////////СТВОРЕННЯ INDEX.HTML /////////////////////////////////////////////////////////////
      //// node script.js

      const fileIndex = "index.html";
      const contentFirst = `
         <!DOCTYPE html>
         <html lang="uk">

         <head>

            <!--<link rel="canonical" href="https://kiko-store.com.ua"/>-->

            <meta charset="UTF-8">
            <meta name="viewport"
               content="width=device-width, initial-scale=1.0 minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
            <title>Kiko Store - інтернет магазин дитячих іграшок!</title>
            <meta name="color-scheme" content="only light">
            <meta name="Keywords"
               content="дитячі іграшки, машинки, ляльки, конструктори, модель мотоцикла, конструктор, конструктор динозавр, автомодель, кінетичний пісок, іграшковий поїзд, пазли, настільні ігри, розвиваючі іграшки, інтерактивні іграшки, іграшковий набір інструментів, роботи, іграшки для малюків, музичні іграшки, фігурки героїв, іграшки для ванної, м'які іграшки">
            <meta name="Description"
               content="Магазин з продажу іграшок для малюків, м'яких іграшок, машинок, конструкторів. Кожна дитина знайде собі щось до смаку! Швидка доставка по Києву, гарна якість і приємна ціна.">
            <meta name="image" content="">
            <meta property="og:type" content="website">
            <meta property="og:title" content="Kiko Store - інтернет магазин дитячих іграшок!">
            <meta property="og:image" content="">
            <meta property="og:url" content="https://kiko-store.com.ua">
            <meta property="og:description"
               content="Магазин з продажу іграшок для малюків, м'яких іграшок, машинок, конструкторів. Кожна дитина знайде собі щось до смаку! Швидка доставка по Києву, гарна якість і приємна ціна.">
            <meta name="theme-color" content="#4475F2">

            <link rel="canonical" href="https://kiko-store.com.ua/">
            <meta name="robots" content="index,follow">

            <link rel="stylesheet" href="/stylesheet.css">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;600;700;900&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="/css/reset.css">
            <link rel="stylesheet" href="/css/index.css">

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />

            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
            <link rel="manifest" href="/webmanifest">

            <script type="application/ld+json">
               {
                  "@context": "https://schema.org",
                  "@type": "WebSite",
                  "name": "Kiko Store",
                  "image": "https://kiko-store.com.ua/kiko-logo1X1.png",
                  "url": "https://kiko-store.com.ua",
                  "logo": "https://kiko-store.com.ua/kiko-logo1X1.png",
                  "potentialAction": {
                     "@type": "SearchAction",
                     "target": "https://kiko-store.com.ua/search?q={search_term_string}",
                     "query-input": "required name=search_term_string"
                  },
                  "breadcrumb": {
                     "@type": "BreadcrumbList",
                     "itemListElement": [
                        {
                          "@type": "ListItem",
                          "position": 1,
                          "name": "Головна",
                          "item": "https://kiko-store.com.ua"
                        },
                        {
                          "@type": "ListItem",
                          "position": 2,
                          "name": "іграшки антистрес",
                          "item": "https://kiko-store.com.ua/ihrashky-antystres/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 3,
                          "name": "головоломки",
                          "item": "https://kiko-store.com.ua/holovolomky/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 4,
                          "name": "дошки для малювання",
                          "item": "https://kiko-store.com.ua/doshky-dlya-malyuvannya/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 5,
                          "name": "дерев'яні іграшки",
                          "item": "https://kiko-store.com.ua/derevyani-ihrashky/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 6,
                          "name": "іграшки для дівчаток",
                          "item": "https://kiko-store.com.ua/dlya-divchatok/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 7,
                          "name": "ляльки дитячі",
                          "item": "https://kiko-store.com.ua/lyalky/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 8,
                          "name": "іграшки для малюків",
                          "item": "https://kiko-store.com.ua/dlya-malyukiv/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 9,
                          "name": "іграшки для хлопчиків",
                          "item": "https://kiko-store.com.ua/dlya-khlopchykiv/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 10,
                          "name": "дитячі конструктори",
                          "item": "https://kiko-store.com.ua/konstruktory/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 11,
                          "name": "іграшки на радіокеруванні",
                          "item": "https://kiko-store.com.ua/ihrashky-na-radiokeruvanni/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 12,
                          "name": "музичні інструменти",
                          "item": "https://kiko-store.com.ua/muzychni-instrumenty/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 13,
                          "name": "настільні ігри",
                          "item": "https://kiko-store.com.ua/nastilni-ihry/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 14,
                          "name": "дитячі книги",
                          "item": "https://kiko-store.com.ua/dytyachi-knyhy/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 15,
                          "name": "розвиваючі іграшки",
                          "item": "https://kiko-store.com.ua/rozvivayuchi-igrashki/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 16,
                          "name": "Набори для творчості",
                          "item": "https://kiko-store.com.ua/nabory-dlya-tvorchosti/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 17,
                          "name": "фігурки тварин",
                          "item": "https://kiko-store.com.ua/fihurky-tvaryn/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 18,
                          "name": "електроніка",
                          "item": "https://kiko-store.com.ua/elektronika/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 19,
                          "name": "товари для спорту",
                          "item": "https://kiko-store.com.ua/tovary-dlya-sportu/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 20,
                          "name": "дитячий транспорт",
                          "item": "https://kiko-store.com.ua/transportni-zasoby/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 21,
                          "name": "для немовлят",
                          "item": "https://kiko-store.com.ua/tovary-dlya-nemovlyat/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 22,
                          "name": "м'які іграшки",
                          "item": "https://kiko-store.com.ua/myaki-igrashky/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 23,
                          "name": "Іграшкова зброя",
                          "item": "https://kiko-store.com.ua/dytyacha-zbroya/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 24,
                          "name": "одяг аксесуари сумки",
                          "item": "https://kiko-store.com.ua/odyah-ta-aksesuary/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 25,
                          "name": "іграшки для вулиці",
                          "item": "https://kiko-store.com.ua/ihrashky-dlya-vulytsi/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 26,
                          "name": "все для свят",
                          "item": "https://kiko-store.com.ua/vse-dlya-svyat/page1"
                        },
                        {
                          "@type": "ListItem",
                          "position": 27,
                          "name": "брендові іграшки",
                          "item": "https://kiko-store.com.ua/brendovi/page1"
                        }
                     ]
                  },
                  "sameAs": [
                    "https://www.instagram.com/kikostore.com.ua"
                  ],
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+380950494970",
                    "contactType": "customer service",
                    "areaServed": "UA",
                    "availableLanguage": "Ukrainian"
                  }
               }
            </script>

            <!-- Google Tag Manager -->
            <script>(function (w, d, s, l, i) {
                  w[l] = w[l] || []; w[l].push({
                     'gtm.start':
                        new Date().getTime(), event: 'gtm.js'
                  }); var f = d.getElementsByTagName(s)[0],
                     j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                        'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
               })(window, document, 'script', 'dataLayer', 'GTM-TKFHHZGW');</script>
            <!-- End Google Tag Manager -->

            <!-- Google tag (gtag.js) -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11387500155"></script>
            <script>
               // Define dataLayer and the gtag function.
               window.dataLayer = window.dataLayer || [];
               function gtag() { dataLayer.push(arguments); }

               // Set default consent to 'denied' as a placeholder
               // Determine actual values based on your own requirements
               gtag('consent', 'default', {
                  'ad_storage': 'denied',
                  'ad_user_data': 'denied',
                  'ad_personalization': 'denied',
                  'analytics_storage': 'denied'
               });

               // Check if 'cookieAccepted' is present in localStorage
               if (localStorage.getItem('cookieAccepted')) {
                  // If 'cookieAccepted' is present, check its value
                  if (localStorage.getItem('cookieAccepted') === 'true') {
                     // If 'cookieAccepted' is true, update consent for ad_storage
                     gtag('consent', 'update', {
                        'ad_storage': 'granted',
                        'ad_user_data': 'granted',
                        'ad_personalization': 'granted',
                        'analytics_storage': 'granted'
                     });
                  } else if (localStorage.getItem('cookieAccepted') === 'falls') {
                     gtag('consent', 'default', {
                        'ad_storage': 'denied',
                        'ad_user_data': 'denied',
                        'ad_personalization': 'denied',
                        'analytics_storage': 'denied'
                     });
                  }

               } else {
                  // If 'cookieAccepted' is not present, run cookieAcc.js
                  // Replace 'cookieAcc.js' with the actual path to your script
                  var script = document.createElement('script');
                  script.src = '/js/cookieAcc.js';
                  document.head.appendChild(script);
               }

               gtag('js', new Date());

               gtag('config', 'AW-11387500155');
            </script>


            <!-- Create one update function for each consent parameter -->
            <script>
               function consentGrantedAdStorage() {
                  gtag('consent', 'update', {
                     'ad_storage': 'granted',
                     'ad_user_data': 'granted',
                     'ad_personalization': 'granted',
                     'analytics_storage': 'granted'
                  });

                  localStorage.setItem("cookieAccepted", "true");
                  document.getElementById("popup").style.display = "none";
               }
            </script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

         </head>

         <body>
            <!-- Google Tag Manager (noscript) -->
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TKFHHZGW" height="0" width="0"
                  style="display:none;visibility:hidden"></iframe></noscript>
            <!-- End Google Tag Manager (noscript) -->

            <div class="preloader">
               <div class="spinner"></div>
            </div>

            <div class="popup-acc" id="popup">
               <div class="popup-content">
                  <h2>Запит на згоду збору даних</h2>
                  <p>Ми використовуємо файли cookie для поліпшення вашого досвіду. Натисніть "Прийняти", щоб погодитися з нашою
                     політикою конфіденційності.</p>
                  <div class="buttons">
                     <button onclick="reject()">Відхилити</button>
                     <button onclick="consentGrantedAdStorage()">Прийняти</button>
                  </div>
                  <a href="/politics.html">політика конфіденційності</a>
               </div>
            </div>

            <div class="popup__bg">
               <div class="popup">
                  <div class="close-popup">
                     <img src="/img/xmark-solid.svg">
                  </div>
                  <h2>Кошик</h2>

                  <div class="check-wrap">

                  </div>

                  <div class="popup-btns">
                     <a class="popup-btn" href="/katalog.html"><button>Продовжити обирати</button></a>
                     <a class="popup-btn" href="/checkout.php"><button>Оформити замовлення</button></a>
                  </div>


               </div>
            </div>

            <section id="s1">

               <header>
                  <a href="/index.html">
                     <div class="logo">
                        <img src="/img/kiko-logo1X1.png" alt="kiko">

                     </div>
                  </a>

                  <div class="search-wrap">
                     <img src="/img/magnifying-glass-solid.svg" alt="">
                     <label for="search"></label>
                     <input type="text" id="search" placeholder="пошук" autocomplete="off">
                  </div>

                  <div class="menu-el">
                     <a href="/katalog.html">Каталог</a>
                     <a href="#s2">Про компанію</a>
                     <a href="#s7">Контакти</a>
                     <button class="btn-cat tovar cart-sh head open-popup">
                        <span>
                           <img src="/img/cart-shopping-solid.svg" alt="">
                        </span>
                        <span class="count-header">
                           <h6>1</h6>
                        </span>
                     </button>

                  </div>
                  <div class="container">
                     <a id="menu-toggle" class="menu-toggle">
                        <span class="menu-toggle-bar menu-toggle-bar--top"></span>
                        <span class="menu-toggle-bar menu-toggle-bar--middle"></span>
                        <span class="menu-toggle-bar menu-toggle-bar--bottom"></span>
                     </a>
                     <button class="btn-cat tovar cart-sh head small open-popup">
                        <span>
                           <img src="/img/cart-shopping-solid.svg" alt="">
                        </span>
                        <span class="count-header">
                           <h6>1</h6>
                        </span>
                     </button>

                     <nav class="nav">
                        <section class="logo-kiko">
                           <section class="logo-kiko-container">
                              <div class="kiko-k">
                                 <span class="k"></span>
                                 <span class="k"></span>
                                 <span class="k"></span>
                              </div>
                              <div class="kiko-i">
                                 <span class="i"></span>
                                 <span class="i"></span>
                              </div>
                              <div class="kiko-k">
                                 <span class="k"></span>
                                 <span class="k"></span>
                                 <span class="k"></span>
                              </div>
                              <span class="zero"><span class="screen-reader-text">0</span></span>



                           </section>
                        </section>
                        <ul class="nav__list">
                           <li class="nav__list_item"><a class="nav__link" href="/index.html">Головна</a></li>
                           <li class="nav__list_item"><a class="nav__link" href="/katalog.html">Каталог</a></li>
                           <li class="nav__list_item"><a class="nav__link" href="#s2">Про компанію</a></li>
                           <li class="nav__list_item"><a class="nav__link" href="#s7">Контакти</a></li>
                        </ul>

                     </nav>
                  </div>

               </header>

               <div class="search-cat-wrap hide">
                  <div class="search-900-wrap">
                     <img src="/img/magnifying-glass-solid.svg" alt="">
                     <label for="search-s"></label>
                     <input type="text" id="search-s" placeholder="пошук" autocomplete="off">
                  </div>
                  <div class="search-cat">
                     ${patternSearchCat}
                  </div>

               </div>
            </section>

               <section class="line-bottom">
      <div class="content-left">
         <h1>найкращі <br> іграшки для <br> ваших дітей</h1>
         <p>Інтернет-магазин працює щоб зробити ваші покупки максимально зручними. KIKO STORE - це магазин з продажу
            іграшок для малюків, м'яких іграшок, машинок, конструкторів. Кожна дитина знайде собі щось до смаку! </p>
         <a href="/katalog.html">
            <button class="btn-cat">каталог</button>
         </a>
      </div>
      <div class="content-right">
         <div class="rectangle"></div>
         <!-- Slider main container -->
         <div class="swiper">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">

      `;

      // Створюємо файл або перезаписуємо його
      fs.writeFileSync(fileIndex, contentFirst);

      // Функція додавання секції
      function addSection(sectionHtml) {
         fs.appendFileSync(fileIndex, sectionHtml + "\n");
      }


      let toSlide = {};

      categoryToSlider.forEach(category => {
         toSlide[category] = [];
      });

      let count = 0;
      let toCategoryMore = [];
      let toOffersNew = [];
      let toOffersSale = [];
      parsedData.offers.forEach(offer => {

         if (categoryToSlider.includes(Number(offer.categoryBaza_id)) && offer.available && offer.pictureMY.length > 2) {
            toSlide[offer.categoryBaza_id].push(offer);
         }

         ///////////////////////////////////////////////////////////////////////////////////////////
         /////////ДОДАВАННЯ PERFECT ДО INDEX.HTML //////////////////////////////////////////////////
         //// node script.js

         if (offer.perfect == '1') {
            addSlidePerfect(offer);
         }


         if (categoryPerView.includes(Number(offer.categoryBaza_id)) && offer.available) {
            count++;
            if (count < 8) {
               toCategoryMore.push(offer);
            }
         }

         if (offer.sectionNew == '1') {
            toOffersNew.push(offer);
         }

         if (offer.old_price !== '0') {
            toOffersSale.push(offer);
         }



      });


      function addSlidePerfect(offer) {

         parsedData.categories.forEach(category => {
            if (category._id == offer.categoryBaza_id) {

               let res = category["data-href"];
               let categoryURL = res.slice(2);

               let url = offer.myURL.replace(/[^a-zA-Z0-9\-_.~]+/g, '');


               let pattern = `
               <div class="swiper-slide">
                  <a href="/${categoryURL}/${url}">
                     <img src="/imgs/${offer.pictureMY[0]}" alt="">
                  </a>
               </div>
               `;

               addSection(pattern);

            }
         })

      }

      addSection(`</div><!-- If we need pagination --><div class="swiper-pagination"></div><!-- If we need navigation buttons --><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div></div></section>`)

      ///////////////////////////////////////////////////////////////////////////////////////////
      ///////// ДОДАВАННЯ ВЕЛИКОГО СЛАЙДЕРА З ДЕКІЛЬКОМА КАТЕГОРІЯМИ ДО INDEX.HTML //////////////
      //// node script.js

      addSection(`<section><div class="swiper5"><div class="swiper-wrapper">`)

      for (let i = 0; i < 4; i++) {
         //console.log(toSlide[categoryToSlider[i]][1].name_ua);
         if (toSlide[categoryToSlider[i]][0].old_price === '0') {

            let categoryURL;
            parsedData.categories.forEach(category => {
               if (category._id == toSlide[categoryToSlider[i]][0].categoryBaza_id) {
                  let res = category["data-href"];
                  categoryURL = res.slice(2);
               }
            })

            let u = toSlide[categoryToSlider[i]][0].myURL;
            let url = u.replace(/[^a-zA-Z0-9\-_.~]+/g, '');

            pattToSlide1 = `
            <div class="swiper-slide">
            <div class="sw-5-wrap horiz-wrap">
               <div class="sw-5">
                  <a href="/${categoryURL}/${url}">
                     <div id="${toSlide[categoryToSlider[i]][0]._id}" class="item-goods">
                        <div class="item-top">
                           <img class="lazyload" src="/img/preloader.gif" data-src="/imgs/${toSlide[categoryToSlider[i]][0].pictureMY[0]}" alt="image"></img>
                        </div>
                        <div class="item-bottom">

                           <h3>${toSlide[categoryToSlider[i]][0].name_ua}</h3>
                           <p>&#8372; ${parseFloat(toSlide[categoryToSlider[i]][0].price)}</p>
                           <button class="add-to-card"><span></span><span></span></button>
                        </div>
                     </div>
                  </a>
               </div>

               <div class="sw-5-2">
                  <a href="/${categoryURL}/${url}">
                     <div id="${toSlide[categoryToSlider[i]][0]._id}" class="item-goods">
                     <img class="lazyload" src="/img/preloader.gif" data-src="/imgs/${toSlide[categoryToSlider[i]][0].pictureMY[1]}" alt="image"></img>
                     </div>
                  </a>

                  <a href="/${categoryURL}/${url}">
                     <div id="${toSlide[categoryToSlider[i]][0]._id}" class="item-goods">
                     <img class="lazyload" src="/img/preloader.gif" data-src="/imgs/${toSlide[categoryToSlider[i]][0].pictureMY[2]}" alt="image"></img>

                     </div>
                  </a>
               </div>
            
            `

         }

         else if (toSlide[categoryToSlider[i]][0].old_price !== '0') {
            let categoryURL;
            parsedData.categories.forEach(category => {
               if (category._id == toSlide[categoryToSlider[i]][0].categoryBaza_id) {
                  let res = category["data-href"];
                  categoryURL = res.slice(2);
               }
            })

            sale = parseFloat(toSlide[categoryToSlider[i]][0].old_price) - parseFloat(toSlide[categoryToSlider[i]][0].price);

            let u = toSlide[categoryToSlider[i]][0].myURL;
            let url = u.replace(/[^a-zA-Z0-9\-_.~]+/g, '');

            pattToSlide1 = `
            <div class="swiper-slide">
            <div class="sw-5-wrap horiz-wrap">
               <div class="sw-5">
                  <a href="/${categoryURL}/${url}">
                     <div id="${toSlide[categoryToSlider[i]][0]._id}" class="item-goods">
                        <span class="sale">-${sale}&#8372;</span>
                        <div class="item-top">
                        <img class="lazyload" src="/img/preloader.gif" data-src="/imgs/${toSlide[categoryToSlider[i]][0].pictureMY[0]}" alt="image"></img>
                        </div>
                        <div class="item-bottom">

                           <h3>${toSlide[categoryToSlider[i]][0].name_ua}</h3>
                           <p class="p-old">&#8372; ${parseFloat(toSlide[categoryToSlider[i]][0].price)}<br><span>&#8372; ${parseFloat(toSlide[categoryToSlider[i]][0].old_price)}</span></p>
                           <button class="add-to-card"><span></span><span></span></button>
                        </div>
                     </div>
                  </a>
               </div>

               <div class="sw-5-2">
                  <a href="/${categoryURL}/${url}">
                     <div id="${toSlide[categoryToSlider[i]][0]._id}" class="item-goods">
                     <img class="lazyload" src="/img/preloader.gif" data-src="/imgs/${toSlide[categoryToSlider[i]][0].pictureMY[1]}" alt="image"></img>
                     </div>
                  </a>

                  <a href="/${categoryURL}/${url}">
                     <div id="${toSlide[categoryToSlider[i]][0]._id}" class="item-goods">
                     <img class="lazyload" src="/img/preloader.gif" data-src="/imgs/${toSlide[categoryToSlider[i]][0].pictureMY[2]}" alt="image"></img>

                     </div>
                  </a>
               </div>
            
            `

         }

         if (toSlide[categoryToSlider[i]][1].old_price == '0') {

            let categoryURL;
            parsedData.categories.forEach(category => {
               if (category._id == toSlide[categoryToSlider[i]][1].categoryBaza_id) {
                  let res = category["data-href"];
                  categoryURL = res.slice(2);
               }
            })


            let u = toSlide[categoryToSlider[i]][1].myURL;
            let url = u.replace(/[^a-zA-Z0-9\-_.~]+/g, '');

            pattToSlide2 = `
            <div class="sw-5-3">
               <a href="/${categoryURL}/${url}">
                  <div id="${toSlide[categoryToSlider[i]][1]._id}" class="item-goods">
                     <img class="lazyload" src="/img/preloader.gif" data-src="/imgs/${toSlide[categoryToSlider[i]][1].pictureMY[0]}" alt="image"></img>

                     <p class="old-p-empty">&#8372; ${parseFloat(toSlide[categoryToSlider[i]][1].price)}</p>
                  </div>
               </a>
            </div>
            
            <div class="sw-5-4">
               <a href="/${categoryURL}/${url}">
                  <div id="${toSlide[categoryToSlider[i]][1]._id}" class="item-goods">

                  <img class="lazyload" src="/img/preloader.gif" data-src="/imgs/${toSlide[categoryToSlider[i]][1].pictureMY[1]}" alt="image"></img>
                  <h3></h3>
                     <p class="old-p-empty">&#8372; ${parseFloat(toSlide[categoryToSlider[i]][1].price)}</p>
                  </div>
               </a>
            
               <div class="sw-5-4-1">
                  <a href="/${categoryURL}/page1">
                     <button>Більше в категорії</button>
                  </a>
               </div>
            </div>
            </div>
            </div>
            `

         }

         else if (toSlide[categoryToSlider[i]][1].old_price !== '0') {
            let categoryURL;
            parsedData.categories.forEach(category => {
               if (category._id == toSlide[categoryToSlider[i]][1].categoryBaza_id) {
                  let res = category["data-href"];
                  categoryURL = res.slice(2);
               }
            })

            sale = parseFloat(toSlide[categoryToSlider[i]][1].old_price) - parseFloat(toSlide[categoryToSlider[i]][1].price);

            let u = toSlide[categoryToSlider[i]][1].myURL;
            let url = u.replace(/[^a-zA-Z0-9\-_.~]+/g, '');

            pattToSlide2 = `
            <div class="sw-5-3">
               <a href="/${categoryURL}/${url}">
                  <div id="${toSlide[categoryToSlider[i]][1]._id}" class="item-goods">
                  <span class="sale">-${sale} &#8372;</span>
                  <img class="lazyload" src="/img/preloader.gif" data-src="/imgs/${toSlide[categoryToSlider[i]][1].pictureMY[0]}" alt="image"></img>
                  <p>&#8372; ${parseFloat(toSlide[categoryToSlider[i]][1].price)}<br><span>&#8372; ${parseFloat(toSlide[categoryToSlider[i]][1].old_price)}</span></p>
                  </div>
               </a>
            </div>
            
            <div class="sw-5-4">
               <a href="/${categoryURL}/${url}">
                  <div id="${toSlide[categoryToSlider[i]][1]._id}" class="item-goods">
                     <span class="sale">-${sale} &#8372;</span>
                     <img class="lazyload" src="/img/preloader.gif" data-src="/imgs/${toSlide[categoryToSlider[i]][1].pictureMY[1]}" alt="image"></img>
                     <h3></h3>
                     <p class="p-old">&#8372; ${parseFloat(toSlide[categoryToSlider[i]][1].price)}<br><span>&#8372; ${parseFloat(toSlide[categoryToSlider[i]][1].old_price)}</span></p>
                  </div>
               </a>
            
               <div class="sw-5-4-1">
                  <a href="/${categoryURL}/page1">
                     <button>Більше в категорії</button>
                  </a>
               </div>
            </div>
            </div>
            </div>
            `

         }

         addSection(pattToSlide1);
         addSection(pattToSlide2);
      }



      addSection(`</div><div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></section>`);

      ///////////////////////////////////////////////////////////////////////////////////////////
      ///////// ДОДАВАННЯ SECTIONMORE ДО INDEX.HTML /////////////////////////////////////////////
      //// node script.js

      addSection(`<section class="st-1" id="s3"><div class="content"><div class="content-goods">`)


      toCategoryMore.forEach(offer => {

         if (offer.old_price == '0') {
            let categoryURL;
            parsedData.categories.forEach(category => {
               if (category._id == offer.categoryBaza_id) {

                  let res = category["data-href"];
                  categoryURL = res.slice(2);
               }
            })

            let u = offer.myURL;
            let url = u.replace(/[^a-zA-Z0-9\-_.~]+/g, '');

            let pattern = `<a href="/${categoryURL}/${url}">
                  <div id="${offer._id}" class="item-goods">
                     <div class="item-top">
                        <img class="lazyload" src="/img/preloader.gif" data-src="/imgs/${offer.pictureMY[0]}" alt="image"></img>
                     </div>
                     <div class="item-bottom">
                        <h3>${offer.name_ua}</h3>
                        <p>&#8372; ${parseFloat(offer.price)}</p>
                        <button class="add-to-card"><span></span><span></span></button>
                     </div>
                  </div>
               </a>
            `;

            addSection(pattern);
         }

         else {
            let categoryURL;
            parsedData.categories.forEach(category => {
               if (category._id == offer.categoryBaza_id) {

                  let res = category["data-href"];
                  categoryURL = res.slice(2);
               }
            })

            let u = offer.myURL;
            let url = u.replace(/[^a-zA-Z0-9\-_.~]+/g, '');

            let sale = parseFloat(offer.old_price) - parseFloat(offer.price);

            let pattern = `<a href="/${categoryURL}/${url}">
                  <div id="${offer._id}" class="item-goods">
                        <span class="sale">-${sale} &#8372;</span>
                        <div class="item-top">
                           <img class="lazyload" src="/img/preloader.gif" data-src="/imgs/${offer.pictureMY[0]}" alt="image"></img>
                        </div>
                     <div class="item-bottom">
                        <h3>${offer.name_ua}</h3>
                        <p>&#8372; ${parseFloat(offer.price)}<br><span>&#8372; ${parseFloat(offer.old_price)}</span></p>
                        <button class="add-to-card"><span></span><span></span></button>
                     </div>
                  </div>
                  </a>`;

            addSection(pattern);
         }


      })

      parsedData.categories.forEach(category => {
         if (category._id == categoryPerView[0]) {
            addSection(`<a href="${category[`data-href`]}/page1"><div class="more-cat"><h2>дивитись більше в категорії <span class="category-more">${category.name}</span></h2></div></a></div></div></section>`)
         }
      })

      ///////////////////////////////////////////////////////////////////////////////////////////
      ///////// ДОДАВАННЯ SECTIONCAT ДО INDEX.HTML //////////////////////////////////////////////
      //// node script.js

      addSection(`<section id="category"><div class="content"><div class="search-cat">${patternSearchCat}</div></div></section>`);



      ///////////////////////////////////////////////////////////////////////////////////////////
      ///////// ДОДАВАННЯ SECTIONNEW ДО INDEX.HTML //////////////////////////////////////////////
      //// node script.js

      addSection(`<section class="section-new-wrap"><h2 class="section-new-h2">новинки</h2><div class="section-new">`);

      toOffersNew.forEach(offer => {

         let categoryURL;
         parsedData.categories.forEach(category => {
            if (category._id == offer.categoryBaza_id) {

               let res = category["data-href"];
               categoryURL = res.slice(2);
            }
         })

         let u = offer.myURL;
         let url = u.replace(/[^a-zA-Z0-9\-_.~]+/g, '');


         if (offer.available == true && offer.old_price == 0 || offer.old_price == '') {

            let pattern = `
            <a href="/${categoryURL}/${url}">
            <div id="${offer._id}" class="item-goods">

            <div class="item-top">
               <img class="lazyload" src="/img/preloader.gif" data-src="/imgs/${offer.pictureMY[0]}" alt="image"></img>
            </div>
            <div class="item-bottom">

               <h3>${offer.name_ua}</h3>
               <p>&#8372; ${parseFloat(offer.price)}</p>
               <button class="add-to-card"><span></span><span></span></button>
            </div>
            </div></a>`;

            addSection(pattern);
         }

         else if (offer.available == true && offer.old_price !== 0 || offer.old_price !== '') {

            let pattern = `
            <a href="/${categoryURL}/${url}">
            <div id="${offer._id}" class="item-goods">
            <span class="sale">-${sale} &#8372;</span>
            <div class="item-top">
               <img class="lazyload" src="/img/preloader.gif" data-src="/imgs/${offer.pictureMY[0]}" alt="image"></img>
            </div>
            <div class="item-bottom">

               <h3>${offer.name_ua}</h3>
               <p>&#8372; ${parseFloat(offer.price)}<br><span>&#8372; ${parseFloat(offer.old_price)}</span></p>
               <button class="add-to-card"><span></span><span></span></button>
            </div>
            </div>
            </a>
            `;

            addSection(pattern);

         }

         else if (offer.available == false || offer.available == '') {
            let pattern = `
            <a href="/${categoryURL}/${url}">
            <div id="${offer._id}" class="item-goods">

            <div class="item-top">
               <img class="lazyload" src="/img/preloader.gif" data-src="/imgs/${offer.pictureMY[0]}" alt="image"></img>
            </div>
            <div class="item-bottom">

               <h3>${offer.name_ua}</h3>
               <p>Немає в наявності</p>
               <button class="add-to-card"><span></span><span></span></button>
            </div>
            </div></a>`;

            addSection(pattern);
         }


      })

      addSection(`</div><button class="section-new-btn">показати більше</button></section>`);


      ///////////////////////////////////////////////////////////////////////////////////////////
      ///////// ДОДАВАННЯ SECTIONSALE ДО INDEX.HTML /////////////////////////////////////////////
      //// node script.js

      addSection(`<section><div class="swiper6"><div class="swiper-wrapper">`);

      toOffersSale.slice().reverse().forEach(offer => {
         let categoryURL;
         parsedData.categories.forEach(category => {
            if (category._id == offer.categoryBaza_id) {

               let res = category["data-href"];
               categoryURL = res.slice(2);
            }
         });

         if (offer.available == true) {
            let u = offer.myURL;
            let url = u.replace(/[^a-zA-Z0-9\-_.~]+/g, '');

            let sale = parseFloat(offer.old_price) - parseFloat(offer.price);

            let pattern = `
            <div class="swiper-slide">
               <a href="/${categoryURL}/${url}">
                  <div id="${offer._id}" class="item-goods">
                     <span class="sale">-${sale} &#8372;</span>
                     <div class="item-top">
                         <img class="lazyload" src="/img/preloader.gif" data-src="/imgs/${offer.pictureMY[0]}" alt="image">
                     </div>
                     <div class="item-bottom">
                         <h3>${offer.name_ua}</h3>
                         <p>&#8372; ${parseFloat(offer.price)}<br><span>&#8372; ${parseFloat(offer.old_price)}</span></p>
                         <button class="add-to-card"><span></span><span></span></button>
                     </div>
                  </div>
               </a>
            </div>`;

            addSection(pattern);
         };
      });

      addSection(`</div><div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div></section>`);

      ///////////////////////////////////////////////////////////////////////////////////////
      ///////// ДОДАВАННЯ ABOUTAS ДО INDEX.HTML /////////////////////////////////////////////
      addSection(aboutUsSection);

      ///////////////////////////////////////////////////////////////////////////////////////
      ///////// ДОДАВАННЯ ADVANTAGES ДО INDEX.HTML //////////////////////////////////////////
      addSection(advantagesSection);

      ///////////////////////////////////////////////////////////////////////////////////////
      ///////// ДОДАВАННЯ SECTION S5 ДО INDEX.HTML //////////////////////////////////////////

      addSection(`<section id="s5"></section>`);

      ///////////////////////////////////////////////////////////////////////////////////////
      ///////// ДОДАВАННЯ FOOTER ДО INDEX.HTML //////////////////////////////////////////////

      addSection(footerSection);

      ///////////////////////////////////////////////////////////////////////////////////////
      ///////// ДОДАВАННЯ SCRIPTS ДО INDEX.HTML /////////////////////////////////////////////

      addSection(`<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/gsap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/ScrollTrigger.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/ScrollToPlugin.min.js"></script>
      <script defer src="/js/gsap.js"></script>
      <script defer src="/js/index.js"></script>
      <script defer src="/js/basket.js"></script>
      <script defer src="/js/catalog.js"></script>
      <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
      <script src="/js/preloadOff.js"></script>
      <script src="/js/cookieAcc.js"></script>`);





      // Закриваємо HTML
      fs.appendFileSync(fileIndex, "</body>\n</html>");

   });
};




///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
//// node script.js


function mainProcessingFunction() {
   // Завантажуємо JSON
   const data = JSON.parse(fs.readFileSync("pr.json", "utf8"));

   const categories = data.categories;
   const offers = data.offers;

   const catArr = [130, 30, 74, 70, 79, 488, 104, 4, 1, 11, 81, 102, 115, 17, 186, 44, 53, 60, 55, 82, 146, 260, 1185, 83, 620, 279]; // Масив ID категорій, які потрібно створювати

   const dataDir = path.join(__dirname, 'data');
   if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir);
      console.log('Created data directory');
   }

   // Function to get products for a specific category
   function getProductsByCategory(categoryId) {
      // Filter offers that belong to this category
      return offers.filter(offer => {
         // Use the correct property name: categoryBaza_Id
         return Number(offer.categoryBaza_id) === categoryId;
      });
   }

   // Process each category ID in the catArr
   catArr.forEach(categoryId => {
      // Find the category object using string comparison
      const category = categories.find(cat => Number(cat._id) === categoryId);
      

      if (category) {
         // Get products for this category
         const products = getProductsByCategory(categoryId);
         if (products.length > 0) {
            // Create data structure to save
            const categoryData = {
               category: category,
               products: products
            };

            // Create filename
            const filename = `pr_${category["data-href"].slice(2)}.json`;
            const filePath = path.join(dataDir, filename);

            // Write the data to a JSON file
            fs.writeFileSync(filePath, JSON.stringify(categoryData, null, 2));
         } else {
            console.log(`No products found for category ${categoryId}`);
         }
      } else {
         console.log(`Category with ID ${categoryId} not found`);
      }
   });




   const outputDir = "output"; // Коренева папка для всіх категорій

   if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);


   function createDir(dirPath) {
      if (!fs.existsSync(dirPath)) {
         fs.mkdirSync(dirPath, { recursive: true });
      }
   }

   function escapeHtml(str) {
      return str.replace(/[&<>"']/g, function (match) {
         return ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
         })[match];
      });
   }

   function generateParamsList(params) {
      if (!params || typeof params !== 'object') return '';

      return Object.entries(params)
         .filter(([key, value]) => !String(value).includes('Отправка из Одессы')) // Фільтруємо
         .map(([key, value]) => `
         <li><span>${key}</span><span>${value}</span></li>
      `).join('');
   }

   function generateSwiperSlides(offer) {
      if (!offer.pictureMY || !Array.isArray(offer.pictureMY)) return '';
  
      return offer.pictureMY.slice(0, 5).map((picture, index) => `
          <div class="swiper-slide">
              <img src="/imgs/${picture}" 
                   ${index === 0 ? 'loading="eager" fetchpriority="high"' : 'class="lazyload" data-src="/imgs/' + picture + '"'} 
                   alt="image">
          </div>
      `).join('');
  }
  
   let categoryPages = {}; // Об'єкт для сторінок кожної категорії

   let patternDomain = `https://kiko-store.com.ua`;

   // Створення товарів для GOOGLE XML
   const rss = builder.create('rss', { version: '1.0', encoding: 'utf-8' })
      .att('version', '2.0')
      .att('xmlns:g', 'http://base.google.com/ns/1.0');

   // Додавання елементів до каналу
   const channel = rss.ele('channel');
   channel.ele('title', 'Kiko xml 1.0');
   channel.ele('description', 'Kiko data feed template.');
   channel.ele('link', 'https://kiko-store.com.ua');



   // 🔹 Додавання файлів товарів у відповідні папки
   offers.slice().reverse().forEach(offer => {
      if (!catArr.includes(Number(offer.categoryBaza_id))) return; // Пропускаємо непотрібні категорії

      const category = categories.find(cat => cat._id === offer.categoryBaza_id);
      if (!category) return;

      const categoryPath = path.join(outputDir, category["data-href"]);
      createDir(categoryPath);

      ///////////////////////////////////////////////////////////////////////////////////////////
      //// node script.js

      const item = channel.ele('item');
      item.ele('g:id', offer.vendorCode.trim());
      item.ele('title', offer.name_ua.trim());
      item.ele('description', offer.description_ua.trim());
      item.ele('link', `${patternDomain}/${category["data-href"].slice(2)}/${offer.myURL.trim()}`);
      item.ele('g:price', `${offer.price.trim()} UAH`);
      item.ele('g:condition', 'new');
      item.ele('g:availability', offer.available ? 'in_stock' : 'out_of_stock');
      // Основне зображення
      if (offer.pictureMY && offer.pictureMY.length > 0) {
         item.ele('g:image_link', `${patternDomain}/imgs/${offer.pictureMY[0].toString().trim()}`);
      }

      // Додаткові зображення
      if (offer.pictureMY && offer.pictureMY.length > 1) {
         offer.pictureMY.slice(1).forEach(picture => {
            item.ele('g:additional_image_link', `${patternDomain}/imgs/${picture.toString().trim()}`);
         });
      }
      const tax = item.ele('g:tax');
      tax.ele('g:country', 'UA');
      tax.ele('g:rate', '0');
      item.ele('g:google_product_category', category.googeId);
      item.ele('g:age_group', 'adult');
      item.ele('g:brand', offer.country_of_origin ? offer.country_of_origin.toString() : 'N/A');
      item.ele('g:custom_label_0', offer.categoryBaza_id);


      const availability = offer.available ? "InStock" : "OutOfStock";

      // Видаляємо символи: ' " / {}() . , " @ # $ % ^ & * -
      const cleanedName = offer.name_ua.replace(/['"\/{}().,@#\$%\^&*\-«»]/g, '').trim();

      // Видаляємо символи: ' " / {}() . , " @ # $ % ^ & * -
      const cleanedDescription = offer.description_ua.replace(/['"\/{}().,@#\$%\^&*\-«»]/g, '').trim();



      let pattOffer = `
      <!DOCTYPE html>
      <html lang="uk">
      <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0 minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
         <title>${escapeHtml(offer.name_ua)}</title>
         <meta name="color-scheme" content="only light">
         <meta name="Keywords" content="${escapeHtml(offer.name_ua)} купити.">
         <meta name="Description" content="${escapeHtml(offer.name_ua)} купуйте по супер ціні. Швидка доставка по Києву і Україні | ${offer.categoryBaza} | Інтернет Магазин Kiko-Store">
         <meta name="title" content="${escapeHtml(offer.name_ua)}">
         
         <meta name="robots" content="index,follow">
         <meta property="og:locale" content="uk">
         <meta property="og:type" content="website">
         <meta property="og:title" content="${escapeHtml(offer.name_ua)} | Kiko-Store">
         <meta property="og:image" content="https://kiko-store.com.ua/imgs/${offer.pictureMY[0]}">
         <meta property="og:url" content="https://kiko-store.com.ua/${category['data-href'].slice(2)}/${offer.myURL}">
         <meta property="og:description" content="${escapeHtml(offer.name_ua)} купуйте по супер ціні. Швидка доставка по Києву і Україні | ${offer.categoryBaza} | Інтернет Магазин Kiko-Store">
         
         <meta name="theme-color" content="#4475F2">
         
         <link rel="canonical" href="https://kiko-store.com.ua/${category['data-href'].slice(2)}/${offer.myURL}">
         <link rel="stylesheet" href="/stylesheet.css">
         <link rel="preconnect" href="https://fonts.googleapis.com">
         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
         <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;600;700;900&display=swap" rel="stylesheet">
         <link rel="stylesheet" href="/css/reset.css">
         <link rel="stylesheet" href="/css/index.css">
         <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">

         <script type="application/ld+json">
          {
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": "${cleanedName}",
            "image": "https://kiko-store.com.ua/imgs/${offer.pictureMY[0]}",
            "description": "${cleanedDescription}",
            "sku": "${offer.vendorCode}",

            "offers": {
              "@type": "Offer",
              "url": "https://kiko-store.com.ua/${category['data-href'].slice(2)}/${offer.myURL}",
              "priceCurrency": "UAH",
              "price": "${offer.price.replace(/,/g, '')}.00",
              "itemCondition": "https://schema.org/NewCondition",
              "availability": "${availability}",
              "shippingDetails": {
                  "@type": "OfferShippingDetails",
                  "shippingRate": {
                    "@type": "MonetaryAmount",
                    "value": "50.00",
                    "currency": "UAH"
                  },
                  "deliveryTime": {
                     "@type": "ShippingDeliveryTime",
                     "handlingTime": {
                       "@type": "QuantitativeValue",
                       "minValue": 5,
                       "maxValue": 60,
                       "unitCode": "MIN"
                     },
                     "transitTime": {
                        "@type": "QuantitativeValue",
                        "minValue": 1,
                        "maxValue": 3,
                        "unitCode": "DAY"
                     }
                  },
                  "shippingDestination": {
                     "@type": "DefinedRegion",
                     "addressCountry": "UA"
                  },
                  "hasMerchantReturnPolicy": {
                     "@type": "MerchantReturnPolicy",
                     "returnPolicyCategory": "MerchantReturnFiniteReturnWindow",
                     "merchantReturnDays": 14,
                     "returnFees": "FreeReturn"
                  }
               },
              "seller": {
                "@type": "Organization",
                "name": "Kiko Store"
              }
            }
          }
         </script>

         <!-- Google Tag Manager -->
         <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TKFHHZGW');</script>
            <!-- End Google Tag Manager -->
            
            <!-- Google tag (gtag.js) -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11387500155"></script>
            <script>
              // Define dataLayer and the gtag function.
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
            
              // Set default consent to 'denied' as a placeholder
              // Determine actual values based on your own requirements
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied'
              });
            
              // Check if 'cookieAccepted' is present in localStorage
              if(localStorage.getItem('cookieAccepted')) {
                // If 'cookieAccepted' is present, check its value
                if(localStorage.getItem('cookieAccepted') === 'true') {
                  // If 'cookieAccepted' is true, update consent for ad_storage
                  gtag('consent', 'update', {
                    'ad_storage': 'granted',
                    'ad_user_data': 'granted',
                    'ad_personalization': 'granted',
                    'analytics_storage': 'granted'
                  });
                } else if (localStorage.getItem('cookieAccepted') === 'falls') {
                  gtag('consent', 'default', {
                     'ad_storage': 'denied',
                     'ad_user_data': 'denied',
                     'ad_personalization': 'denied',
                     'analytics_storage': 'denied'
                  });
                }
         
              } else {
                // If 'cookieAccepted' is not present, run cookieAcc.js
                // Replace 'cookieAcc.js' with the actual path to your script
                var script = document.createElement('script');
                script.src = '/js/cookieAcc.js';
                document.head.appendChild(script);
              }
            
              gtag('js', new Date());
            
              gtag('config', 'AW-11387500155');
         </script>

         <!-- Create one update function for each consent parameter -->
         <script>
            function consentGrantedAdStorage() {
              gtag('consent', 'update', {
               'ad_storage': 'granted',
               'ad_user_data': 'granted',
               'ad_personalization': 'granted',
               'analytics_storage': 'granted'
              });
      
               localStorage.setItem("cookieAccepted", "true");
               document.getElementById("popup").style.display = "none";
            }
         </script>

         <script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"></script>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

      </head>

      <body id="${offer._id}">

         <!-- Google Tag Manager (noscript) -->
         <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TKFHHZGW"
         height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
         <!-- End Google Tag Manager (noscript) -->

         <div class="preloader">
            <div class="spinner"></div>
         </div>

         <div class="popup-acc" id="popup">
         <div class="popup-content">
             <h2>Запит на згоду збору даних</h2>
             <p>Ми використовуємо файли cookie для поліпшення вашого досвіду. Натисніть "Прийняти", щоб погодитися з нашою політикою конфіденційності.</p>
             <div class="buttons">
                <button onclick="reject()">Відхилити</button>
                 <button onclick="consentGrantedAdStorage()">Прийняти</button>
             </div>
               <a href="/politics.html">політика конфіденційності</a>
            </div>
         </div>

         <div class="popup__bg">
            <div class="popup">
               <div class="close-popup">
                  <img src="/img/xmark-solid.svg">
               </div>
               <h2>Кошик</h2>
               <div class="cards"></div>
               <div class="check-wrap">
                  <div class="checkout">
                     <h3>До сплати</h3>
                  </div>
                  <div class="price-check"><span class="price-check-span">0</span><span> грн.</span></div>
               </div>
               <div class="popup-btns">
                  <a class="popup-btn" href="#s3"><button>Продовжити обирати</button></a>
                  <a class="popup-btn" href="/checkout.php"><button>Оформити замовлення</button></a>
               </div>
            </div>
         </div>

         <div class="popup__buy">
            <div class="pop__buy">
               <div class="close-popup">
                  <img src="/img/xmark-solid.svg">
               </div>
               <div class="checkout__buy">
                  <form id="buyForm">
                     <h3>Телефон</h3>
                     <div class="checkout__buy_input">
                        <input type="hidden" class="product__buy" name="product__buy" value="">
                        <input type="hidden" class="shop__buy" name="shop__buy" value="">
                        <input type="hidden" name="honey_pot" value="">
                        <p>+380</p>
                        <input type="tel" name="phone__buy" placeholder="Ваш номер телефону" autocomplete="no" minlength="9" required>
                     </div>
                     <button type="submit">Купити в 1 клік</button>
                  </form>
               </div>
            </div>
         </div>

         <section id="s1">
            <header>
               <a href="/index.html">
                  <div class="logo">
                     <img src="/img/kiko-logo1X1.png" alt="">
                  </div>
               </a>

               <div class="search-wrap">
                  <img src="/img/magnifying-glass-solid.svg" alt="">
                  <label for="search"></label>
                  <input type="text" id="search" placeholder="пошук" autocomplete="off">
               </div>

               <div class="menu-el">
                  <a href="/katalog.html">Каталог</a>
                  <a href="/index.html#s2">Про компанію</a>
                  <a href="#s7">Контакти</a>
                  <button class="btn-cat tovar cart-sh head open-popup">
                     <span>
                        <img src="/img/cart-shopping-solid.svg" alt="">
                     </span>
                     <span class="count-header">
                        <h6>1</h6>
                     </span>
                  </button>

               </div>
               <div class="container">
                  <a id="menu-toggle" class="menu-toggle">
                     <span class="menu-toggle-bar menu-toggle-bar--top"></span>
                     <span class="menu-toggle-bar menu-toggle-bar--middle"></span>
                     <span class="menu-toggle-bar menu-toggle-bar--bottom"></span>
                  </a>
                  <button class="btn-cat tovar cart-sh head small open-popup">
                     <span>
                        <img src="/img/cart-shopping-solid.svg" alt="">
                     </span>
                     <span class="count-header">
                        <h6>1</h6>
                     </span>
                  </button>

                  <nav class="nav">
                     <section class="logo-kiko">
                        <section class="logo-kiko-container">
                           <div class="kiko-k">
                              <span class="k"></span>
                              <span class="k"></span>
                              <span class="k"></span>
                           </div>
                           <div class="kiko-i">
                              <span class="i"></span>
                              <span class="i"></span>
                           </div>
                           <div class="kiko-k">
                              <span class="k"></span>
                              <span class="k"></span>
                              <span class="k"></span>
                           </div>
                           <span class="zero"><span class="screen-reader-text">0</span></span>
                        </section>
                     </section>
                     <ul class="nav__list">
                        <li class="nav__list_item"><a class="nav__link" href="/index.html">Головна</a></li>
                        <li class="nav__list_item"><a class="nav__link" href="/katalog.html">Каталог</a></li>
                        <li class="nav__list_item"><a class="nav__link" href="/index.html#s2">Про компанію</a></li>
                        <li class="nav__list_item"><a class="nav__link" href="#s7">Контакти</a></li>
                     </ul>
                  </nav>
               </div>
            </header>

            <div class="search-cat-wrap hide">
               <div class="search-900-wrap">
                  <img src="/img/magnifying-glass-solid.svg" alt="">
                  <label for="search-s"></label>
                  <input type="text" id="search-s" placeholder="пошук" autocomplete="off">
               </div>
               <div class="search-cat">
               </div>
            </div>
         </section>

         <section class="section tovar">
            <div class="preloader-local">
               <div class="spinner-local"></div>
            </div>
            <div class="content-left tovar">
               <div class="swiper-container">
                  <div class="swiper-wrapper">
                  ${generateSwiperSlides(offer)}
                  </div>
                  <div class="swiper-pagination"></div>
               </div>
            </div>

            <div class="content-right tovar">

               <div class="routing">
                  <a href="/index.html">Головна</a>
                  <span>/</span>
                  <a class="category" href="/${category['data-href'].slice(2)}/page1">${category.name}</a>
                  <span>/</span>
                  <a class="act" href="/${category['data-href'].slice(2)}/${offer.myURL}">${offer.name_ua}</a>
               </div>
               <h1>${offer.name_ua}</h1>
               <p><span>Артикул: ${offer.vendorCode}</span><span>${offer.available ? "Готовий до відправки" : ""}</span></p>
               <div class="descr-wrap-big">
                  <div class="descr-big">
                     <h2 class="p-old">${offer.available ? (offer.old_price !== "0" ? offer.old_price : "") : ""}</h2>
                  </div>
                  <div class="descr-big">
                     <h2 class="p-big">&#8372; ${offer.available ? (offer.price) : "Немає в наявності"}</h2>
                     <p></p>
               </div>
               <div class="buttons-buy">
                  ${offer.available ? `<button data-product-name="${escapeHtml(offer.name_ua)}" class="btn-cat tovar open-popup add-to-card">В кошик</button>
                  <button class="btn-cat click-1 tovar ">придбати в 1 клік</button>` : ""}
               </div>
               </div>
            </div>

         </section>

         <section class="head-small-name">
            <h1>${offer.name_ua}</h1>
            <p><span>Артикул: ${offer.vendorCode}</span><span>${offer.available ? "Готовий до відправки" : ""}</span></p>
         </section>

         <section class="tovar desc">
            <div class="descr-wrap">
               <div class="descr">
                  <h2 class="p-old">${offer.available ? (offer.old_price !== "0" ? offer.old_price : "") : ""}</h2>
               </div>
               <div class="descr">
                  <h2 class="p">&#8372; ${offer.available ? (offer.price) : "Немає в наявності"}</h2>
                  <p></p>
               </div>
               <div class="buttons-buy">
                  ${offer.available ? `<button data-product-name="${escapeHtml(offer.name_ua)}" class="btn-cat tovar open-popup add-to-card">В кошик</button>
                  <button class="btn-cat click-1 tovar ">придбати в 1 клік</button>` : ""}
               </div>
            </div>
         </section>

         <section class="d" id="s2">
            <div class="left-side tovar">
               <h2>Опис товару</h2>
               <div class="leftside-tovar-description">
                  <span>${offer.description_ua}</span>
               </div>
               <span></span>
               <h2>Характеристики</h2>
               <ul class="ul tovar">
                  ${generateParamsList(offer.params)}
               </ul>
            </div>
            <div class="right-side tovar">
               <ul>
                  <li>
                     <img src="/img/novaPost.svg" alt="nova">
                     <p>Нова Пошта</p>
                     <span>75 грн, без комісії за накладений платіж</span>
                  </li>
                  <li>
                     <span>Орієнтовна дата доставки в (<button id="citySearchButton" class="city-search-button name-city">Київ</button>) <strong></strong></span>
                  </li>
                  <li>
                     <img src="/img/meest.webp" alt="meest">
                     <p>MEEST Пошта</p>
                     <span>Від 45 грн, без комісії за накладений платіж</span>
                  </li>
                  <li>
                     <img src="/img/ukr-post.webp" alt="ukrpost">
                     <p>Укрпошта</p>
                     <span>Від 40 грн, без комісії за накладений платіж</span>
                  </li>
               </ul>
               <div id="cityPopup" class="city-popup">
                  <input id="citySearchInput" class="city-search-input" type="text" placeholder="Пошук міста...">
                  <ul id="suggestions" class="suggestions-popup"></ul>
               </div>
               <div class="description">
                  <p>Деталі на сторінці</p>
                  <a href="/delivery.html">Доставка і оплата</a>
               </div>
            </div>
         </section>

         <section class="column">
            <h2>лідери продажів</h2>
            <div class="content category">
               <div class="content-goods category">
               </div>
            </div>
         </section>

         <section class="column" id="s3">
            <h2>схожі товари</h2>
            <div class="swiper-container swiper4">
               <div class="swiper-wrapper">
               </div>
               <div class="swiper-pagination"></div>
               <div class="sw4-l ">
               <span>
               <
               </span>
               </div>
               <div class="sw4-r ">
               <span>
               >
               </span></div>
            </div>
         </section>

         ${advantagesSection}
         ${footerSection}
         <script defer src="/js/preloadOff.js"></script>
         <script defer src="/js/index.js"></script>
         <script defer="" src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
         <script defer src="/js/goods.js"></script>
         <script defer src="/js/basket.js"></script>
         <script defer src="/js/cookieAcc.js"></script>

         <script>
            document.addEventListener('DOMContentLoaded', () => {
            gsap.registerPlugin(ScrollTrigger);
            animateSection();
            function animateSection() {
            const tl = gsap.timeline({
               scrollTrigger: {
                  trigger: '.leftside-tovar-description',
                  start: 'top 80%',
               }

            });
            tl.from('.leftside-tovar-description', {
               y: 40,
               opacity: 0,
               duration: 1,
               ease: 'power3.out'
            });

            tl.fromTo('.ul.tovar li',
               { opacity: 0, scale: 0.8, visibility: 'hidden' },
               {
                  opacity: 1,
                  scale: 1,
                  visibility: 'visible',
                  duration: 0.05,
                  stagger: 0.06,
                  ease: "back.out(1.7)"
               })

            gsap.fromTo(".right-side.tovar li",
               { opacity: 0, y: 50 },
               {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  stagger: 0.2,
                  scrollTrigger: {
                     trigger: ".right-side.tovar",
                     start: "top 100%",
                     toggleActions: "play none none reverse"
                  }
               }
            );

            gsap.fromTo("#s4 .advantages",
               { opacity: 0, y: 50 },
               {
                  opacity: 1,
                  y: 0,
                  duration: 0.7,
                  stagger: 0.2,
                  scrollTrigger: {
                     trigger: "#s4",
                     start: "top 50%",
                     toggleActions: "play none none reverse"
                  }
               }
            );
            }
            });
         </script>

      </body>
   </html>

   `;

      const filePath = path.join(categoryPath, offer.myURL + ".html");
      fs.writeFileSync(filePath, pattOffer);

      // Додаємо товар у масив для сторінок
      if (!categoryPages[categoryPath]) categoryPages[categoryPath] = [];
      categoryPages[categoryPath].push(offer);

      // 🔹 Перевірка наявності підкатегорії
      const subCategory = categories.find(cat =>
         cat._id === offer.categoryId && (
            cat.parentId === offer.categoryBaza_id ||
            categories.some(parentCat =>
               parentCat._id === cat.parentId && parentCat.parentId === offer.categoryBaza_id
            ) ||
            categories.some(parentCat =>
               parentCat._id === cat.parentId && categories.some(grandParentCat =>
                  grandParentCat._id === parentCat.parentId && grandParentCat.parentId === offer.categoryBaza_id
               )
            )
         )
      );

      if (subCategory) {
         const subCategoryPath = path.join(categoryPath, subCategory["data-href"]);
         createDir(subCategoryPath);

         const filePathSub = path.join(subCategoryPath, offer.myURL + ".html");
         fs.writeFileSync(filePathSub, pattOffer);

         if (!categoryPages[subCategoryPath]) categoryPages[subCategoryPath] = [];
         categoryPages[subCategoryPath].push(offer);
      }
   });

   // Запис XML файлу
   const xml = rss.end({ pretty: true });
   fs.writeFileSync('./output/tovar.xml', xml);

   // 🔹 Створення сторінок `pageX.html`
   const itemsPerPage = 15;
   const pageWritePromises = [];


   ///////////////////////////////////////////////////////////////////////////////////////////
   //// node script.js

   Object.keys(categoryPages).forEach(categoryPath => {
      const products = categoryPages[categoryPath];


      // Знаходимо ID категорії на основі першого товару
      const firstProduct = products[0];
      const categoryId = firstProduct.categoryBaza_id;

      // Знаходимо основну категорію
      const mainCategory = categories.find(cat => cat._id === categoryId);

      // Знаходимо всі товари, які належать до цієї основної категорії (в усіх підкатегоріях)
      const allProductsInMainCategory = offers.filter(offer => offer.categoryBaza_id === categoryId);

      // Збираємо всі унікальні ID підкатегорій з цих товарів
      const subcategoryIds = new Set();
      allProductsInMainCategory.forEach(product => {
         if (product.categoryId && product.categoryId !== product.categoryBaza_id) {
            subcategoryIds.add(product.categoryId);
         }
      });

      // Отримуємо інформацію про підкатегорії
      const subcategories = [];
      subcategoryIds.forEach(subId => {
         const subcategory = categories.find(cat => cat._id === subId);
         if (subcategory) {
            subcategories.push(subcategory);
         }
      });

      // Визначаємо, чи знаходимося ми в підкатегорії
      const pathSegments = categoryPath.split(path.sep);
      const currentDirName = pathSegments[pathSegments.length - 1];
      const isInSubcategory = currentDirName !== mainCategory["data-href"];

      // Генеруємо HTML для фільтрів підкатегорій з переносами рядків
      const filterLinks = [];

      // Додаємо посилання "Всі товари" для повернення до основної категорії, якщо ми в підкатегорії
      if (isInSubcategory) {
         filterLinks.push(
            `<a class="filterCat" href="${mainCategory['data-href'].slice(1)}/page1">
        Всі ${mainCategory.name}
      </a>`
         );
      }

      // Додаємо посилання на підкатегорії
      subcategories.forEach(subcat => {

         filterLinks.push(
            `<a class="filterCat" href="${mainCategory['data-href'].slice(1)}/${subcat["data-href"]}/page1">
          ${subcat.name}
        </a>`
         );
      });
      // Об'єднуємо в один HTML з гарним форматуванням
      const filterContainer = filterLinks.join('\n');


      let categoryMoreBefore = [];
      products.forEach(offer => {
         categories.forEach(category => {
            if (category._id == offer.categoryId) {
               categoryMoreBefore.push(category);
            }
         })
      })

      // Фільтруємо унікальні категорії за `name`
      let uniqueCategories = [];
      let categoryNames = new Set();

      categoryMoreBefore.forEach(category => {
         if (!categoryNames.has(category.name)) {
            categoryNames.add(category.name);
            uniqueCategories.push(category);
         }
      });

      let categoryMore = [...new Set(categoryNames)].join(', ');

      for (let i = 0; i < products.length; i += itemsPerPage) {
         const pageIndex = i / itemsPerPage + 1;
         const pageFilePath = path.join(categoryPath, `page${pageIndex}.html`);

         let categoryURL;
         let categoryName;
         let categoryBaza;

         categories.forEach(category => {
            if (category._id == products[i].categoryBaza_id) {
               let res = category["data-href"];
               categoryURL = res.slice(2);
               categoryName = category.name;
               categoryBaza = category;
            }

         })


         let headSection = `
         <!DOCTYPE html>
         <html lang="uk">

         <head>
            <meta charset="UTF-8">
            <meta name="viewport"
            content="width=device-width, initial-scale=1.0 minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
            <title>${categoryName} | Купити в інтернет-магазині Kiko-Store</title>
            <meta name="Keywords" content="${categoryMore}">
            <meta name="robots" content="index,follow">
            <meta property="og:locale" content="uk">
            <meta property="og:type" content="website">
            <meta property="og:title" content="Kiko Store - інтернет магазин дитячих іграшок!">
            <meta property="og:image" content="/img/kiko-logo1X1.png">
            <meta property="og:url" content="https://kiko-store.com.ua/${categoryURL}/page${pageIndex}">
            <meta property="og:description" content="Магазин з продажу іграшок для малюків, м'яких іграшок, машинок, конструкторів. Кожна дитина знайде собі щось до смаку! Швидка доставка по Києву, гарна якість і приємна ціна.">
            <meta name="theme-color" content="#4475F2">
            <link rel="canonical" href="https://kiko-store.com.ua/${categoryURL}/page${pageIndex}">
            <link rel="stylesheet" href="/stylesheet.css">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;600;700;900&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="/css/reset.css">
            <link rel="stylesheet" href="/css/index.css">

            <style>
               /* Приховуємо елементи до анімації */
               #category .content .search-cat-a {
                  opacity: 0;
                  visibility: hidden;
               }
            </style>
         
             
            <!-- Google Tag Manager -->
            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
               })(window,document,'script','dataLayer','GTM-TKFHHZGW');</script>
               <!-- End Google Tag Manager -->
               
               <!-- Google tag (gtag.js) -->
               <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11387500155"></script>
               <script>
                 // Define dataLayer and the gtag function.
                 window.dataLayer = window.dataLayer || [];
                 function gtag(){dataLayer.push(arguments);}
               
                 // Set default consent to 'denied' as a placeholder
                 // Determine actual values based on your own requirements
                 gtag('consent', 'default', {
                   'ad_storage': 'denied',
                   'ad_user_data': 'denied',
                   'ad_personalization': 'denied',
                   'analytics_storage': 'denied'
                 });
               
                 // Check if 'cookieAccepted' is present in localStorage
                 if(localStorage.getItem('cookieAccepted')) {
                   // If 'cookieAccepted' is present, check its value
                   if(localStorage.getItem('cookieAccepted') === 'true') {
                     // If 'cookieAccepted' is true, update consent for ad_storage
                     gtag('consent', 'update', {
                       'ad_storage': 'granted',
                       'ad_user_data': 'granted',
                       'ad_personalization': 'granted',
                       'analytics_storage': 'granted'
                     });
                   } else if (localStorage.getItem('cookieAccepted') === 'falls') {
                     gtag('consent', 'default', {
                        'ad_storage': 'denied',
                        'ad_user_data': 'denied',
                        'ad_personalization': 'denied',
                        'analytics_storage': 'denied'
                     });
                   }
            
                 } else {
                   // If 'cookieAccepted' is not present, run cookieAcc.js
                   // Replace 'cookieAcc.js' with the actual path to your script
                   var script = document.createElement('script');
                   script.src = '/js/cookieAcc.js';
                   document.head.appendChild(script);
                 }
               
                 gtag('js', new Date());
               
                 gtag('config', 'AW-11387500155');
               </script>
 
               <!-- Create one update function for each consent parameter -->
               <script>
                  function consentGrantedAdStorage() {
                    gtag('consent', 'update', {
                     'ad_storage': 'granted',
                     'ad_user_data': 'granted',
                     'ad_personalization': 'granted',
                     'analytics_storage': 'granted'
                    });
            
                     localStorage.setItem("cookieAccepted", "true");
                     document.getElementById("popup").style.display = "none";
                  }
               </script>
               <script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"></script>

         </head>
         <body class="position-fix" id="${products[i].categoryBaza_id}">

      `

         ///////////////////////////////////////////////////////////////////////////////////////////
         //// node script.js

         let detailsPattern = `
         <div class="content-more">
           <div id="text-container">
             <p id="text">
               <span id="first-line">${categoryBaza["data-descriptionShort"]}</span>
               <span id="additional-text">${categoryBaza["data-descriptionLong"]}</span></p>
           </div>
           <a id="toggle-button" href="javascript:void(0);">Дізнатися більше</a>
         </div>
      `

         // 🔹 Генеруємо HTML-картки товарів
         const productItems = products.slice(i, i + itemsPerPage).map(offer => {
            // Форматуємо ціну та знижку
            const price = offer.price ? `&#8372;${parseFloat(offer.price)}` : "Ціна не вказана";
            const oldPrice = offer.old_price && offer.old_price !== '0'
               ? `<br><span>&#8372; ${parseFloat(offer.old_price)}</span>`
               : "";

            const sale = offer.old_price && offer.old_price !== '0'
               ? `<span class="sale">-${parseFloat(offer.old_price) - parseFloat(offer.price)} &#8372;</span>`
               : "";
            // Перевіряємо доступність товару

            const availabilityText = offer.available
               ? `${price}${oldPrice}`
               : `Немає в наявності`;
            return `
            <a href="/${categoryURL}/${offer.myURL}">
            <div id="${offer._id}" class="item-goods">
               ${sale}
               <div class="item-top">
                  <img src="/imgs/${offer.pictureMY[0]}" alt="image" width="320" height="270" loading="lazy">
               </div>
               <div class="item-bottom">
                  <h3>${offer.name_ua}</h3>
                  <p>${availabilityText}</p>
                  <button class="add-to-card"><span></span><span></span></button>
               </div>
            </div>
         </a>
         `
         }).join('');

         // Генеруємо Schema.org JSON-LD для всієї сторінки категорії
         const schemaProducts = products.slice(i, i + itemsPerPage).map(offer => {
            const productUrl = `https://kiko-store.com.ua/${categoryURL}/${offer.myURL}`;
            const imageUrl = `https://kiko-store.com.ua/imgs/${offer.pictureMY[0]}`;

            // Видаляємо символи: ' " / {}() . , " @ # $ % ^ & * -
            const cleanedName = offer.name_ua.replace(/['"\/{}().,@#\$%\^&*\-«»]/g, '').trim();


            const schemaAvailability = offer.available
               ? "InStock"
               : "OutOfStock";

            return {
               "@type": "Product",
               "name": cleanedName,
               "url": productUrl,
               "image": imageUrl,
               "sku": offer.vendorCode,
               "description": escapeHtml(offer.description_ua),
               "offers": {
                  "@type": "Offer",
                  "priceCurrency": "UAH",
                  "price": offer.price ? `${parseFloat(offer.price).toString()}.00` : "0",
                  "itemCondition": "https://schema.org/NewCondition",
                  "availability": schemaAvailability,
                  "shippingDetails": {
                     "@type": "OfferShippingDetails",
                     "shippingRate": {
                        "@type": "MonetaryAmount",
                        "value": "50.00",
                        "currency": "UAH"
                     },
                     "deliveryTime": {
                        "@type": "ShippingDeliveryTime",
                        "handlingTime": {
                           "@type": "QuantitativeValue",
                           "minValue": 5,
                           "maxValue": 60,
                           "unitCode": "MIN"
                        },
                        "transitTime": {
                           "@type": "QuantitativeValue",
                           "minValue": 1,
                           "maxValue": 3,
                           "unitCode": "DAY"
                        }
                     },
                     "shippingDestination": {
                        "@type": "DefinedRegion",
                        "addressCountry": "UA"
                     },
                     "hasMerchantReturnPolicy": {
                        "@type": "MerchantReturnPolicy",
                        "returnPolicyCategory": "MerchantReturnFiniteReturnWindow",
                        "merchantReturnDays": 14,
                        "returnFees": "FreeReturn"
                     }
                  },
                  "seller": {
                     "@type": "Organization",
                     "name": "Kiko Store"
                  }
               }
            };
         });


         const isMainCategory = !isInSubcategory || currentDirName === categoryURL;

         const schemaScript = `
         <script type="application/ld+json">
         {
           "@context": "https://schema.org",
           "@type": "CollectionPage",
           "name": "${isMainCategory
               ? `${categoryName} – Сторінка ${pageIndex}`
               : `${subcategories.find(subcat => subcat["data-href"].slice(1) === currentDirName)?.name || categoryName} – Сторінка ${pageIndex}`}",
           "description": "${isMainCategory
               ? `${categoryName} - Всі товари категорії`
               : `${subcategories.find(subcat => subcat["data-href"].slice(1) === currentDirName)?.name || categoryName} - Великий вибір у нашому магазині`}",
           "url": "https://kiko-store.com.ua/${isMainCategory
               ? categoryURL
               : `${mainCategory['data-href'].slice(1)}/${currentDirName}`}/page${pageIndex}",
           "hasPart": ${JSON.stringify(schemaProducts)}
         }
         </script>
         `;



         const totalPages = Math.ceil(products.length / itemsPerPage);

         const pagination = `
         <section id="pagination-page">
            ${pageIndex > 1 ? `<a href="page${pageIndex - 1}" class="prev">«</a>` : ''}
         
            ${Array.from({ length: totalPages }, (_, index) => {
            const pageNum = index + 1;
            return `<a href="page${pageNum}" class="pagination-page-a ${pageNum === pageIndex ? "active" : ""}">${pageNum}</a>`;
         }).join('')}
         
            ${pageIndex < totalPages ? `<a href="page${pageIndex + 1}" class="next">»</a>` : ''}
         </section>
         `;



         const pageContent = `
         ${headSection}
         ${headerSection}
         <section id="s3" class="category">
            <div class="routing">
               <h2>${categoryName}</h2>
               <a href="/index.html">Головна</a>
               <span>/</span>
               <a href="/katalog.html">Каталог</a>
               <span>/</span>
               <a class="category" href="/${categoryURL}/page1">${categoryName}</a>
            </div>
            <div id="filterContainer">
               ${filterContainer}
            </div>
            ${detailsPattern}
            <div class="content category">
               <div class="preloader-local">
                  <div class="spinner-local"></div>
               </div>
               <div class="content-goods category">
               ${productItems}
               </div>
               ${pagination}
            </div>
         </section>

         <section id="category">
            <div class="content">
               <div class="search-cat">
                  ${patternSearchCat}
               </div>
            </div>
         </section>
         ${aboutSection2}
         ${footerSection}
         ${schemaScript}
         <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
         <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/ScrollTrigger.min.js"></script>
         <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.3/ScrollToPlugin.min.js"></script>
         <script src="/js/index.js" type="text/javascript"></script>
         <script src="/js/category.js" type="text/javascript"></script>
         <script src="/js/basket.js" type="text/javascript"></script>
         <script src="/js/preloadOff.js"></script>
         <script src="/js/gsapPage.js"></script>
         <script src="/js/cookieAcc.js"></script>
         <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

         </body>
         `;


         pageWritePromises.push(fs.promises.writeFile(pageFilePath, pageContent));
      }
   });

   Promise.all(pageWritePromises)
      .then(() => console.log("Всі сторінки успішно створені"))
      .catch(err => console.error("Помилка запису сторінок:", err));


   const readdirAsync = promisify(fs.readdir);
   const statAsync = promisify(fs.stat);

   async function generateSitemap(outputDir, baseUrl) {
      const sitemapUrls = [];
      const sitemapPath = path.join(outputDir, 'sitemap.xml');
      let previousLastmod = {};
   
      // Якщо старий sitemap існує, зчитуємо його
      if (fs.existsSync(sitemapPath)) {
         const oldSitemap = fs.readFileSync(sitemapPath, 'utf8');
         const matches = [...oldSitemap.matchAll(/<loc>(.*?)<\/loc>\s*<lastmod>(.*?)<\/lastmod>/g)];
         matches.forEach(match => {
            previousLastmod[match[1]] = match[2]; // Зберігаємо старі lastmod
         });
      }
   
      async function traverseDirectory(dir) {
         const files = await readdirAsync(dir);
         for (const file of files) {
            const fullPath = path.join(dir, file);
            const stat = await statAsync(fullPath);
   
            if (stat.isDirectory()) {
               await traverseDirectory(fullPath);
            } else if (path.extname(file) === '.html') {
               let relativeUrl = path.relative(outputDir, fullPath).replace(/\\/g, '/');
               relativeUrl = relativeUrl.replace(/\.html$/, ''); // Видаляємо ".html"
   
               // Перевірка на сторінки типу page2, page3 і т.д. (але дозволяємо page1)
               if (/\/page\d+$/.test(relativeUrl) && !/\/page1$/.test(relativeUrl)) {
                  continue; // Пропускаємо ці сторінки
               }
   
               const url = new URL(relativeUrl, baseUrl).toString();
               const newLastmod = stat.mtime.toISOString().split('T')[0];
   
               // Якщо URL вже був у старому sitemap і файл не змінювався, залишаємо старий lastmod
               const lastmod = previousLastmod[url] === newLastmod ? previousLastmod[url] : newLastmod;
   
               sitemapUrls.push({ loc: url, lastmod });
            }
         }
      }
   
      await traverseDirectory(outputDir);
   
      const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
          <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
              <url><loc>${baseUrl}</loc><priority>1.0</priority><lastmod>${new Date().toISOString().split('T')[0]}</lastmod></url>
              ${sitemapUrls.map(url => `
              <url>
                  <loc>${escapeXml(url.loc)}</loc>
                  <lastmod>${url.lastmod}</lastmod>
              </url>`).join('')}
          </urlset>`;
   
      fs.writeFileSync(sitemapPath, sitemapXml.trim());
      console.log(`Sitemap generated at ${sitemapPath}`);
   
      return sitemapUrls;
   }
   

   function escapeXml(unsafe) {
      return unsafe.replace(/[<>&'"]/g, c => ({
         '<': '&lt;',
         '>': '&gt;',
         '&': '&amp;',
         "'": '&apos;',
         '"': '&quot;'
      }[c]));
   }

   // Виклик функції
   generateSitemap('./output', 'https://kiko-store.com.ua/');


}




function waitForPrJson(jsonFilePath, processingFunction) {
   // Функція для перевірки наявності файлу
   const checkFileExists = () => {
      try {
         // Перевіряємо, чи існує файл
         if (fs.existsSync(jsonFilePath)) {
            console.log(`Файл ${jsonFilePath} знайдено. Розпочинаємо обробку.`);

            // Викликаємо функцію обробки
            processingFunction();
         } else {
            console.log(`Файл ${jsonFilePath} не існує. Очікування...`);

            // Повторна перевірка через 5 секунд
            setTimeout(checkFileExists, 5000);
         }
      } catch (error) {
         console.error(`Помилка перевірки файлу: ${error.message}`);

         // Повторна спроба через 5 секунд у разі помилки
         setTimeout(checkFileExists, 5000);
      }
   };

   // Початкий виклик функції перевірки
   checkFileExists();
}

waitForPrJson(
   path.join(__dirname, 'pr.json'),
   mainProcessingFunction
);