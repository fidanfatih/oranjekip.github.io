// Dil Metinleri Objeleri (Translations)
const translations = {
    nl: { // Hollandaca Metinler
        title: "👑 Oranje Kip - Premium Halal Kip Producten",
        navHome: "Home",
        navProducts: "Producten",
        navAbout: "Over Ons",
        navContact: "Contact",

        heroHeading: "Koninklijke Kwaliteit in Kip. Op Elke Tafel!",
        heroSubheading: "100% Halal Gecertificeerde, Meest Verse en Premium Kip Producten uit Nederland.",
        heroButton: "Ontdek Producten",

        qualityTitle: "Onze Belofte: Kwaliteit & Betrouwbaarheid",
        featureHalalTitle: "100% Halal Gecertificeerd",
        featureHalalDesc: "Volledige naleving van Islamitische slachtregels en strenge controle.",
        featureFreshTitle: "Versheid Gegarandeerd",
        featureFreshDesc: "Elke dag de meest verse producten rechtstreeks naar uw verkooppunt.",
        featureDutchTitle: "Nederlandse Kwaliteit",
        featureDutchDesc: "Geproduceerd met de hoogste Nederlandse standaarden voor voedselveiligheid.",

        productsTitle: "Ontdek Ons Premium Assortiment",
        productCat1Title: "Kipfilet en Kipdij",
        productCat1Desc: "Mager, veelzijdig en klaar om te koken.",
        productCat2Title: "Hele en Gemarineerde Kip",
        productCat2Desc: "Perfect voor ovenbereidingen en de grill.",
        productCat3Title: "Kip Delen en Specialiteiten",
        productCat3Desc: "Vleugels, poten en andere speciale snitten.",
        viewAllProducts: "Bekijk Alle Producten",

        aboutTitle: "Het Verhaal van Oranje Kip",
        aboutParagraph1: "Oranje Kip staat voor een lange traditie van topkwaliteit. Onze focus ligt op het combineren van ouderwets vakmanschap met moderne, duurzame productiemethoden.",
        aboutParagraph2: "We zijn trots op onze Halal certificering en transparantie in de keten. Zo weet u altijd waar uw product vandaan komt.",
        learnMoreButton: "Lees Meer",

        contactTitle: "Neem Contact Op",
        contactAddressTitle: "Ons Adres",
        contactAddress: "[Adresiniz buraya gelecek] | Nederland",
        contactPhoneTitle: "Telefoon",
        contactPhone: "[Telefon numaranız buraya gelecek]",
        contactEmailTitle: "E-mail",
        contactEmail: "[E-posta adresiniz buraya gelecek]",

        footerText: "© 2025 Oranje Kip. Alle Rechten Voorbehouden. | Gevestigd in Nederland."
    },
    en: { // İngilizce Metinler
        title: "👑 Oranje Kip - Premium Halal Chicken Products",
        navHome: "Home",
        navProducts: "Products",
        navAbout: "About Us",
        navContact: "Contact",

        heroHeading: "Royal Quality Chicken. On Every Table!",
        heroSubheading: "100% Halal Certified, Freshest, and Premium Chicken Products from The Netherlands.",
        heroButton: "Discover Products",

        qualityTitle: "Our Promise: Quality & Trust",
        featureHalalTitle: "100% Halal Certified",
        featureHalalDesc: "Full compliance with Islamic slaughter rules and strict control.",
        featureFreshTitle: "Freshness Guaranteed",
        featureFreshDesc: "The freshest products delivered directly to your point of sale every day.",
        featureDutchTitle: "Dutch Quality",
        featureDutchDesc: "Produced under the highest Dutch standards for food safety.",

        productsTitle: "Explore Our Premium Range",
        productCat1Title: "Chicken Fillet and Thigh",
        productCat1Desc: "Lean, versatile, and ready to cook.",
        productCat2Title: "Whole and Marinated Chicken",
        productCat2Desc: "Perfect for oven bakes and the grill.",
        productCat3Title: "Chicken Parts and Specialties",
        productCat3Desc: "Wings, drumsticks, and other special cuts.",
        viewAllProducts: "View All Products",

        aboutTitle: "The Oranje Kip Story",
        aboutParagraph1: "Oranje Kip stands for a long tradition of top quality. Our focus is on combining old-fashioned craftsmanship with modern, sustainable production methods.",
        aboutParagraph2: "We are proud of our Halal certification and transparency in the supply chain. This way, you always know where your product comes from.",
        learnMoreButton: "Read More",

        contactTitle: "Get In Touch",
        contactAddressTitle: "Our Address",
        contactAddress: "[Your address goes here] | The Netherlands",
        contactPhoneTitle: "Phone",
        contactPhone: "[Your phone number goes here]",
        contactEmailTitle: "E-mail",
        contactEmail: "[Your email address goes here]",

        footerText: "© 2025 Oranje Kip. All Rights Reserved. | Based in The Netherlands."
    }
};

// Varsayılan dil: Hollanda'da bulunduğunuz için NL ile başlıyoruz.
// Tarayıcı destekliyorsa, kullanıcının tercih ettiği dili de kontrol edebilirsiniz.
let currentLang = 'nl'; 


/**
 * Sayfadaki tüm metinleri mevcut dile göre günceller.
 */
function updateContent() {
    const langData = translations[currentLang];
    
    // Metin içeriklerini güncelle (data-key kullanan elementler)
    document.querySelectorAll('[data-key]').forEach(element =>