/* Exovision Games - static site behavior */

'use strict';

const CONTACT_ENDPOINT = 'REPLACE_WITH_YOUR_ENDPOINT';
const SITE_LANGUAGE_KEY = 'site-language';
const SUPPORTED_LANGUAGES = ['en', 'pl', 'de'];

const translations = {
  en: {
    meta: {
      common: {
        ogLocale: 'en_US',
        ogImageAlt: 'Exovision Games branded media preview placeholder'
      },
      home: {
        title: 'Exovision Games - Independent Unreal Engine Studio from Germany',
        description: 'Exovision Games is an independent German Unreal Engine studio focused on medieval worlds, strategy-RPG systems, modular building tools and production-ready assets.',
        ogTitle: 'Exovision Games - Independent Unreal Engine Studio',
        ogDescription: 'Creators of ARKEM, a medieval single-player strategy RPG currently in development.',
        twitterTitle: 'Exovision Games - Independent Unreal Engine Studio',
        twitterDescription: 'Medieval worlds, strategy-RPG systems, modular building tools and production-ready Unreal Engine assets.'
      },
      studio: {
        title: 'Studio - Exovision Games',
        description: 'Learn about Exovision Games, a small independent Unreal Engine studio from Germany building ARKEM, developer tools and production-minded assets.',
        ogTitle: 'Studio - Exovision Games',
        ogDescription: 'A small German Unreal Engine studio focused on medieval worlds, modular systems and practical production tools.',
        twitterTitle: 'Studio - Exovision Games',
        twitterDescription: 'Independent Unreal Engine development from Germany: ARKEM, tools, assets and strategy-RPG systems.'
      },
      projects: {
        title: 'Projects - Exovision Games | ARKEM and Unreal Engine Assets',
        description: 'Explore ARKEM, the medieval single-player strategy RPG currently in development, plus Unreal Engine tools, marketplace assets and studio support.',
        ogTitle: 'Projects - Exovision Games',
        ogDescription: 'ARKEM combines modular castle building, settlement management, RTS decisions and third-person exploration.',
        twitterTitle: 'Projects - Exovision Games',
        twitterDescription: 'ARKEM, Unreal Engine tools, marketplace assets and production-minded studio support.'
      },
      contact: {
        title: 'Contact - Exovision Games',
        description: 'Contact Exovision Games about ARKEM, Unreal Engine partnerships, marketplace assets, press inquiries or general questions.',
        ogTitle: 'Contact - Exovision Games',
        ogDescription: 'Reach Exovision Games by email, Discord or the contact form.',
        twitterTitle: 'Contact - Exovision Games',
        twitterDescription: 'Contact Exovision Games about ARKEM, partnerships, assets or press.'
      },
      press: {
        title: 'Press Kit - Exovision Games and ARKEM',
        description: 'Media resources, boilerplate text, factsheets and asset notes for Exovision Games and ARKEM.',
        ogTitle: 'Press Kit - Exovision Games',
        ogDescription: 'Media resources for Exovision Games and ARKEM, including studio boilerplate, ARKEM descriptions and factsheets.',
        twitterTitle: 'Press Kit - Exovision Games',
        twitterDescription: 'Press resources for Exovision Games and ARKEM.'
      },
      about: {
        title: 'Imprint - Exovision Games',
        description: 'Legal notice and provider information for Exovision Games / Exovision, operated by Florian Versteegen in Gleichen, Germany.',
        ogTitle: 'Imprint - Exovision Games',
        ogDescription: 'Legal provider information for Exovision Games / Exovision.',
        twitterTitle: 'Imprint - Exovision Games',
        twitterDescription: 'Legal provider information for Exovision Games / Exovision.'
      },
      privacy: {
        title: 'Privacy Policy - Exovision Games',
        description: 'Privacy Policy for Exovision Games: how personal data is handled on this static website and contact form.',
        ogTitle: 'Privacy Policy - Exovision Games',
        ogDescription: 'How Exovision Games handles personal data on this static website.',
        twitterTitle: 'Privacy Policy - Exovision Games',
        twitterDescription: 'How Exovision Games handles personal data on this static website.'
      }
    },
    common: {
      mainNavigation: 'Main navigation',
      mobileNavigation: 'Mobile navigation',
      language: 'Language',
      toggleMenu: 'Toggle menu',
      footer: 'Site footer',
      homeLogo: 'Exovision Games home',
      nav: {
        home: 'Home',
        studio: 'Studio',
        projects: 'Projects',
        arkem: 'ARKEM',
        contact: 'Contact'
      },
      footerBrand: 'An independent Unreal Engine studio from Germany focused on medieval worlds, strategy-RPG systems and production-ready assets.',
      footerNavigate: 'Navigate',
      footerResources: 'Resources',
      footerConnect: 'Connect',
      footerArkem: 'ARKEM Website',
      studio: 'Studio',
      press: 'Press Kit',
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
      discord: 'Discord',
      email: 'Email',
      copyright: '&copy; 2026 Exovision Games / Exovision &middot; Florian Versteegen &middot; Gleichen, Germany',
      alts: {
        arkemHero: 'Local ARKEM hero placeholder image',
        arkemShot1: 'ARKEM screenshot placeholder for modular castle building',
        arkemShot2: 'ARKEM screenshot placeholder for settlement management',
        arkemShot3: 'ARKEM screenshot placeholder for third-person exploration',
        studioWorkshop: 'Local studio workshop placeholder image',
        pressPreview: 'Local press kit preview placeholder image'
      },
      captions: {
        shot1: 'Castle building image slot. Replace with a real ARKEM screenshot when final media is ready.',
        shot2: 'Settlement management image slot. Replace with a real ARKEM screenshot when final media is ready.',
        shot3: 'Third-person exploration image slot. Replace with a real ARKEM screenshot when final media is ready.',
        studio: 'Studio imagery placeholder. Replace with approved local production artwork.',
        press: 'Press kit preview placeholder. Replace with final press materials.'
      }
    },
    home: {
      heroAria: 'Hero section',
      eyebrow: 'Independent German Unreal Engine Studio',
      title: 'Medieval worlds,<br><em>built for play</em>',
      sub: 'ARKEM &middot; Unreal Engine tools &middot; Production-ready assets',
      desc: 'Exovision Games is a small independent studio from Germany focused on medieval worlds, strategy-RPG systems, modular building tools and practical Unreal Engine assets.',
      primaryCta: 'Explore ARKEM',
      secondaryCta: 'Meet the Studio',
      forgeLabel: 'Studio Focus',
      forgeTitle: 'What Exovision builds',
      forgeIntro: 'The work is deliberately focused: original games, reusable Unreal Engine systems and assets built with production constraints in mind.',
      cards: {
        originalTitle: 'Original Games',
        originalText: 'ARKEM is the flagship project: a medieval single-player strategy RPG currently in development.',
        systemsTitle: 'Modular Systems',
        systemsText: 'Castle building, settlement management, strategy-RPG loops and gameplay systems designed for believable medieval worlds.',
        assetsTitle: 'Developer Assets',
        assetsText: 'Production-minded Unreal Engine tools and marketplace-ready assets for developers who need practical implementation.'
      },
      arkemLabel: 'Flagship Project',
      arkemTagline: 'Medieval strategy RPG in development',
      arkemDesc: 'ARKEM combines modular castle building, settlement management, real-time strategy decisions and third-person exploration. A public demo has been released, the game can be wishlisted on Steam, and the full release date is still to be announced.',
      arkemCta: 'Visit ARKEM',
      servicesLabel: 'For Studios & Partners',
      servicesTitle: 'Practical Unreal Engine support',
      servicesIntro: 'Exovision Games supports Unreal Engine productions with practical implementation, prototyping, technical art and production-minded tools.',
      offers: {
        gameplayTitle: 'Gameplay Implementation',
        gameplayText: 'Unreal Engine gameplay work, Blueprint and C++ systems, interaction loops and strategy/RPG mechanics.',
        prototypeTitle: 'Prototyping & Optimization',
        prototypeText: 'Focused prototypes, performance checks and production-aware iteration before scope gets expensive.',
        artTitle: 'Technical Art & Assets',
        artText: 'Integration support, marketplace-ready assets and medieval, strategy or RPG systems consultation.'
      },
      processTitle: 'Collaboration process',
      processIntro: 'A compact process for focused production support.',
      process: {
        oneTitle: 'Initial contact',
        oneText: 'Share the project, problem and rough timeline.',
        twoTitle: 'Scope discussion',
        twoText: 'Define the practical target, constraints and delivery shape.',
        threeTitle: 'Prototype or implementation',
        threeText: 'Build the agreed feature, tool, asset or proof of concept.',
        fourTitle: 'Delivery and support',
        fourText: 'Hand over clean work and support integration where needed.'
      },
      partnerCta: 'Start a collaboration',
      ctaTitle: 'Need focused Unreal Engine help?',
      ctaText: 'For ARKEM questions, studio partnerships, marketplace assets or press, contact Exovision Games directly.',
      ctaButton: 'Contact us'
    },
    studio: {
      label: 'Studio',
      title: 'An independent Unreal Engine studio from Germany',
      intro: 'Exovision Games creates medieval worlds, systems, tools and assets in Unreal Engine with a small-studio focus on believable play and practical production.',
      whoTitle: 'Who we are',
      whoText: 'Exovision Games / Exovision is a small independent German studio led by Florian Versteegen. The main project is ARKEM, while the broader work focuses on Unreal Engine, medieval worlds and production-ready tools.',
      buildTitle: 'What we build',
      buildIntro: 'A focused set of work areas keeps the studio practical and grounded.',
      build: {
        gamesTitle: 'Original games',
        gamesText: 'ARKEM is the flagship project: a medieval single-player strategy RPG currently in development.',
        toolsTitle: 'Unreal Engine tools',
        toolsText: 'Modular building workflows, gameplay systems and production helpers built for real implementation.',
        assetsTitle: 'Marketplace assets',
        assetsText: 'Production-minded assets and utilities for developers building playable worlds.',
        systemsTitle: 'Technical art and gameplay systems',
        systemsText: 'Integration-focused technical art, Blueprint/C++ systems and strategy-RPG mechanics.'
      },
      approachTitle: 'Our approach',
      approachText: 'The studio favors believable medieval worlds, modular systems, practical production tools and gameplay-first design over oversized promises.',
      factsTitle: 'Studio facts',
      facts: {
        locationLabel: 'Location',
        locationValue: 'Gleichen, Germany',
        engineLabel: 'Engine',
        engineValue: 'Unreal Engine',
        projectLabel: 'Flagship project',
        projectValue: 'ARKEM',
        focusLabel: 'Focus',
        focusValue: 'Medieval strategy RPG systems, modular building and developer tools'
      },
      ctaTitle: 'Follow the work',
      ctaText: 'Visit ARKEM for the game, or contact Exovision Games for studio and production inquiries.',
      visitArkem: 'Visit ARKEM',
      contact: 'Contact Exovision Games'
    },
    projects: {
      label: 'Projects',
      title: 'ARKEM and Unreal Engine production work',
      intro: 'Exovision Games is centered on ARKEM and a focused set of Unreal Engine tools, assets and support work for developers.',
      overviewLabel: 'ARKEM Overview',
      overviewTitle: 'A medieval single-player strategy RPG',
      overviewText: 'ARKEM combines modular castle building, settlement management, real-time strategy decisions and third-person exploration in a medieval-inspired world.',
      pillarsTitle: 'Gameplay pillars',
      pillars: {
        buildTitle: 'Build',
        buildText: 'Modular castle construction and settlement layout as core long-term play.',
        ruleTitle: 'Rule',
        ruleText: 'Settlement management, resources and growth decisions over time.',
        defendTitle: 'Defend',
        defendText: 'Troops, threats and castle defense tied to your strategic choices.',
        exploreTitle: 'Explore',
        exploreText: 'Third-person movement, quests, NPCs and world exploration.'
      },
      statusTitle: 'Development status',
      statusText: 'ARKEM is currently in development. A public demo has been released, the game is available to wishlist on Steam, and the full release date is to be announced.',
      distinctTitle: 'What makes ARKEM distinct',
      distinctText: 'ARKEM switches between wider strategic control and direct third-person presence, with castle and settlement development at the center of play. It combines RTS, RPG and city-building ideas without claiming a finished full release before it is ready.',
      galleryTitle: 'Screenshot gallery',
      galleryIntro: 'The gallery is wired for local ARKEM screenshots. Current images are placeholders until final media is added.',
      visitArkem: 'Visit ARKEM Website',
      wishlist: 'Wishlist on Steam',
      joinDiscord: 'Join Discord',
      partnersTitle: 'For Studios & Partners',
      partnersIntro: 'Exovision Games supports Unreal Engine productions with practical implementation, prototyping, technical art and production-minded tools.',
      partnerItems: {
        gameplay: 'Unreal Engine gameplay implementation',
        blueprints: 'Blueprints and C++ systems',
        prototyping: 'Prototyping',
        performance: 'Performance optimization',
        techArt: 'Technical art integration',
        assets: 'Marketplace-ready assets',
        consulting: 'Medieval, strategy and RPG systems consultation'
      },
      processTitle: 'How collaboration works',
      processIntro: 'Small scope, clear outcomes and production-aware delivery.',
      startCollab: 'Start a collaboration',
      marketplaceTitle: 'Marketplace and tools',
      marketplaceText: 'As Unreal Engine users, Exovision Games builds assets and utilities with practical pipelines in mind: tools that should survive beyond a demo scene.'
    },
    contact: {
      pageLabel: 'Contact',
      title: 'Contact Exovision Games',
      intro: 'Send a focused note about ARKEM, partnerships, marketplace assets or press. If the form endpoint is not configured yet, please email directly.',
      sectionAria: 'Contact form and details',
      asideAria: 'Alternative contact methods',
      formTitle: 'Send a message',
      form: {
        nameLabel: 'Your name <span class="required-mark">*</span>',
        namePlaceholder: 'Your name',
        emailLabel: 'Email address <span class="required-mark">*</span>',
        emailPlaceholder: 'you@example.com',
        topicLabel: 'Topic <span class="required-mark">*</span>',
        topicPlaceholder: 'Choose a topic',
        topics: {
          arkem: 'ARKEM',
          partnership: 'Partnership',
          marketplace: 'Marketplace Assets',
          press: 'Press',
          other: 'Other'
        },
        subjectLabel: 'Subject',
        subjectPlaceholder: 'Short summary',
        messageLabel: 'Message <span class="required-mark">*</span>',
        messagePlaceholder: 'Tell us what you need, with useful context and links if relevant.',
        consentLabel: 'I agree that Exovision Games may process this information to answer my inquiry. The <a href="/privacy/">Privacy Policy</a> applies. <span class="required-mark">*</span>',
        note: 'The contact form is static and requires a configured endpoint. You can always email <a href="mailto:info@exovision.de">info@exovision.de</a> directly.',
        submit: 'Send message',
        mailto: 'Email directly',
        messages: {
          sending: 'Sending...',
          success: 'Your message has been sent. We will reply as soon as possible.',
          error: 'Something went wrong. Please try again or email us directly.',
          notConfigured: 'The contact form is not configured yet. Please email info@exovision.de directly.',
          required: 'Please fill in all required fields.',
          email: 'Please enter a valid email address.',
          consent: 'Please confirm the privacy notice before sending.',
          spam: 'The message could not be accepted. Please email us directly.'
        }
      },
      directTitle: 'Direct contact',
      emailLabel: 'Email',
      discordLabel: 'Discord',
      discordCta: 'Join the community',
      addressTitle: 'Legal address',
      address: 'Florian Versteegen<br>Exovision Games / Exovision<br>Obere Str. 14<br>37130 Gleichen<br>Germany',
      followTitle: 'ARKEM',
      followText: 'For game-specific information, visit the separate ARKEM website.',
      arkemCta: 'ARKEM Website'
    },
    press: {
      label: 'Press Kit',
      title: 'Media resources for Exovision Games and ARKEM',
      intro: 'This page collects safe boilerplate, ARKEM descriptions, facts and asset notes for press or creator inquiries.',
      boilerplateTitle: 'Studio boilerplate',
      shortLabel: 'Short version',
      studioShort: 'Exovision Games / Exovision is an independent German Unreal Engine studio focused on medieval worlds, strategy-RPG systems, modular building tools and production-ready assets.',
      extendedLabel: 'Extended version',
      studioExtended: 'Exovision Games is a small independent studio from Gleichen, Germany. Its main project is ARKEM, while the broader studio work includes Unreal Engine tools, technical art, gameplay systems and production-minded marketplace assets for developers.',
      arkemTitle: 'ARKEM description',
      arkemShort: 'ARKEM is a medieval single-player strategy RPG combining modular castle building, settlement management, real-time strategy decisions and third-person exploration.',
      arkemExtended: 'ARKEM is currently in development. It is built around castle and settlement development, the ability to move from wider strategic control into direct third-person presence, and a medieval-inspired world shaped by RPG, RTS and city-building systems. A public demo has been released, the game can be wishlisted on Steam, and the full release date is to be announced.',
      factsheetTitle: 'Factsheet',
      assetsTitle: 'Assets',
      assetsText: 'Final press files should be placed in assets/images/. Current images are local placeholders and should be replaced with approved logo, OG image, ARKEM screenshots and press-kit-preview files.',
      contactTitle: 'Press contact',
      contactText: 'For media questions, contact Exovision Games directly by email or visit the separate ARKEM website.',
      fact: {
        studio: 'Studio',
        studioValue: 'Exovision Games / Exovision',
        location: 'Location',
        locationValue: 'Gleichen, Germany',
        project: 'Main project',
        projectValue: 'ARKEM',
        engine: 'Engine',
        engineValue: 'Unreal Engine',
        genre: 'Genre',
        genreValue: 'Medieval strategy RPG / city-building / third-person RPG',
        status: 'Status',
        statusValue: 'In development',
        contact: 'Contact',
        contactValue: 'info@exovision.de'
      }
    },
    about: {
      pageLabel: 'Legal Notice',
      title: 'Imprint',
      providerTitle: 'Provider information',
      providerText: 'Florian Versteegen<br>Exovision Games / Exovision<br>Obere Str. 14<br>37130 Gleichen<br>Germany',
      contactTitle: 'Contact',
      contactText: 'Email: <a href="mailto:info@exovision.de">info@exovision.de</a>',
      responsibleTitle: 'Responsible for content',
      responsibleText: 'Responsible within the meaning of &sect; 18(2) MStV: Florian Versteegen, address as above.',
      liabilityContentTitle: 'Liability for content',
      liabilityContentText: 'We make every effort to keep the content of this website accurate and up to date. However, we cannot guarantee the accuracy, completeness or current validity of all information. As a service provider, we are responsible for our own content on these pages under applicable law.',
      liabilityLinksTitle: 'Liability for links',
      liabilityLinksText: 'This website may contain links to external websites operated by third parties. We have no control over their content and cannot accept responsibility for it. If we become aware of legal violations, we will remove the relevant links without undue delay.',
      copyrightTitle: 'Copyright',
      copyrightText: 'All content and works created for this website are subject to German copyright law unless stated otherwise. Reproduction, adaptation, distribution or other use beyond the limits of copyright law requires prior written consent.',
      dataProtectionTitle: 'Data protection',
      dataProtectionText: 'Where personal data is collected on this website, this is done on a voluntary basis wherever possible. Please see our <a href="/privacy/">Privacy Policy</a> for details.'
    },
    privacy: {
      pageLabel: 'Privacy',
      title: 'Privacy Policy',
      controllerTitle: '1. Data controller',
      controllerText: 'Florian Versteegen &middot; Exovision Games / Exovision<br>Obere Str. 14, 37130 Gleichen, Germany<br>Email: <a href="mailto:info@exovision.de">info@exovision.de</a>',
      collectedTitle: '2. Data we collect',
      collectedText: 'This static website can generally be used without submitting personal data. If you contact us, we process the information you provide, such as name, email address, topic, subject and message content, to answer your inquiry.',
      formTitle: '3. Contact form',
      formText: 'The contact form only sends data when a real endpoint is configured. Until then, the form informs you that direct email contact is required. A hidden honeypot field helps reduce automated spam.',
      purposeTitle: '4. Purpose and legal basis',
      purposeText: 'Contact data is processed to answer inquiries and maintain business communication. Depending on the context, processing is based on legitimate interest under Art. 6(1)(f) GDPR or consent under Art. 6(1)(a) GDPR.',
      retentionTitle: '5. Data retention',
      retentionText: 'Contact data is retained only as long as necessary to process the inquiry, unless statutory retention obligations require a longer period.',
      rightsTitle: '6. Your rights',
      rightsText: 'Under the GDPR, you may request access, correction, erasure, restriction of processing, objection to processing and data portability. You may also lodge a complaint with a competent supervisory authority.',
      securityTitle: '7. Security',
      securityText: 'Data transmission over the internet, including email communication, may have security gaps. We use appropriate technical and organisational measures to protect personal data where we control the processing.',
      fontsTitle: '8. Fonts and external media',
      fontsText: 'This website does not load Google Fonts from Google servers. Fonts use local/system font stacks, and optional local font files can be added under assets/fonts/. The site does not hotlink external images.',
      changesTitle: '9. Changes to this policy',
      changesText: 'We may update this Privacy Policy when the website, services or legal requirements change. The current version is available at this URL.',
      updated: 'Last updated: 2026-06-14'
    }
  },
  pl: {},
  de: {}
};

