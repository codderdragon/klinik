/* === 1. DİL VERİTABANI === */
const langData = {
    tr: {
        menu_process: "Süreç", menu_results: "Sonuçlar", menu_faq: "S.S.S", menu_info: "Bilgi", menu_contact: "Ücretsiz Analiz",
        hero_title: "Hayalindeki Saçlara Kavuş", hero_desc: "DNR Clinic ile ömür boyu garantili, doğal ve yoğun saçlar.", hero_btn: "Randevu Al",
        process_title: "Operasyon Süreci",
        step1_title: "Planlama", step1_desc: "Uzmanlarımızla yüz yüze veya online ücretsiz analiz.",
        step2_title: "Operasyon", step2_desc: "Maksimum greft sayısı ile ağrısız ekim işlemi.",
        step3_title: "Yeni Görünüm", step3_desc: "Ertesi gün kontrol ve ömür boyu destek.",
        results_title: "Başarı Hikayeleri",
        faq_title: "Sıkça Sorulan Sorular",
        faq_q1: "Saç ekiminden sonra şapka?", faq_a1: "Medikal şapkayı 10 gün kullanmalısınız. Sonrasında normal şapka takabilirsiniz.",
        faq_q2: "Ne zaman spor yapabilirim?", faq_a2: "Hafif yürüyüş 3 gün, ağır spor 1 ay sonra.",
        faq_q3: "Yıkama işlemi nasıl?", faq_a3: "1 ay boyunca her gün losyon ve şampuan ile yıkanmalı.",
        faq_q4: "Bandaj ne zaman çıkar?", faq_a4: "Operasyondan sonraki 2. gün ilk yıkamada çıkarılır.",
        faq_q5: "Özel şampuan süresi?", faq_a5: "En az 1 ay kullanmanız önerilir.",
        faq_q6: "Panthenol sprey kullanımı?", faq_a6: "Kabuklar dökülene kadar (yaklaşık 15 gün) nemlendirme için kullanılmalıdır.",
        
        // BİLGİ BÖLÜMÜ
        info_main_title: "Saç Ekimi Rehberi",
        info_h1: "Saç Ekimi Nedir?",
        info_p1: "Saç ekimi, saç dökülmesi yaşanan bölgelere sağlıklı saç köklerinin nakledilmesiyle yapılan kalıcı bir tedavi yöntemidir. Genellikle ense bölgesinden alınan greftlerle yapılır.",
        info_p2: "Hem erkeklerde hem kadınlarda uygulanabilir. Lokal anestezi altında yapılır ve iyileşme süreci hızlıdır.",
        info_h2: "Saç Ekimi Nasıl Yapılır?",
        info_p3: "Temel aşamalar şunlardır:",
        info_li1: "Muayene ve Planlama: Dökülme seviyesi ve greft sayısı belirlenir.",
        info_li2: "Donör Bölge Hazırlığı: Ense bölgesinden kökler toplanır.",
        info_li3: "Greftlerin Toplanması: FUE yöntemiyle kökler tek tek alınır.",
        info_li4: "Kanal Açma: Köklerin yerleştirileceği kanallar açılır.",
        info_li5: "Ekim: Kökler kanallara yerleştirilir.",
        info_li6: "İyileşme: 3-6 ay içinde saçlar çıkar, 12 ayda tam sonuç alınır.",
        info_h3: "Kimler Saç Ekimi Yaptırmalı?",
        info_p4: "22 yaş üzeri ve donör bölgesi yeterli olanlar için uygundur:",
        info_li7: "Erkek Tipi Dökülme (Genetik)",
        info_li8: "Yara izi veya yanık kaynaklı kayıplar",
        info_li9: "Kronik hastalığı olmayan sağlıklı bireyler"
    },
    en: {
        menu_process: "Process", menu_results: "Results", menu_faq: "FAQ", menu_info: "Info", menu_contact: "Free Analysis",
        hero_title: "Get Your Dream Hair", hero_desc: "Lifetime guaranteed, natural and dense hair with DNR Clinic.", hero_btn: "Book Now",
        process_title: "Operation Process",
        step1_title: "Planning", step1_desc: "Free analysis online or face-to-face with our experts.",
        step2_title: "Operation", step2_desc: "Painless procedure with maximum graft count.",
        step3_title: "New Look", step3_desc: "Next day check-up and lifetime support.",
        results_title: "Success Stories",
        faq_title: "Frequently Asked Questions",
        faq_q1: "Hat after transplant?", faq_a1: "You should use the medical hat for 10 days.",
        faq_q2: "When can I do sports?", faq_a2: "Light walking after 3 days, heavy sports after 1 month.",
        faq_q3: "How to wash?", faq_a3: "Wash daily with lotion and shampoo for 1 month.",
        faq_q4: "When to remove bandage?", faq_a4: "It is removed during the first wash on the 2nd day.",
        faq_q5: "Special shampoo duration?", faq_a5: "Recommended to use for at least 1 month.",
        faq_q6: "Panthenol spray usage?", faq_a6: "Use it for about 15 days to moisturize until the scabs fall off.",

        info_main_title: "Hair Transplant Guide",
        info_h1: "What is Hair Transplant?",
        info_p1: "Hair transplantation is a permanent treatment method performed by transplanting healthy hair follicles to areas with hair loss.",
        info_p2: "It can be applied to both men and women. Performed under local anesthesia, the recovery process is fast.",
        info_h2: "How is Hair Transplant Done?",
        info_p3: "Basic stages are:",
        info_li1: "Examination and Planning: Loss level and graft count are determined.",
        info_li2: "Donor Area Preparation: Roots are collected from the nape.",
        info_li3: "Collection of Grafts: Roots are taken one by one with FUE method.",
        info_li4: "Opening Channels: Channels where roots will be placed are opened.",
        info_li5: "Planting: Roots are placed in the channels.",
        info_li6: "Recovery: Hair grows in 3-6 months, full results in 12 months.",
        info_h3: "Who Should Have Hair Transplant?",
        info_p4: "Suitable for those over 22 with sufficient donor area:",
        info_li7: "Male Pattern Baldness (Genetic)",
        info_li8: "Loss due to scars or burns",
        info_li9: "Healthy individuals without chronic diseases"
    },
    ar: {
        menu_process: "العملية", menu_results: "النتائج", menu_faq: "الأسئلة", menu_info: "معلومات", menu_contact: "تحليل مجاني",
        hero_title: "احصل على شعر أحلامك", hero_desc: "شعر طبيعي وكثيف مع ضمان مدى الحياة من عيادة DNR.", hero_btn: "احجز الآن",
        process_title: "عملية الزراعة",
        step1_title: "التخطيط", step1_desc: "تحليل مجاني عبر الإنترنت أو وجهاً لوجه مع خبرائنا.",
        step2_title: "العملية", step2_desc: "إجراء غير مؤلم مع أقصى عدد من الطعوم.",
        step3_title: "مظهر جديد", step3_desc: "فحص في اليوم التالي ودعم مدى الحياة.",
        results_title: "قصص النجاح",
        faq_title: "الأسئلة الشائعة",
        faq_q1: "القبعة بعد الزراعة؟", faq_a1: "يجب استخدام القبعة الطبية لمدة 10 أيام.",
        faq_q2: "متى يمكنني ممارسة الرياضة؟", faq_a2: "مشي خفيف بعد 3 أيام، رياضة ثقيلة بعد شهر.",
        faq_q3: "كيفية الغسيل؟", faq_a3: "يغسل يومياً باللوشن والشامبو لمدة شهر.",
        faq_q4: "متى تزال الضمادة؟", faq_a4: "تزال في الغسيل الأول في اليوم الثاني.",
        faq_q5: "مدة الشامبو الخاص؟", faq_a5: "يوصى باستخدامه لمدة شهر على الأقل.",
        faq_q6: "استخدام رذاذ البانثينول؟", faq_a6: "استخدمه لمدة 15 يومًا لترطيب المنطقة.",

        info_main_title: "دليل زراعة الشعر",
        info_h1: "ما هي زراعة الشعر؟",
        info_p1: "زراعة الشعر علاج دائم لنقل بصيلات الشعر السليمة إلى مناطق الصلع.",
        info_p2: "يمكن تطبيقها للرجال والنساء تحت التخدير الموضعي.",
        info_h2: "كيف تتم العملية؟",
        info_p3: "المراحل الأساسية:",
        info_li1: "الفحص والتخطيط: تحديد مستوى التساقط.",
        info_li2: "تحضير المنطقة المانحة: جمع الجذور من الخلف.",
        info_li3: "جمع الطعوم: تقنية FUE.",
        info_li4: "فتح القنوات: تجهيز مكان الزراعة.",
        info_li5: "الزراعة: وضع الجذور في القنوات.",
        info_li6: "الشفاء: نمو الشعر في 3-6 أشهر.",
        info_h3: "من المناسب للعملية؟",
        info_p4: "فوق 22 سنة وبمنطقة مانحة جيدة:",
        info_li7: "الصلع الوراثي الذكوري",
        info_li8: "فقدان الشعر بسبب الجروح",
        info_li9: "الأشخاص الأصحاء"
    },
    pl: {
        menu_process: "Proces", menu_results: "Wyniki", menu_faq: "FAQ", menu_info: "Info", menu_contact: "Darmowa Analiza",
        hero_title: "Włosy Twoich Marzeń", hero_desc: "Dożywotnia gwarancja, naturalne i gęste włosy z DNR Clinic.", hero_btn: "Zarezerwuj",
        process_title: "Proces Operacji",
        step1_title: "Planowanie", step1_desc: "Darmowa analiza online lub osobiście z naszymi ekspertami.",
        step2_title: "Operacja", step2_desc: "Bezbolesny zabieg z maksymalną liczbą graftów.",
        step3_title: "Nowy Wygląd", step3_desc: "Kontrola następnego dnia i dożywotnie wsparcie.",
        results_title: "Historie Sukcesu",
        faq_title: "Często Zadawane Pytania",
        faq_q1: "Czapka po przeszczepie?", faq_a1: "Należy używać czapki medycznej przez 10 dni.",
        faq_q2: "Kiedy sport?", faq_a2: "Lekki spacer po 3 dniach, ciężki sport po 1 miesiącu.",
        faq_q3: "Jak myć?", faq_a3: "Myć codziennie balsamem i szamponem przez 1 miesiąc.",
        faq_q4: "Kiedy zdjąć bandaż?", faq_a4: "Zdejmowany podczas pierwszego mycia w 2. dniu.",
        faq_q5: "Jak długo szampon?", faq_a5: "Zaleca się stosowanie przez co najmniej 1 miesiąc.",
        faq_q6: "Jak używać sprayu Panthenol?", faq_a6: "Około 15 dni do nawilżania strupów.",

        info_main_title: "Przewodnik po Przeszczepie",
        info_h1: "Czym jest przeszczep włosów?",
        info_p1: "To trwała metoda leczenia polegająca na przeniesieniu zdrowych cebulek.",
        info_p2: "Stosowana u mężczyzn i kobiet w znieczuleniu miejscowym.",
        info_h2: "Jak wygląda zabieg?",
        info_p3: "Etapy:",
        info_li1: "Badanie i planowanie.",
        info_li2: "Przygotowanie dawcy.",
        info_li3: "Pobieranie graftów (FUE).",
        info_li4: "Otwieranie kanałów.",
        info_li5: "Wszczepianie.",
        info_li6: "Gojenie (pełny efekt po 12 mies).",
        info_h3: "Dla kogo?",
        info_p4: "Dla osób powyżej 22 lat:",
        info_li7: "Łysienie androgenowe",
        info_li8: "Utrata przez blizny",
        info_li9: "Osoby zdrowe"
    }
};

