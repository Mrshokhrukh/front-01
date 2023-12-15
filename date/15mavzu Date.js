// Date() - sanani hosil qiluvchi object

// 1. new Date() - ayni paytdagi sana va vaqtni hosil qiladi

// 2. new Date(yil, oy, kun, soat, minut, sekund, millisekund)
    // 2.1. Oylar 0 dan sanaladi: 0 = Yanvar, 11 = Dekabr
    // 2.2. 12 va undan kattaroq son keyingi yilga o'tib ketadi
    // const d = new Date(2018, 15, 24, 10, 33, 30); => Wed Apr 24 2019 10:33:30

    // 2.3. Kun uchun maksimumdan kattaroq son kiritilsa keyingi oyga o'tib ketadi
    // const d = new Date(2018, 5, 35, 10, 33, 30); => Thu Jul 05 2018 10:33:30

    // 2.4. Barcha parameter berilishi shart emas
    // const d = new Date(2018, 11); =>  Sat Dec 01 2018 00:00:00

// 3. new Date('datestring') - parameter sifatida qabul qilingan stringdan Date yasash
    // 3.1. const d = new Date("October 13, 2014 11:13:00"); => Mon Oct 13 2014 11:13:00
    
    // 3.2. Eng maslagat beriladigan Date formati bu ISO (International Standard Organization)
    // ISO ning formati (YYYY-MM-DD). 
    // Masalan: const d = new Date("2015-03-25");

// 4. new Date(milliseconds) - parameter sifatida berilgan millisekundlarni 1970 yilga qo'shadi
    // const d = new Date(86400000) => Fri Jan 02 1970 06:00:00. Chunki 86400000ms = 1 kun

    // -----------------------------------

// 5. Date() ning get metodlari uchun slaydga murojaat qiling
// 6. Date() ning set metodlari uchun quyidagi havolaga murojaat qiling
// https://www.w3schools.com/js/js_date_methods_set.asp

// 7. toLocaleTimeString() - Date() ning vaqt qismini qaytaradi

// 8. Ikki Date() objecti <, >, <= va >= belgilari bilan solishtirilishi mumkin.


// 9. setTimeOut() uchun slaydlarga murojaat qiling
    // 9.1 Sahifa ochilgandan 10 sekunddan keyin modal chiqaring


// 10. setInterval() uchun slaydlarga murojaat qiling
    // 10.1 Soat yasang toLocaleTimeString() dan foydalangan holda
    // 10.2 Sekin to'ladigan progress bar yasang 
    // 10.3 Orqa fon har 5 sekund o'zgarib tursin

// 11. setTimeOut() va setIntervalni tugatish clearTimeOut() va 
// clearInterval() funksiyalari yordamida bo'ladi