translations.pl = {
  ...translations.en,
  meta: {
    common: { ogLocale: 'pl_PL', ogImageAlt: 'Brandowy placeholder podglądu mediów Exovision Games' },
    home: {
      title: 'Exovision Games - Niezależne niemieckie studio Unreal Engine',
      description: 'Exovision Games to niezależne niemieckie studio pracujące w Unreal Engine, skupione na średniowiecznych światach, systemach strategii RPG, modułowej budowie oraz assetach i narzędziach gotowych do użycia w produkcji.',
      ogTitle: 'Exovision Games - niezależne studio Unreal Engine',
      ogDescription: 'Twórcy ARKEM, średniowiecznej gry single-player łączącej strategię i RPG, obecnie w rozwoju.',
      twitterTitle: 'Exovision Games - niezależne studio Unreal Engine',
      twitterDescription: 'Średniowieczne światy, systemy strategii RPG, modułowa budowa i produkcyjne assety Unreal Engine.'
    },
    studio: {
      title: 'Studio - Exovision Games',
      description: 'Poznaj Exovision Games, małe niezależne studio Unreal Engine z Niemiec tworzące ARKEM, narzędzia dla deweloperów i assety gotowe do produkcji.',
      ogTitle: 'Studio - Exovision Games',
      ogDescription: 'Małe niemieckie studio Unreal Engine skupione na średniowiecznych światach, systemach modułowych i praktycznych narzędziach produkcyjnych.',
      twitterTitle: 'Studio - Exovision Games',
      twitterDescription: 'Niezależna praca w Unreal Engine z Niemiec: ARKEM, narzędzia, assety i systemy strategii RPG.'
    },
    projects: {
      title: 'Projekty - Exovision Games | ARKEM i assety Unreal Engine',
      description: 'Poznaj ARKEM, średniowieczną grę single-player strategy RPG w rozwoju, oraz narzędzia Unreal Engine, assety marketplace i wsparcie studia.',
      ogTitle: 'Projekty - Exovision Games',
      ogDescription: 'ARKEM łączy modułową budowę zamku, zarządzanie osadą, decyzje RTS i eksplorację z perspektywy trzeciej osoby.',
      twitterTitle: 'Projekty - Exovision Games',
      twitterDescription: 'ARKEM, narzędzia Unreal Engine, assety marketplace i praktyczne wsparcie produkcji.'
    },
    contact: {
      title: 'Kontakt - Exovision Games',
      description: 'Skontaktuj się z Exovision Games w sprawie ARKEM, współpracy przy Unreal Engine, assetów marketplace, prasy lub ogólnych pytań.',
      ogTitle: 'Kontakt - Exovision Games',
      ogDescription: 'Napisz do Exovision Games e-mailem, przez Discord albo formularz kontaktowy.',
      twitterTitle: 'Kontakt - Exovision Games',
      twitterDescription: 'Kontakt w sprawie ARKEM, współpracy, assetów albo prasy.'
    },
    press: {
      title: 'Press Kit - Exovision Games i ARKEM',
      description: 'Materiały medialne, boilerplate, factsheet i informacje o assetach dla Exovision Games i ARKEM.',
      ogTitle: 'Press Kit - Exovision Games',
      ogDescription: 'Materiały medialne dla Exovision Games i ARKEM: opis studia, opisy ARKEM i factsheet.',
      twitterTitle: 'Press Kit - Exovision Games',
      twitterDescription: 'Materiały prasowe dla Exovision Games i ARKEM.'
    },
    about: {
      title: 'Imprint / Nota prawna - Exovision Games',
      description: 'Nota prawna i dane usługodawcy Exovision Games / Exovision, prowadzonego przez Florian Versteegen w Gleichen w Niemczech.',
      ogTitle: 'Imprint / Nota prawna - Exovision Games',
      ogDescription: 'Dane prawne Exovision Games / Exovision.',
      twitterTitle: 'Imprint / Nota prawna - Exovision Games',
      twitterDescription: 'Dane prawne Exovision Games / Exovision.'
    },
    privacy: {
      title: 'Polityka prywatności - Exovision Games',
      description: 'Polityka prywatności Exovision Games: jak dane osobowe są obsługiwane na tej statycznej stronie i w formularzu kontaktowym.',
      ogTitle: 'Polityka prywatności - Exovision Games',
      ogDescription: 'Jak Exovision Games obsługuje dane osobowe na statycznej stronie.',
      twitterTitle: 'Polityka prywatności - Exovision Games',
      twitterDescription: 'Jak Exovision Games obsługuje dane osobowe na statycznej stronie.'
    }
  },
  common: {
    ...translations.en.common,
    mainNavigation: 'Nawigacja główna',
    mobileNavigation: 'Nawigacja mobilna',
    language: 'Język',
    toggleMenu: 'Przełącz menu',
    footer: 'Stopka strony',
    homeLogo: 'Exovision Games strona główna',
    nav: { home: 'Start', studio: 'Studio', projects: 'Projekty', arkem: 'ARKEM', contact: 'Kontakt' },
    footerBrand: 'Niezależne niemieckie studio Unreal Engine skupione na średniowiecznych światach, systemach strategii RPG i assetach gotowych do produkcji.',
    footerNavigate: 'Nawigacja',
    footerResources: 'Zasoby',
    footerConnect: 'Kontakt',
    footerArkem: 'Strona ARKEM',
    studio: 'Studio',
    press: 'Press Kit',
    imprint: 'Imprint',
    privacy: 'Prywatność',
    email: 'E-mail',
    copyright: '&copy; 2026 Exovision Games / Exovision &middot; Florian Versteegen &middot; Gleichen, Niemcy',
    alts: {
      arkemHero: 'Lokalny placeholder grafiki hero ARKEM',
      arkemShot1: 'Placeholder screenshotu ARKEM dla modułowej budowy zamku',
      arkemShot2: 'Placeholder screenshotu ARKEM dla zarządzania osadą',
      arkemShot3: 'Placeholder screenshotu ARKEM dla eksploracji z trzeciej osoby',
      studioWorkshop: 'Lokalny placeholder grafiki warsztatu studia',
      pressPreview: 'Lokalny placeholder podglądu press kitu'
    },
    captions: {
      shot1: 'Miejsce na obraz budowy zamku. Podmień na prawdziwy screenshot ARKEM, gdy finalne media będą gotowe.',
      shot2: 'Miejsce na obraz zarządzania osadą. Podmień na prawdziwy screenshot ARKEM, gdy finalne media będą gotowe.',
      shot3: 'Miejsce na obraz eksploracji z trzeciej osoby. Podmień na prawdziwy screenshot ARKEM, gdy finalne media będą gotowe.',
      studio: 'Placeholder grafiki studia. Podmień na zatwierdzony lokalny materiał produkcyjny.',
      press: 'Placeholder press kitu. Podmień na finalne materiały prasowe.'
    }
  },
  home: {
    heroAria: 'Sekcja hero',
    eyebrow: 'Niezależne niemieckie studio Unreal Engine',
    title: 'Średniowieczne światy<br><em>budowane dla gry</em>',
    sub: 'ARKEM &middot; Narzędzia Unreal Engine &middot; Assety gotowe do produkcji',
    desc: 'Exovision Games to małe niezależne studio z Niemiec, skupione na średniowiecznych światach, systemach strategii RPG, modułowej budowie oraz praktycznych assetach Unreal Engine.',
    primaryCta: 'Poznaj ARKEM',
    secondaryCta: 'Poznaj studio',
    forgeLabel: 'Kierunek studia',
    forgeTitle: 'Co tworzy Exovision',
    forgeIntro: 'Zakres prac jest celowo skupiony: autorskie gry, wielokrotnego użytku systemy Unreal Engine i assety projektowane z myślą o realnej produkcji.',
    cards: {
      originalTitle: 'Autorskie gry',
      originalText: 'ARKEM to główny projekt: średniowieczna gra single-player strategy RPG obecnie w rozwoju.',
      systemsTitle: 'Systemy modułowe',
      systemsText: 'Budowa zamku, zarządzanie osadą, pętle strategii RPG i systemy rozgrywki dla wiarygodnych średniowiecznych światów.',
      assetsTitle: 'Assety dla deweloperów',
      assetsText: 'Produkcyjnie nastawione narzędzia Unreal Engine i assety marketplace-ready dla twórców potrzebujących praktycznych rozwiązań.'
    },
    arkemLabel: 'Główny projekt',
    arkemTagline: 'Średniowieczne strategy RPG w rozwoju',
    arkemDesc: 'ARKEM łączy modułową budowę zamku, zarządzanie osadą, decyzje strategii czasu rzeczywistego i eksplorację z perspektywy trzeciej osoby. Publiczne demo zostało wydane, grę można dodać do wishlisty na Steam, a data pełnej premiery zostanie ogłoszona później.',
    arkemCta: 'Odwiedź ARKEM',
    servicesLabel: 'Dla studiów i partnerów',
    servicesTitle: 'Praktyczne wsparcie Unreal Engine',
    servicesIntro: 'Exovision Games wspiera produkcje Unreal Engine przez praktyczną implementację, prototypowanie, technical art i narzędzia z myślą o produkcji.',
    offers: {
      gameplayTitle: 'Implementacja gameplayu',
      gameplayText: 'Prace gameplayowe w Unreal Engine, systemy Blueprint i C++, pętle interakcji oraz mechaniki strategii/RPG.',
      prototypeTitle: 'Prototypowanie i optymalizacja',
      prototypeText: 'Skupione prototypy, kontrole wydajności i iteracja świadoma kosztów produkcji.',
      artTitle: 'Technical art i assety',
      artText: 'Wsparcie integracji, assety marketplace-ready oraz konsultacje systemów średniowiecznych, strategicznych i RPG.'
    },
    processTitle: 'Proces współpracy',
    processIntro: 'Krótki proces dla konkretnego wsparcia produkcji.',
    process: {
      oneTitle: 'Pierwszy kontakt',
      oneText: 'Opisz projekt, problem i orientacyjny termin.',
      twoTitle: 'Omówienie zakresu',
      twoText: 'Ustalamy praktyczny cel, ograniczenia i formę dostarczenia.',
      threeTitle: 'Prototyp lub implementacja',
      threeText: 'Powstaje uzgodniona funkcja, narzędzie, asset albo proof of concept.',
      fourTitle: 'Dostarczenie i wsparcie',
      fourText: 'Przekazanie uporządkowanej pracy i wsparcie integracji, jeśli jest potrzebne.'
    },
    partnerCta: 'Rozpocznij współpracę',
    ctaTitle: 'Potrzebujesz skupionego wsparcia Unreal Engine?',
    ctaText: 'W sprawie ARKEM, współpracy studyjnej, assetów marketplace albo prasy skontaktuj się bezpośrednio z Exovision Games.',
    ctaButton: 'Skontaktuj się'
  },
  studio: {
    label: 'Studio',
    title: 'Niezależne studio Unreal Engine z Niemiec',
    intro: 'Exovision Games tworzy średniowieczne światy, systemy, narzędzia i assety w Unreal Engine, z perspektywą małego studia: wiarygodna rozgrywka i praktyczna produkcja.',
    whoTitle: 'Kim jesteśmy',
    whoText: 'Exovision Games / Exovision to małe niezależne niemieckie studio prowadzone przez Florian Versteegen. Głównym projektem jest ARKEM, a szerszy obszar pracy obejmuje Unreal Engine, średniowieczne światy i narzędzia gotowe do produkcji.',
    buildTitle: 'Co tworzymy',
    buildIntro: 'Skupiony zestaw obszarów pomaga utrzymać praktyczny, wiarygodny kierunek.',
    build: {
      gamesTitle: 'Autorskie gry',
      gamesText: 'ARKEM to główny projekt: średniowieczna gra single-player strategy RPG obecnie w rozwoju.',
      toolsTitle: 'Narzędzia Unreal Engine',
      toolsText: 'Modułowe workflow budowy, systemy gameplayu i pomocnicze narzędzia produkcyjne.',
      assetsTitle: 'Assety marketplace',
      assetsText: 'Praktyczne assety i utility dla deweloperów budujących grywalne światy.',
      systemsTitle: 'Technical art i systemy gameplayu',
      systemsText: 'Technical art nastawiony na integrację, systemy Blueprint/C++ i mechaniki strategii RPG.'
    },
    approachTitle: 'Nasze podejście',
    approachText: 'Studio stawia na wiarygodne średniowieczne światy, systemy modułowe, praktyczne narzędzia produkcyjne i design podporządkowany rozgrywce, zamiast przesadzonych obietnic.',
    factsTitle: 'Fakty o studiu',
    facts: {
      locationLabel: 'Lokalizacja',
      locationValue: 'Gleichen, Niemcy',
      engineLabel: 'Silnik',
      engineValue: 'Unreal Engine',
      projectLabel: 'Główny projekt',
      projectValue: 'ARKEM',
      focusLabel: 'Fokus',
      focusValue: 'Średniowieczne systemy strategii RPG, modułowa budowa i narzędzia dla deweloperów'
    },
    ctaTitle: 'Śledź prace',
    ctaText: 'Odwiedź ARKEM w sprawie gry albo skontaktuj się z Exovision Games w sprawach studyjnych i produkcyjnych.',
    visitArkem: 'Odwiedź ARKEM',
    contact: 'Skontaktuj się z Exovision Games'
  },
  projects: {
    label: 'Projekty',
    title: 'ARKEM i produkcja Unreal Engine',
    intro: 'Exovision Games skupia się na ARKEM oraz zestawie narzędzi, assetów i wsparcia Unreal Engine dla deweloperów.',
    overviewLabel: 'ARKEM overview',
    overviewTitle: 'Średniowieczna gra single-player strategy RPG',
    overviewText: 'ARKEM łączy modułową budowę zamku, zarządzanie osadą, decyzje strategii czasu rzeczywistego i eksplorację z perspektywy trzeciej osoby w świecie inspirowanym średniowieczem.',
    pillarsTitle: 'Filary rozgrywki',
    pillars: {
      buildTitle: 'Buduj',
      buildText: 'Modułowa konstrukcja zamku i układ osady jako rdzeń długoterminowej gry.',
      ruleTitle: 'Zarządzaj',
      ruleText: 'Zarządzanie osadą, zasobami i wzrostem w czasie.',
      defendTitle: 'Broń',
      defendText: 'Wojska, zagrożenia i obrona zamku powiązane z decyzjami strategicznymi.',
      exploreTitle: 'Eksploruj',
      exploreText: 'Ruch z perspektywy trzeciej osoby, zadania, NPC i eksploracja świata.'
    },
    statusTitle: 'Status rozwoju',
    statusText: 'ARKEM jest obecnie w rozwoju. Publiczne demo zostało wydane, grę można dodać do wishlisty na Steam, a data pełnej premiery zostanie ogłoszona później.',
    distinctTitle: 'Co wyróżnia ARKEM',
    distinctText: 'ARKEM przełącza gracza między szerszą kontrolą strategiczną a bezpośrednią obecnością z perspektywy trzeciej osoby, stawiając rozwój zamku i osady w centrum rozgrywki. Łączy idee RTS, RPG i city-buildingu bez sugerowania gotowej pełnej wersji przed czasem.',
    galleryTitle: 'Galeria screenshotów',
    galleryIntro: 'Galeria jest przygotowana pod lokalne screenshoty ARKEM. Obecne obrazy są placeholderami do czasu dodania finalnych mediów.',
    visitArkem: 'Odwiedź stronę ARKEM',
    wishlist: 'Dodaj do wishlisty na Steam',
    joinDiscord: 'Dołącz do Discorda',
    partnersTitle: 'Dla studiów i partnerów',
    partnersIntro: 'Exovision Games wspiera produkcje Unreal Engine przez praktyczną implementację, prototypowanie, technical art i narzędzia z myślą o produkcji.',
    partnerItems: {
      gameplay: 'Implementacja gameplayu w Unreal Engine',
      blueprints: 'Systemy Blueprint i C++',
      prototyping: 'Prototypowanie',
      performance: 'Optymalizacja wydajności',
      techArt: 'Integracja technical artu',
      assets: 'Assety marketplace-ready',
      consulting: 'Konsultacje systemów średniowiecznych, strategicznych i RPG'
    },
    processTitle: 'Jak wygląda współpraca',
    processIntro: 'Mały zakres, jasne wyniki i dostarczenie z myślą o produkcji.',
    startCollab: 'Rozpocznij współpracę',
    marketplaceTitle: 'Marketplace i narzędzia',
    marketplaceText: 'Jako użytkownicy Unreal Engine, Exovision Games tworzy assety i utility z myślą o praktycznych pipeline’ach: narzędzia, które powinny działać dłużej niż scena demonstracyjna.'
  },
  contact: {
    pageLabel: 'Kontakt',
    title: 'Skontaktuj się z Exovision Games',
    intro: 'Wyślij konkretną wiadomość w sprawie ARKEM, współpracy, assetów marketplace albo prasy. Jeśli endpoint formularza nie jest skonfigurowany, napisz bezpośrednio e-mailem.',
    sectionAria: 'Formularz kontaktowy i dane',
    asideAria: 'Alternatywne metody kontaktu',
    formTitle: 'Wyślij wiadomość',
    form: {
      nameLabel: 'Twoje imię <span class="required-mark">*</span>',
      namePlaceholder: 'Twoje imię',
      emailLabel: 'Adres e-mail <span class="required-mark">*</span>',
      emailPlaceholder: 'ty@example.com',
      topicLabel: 'Temat <span class="required-mark">*</span>',
      topicPlaceholder: 'Wybierz temat',
      topics: { arkem: 'ARKEM', partnership: 'Współpraca', marketplace: 'Assety Marketplace', press: 'Prasa', other: 'Inne' },
      subjectLabel: 'Tytuł',
      subjectPlaceholder: 'Krótkie podsumowanie',
      messageLabel: 'Wiadomość <span class="required-mark">*</span>',
      messagePlaceholder: 'Opisz, czego potrzebujesz, dodając przydatny kontekst i linki, jeśli są istotne.',
      consentLabel: 'Zgadzam się, aby Exovision Games przetworzyło te informacje w celu odpowiedzi na moje zapytanie. Obowiązuje <a href="/privacy/">Polityka prywatności</a>. <span class="required-mark">*</span>',
      note: 'Formularz jest statyczny i wymaga skonfigurowanego endpointu. Zawsze możesz napisać bezpośrednio na <a href="mailto:info@exovision.de">info@exovision.de</a>.',
      submit: 'Wyślij wiadomość',
      mailto: 'Napisz e-mailem',
      messages: {
        sending: 'Wysyłanie...',
        success: 'Wiadomość została wysłana. Odpowiemy możliwie szybko.',
        error: 'Coś poszło nie tak. Spróbuj ponownie albo napisz bezpośrednio e-mailem.',
        notConfigured: 'Formularz kontaktowy nie jest jeszcze skonfigurowany. Napisz bezpośrednio na info@exovision.de.',
        required: 'Wypełnij wszystkie wymagane pola.',
        email: 'Podaj prawidłowy adres e-mail.',
        consent: 'Potwierdź informację o prywatności przed wysłaniem.',
        spam: 'Wiadomość nie mogła zostać przyjęta. Napisz bezpośrednio e-mailem.'
      }
    },
    directTitle: 'Kontakt bezpośredni',
    emailLabel: 'E-mail',
    discordLabel: 'Discord',
    discordCta: 'Dołącz do społeczności',
    addressTitle: 'Adres prawny',
    address: 'Florian Versteegen<br>Exovision Games / Exovision<br>Obere Str. 14<br>37130 Gleichen<br>Niemcy',
    followTitle: 'ARKEM',
    followText: 'Informacje o grze znajdują się na osobnej stronie ARKEM.',
    arkemCta: 'Strona ARKEM'
  },
  press: {
    label: 'Press Kit',
    title: 'Materiały medialne dla Exovision Games i ARKEM',
    intro: 'Ta strona zbiera bezpieczny boilerplate, opisy ARKEM, fakty i informacje o assetach dla prasy oraz twórców.',
    boilerplateTitle: 'Boilerplate studia',
    shortLabel: 'Wersja krótka',
    studioShort: 'Exovision Games / Exovision to niezależne niemieckie studio Unreal Engine skupione na średniowiecznych światach, systemach strategii RPG, modułowej budowie i assetach gotowych do produkcji.',
    extendedLabel: 'Wersja rozszerzona',
    studioExtended: 'Exovision Games to małe niezależne studio z Gleichen w Niemczech. Głównym projektem jest ARKEM, a szersza praca studia obejmuje narzędzia Unreal Engine, technical art, systemy gameplayu i produkcyjnie nastawione assety marketplace dla deweloperów.',
    arkemTitle: 'Opis ARKEM',
    arkemShort: 'ARKEM to średniowieczna gra single-player strategy RPG łącząca modułową budowę zamku, zarządzanie osadą, decyzje strategii czasu rzeczywistego i eksplorację z perspektywy trzeciej osoby.',
    arkemExtended: 'ARKEM jest obecnie w rozwoju. Projekt opiera się na rozwoju zamku i osady, przechodzeniu od szerszej kontroli strategicznej do bezpośredniej obecności z perspektywy trzeciej osoby oraz świecie inspirowanym średniowieczem, zbudowanym z systemów RPG, RTS i city-building. Publiczne demo zostało wydane, grę można dodać do wishlisty na Steam, a data pełnej premiery zostanie ogłoszona później.',
    factsheetTitle: 'Factsheet',
    assetsTitle: 'Assety',
    assetsText: 'Finalne pliki prasowe powinny znaleźć się w assets/images/. Obecne obrazy są lokalnymi placeholderami i trzeba je podmienić na zatwierdzone logo, OG image, screenshoty ARKEM i press-kit-preview.',
    contactTitle: 'Kontakt prasowy',
    contactText: 'W sprawach medialnych skontaktuj się z Exovision Games e-mailem albo odwiedź osobną stronę ARKEM.',
    fact: {
      studio: 'Studio',
      studioValue: 'Exovision Games / Exovision',
      location: 'Lokalizacja',
      locationValue: 'Gleichen, Niemcy',
      project: 'Główny projekt',
      projectValue: 'ARKEM',
      engine: 'Silnik',
      engineValue: 'Unreal Engine',
      genre: 'Gatunek',
      genreValue: 'Medieval strategy RPG / city-building / third-person RPG',
      status: 'Status',
      statusValue: 'W rozwoju',
      contact: 'Kontakt',
      contactValue: 'info@exovision.de'
    }
  },
  about: {
    pageLabel: 'Nota prawna',
    title: 'Imprint',
    providerTitle: 'Dane usługodawcy',
    providerText: 'Florian Versteegen<br>Exovision Games / Exovision<br>Obere Str. 14<br>37130 Gleichen<br>Niemcy',
    contactTitle: 'Kontakt',
    contactText: 'E-mail: <a href="mailto:info@exovision.de">info@exovision.de</a>',
    responsibleTitle: 'Osoba odpowiedzialna za treści',
    responsibleText: 'Odpowiedzialny w rozumieniu &sect; 18 ust. 2 MStV: Florian Versteegen, adres jak powyżej.',
    liabilityContentTitle: 'Odpowiedzialność za treści',
    liabilityContentText: 'Dokładamy starań, aby treści tej strony były rzetelne i aktualne. Nie możemy jednak zagwarantować pełnej poprawności, kompletności ani aktualności wszystkich informacji. Jako usługodawca odpowiadamy za własne treści zgodnie z obowiązującym prawem.',
    liabilityLinksTitle: 'Odpowiedzialność za linki',
    liabilityLinksText: 'Strona może zawierać linki do zewnętrznych witryn prowadzonych przez osoby trzecie. Nie mamy wpływu na ich treść i nie ponosimy za nią odpowiedzialności. Po otrzymaniu informacji o naruszeniach odpowiednie linki zostaną usunięte bez zbędnej zwłoki.',
    copyrightTitle: 'Prawa autorskie',
    copyrightText: 'Treści i materiały przygotowane dla tej strony podlegają niemieckiemu prawu autorskiemu, chyba że wskazano inaczej. Powielanie, modyfikacja, rozpowszechnianie lub inne wykorzystanie poza granicami prawa autorskiego wymaga wcześniejszej pisemnej zgody.',
    dataProtectionTitle: 'Ochrona danych',
    dataProtectionText: 'Jeśli na tej stronie zbierane są dane osobowe, odbywa się to w miarę możliwości dobrowolnie. Szczegóły znajdują się w naszej <a href="/privacy/">Polityce prywatności</a>.'
  },
  privacy: {
    pageLabel: 'Prywatność',
    title: 'Polityka prywatności',
    controllerTitle: '1. Administrator danych',
    controllerText: 'Florian Versteegen &middot; Exovision Games / Exovision<br>Obere Str. 14, 37130 Gleichen, Niemcy<br>E-mail: <a href="mailto:info@exovision.de">info@exovision.de</a>',
    collectedTitle: '2. Jakie dane zbieramy',
    collectedText: 'Z tej statycznej strony można zasadniczo korzystać bez przekazywania danych osobowych. Jeśli kontaktujesz się z nami, przetwarzamy przekazane informacje, takie jak imię, adres e-mail, temat, tytuł i treść wiadomości, aby odpowiedzieć na zapytanie.',
    formTitle: '3. Formularz kontaktowy',
    formText: 'Formularz kontaktowy wysyła dane tylko wtedy, gdy skonfigurowany jest prawdziwy endpoint. Do tego czasu informuje o konieczności bezpośredniego kontaktu e-mail. Ukryte pole honeypot pomaga ograniczać spam automatyczny.',
    purposeTitle: '4. Cel i podstawa prawna',
    purposeText: 'Dane kontaktowe są przetwarzane w celu odpowiedzi na zapytania i utrzymania komunikacji biznesowej. W zależności od kontekstu podstawą przetwarzania jest uzasadniony interes zgodnie z art. 6 ust. 1 lit. f RODO albo zgoda zgodnie z art. 6 ust. 1 lit. a RODO.',
    retentionTitle: '5. Okres przechowywania',
    retentionText: 'Dane kontaktowe przechowujemy tylko tak długo, jak jest to potrzebne do obsługi zapytania, chyba że przepisy wymagają dłuższego okresu przechowywania.',
    rightsTitle: '6. Twoje prawa',
    rightsText: 'Na podstawie RODO przysługuje Ci prawo dostępu do danych, sprostowania, usunięcia, ograniczenia przetwarzania, sprzeciwu oraz przenoszenia danych. Możesz również wnieść skargę do właściwego organu nadzorczego.',
    securityTitle: '7. Bezpieczeństwo',
    securityText: 'Transmisja danych przez internet, w tym poczta e-mail, może mieć luki bezpieczeństwa. Stosujemy odpowiednie środki techniczne i organizacyjne, aby chronić dane osobowe tam, gdzie kontrolujemy przetwarzanie.',
    fontsTitle: '8. Fonty i media zewnętrzne',
    fontsText: 'Ta strona nie ładuje Google Fonts z serwerów Google. Fonty korzystają z lokalnych/systemowych stacków, a opcjonalne lokalne pliki fontów można dodać w assets/fonts/. Strona nie hotlinkuje zewnętrznych obrazów.',
    changesTitle: '9. Zmiany polityki',
    changesText: 'Możemy aktualizować tę Politykę prywatności, gdy zmieni się strona, usługi lub wymagania prawne. Aktualna wersja jest dostępna pod tym adresem.',
    updated: 'Ostatnia aktualizacja: 14.06.2026'
  }
};