/* === 2. DİL DEĞİŞTİRME === */
function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    const currentBtn = document.getElementById('currentLangBtn');
    
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    let flag = '🇹🇷 TR';
    if(lang === 'en') flag = '🇬🇧 EN';
    if(lang === 'ar') flag = '🇸🇦 AR';
    if(lang === 'pl') flag = '🇵🇱 PL';
    currentBtn.innerHTML = `${flag} <i class="fas fa-chevron-down"></i>`;

    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        if (langData[lang][key]) el.innerHTML = langData[lang][key];
    });
}

/* === 3. HERO SLIDER === */
const heroImages = document.querySelectorAll('.hero-bg-slider img');
let currentIdx = 0;

function rotateHero() {
    if(heroImages.length === 0) return;
    heroImages[currentIdx].classList.remove('active');
    currentIdx = (currentIdx + 1) % heroImages.length;
    heroImages[currentIdx].classList.add('active');
}
setInterval(rotateHero, 5000);

/* === 4. GALLERY SCROLL === */
function scrollGallery(direction) {
    const container = document.getElementById('galleryScroller');
    const scrollAmount = 340; // Kart genişliği + boşluk
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

/* === 5. FAQ & MENU === */
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        const ans = btn.nextElementSibling;
        ans.style.maxHeight = btn.classList.contains('active') ? ans.scrollHeight + "px" : null;
    });
});

const hamburger = document.querySelector('.hamburger');
if(hamburger) {
    hamburger.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });
}