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


      ///////////////////////////////////////////////////////////////////////////////////////////
      //// node script.js

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
               <img class="lazyload" src="/img/preloader.gif" data-src="/imgs/${offer.pictureMY[0]}" alt="image">
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
         const schemaAvailability = offer.available
            ? "InStock"
            : "OutOfStock";

         return {
            "@type": "Product",
            "name": offer.name_ua,
            "url": productUrl,
            "image": imageUrl,
            "sku": offer.vendorCode,
            "offers": {
               "@type": "Offer",
               "priceCurrency": "UAH",
               "price": offer.price ? `${parseFloat(offer.price).toString()}.00` : "0",
               "itemCondition": "https://schema.org/NewCondition",
               "availability": schemaAvailability,
               "seller": {
                  "@type": "Organization",
                  "name": "Kiko Store"
               }
            }
         };
      });




      const schemaScript = `
         <script type="application/ld+json">
         {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "${categoryName} – Сторінка ${pageIndex}",
            "description": "${categoryName} - Великий вибір у нашому магазині",
            "url": "https://kiko-store.com.ua/${categoryURL}/page${pageIndex}",
            "hasPart": ${JSON.stringify(schemaProducts)}
         }
         </script>
      `;




      const pageContent = ``;


      pageWritePromises.push(fs.promises.writeFile(pageFilePath, pageContent));
   }
});