translations.de = {
  ...translations.en,
  meta: {
    common: { ogLocale: 'de_DE', ogImageAlt: 'Marken-Platzhalter für die Medienvorschau von Exovision Games' },
    home: {
      title: 'Exovision Games - Unabhängiges Unreal-Engine-Studio aus Deutschland',
      description: 'Exovision Games ist ein unabhängiges deutsches Unreal-Engine-Studio mit Fokus auf mittelalterliche Welten, Strategie-RPG-Systeme, modulare Bausysteme und produktionsreife Assets.',
      ogTitle: 'Exovision Games - unabhängiges Unreal-Engine-Studio',
      ogDescription: 'Die Entwickler von ARKEM, einem mittelalterlichen Single-Player-Strategie-RPG, das sich derzeit in Entwicklung befindet.',
      twitterTitle: 'Exovision Games - unabhängiges Unreal-Engine-Studio',
      twitterDescription: 'Mittelalterliche Welten, Strategie-RPG-Systeme, modulares Bauen und produktionsreife Unreal-Engine-Assets.'
    },
    studio: {
      title: 'Studio - Exovision Games',
      description: 'Lerne Exovision Games kennen, ein kleines unabhängiges Unreal-Engine-Studio aus Deutschland, das ARKEM, Entwicklerwerkzeuge und produktionsnahe Assets entwickelt.',
      ogTitle: 'Studio - Exovision Games',
      ogDescription: 'Ein kleines deutsches Unreal-Engine-Studio mit Fokus auf mittelalterliche Welten, modulare Systeme und praktische Produktionswerkzeuge.',
      twitterTitle: 'Studio - Exovision Games',
      twitterDescription: 'Unabhängige Unreal-Engine-Entwicklung aus Deutschland: ARKEM, Tools, Assets und Strategie-RPG-Systeme.'
    },
    projects: {
      title: 'Projekte - Exovision Games | ARKEM und Unreal-Engine-Assets',
      description: 'Entdecke ARKEM, das mittelalterliche Single-Player-Strategie-RPG in Entwicklung, sowie Unreal-Engine-Tools, Marketplace Assets und Studio-Support.',
      ogTitle: 'Projekte - Exovision Games',
      ogDescription: 'ARKEM verbindet modulares Burgbauen, Siedlungsmanagement, RTS-Entscheidungen und Third-Person-Erkundung.',
      twitterTitle: 'Projekte - Exovision Games',
      twitterDescription: 'ARKEM, Unreal-Engine-Tools, Marketplace Assets und produktionsnaher Studio-Support.'
    },
    contact: {
      title: 'Kontakt - Exovision Games',
      description: 'Kontaktiere Exovision Games zu ARKEM, Unreal-Engine-Partnerschaften, Marketplace Assets, Presseanfragen oder allgemeinen Fragen.',
      ogTitle: 'Kontakt - Exovision Games',
      ogDescription: 'Erreiche Exovision Games per E-Mail, Discord oder Kontaktformular.',
      twitterTitle: 'Kontakt - Exovision Games',
      twitterDescription: 'Kontakt zu ARKEM, Partnerschaften, Assets oder Presse.'
    },
    press: {
      title: 'Press Kit - Exovision Games und ARKEM',
      description: 'Medienressourcen, Boilerplate, Factsheets und Asset-Hinweise für Exovision Games und ARKEM.',
      ogTitle: 'Press Kit - Exovision Games',
      ogDescription: 'Medienressourcen für Exovision Games und ARKEM, inklusive Studio-Boilerplate, ARKEM-Beschreibungen und Factsheets.',
      twitterTitle: 'Press Kit - Exovision Games',
      twitterDescription: 'Presseressourcen für Exovision Games und ARKEM.'
    },
    about: {
      title: 'Impressum - Exovision Games',
      description: 'Impressum und Anbieterkennzeichnung für Exovision Games / Exovision, betrieben von Florian Versteegen in Gleichen, Deutschland.',
      ogTitle: 'Impressum - Exovision Games',
      ogDescription: 'Rechtliche Anbieterinformationen für Exovision Games / Exovision.',
      twitterTitle: 'Impressum - Exovision Games',
      twitterDescription: 'Rechtliche Anbieterinformationen für Exovision Games / Exovision.'
    },
    privacy: {
      title: 'Datenschutzerklärung - Exovision Games',
      description: 'Datenschutzerklärung von Exovision Games: wie personenbezogene Daten auf dieser statischen Website und im Kontaktformular verarbeitet werden.',
      ogTitle: 'Datenschutzerklärung - Exovision Games',
      ogDescription: 'Wie Exovision Games personenbezogene Daten auf dieser statischen Website verarbeitet.',
      twitterTitle: 'Datenschutzerklärung - Exovision Games',
      twitterDescription: 'Wie Exovision Games personenbezogene Daten auf dieser statischen Website verarbeitet.'
    }
  },
  common: {
    ...translations.en.common,
    mainNavigation: 'Hauptnavigation',
    mobileNavigation: 'Mobile Navigation',
    language: 'Sprache',
    toggleMenu: 'Menü umschalten',
    footer: 'Seitenfuß',
    homeLogo: 'Exovision Games Startseite',
    nav: { home: 'Startseite', studio: 'Studio', projects: 'Projekte', arkem: 'ARKEM', contact: 'Kontakt' },
    footerBrand: 'Ein unabhängiges Unreal-Engine-Studio aus Deutschland mit Fokus auf mittelalterliche Welten, Strategie-RPG-Systeme und produktionsreife Assets.',
    footerNavigate: 'Navigation',
    footerResources: 'Ressourcen',
    footerConnect: 'Kontakt',
    footerArkem: 'ARKEM Website',
    studio: 'Studio',
    press: 'Press Kit',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    email: 'E-Mail',
    copyright: '&copy; 2026 Exovision Games / Exovision &middot; Florian Versteegen &middot; Gleichen, Deutschland',
    alts: {
      arkemHero: 'Lokaler Platzhalter für ARKEM Hero-Grafik',
      arkemShot1: 'ARKEM Screenshot-Platzhalter für modulares Burgbauen',
      arkemShot2: 'ARKEM Screenshot-Platzhalter für Siedlungsmanagement',
      arkemShot3: 'ARKEM Screenshot-Platzhalter für Third-Person-Erkundung',
      studioWorkshop: 'Lokaler Platzhalter für Studio-Workshop-Grafik',
      pressPreview: 'Lokaler Platzhalter für Press-Kit-Vorschau'
    },
    captions: {
      shot1: 'Bildslot für Burgbau. Ersetze ihn durch einen echten ARKEM-Screenshot, sobald finale Medien bereitstehen.',
      shot2: 'Bildslot für Siedlungsmanagement. Ersetze ihn durch einen echten ARKEM-Screenshot, sobald finale Medien bereitstehen.',
      shot3: 'Bildslot für Third-Person-Erkundung. Ersetze ihn durch einen echten ARKEM-Screenshot, sobald finale Medien bereitstehen.',
      studio: 'Studio-Grafik-Platzhalter. Durch freigegebenes lokales Produktionsartwork ersetzen.',
      press: 'Press-Kit-Platzhalter. Durch finale Pressematerialien ersetzen.'
    }
  },
  home: {
    heroAria: 'Hero-Bereich',
    eyebrow: 'Unabhängiges deutsches Unreal-Engine-Studio',
    title: 'Mittelalterliche Welten,<br><em>für Spiel gebaut</em>',
    sub: 'ARKEM &middot; Unreal-Engine-Tools &middot; Produktionsreife Assets',
    desc: 'Exovision Games ist ein kleines unabhängiges Studio aus Deutschland mit Fokus auf mittelalterliche Welten, Strategie-RPG-Systeme, modulare Bausysteme und praktische Unreal-Engine-Assets.',
    primaryCta: 'ARKEM ansehen',
    secondaryCta: 'Studio kennenlernen',
    forgeLabel: 'Studio-Fokus',
    forgeTitle: 'Was Exovision entwickelt',
    forgeIntro: 'Die Arbeit ist bewusst fokussiert: eigene Spiele, wiederverwendbare Unreal-Engine-Systeme und Assets, die reale Produktionsbedingungen berücksichtigen.',
    cards: {
      originalTitle: 'Eigene Spiele',
      originalText: 'ARKEM ist das Hauptprojekt: ein mittelalterliches Single-Player-Strategie-RPG, das sich derzeit in Entwicklung befindet.',
      systemsTitle: 'Modulare Systeme',
      systemsText: 'Burgbau, Siedlungsmanagement, Strategie-RPG-Loops und Gameplay-Systeme für glaubwürdige mittelalterliche Welten.',
      assetsTitle: 'Assets für Entwickler',
      assetsText: 'Produktionsnahe Unreal-Engine-Tools und marketplace-ready Assets für Entwickler, die praktische Umsetzung brauchen.'
    },
    arkemLabel: 'Hauptprojekt',
    arkemTagline: 'Mittelalterliches Strategie-RPG in Entwicklung',
    arkemDesc: 'ARKEM verbindet modulares Burgbauen, Siedlungsmanagement, Echtzeitstrategie-Entscheidungen und Third-Person-Erkundung. Eine öffentliche Demo wurde veröffentlicht, das Spiel kann auf Steam gewishlisted werden, und der vollständige Release-Termin wird noch bekanntgegeben.',
    arkemCta: 'ARKEM besuchen',
    servicesLabel: 'Für Studios & Partner',
    servicesTitle: 'Praktischer Unreal-Engine-Support',
    servicesIntro: 'Exovision Games unterstützt Unreal-Engine-Produktionen mit praktischer Umsetzung, Prototyping, Technical Art und produktionsnahen Tools.',
    offers: {
      gameplayTitle: 'Gameplay-Implementierung',
      gameplayText: 'Gameplay-Arbeit in Unreal Engine, Blueprint- und C++-Systeme, Interaktionsloops und Strategie/RPG-Mechaniken.',
      prototypeTitle: 'Prototyping & Optimierung',
      prototypeText: 'Fokussierte Prototypen, Performance-Checks und produktionsbewusste Iteration.',
      artTitle: 'Technical Art & Assets',
      artText: 'Integrationssupport, marketplace-ready Assets und Beratung zu mittelalterlichen, Strategie- oder RPG-Systemen.'
    },
    processTitle: 'Zusammenarbeitsprozess',
    processIntro: 'Ein kompakter Prozess für fokussierten Produktionssupport.',
    process: {
      oneTitle: 'Erster Kontakt',
      oneText: 'Projekt, Problem und groben Zeitrahmen schildern.',
      twoTitle: 'Scope klären',
      twoText: 'Praktisches Ziel, Grenzen und Lieferform definieren.',
      threeTitle: 'Prototyp oder Umsetzung',
      threeText: 'Feature, Tool, Asset oder Proof of Concept wird umgesetzt.',
      fourTitle: 'Lieferung und Support',
      fourText: 'Saubere Übergabe und Integrationssupport, wenn nötig.'
    },
    partnerCta: 'Zusammenarbeit starten',
    ctaTitle: 'Brauchst du fokussierte Unreal-Engine-Hilfe?',
    ctaText: 'Für ARKEM-Fragen, Studio-Partnerschaften, Marketplace Assets oder Presse kontaktiere Exovision Games direkt.',
    ctaButton: 'Kontakt aufnehmen'
  },
  studio: {
    label: 'Studio',
    title: 'Ein unabhängiges Unreal-Engine-Studio aus Deutschland',
    intro: 'Exovision Games entwickelt mittelalterliche Welten, Systeme, Tools und Assets in Unreal Engine mit kleinem Studiofokus auf glaubwürdiges Spiel und praktische Produktion.',
    whoTitle: 'Wer wir sind',
    whoText: 'Exovision Games / Exovision ist ein kleines unabhängiges deutsches Studio unter der Leitung von Florian Versteegen. Das Hauptprojekt ist ARKEM, während die breitere Arbeit Unreal Engine, mittelalterliche Welten und produktionsreife Tools umfasst.',
    buildTitle: 'Was wir bauen',
    buildIntro: 'Ein fokussierter Arbeitsbereich hält das Studio praktisch und geerdet.',
    build: {
      gamesTitle: 'Eigene Spiele',
      gamesText: 'ARKEM ist das Hauptprojekt: ein mittelalterliches Single-Player-Strategie-RPG in Entwicklung.',
      toolsTitle: 'Unreal-Engine-Tools',
      toolsText: 'Modulare Bau-Workflows, Gameplay-Systeme und Produktionshelfer für echte Umsetzung.',
      assetsTitle: 'Marketplace Assets',
      assetsText: 'Produktionsnahe Assets und Utilities für Entwickler, die spielbare Welten bauen.',
      systemsTitle: 'Technical Art und Gameplay-Systeme',
      systemsText: 'Integrationsfokussierte Technical Art, Blueprint/C++-Systeme und Strategie-RPG-Mechaniken.'
    },
    approachTitle: 'Unser Ansatz',
    approachText: 'Das Studio bevorzugt glaubwürdige mittelalterliche Welten, modulare Systeme, praktische Produktionswerkzeuge und gameplay-first Design statt übergroßer Versprechen.',
    factsTitle: 'Studio-Fakten',
    facts: {
      locationLabel: 'Standort',
      locationValue: 'Gleichen, Deutschland',
      engineLabel: 'Engine',
      engineValue: 'Unreal Engine',
      projectLabel: 'Hauptprojekt',
      projectValue: 'ARKEM',
      focusLabel: 'Fokus',
      focusValue: 'Mittelalterliche Strategie-RPG-Systeme, modulares Bauen und Entwicklerwerkzeuge'
    },
    ctaTitle: 'Arbeit verfolgen',
    ctaText: 'Besuche ARKEM für das Spiel oder kontaktiere Exovision Games für Studio- und Produktionsanfragen.',
    visitArkem: 'ARKEM besuchen',
    contact: 'Exovision Games kontaktieren'
  },
  projects: {
    label: 'Projekte',
    title: 'ARKEM und Unreal-Engine-Produktionsarbeit',
    intro: 'Exovision Games konzentriert sich auf ARKEM und einen fokussierten Satz an Unreal-Engine-Tools, Assets und Support für Entwickler.',
    overviewLabel: 'ARKEM Überblick',
    overviewTitle: 'Ein mittelalterliches Single-Player-Strategie-RPG',
    overviewText: 'ARKEM verbindet modulares Burgbauen, Siedlungsmanagement, Echtzeitstrategie-Entscheidungen und Third-Person-Erkundung in einer mittelalterlich inspirierten Welt.',
    pillarsTitle: 'Gameplay-Säulen',
    pillars: {
      buildTitle: 'Bauen',
      buildText: 'Modulare Burgkonstruktion und Siedlungslayout als Kern des langfristigen Spiels.',
      ruleTitle: 'Verwalten',
      ruleText: 'Siedlungsmanagement, Ressourcen und Wachstumsentscheidungen über Zeit.',
      defendTitle: 'Verteidigen',
      defendText: 'Truppen, Bedrohungen und Burgverteidigung verbunden mit strategischen Entscheidungen.',
      exploreTitle: 'Erkunden',
      exploreText: 'Third-Person-Bewegung, Quests, NPCs und Welterkundung.'
    },
    statusTitle: 'Entwicklungsstand',
    statusText: 'ARKEM befindet sich derzeit in Entwicklung. Eine öffentliche Demo wurde veröffentlicht, das Spiel kann auf Steam gewishlisted werden, und der vollständige Release-Termin wird noch bekanntgegeben.',
    distinctTitle: 'Was ARKEM unterscheidet',
    distinctText: 'ARKEM wechselt zwischen breiter strategischer Kontrolle und direkter Third-Person-Präsenz, wobei Burg- und Siedlungsentwicklung im Zentrum stehen. Es kombiniert RTS-, RPG- und City-Building-Ideen, ohne eine fertige Vollversion vorzeitig zu behaupten.',
    galleryTitle: 'Screenshot-Galerie',
    galleryIntro: 'Die Galerie ist für lokale ARKEM-Screenshots vorbereitet. Aktuelle Bilder sind Platzhalter, bis finale Medien ergänzt werden.',
    visitArkem: 'ARKEM Website besuchen',
    wishlist: 'Auf Steam wünschen',
    joinDiscord: 'Discord beitreten',
    partnersTitle: 'Für Studios & Partner',
    partnersIntro: 'Exovision Games unterstützt Unreal-Engine-Produktionen mit praktischer Umsetzung, Prototyping, Technical Art und produktionsnahen Tools.',
    partnerItems: {
      gameplay: 'Unreal-Engine-Gameplay-Implementierung',
      blueprints: 'Blueprint- und C++-Systeme',
      prototyping: 'Prototyping',
      performance: 'Performance-Optimierung',
      techArt: 'Technical-Art-Integration',
      assets: 'Marketplace-ready Assets',
      consulting: 'Beratung zu mittelalterlichen, Strategie- und RPG-Systemen'
    },
    processTitle: 'Wie Zusammenarbeit funktioniert',
    processIntro: 'Kleiner Scope, klare Ergebnisse und produktionsbewusste Lieferung.',
    startCollab: 'Zusammenarbeit starten',
    marketplaceTitle: 'Marketplace und Tools',
    marketplaceText: 'Als Unreal-Engine-Nutzer entwickelt Exovision Games Assets und Utilities mit praktischen Pipelines im Blick: Tools, die länger bestehen sollen als eine Demoszene.'
  },
  contact: {
    pageLabel: 'Kontakt',
    title: 'Exovision Games kontaktieren',
    intro: 'Sende eine fokussierte Nachricht zu ARKEM, Partnerschaften, Marketplace Assets oder Presse. Wenn der Formular-Endpoint noch nicht konfiguriert ist, schreibe bitte direkt per E-Mail.',
    sectionAria: 'Kontaktformular und Details',
    asideAria: 'Alternative Kontaktmöglichkeiten',
    formTitle: 'Nachricht senden',
    form: {
      nameLabel: 'Dein Name <span class="required-mark">*</span>',
      namePlaceholder: 'Dein Name',
      emailLabel: 'E-Mail-Adresse <span class="required-mark">*</span>',
      emailPlaceholder: 'du@example.com',
      topicLabel: 'Thema <span class="required-mark">*</span>',
      topicPlaceholder: 'Thema wählen',
      topics: { arkem: 'ARKEM', partnership: 'Partnerschaft', marketplace: 'Marketplace Assets', press: 'Presse', other: 'Sonstiges' },
      subjectLabel: 'Betreff',
      subjectPlaceholder: 'Kurze Zusammenfassung',
      messageLabel: 'Nachricht <span class="required-mark">*</span>',
      messagePlaceholder: 'Beschreibe, was du brauchst, mit hilfreichem Kontext und Links, falls relevant.',
      consentLabel: 'Ich stimme zu, dass Exovision Games diese Informationen zur Beantwortung meiner Anfrage verarbeitet. Es gilt die <a href="/privacy/">Datenschutzerklärung</a>. <span class="required-mark">*</span>',
      note: 'Das Kontaktformular ist statisch und benötigt einen konfigurierten Endpoint. Du kannst jederzeit direkt an <a href="mailto:info@exovision.de">info@exovision.de</a> schreiben.',
      submit: 'Nachricht senden',
      mailto: 'Direkt mailen',
      messages: {
        sending: 'Wird gesendet...',
        success: 'Deine Nachricht wurde gesendet. Wir antworten so bald wie möglich.',
        error: 'Etwas ist schiefgelaufen. Bitte versuche es erneut oder schreibe direkt per E-Mail.',
        notConfigured: 'Das Kontaktformular ist noch nicht konfiguriert. Bitte schreibe direkt an info@exovision.de.',
        required: 'Bitte fülle alle Pflichtfelder aus.',
        email: 'Bitte gib eine gültige E-Mail-Adresse ein.',
        consent: 'Bitte bestätige den Datenschutzhinweis vor dem Senden.',
        spam: 'Die Nachricht konnte nicht angenommen werden. Bitte schreibe direkt per E-Mail.'
      }
    },
    directTitle: 'Direkter Kontakt',
    emailLabel: 'E-Mail',
    discordLabel: 'Discord',
    discordCta: 'Community beitreten',
    addressTitle: 'Rechtliche Adresse',
    address: 'Florian Versteegen<br>Exovision Games / Exovision<br>Obere Str. 14<br>37130 Gleichen<br>Deutschland',
    followTitle: 'ARKEM',
    followText: 'Spielspezifische Informationen stehen auf der separaten ARKEM Website.',
    arkemCta: 'ARKEM Website'
  },
  press: {
    label: 'Press Kit',
    title: 'Medienressourcen für Exovision Games und ARKEM',
    intro: 'Diese Seite sammelt sichere Boilerplate-Texte, ARKEM-Beschreibungen, Fakten und Asset-Hinweise für Presse- oder Creator-Anfragen.',
    boilerplateTitle: 'Studio-Boilerplate',
    shortLabel: 'Kurzversion',
    studioShort: 'Exovision Games / Exovision ist ein unabhängiges deutsches Unreal-Engine-Studio mit Fokus auf mittelalterliche Welten, Strategie-RPG-Systeme, modulare Bausysteme und produktionsreife Assets.',
    extendedLabel: 'Erweiterte Version',
    studioExtended: 'Exovision Games ist ein kleines unabhängiges Studio aus Gleichen, Deutschland. Das Hauptprojekt ist ARKEM; die breitere Studioarbeit umfasst Unreal-Engine-Tools, Technical Art, Gameplay-Systeme und produktionsnahe Marketplace Assets für Entwickler.',
    arkemTitle: 'ARKEM Beschreibung',
    arkemShort: 'ARKEM ist ein mittelalterliches Single-Player-Strategie-RPG, das modulares Burgbauen, Siedlungsmanagement, Echtzeitstrategie-Entscheidungen und Third-Person-Erkundung verbindet.',
    arkemExtended: 'ARKEM befindet sich derzeit in Entwicklung. Das Projekt dreht sich um Burg- und Siedlungsentwicklung, den Wechsel von breiter strategischer Kontrolle zu direkter Third-Person-Präsenz und eine mittelalterlich inspirierte Welt aus RPG-, RTS- und City-Building-Systemen. Eine öffentliche Demo wurde veröffentlicht, das Spiel kann auf Steam gewishlisted werden, und der vollständige Release-Termin wird noch bekanntgegeben.',
    factsheetTitle: 'Factsheet',
    assetsTitle: 'Assets',
    assetsText: 'Finale Pressedateien sollten in assets/images/ abgelegt werden. Aktuelle Bilder sind lokale Platzhalter und müssen durch freigegebene Logos, OG Image, ARKEM-Screenshots und press-kit-preview ersetzt werden.',
    contactTitle: 'Pressekontakt',
    contactText: 'Für Medienfragen kontaktiere Exovision Games direkt per E-Mail oder besuche die separate ARKEM Website.',
    fact: {
      studio: 'Studio',
      studioValue: 'Exovision Games / Exovision',
      location: 'Standort',
      locationValue: 'Gleichen, Deutschland',
      project: 'Hauptprojekt',
      projectValue: 'ARKEM',
      engine: 'Engine',
      engineValue: 'Unreal Engine',
      genre: 'Genre',
      genreValue: 'Mittelalterliches Strategie-RPG / City-Building / Third-Person-RPG',
      status: 'Status',
      statusValue: 'In Entwicklung',
      contact: 'Kontakt',
      contactValue: 'info@exovision.de'
    }
  },
  about: {
    pageLabel: 'Rechtliches',
    title: 'Impressum',
    providerTitle: 'Anbieterkennzeichnung',
    providerText: 'Florian Versteegen<br>Exovision Games / Exovision<br>Obere Str. 14<br>37130 Gleichen<br>Deutschland',
    contactTitle: 'Kontakt',
    contactText: 'E-Mail: <a href="mailto:info@exovision.de">info@exovision.de</a>',
    responsibleTitle: 'Inhaltlich verantwortlich',
    responsibleText: 'Verantwortlich im Sinne des &sect; 18 Abs. 2 MStV: Florian Versteegen, Anschrift wie oben.',
    liabilityContentTitle: 'Haftung für Inhalte',
    liabilityContentText: 'Wir bemühen uns, die Inhalte dieser Website sorgfältig und aktuell zu halten. Für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir nach den allgemeinen Gesetzen für eigene Inhalte verantwortlich.',
    liabilityLinksTitle: 'Haftung für Links',
    liabilityLinksText: 'Diese Website kann Links zu externen Websites Dritter enthalten. Auf deren Inhalte haben wir keinen Einfluss und können daher keine Haftung dafür übernehmen. Sollten uns Rechtsverletzungen bekannt werden, entfernen wir entsprechende Links unverzüglich.',
    copyrightTitle: 'Urheberrecht',
    copyrightText: 'Die auf dieser Website erstellten Inhalte und Werke unterliegen, soweit nicht anders gekennzeichnet, dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Nutzung außerhalb der Grenzen des Urheberrechts bedürfen der vorherigen schriftlichen Zustimmung.',
    dataProtectionTitle: 'Datenschutz',
    dataProtectionText: 'Soweit auf dieser Website personenbezogene Daten erhoben werden, geschieht dies soweit möglich auf freiwilliger Basis. Details stehen in unserer <a href="/privacy/">Datenschutzerklärung</a>.'
  },
  privacy: {
    pageLabel: 'Datenschutz',
    title: 'Datenschutzerklärung',
    controllerTitle: '1. Verantwortlicher',
    controllerText: 'Florian Versteegen &middot; Exovision Games / Exovision<br>Obere Str. 14, 37130 Gleichen, Deutschland<br>E-Mail: <a href="mailto:info@exovision.de">info@exovision.de</a>',
    collectedTitle: '2. Welche Daten wir erheben',
    collectedText: 'Diese statische Website kann grundsätzlich ohne Übermittlung personenbezogener Daten genutzt werden. Wenn du uns kontaktierst, verarbeiten wir die von dir angegebenen Informationen wie Name, E-Mail-Adresse, Thema, Betreff und Nachrichteninhalt, um deine Anfrage zu beantworten.',
    formTitle: '3. Kontaktformular',
    formText: 'Das Kontaktformular sendet Daten nur, wenn ein echter Endpoint konfiguriert ist. Bis dahin weist das Formular auf den direkten E-Mail-Kontakt hin. Ein verstecktes Honeypot-Feld hilft, automatisierten Spam zu reduzieren.',
    purposeTitle: '4. Zweck und Rechtsgrundlage',
    purposeText: 'Kontaktdaten werden verarbeitet, um Anfragen zu beantworten und geschäftliche Kommunikation zu ermöglichen. Je nach Kontext erfolgt die Verarbeitung auf Grundlage berechtigter Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO oder einer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.',
    retentionTitle: '5. Speicherdauer',
    retentionText: 'Kontaktdaten werden nur so lange gespeichert, wie es zur Bearbeitung der Anfrage erforderlich ist, sofern keine gesetzlichen Aufbewahrungspflichten eine längere Speicherung verlangen.',
    rightsTitle: '6. Deine Rechte',
    rightsText: 'Nach der DSGVO hast du insbesondere Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch und Datenübertragbarkeit. Zudem besteht ein Beschwerderecht bei einer zuständigen Aufsichtsbehörde.',
    securityTitle: '7. Sicherheit',
    securityText: 'Die Datenübertragung im Internet, etwa per E-Mail, kann Sicherheitslücken aufweisen. Wir setzen angemessene technische und organisatorische Maßnahmen ein, um personenbezogene Daten dort zu schützen, wo wir die Verarbeitung kontrollieren.',
    fontsTitle: '8. Schriftarten und externe Medien',
    fontsText: 'Diese Website lädt keine Google Fonts von Google-Servern. Schriftarten verwenden lokale/System-Font-Stacks, und optionale lokale Fontdateien können unter assets/fonts/ ergänzt werden. Die Website hotlinkt keine externen Bilder.',
    changesTitle: '9. Änderungen',
    changesText: 'Wir können diese Datenschutzerklärung anpassen, wenn sich Website, Dienste oder rechtliche Anforderungen ändern. Die aktuelle Version ist stets unter dieser URL abrufbar.',
    updated: 'Stand: 14.06.2026'
  }
};

