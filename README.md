# Colegiul Național „A. T. Laurian” Botoșani
## Specializarea Matematică-Informatică, Intensiv Engleză

<br><br><br>

# Lucrare de atestat profesional la informatică

<br><br><br><br><br>

**Profesor coordonator:**  
GIOCAȘ CARMEN AFRODITA

**Nume candidat:**  
COJOCARIU DAVID

<br><br><br>

**Tema lucrării:**  
# Wave — Platformă Premium de Închirieri Auto

<br><br><br><br><br>

---

## Cuprins

1. **Argument** .................................................... pag 2
2. **Introducere** .................................................. pag 3
3. **Tehnologii utilizate** ......................................... pag 4
    * 3.1 HTML5 ................................................. pag 4
    * 3.2 CSS3 și Design Modern ................................. pag 5
    * 3.3 JavaScript și Interactivitate .......................... pag 6
4. **Cerințe hardware și software** ................................. pag 7
5. **Structura și conținutul proiectului** .......................... pag 8
    * 5.1 Interfața și Navigarea ................................ pag 8
    * 5.2 Flota Dinamică (Integrare API) ........................ pag 9
    * 5.3 Sistemul Dark Mode .................................... pag 10
    * 5.4 Formularul de Rezervare ............................... pag 11
6. **Concluzii** .................................................... pag 12
7. **Bibliografie** ................................................. pag 13

---

## 1. Argument

Am ales ca temă de studiu pentru lucrarea mea de atestat dezvoltarea unei platforme de închirieri auto moderne, intitulată **Wave**, deoarece mobilitatea reprezintă o necesitate esențială în societatea contemporană. În contextul actual, utilizatorii caută soluții rapide, sigure și, mai ales, o experiență digitală premium care să le permită accesul la informații într-un mod intuitiv.

Proiectul meu își propune să demonstreze cum tehnologiile web fundamentale (HTML, CSS, JavaScript) pot fi utilizate pentru a crea o aplicație web complexă, care nu doar arată impecabil din punct de vedere vizual (urmând tendințele actuale de *glassmorphism* și *dark mode*), dar este și complet funcțională. Am pus un accent deosebit pe integrarea unor surse de date externe (API-uri) pentru a oferi o experiență dinamică, simulând un mediu real de producție.

---

## 2. Introducere

Lucrarea de față prezintă platforma **Wave**, un site de închirieri auto de lux care pune la dispoziția utilizatorilor o flotă diversificată de vehicule. Aplicația este structurată sub forma unei pagini de tip *Single Page Application* (SPA) cu secțiuni distincte, oferind o navigare fluidă.

Principalele caracteristici ale proiectului sunt:
* **Design Responsive**: Adaptabilitate completă pe dispozitive mobile, tablete și desktop.
* **Dark Mode Dinamic**: Posibilitatea de a comuta între teme vizuale cu salvarea preferinței utilizatorului.
* **Generare Dinamică**: Flota de mașini este generată automat dintr-o bază de date internă și îmbogățită cu imagini reale via Imagin Studio API.
* **Formular de Rezervare Multi-step**: Un proces complex de colectare a datelor, validat în timp real pentru a asigura corectitudinea informațiilor.

---

## 3. Tehnologii utilizate

### 3.1 HTML5
Am utilizat HTML5 pentru a defini structura semantică a paginii. Elementele precum `<header>`, `<section>`, `<footer>` și `<nav>` asigură o ierarhie corectă a informațiilor, esențială atât pentru accesibilitate, cât și pentru optimizarea SEO.

### 3.2 CSS3 și Design Modern
Pentru stilizarea aplicației am folosit exclusiv Vanilla CSS, implementând concepte avansate:
* **Variabile CSS (Custom Properties)**: Utilizate pentru a gestiona culorile temelor (Light/Dark) într-un mod centralizat.
* **Flexbox și CSS Grid**: Pentru realizarea layout-urilor complexe și a grilei de mașini.
* **Animații și Tranziții**: Utilizarea `Intersection Observer API` pentru a declanșa animații de tip *fade-in* și *slide-up* pe măsură ce utilizatorul scanează pagina.
* **Efecte de Glassmorphism**: Utilizarea `backdrop-filter: blur()` pentru elementele de interfață moderne.

### 3.3 JavaScript (ES6+)
JavaScript constituie „motorul” proiectului, fiind responsabil pentru:
* **Integrare API**: Apelarea serviciului Imagin Studio pentru a prelua poze transparente ale mașinilor în funcție de marcă și model.
* **Gestionarea Stării (State Management)**: Salvarea temei alese de utilizator și a comenzilor efectuate în `localStorage`.
* **Validare Formular**: Logica de verificare a datelor introduse (CNP, Email, Telefon) înainte de trimiterea comenzii.

---

## 4. Cerințe hardware și software

**Hardware:**
* Procesor: Minim 1GHz.
* Memorie RAM: Minim 512MB.
* Spațiu de stocare: Neglijabil (aplicație client-side).

**Software:**
* Sistem de operare: Windows, macOS, Linux, Android sau iOS.
* Browser: Orice browser modern (Chrome, Firefox, Edge, Safari) cu suport pentru JavaScript ES6 și CSS Variables.
* Pentru dezvoltare: Visual Studio Code și un server local (Live Server).

---

## 5. Structura și conținutul proiectului

### 5.1 Interfața și Navigarea
Site-ul folosește un meniu „lipit” (*sticky navbar*) care își schimbă aspectul la scroll. Navigarea se face prin *smooth scroll* către secțiunile: Acasă, Despre Noi, Flotă, Servicii și Contact.

### 5.2 Flota Dinamică
În secțiunea „Flotă”, mașinile sunt injectate în DOM folosind JavaScript. Fiecare card de mașină conține specificații tehnice preluate din baza de date internă și o imagine generată pe moment prin API.

### 5.3 Sistemul Dark Mode
Am implementat un sistem de tip *toggle* care schimbă setul de variabile de culoare. Preferința este persistentă, fiind stocată în browser, astfel încât la următoarea vizită site-ul să păstreze tema aleasă de utilizator.

### 5.4 Formularul de Rezervare
Formularul este împărțit în 3 pași:
1. **Selecție Mașină**: Utilizatorul alege marca, modelul și culoarea.
2. **Perioada și Locația**: Definirea intervalului de închiriere.
3. **Date Personale**: Colectarea datelor de identificare ale șoferului.

---

## 6. Concluzii

Dezvoltarea proiectului **Wave** a reprezentat o oportunitate excelentă de a aprofunda cunoștințele de programare web. Am reușit să creez o aplicație care îmbină estetica modernă cu funcționalitatea tehnică, abordând provocări precum gestionarea stării în frontend și comunicarea cu servicii externe. Rezultatul este un produs digital complet, pregătit să răspundă nevoilor unui business real de închirieri auto.

---

## 7. Bibliografie

1. **MDN Web Docs** (developer.mozilla.org) - Documentație HTML, CSS și JS.
2. **Google Fonts** - Resurse tipografice.
3. **Font Awesome** - Librărie de pictograme.
4. **Imagin Studio API** - Serviciu de generare imagini auto.
5. **W3Schools** - Tutoriale și referințe web.
