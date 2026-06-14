# Exovision Games - Website

Statyczna strona HTML/CSS/JS dla Exovision Games, przygotowana pod GitHub Pages i domenę:

```txt
https://encyklopediasredniowiecza.pl/
```

Plik `CNAME` musi zawierać dokładnie:

```txt
encyklopediasredniowiecza.pl
```

Strona gry ARKEM działa osobno jako zewnętrzna subdomena:

```txt
https://arkem.encyklopediasredniowiecza.pl/
```

## Struktura

Aktywne ścieżki strony:

```txt
/
/studio/
/projects/
/contact/
/press/
/about/
/privacy/
```

Rola stron:

- `/` - strona główna studia i skrót oferty.
- `/studio/` - informacje o Exovision Games / Exovision.
- `/projects/` - ARKEM, gameplay pillars, assety, narzędzia i współpraca.
- `/contact/` - formularz kontaktowy, email, Discord i adres prawny.
- `/press/` - press kit: boilerplate, factsheet, opis ARKEM i lista assetów.
- `/about/` - imprint / legal notice.
- `/privacy/` - polityka prywatności.

Nie ma osobnych folderów językowych `/pl/` i `/de/`. Tłumaczenia działają w przeglądarce przez JavaScript.

## Tłumaczenia i `?lang=`

Tłumaczenia EN / PL / DE znajdują się w `js/main.js` w obiekcie `translations`.

Obsługiwane są atrybuty:

```txt
data-i18n
data-i18n-html
data-i18n-content
data-i18n-alt
data-i18n-aria-label
data-i18n-placeholder
```

Priorytet wyboru języka:

1. Parametr URL `?lang=en`, `?lang=pl` albo `?lang=de`.
2. Wartość `localStorage` pod kluczem `site-language`.
3. Język przeglądarki.
4. Fallback `en`.

Przykłady:

```txt
https://encyklopediasredniowiecza.pl/?lang=pl
https://encyklopediasredniowiecza.pl/projects/?lang=de
```

Kliknięcie przełącznika `EN | PL | DE` zapisuje wybór w `localStorage` i aktualizuje parametr `?lang=` bez przeładowania strony.

## Formularz kontaktowy

Repozytorium nie zawiera backendu. Endpoint ustawia się w `js/main.js`:

```js
const CONTACT_ENDPOINT = 'REPLACE_WITH_YOUR_ENDPOINT';
```

Dopóki endpoint nie jest skonfigurowany, formularz:

- waliduje pola po stronie przeglądarki,
- sprawdza honeypot `website`,
- wymaga zgody na przetwarzanie danych,
- nie udaje wysłania wiadomości,
- pokazuje komunikat o braku konfiguracji,
- udostępnia link `mailto:info@exovision.de`.

Po ustawieniu prawdziwego endpointu formularz wysyła JSON metodą `POST`.

## Fonty

Strona nie ładuje Google Fonts ani `fonts.gstatic.com`. CSS korzysta z lokalnych/systemowych fontów.

Opcjonalne lokalne fonty można dodać do:

```txt
assets/fonts/
```

Przykładowe nazwy, jeżeli w przyszłości mają zostać użyte:

```txt
assets/fonts/Cinzel-Regular.woff2
assets/fonts/Cinzel-SemiBold.woff2
assets/fonts/CinzelDecorative-Bold.woff2
assets/fonts/CrimsonPro-Regular.woff2
```

Po dodaniu realnych plików można aktywować `@font-face` w `css/style.css`.

## Assets

Aktualnie repozytorium zawiera lokalne placeholdery SVG w:

```txt
assets/images/placeholders/
```

To nie są finalne screenshoty ani materiały prasowe. Przed publikacją realnych materiałów należy ręcznie podmienić lub dodać:

```txt
assets/images/og-image.jpg
assets/images/arkem-hero.jpg
assets/images/arkem-screenshot-1.jpg
assets/images/arkem-screenshot-2.jpg
assets/images/arkem-screenshot-3.jpg
assets/images/studio-workshop.jpg
assets/images/press-kit-preview.jpg
```

Strona nie hotlinkuje obrazów z zewnętrznych domen. Elementy z `data-real-src` i `data-real-bg` próbują użyć lokalnego realnego assetu, a gdy go nie ma, zostają przy lokalnym placeholderze.

## SEO

Canonical URL-e wskazują wyłącznie aktywne adresy:

```txt
https://encyklopediasredniowiecza.pl/
https://encyklopediasredniowiecza.pl/studio/
https://encyklopediasredniowiecza.pl/projects/
https://encyklopediasredniowiecza.pl/contact/
https://encyklopediasredniowiecza.pl/press/
https://encyklopediasredniowiecza.pl/about/
https://encyklopediasredniowiecza.pl/privacy/
```

`sitemap.xml` zawiera 7 adresów. `robots.txt` wskazuje:

```txt
https://encyklopediasredniowiecza.pl/sitemap.xml
```

## Checklist przed publikacją

- Sprawdź, czy `CNAME` zawiera tylko `encyklopediasredniowiecza.pl`.
- Sprawdź, czy nie ma aktywnych katalogów ani linków do `/pl/` lub `/de/`.
- Sprawdź, czy wszystkie linki ARKEM prowadzą do `https://arkem.encyklopediasredniowiecza.pl/`.
- Sprawdź `?lang=en`, `?lang=pl`, `?lang=de` na każdej stronie.
- Przetestuj zapis języka w `localStorage`.
- Przetestuj zmianę `document.title` i meta description po zmianie języka.
- Skonfiguruj `CONTACT_ENDPOINT` albo zostaw komunikat o braku konfiguracji.
- Dodaj finalne obrazy w `assets/images/`.
- Po dodaniu realnych grafik zaktualizuj social preview, jeśli placeholder SVG nie ma być publicznym OG image.