const getTranslation = (lang, key) => {
  const read = (source) => key.split('.').reduce((value, part) => (
    value && Object.prototype.hasOwnProperty.call(value, part) ? value[part] : undefined
  ), source);

  return read(translations[lang]) ?? read(translations.en) ?? '';
};

const languageCode = (lang) => String(lang || '').toLowerCase().slice(0, 2);

const normalizeLanguage = (lang) => {
  const code = languageCode(lang);
  return SUPPORTED_LANGUAGES.includes(code) ? code : 'en';
};

const getQueryLanguage = () => {
  const params = new URLSearchParams(window.location.search);
  const lang = languageCode(params.get('lang'));
  return SUPPORTED_LANGUAGES.includes(lang) ? lang : '';
};

const getCurrentLanguage = () => normalizeLanguage(document.documentElement.lang);

const detectInitialLanguage = () => {
  const queryLang = getQueryLanguage();
  if (queryLang) return queryLang;

  try {
    const stored = localStorage.getItem(SITE_LANGUAGE_KEY);
    if (SUPPORTED_LANGUAGES.includes(stored)) {
      return stored;
    }
  } catch (error) {
    // Storage can be unavailable in private browsing.
  }

  const browserLanguages = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language];

  const browserMatch = browserLanguages
    .map(languageCode)
    .find((lang) => SUPPORTED_LANGUAGES.includes(lang));

  return browserMatch || 'en';
};

const updateLanguageUrl = (lang) => {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`);
};

const applyTranslations = (lang) => {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = getTranslation(lang, element.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = getTranslation(lang, element.dataset.i18nHtml);
  });

  document.querySelectorAll('[data-i18n-content]').forEach((element) => {
    element.setAttribute('content', getTranslation(lang, element.dataset.i18nContent));
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    element.setAttribute('alt', getTranslation(lang, element.dataset.i18nAlt));
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
    element.setAttribute('aria-label', getTranslation(lang, element.dataset.i18nAriaLabel));
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.setAttribute('placeholder', getTranslation(lang, element.dataset.i18nPlaceholder));
  });

  const title = document.querySelector('title[data-i18n]');
  if (title) {
    document.title = title.textContent;
  }

  document.querySelectorAll('.lang-switcher button[data-lang]').forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
};

const setLanguage = (lang, options = {}) => {
  const normalized = normalizeLanguage(lang);
  applyTranslations(normalized);

  if (options.persist) {
    try {
      localStorage.setItem(SITE_LANGUAGE_KEY, normalized);
    } catch (error) {
      // The language still changes for this page view.
    }
  }

  if (options.updateUrl) {
    updateLanguageUrl(normalized);
  }
};

(function initLanguageSwitcher() {
  document.querySelectorAll('.lang-switcher button[data-lang]').forEach((button) => {
    button.addEventListener('click', () => {
      setLanguage(button.dataset.lang, { persist: true, updateUrl: true });
    });
  });

  setLanguage(detectInitialLanguage());
})();

(function initNavScroll() {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

(function initMobileMenu() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    toggle.classList.toggle('open', open);
    menu.classList.toggle('open', open);
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  menu.querySelectorAll('a, button[data-lang]').forEach((control) => {
    control.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
})();

(function markActiveNavigation() {
  const normalizePath = (href) => {
    const url = new URL(href, window.location.href);
    let path = url.pathname.replace(/\/index\.html$/, '/');
    if (path.length > 1) path = path.replace(/\/$/, '');
    return path || '/';
  };

  const current = normalizePath(window.location.href);
  document.querySelectorAll('a[data-nav]').forEach((link) => {
    const active = normalizePath(link.getAttribute('href')) === current;
    link.classList.toggle('active', active);
    if (active) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
})();

(function initReveals() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach((el) => observer.observe(el));
})();

(function loadManagedImages() {
  document.querySelectorAll('img[data-real-src]').forEach((img) => {
    const realSrc = img.dataset.realSrc;
    const fallbackSrc = img.dataset.fallbackSrc;
    if (!realSrc || !fallbackSrc) return;

    const probe = new Image();
    probe.onload = () => {
      img.src = realSrc;
    };
    probe.onerror = () => {
      img.src = fallbackSrc;
    };
    probe.src = realSrc;
  });

  document.querySelectorAll('[data-real-bg]').forEach((element) => {
    const realSrc = element.dataset.realBg;
    if (!realSrc) return;

    const probe = new Image();
    probe.onload = () => {
      element.style.backgroundImage = `linear-gradient(180deg, rgba(13, 11, 9, 0.35), rgba(13, 11, 9, 0.82)), url("${realSrc}")`;
    };
    probe.src = realSrc;
  });
})();

(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const success = document.getElementById('form-success');
  const error = document.getElementById('form-error');
  const button = form.querySelector('button[type="submit"]');
  const mailtoLink = document.getElementById('form-mailto');

  const isEndpointConfigured = () => (
    CONTACT_ENDPOINT &&
    CONTACT_ENDPOINT !== 'REPLACE_WITH_YOUR_ENDPOINT' &&
    !CONTACT_ENDPOINT.includes('YOUR_ENDPOINT')
  );

  const message = (key) => getTranslation(getCurrentLanguage(), `contact.form.messages.${key}`);
  const submitLabel = () => getTranslation(getCurrentLanguage(), 'contact.form.submit');

  const showMessage = (element, text) => {
    if (!element) return;
    element.textContent = text;
    element.classList.add('visible');
  };

  const hideMessages = () => {
    success?.classList.remove('visible');
    error?.classList.remove('visible');
  };

  const setInvalid = (field, invalid) => {
    if (!field) return;
    field.setAttribute('aria-invalid', String(invalid));
  };

  const updateMailto = () => {
    if (!mailtoLink) return;
    const data = Object.fromEntries(new FormData(form).entries());
    const subject = encodeURIComponent(data.subject || data.topic || 'Contact');
    const body = encodeURIComponent(`${data.message || ''}\n\n${data.name || ''}\n${data.email || ''}`);
    mailtoLink.href = `mailto:info@exovision.de?subject=${subject}&body=${body}`;
  };

  const validate = () => {
    const name = form.elements.name;
    const email = form.elements.email;
    const topic = form.elements.topic;
    const messageField = form.elements.message;
    const consent = form.elements.privacyConsent;
    const website = form.elements.website;

    [name, email, topic, messageField, consent].forEach((field) => setInvalid(field, false));

    if (website?.value) {
      return { ok: false, text: message('spam'), focus: null };
    }

    if (!name?.value.trim() || !topic?.value || !messageField?.value.trim()) {
      [name, topic, messageField].forEach((field) => setInvalid(field, !field?.value.trim()));
      return { ok: false, text: message('required'), focus: name };
    }

    const emailValue = email?.value.trim() || '';
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    if (!emailOk) {
      setInvalid(email, true);
      return { ok: false, text: message('email'), focus: email };
    }

    if (!consent?.checked) {
      setInvalid(consent, true);
      return { ok: false, text: message('consent'), focus: consent };
    }

    return { ok: true };
  };

  form.addEventListener('input', () => {
    hideMessages();
    updateMailto();
  });

  form.addEventListener('change', updateMailto);
  updateMailto();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    hideMessages();

    const result = validate();
    if (!result.ok) {
      showMessage(error, result.text);
      result.focus?.focus();
      return;
    }

    if (!isEndpointConfigured()) {
      updateMailto();
      showMessage(error, message('notConfigured'));
      return;
    }

    if (button) {
      button.disabled = true;
      button.textContent = message('sending');
    }

    try {
      const payload = Object.fromEntries(new FormData(form).entries());
      delete payload.website;
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Contact endpoint returned ${response.status}`);
      }

      form.reset();
      updateMailto();
      showMessage(success, message('success'));
    } catch (sendError) {
      showMessage(error, message('error'));
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = submitLabel();
      }
    }
  });
})();

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    event.preventDefault();
    const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 72;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
