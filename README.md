# tarok-scorebook
> 🚀 Built with AI-assisted development using modern LLM tools.
> Product discovery, UX, implementation, testing and deployment by a single Product Builder.

# Tarok Scorebook

A digital scorebook for the Slovenian version of Tarok. Instead of calculating scores manually on paper, the application automatically calculates the value of each game (base value + point difference + bonuses + multipliers + Radelci) and keeps a running total for every player.

---

## 🔗 Open the App

👉 **https://reycika.github.io/tarok-scorebook/**

Works in any modern browser on desktop and mobile — no installation required.

For the best mobile experience, see **Install on your phone** below.

---

## 📱 Install on your phone (PWA)

### iPhone (Safari)

1. Open the link above in Safari.
2. Tap the **Share** button.
3. Select **Add to Home Screen**.

### Android (Chrome)

1. Open the link above in Chrome.
2. Tap the **⋮** menu.
3. Select **Install App** or **Add to Home Screen**.

After installation, the app launches in full-screen mode (without browser controls) and continues to work offline.

---

# 🃏 How to use

## 1. Create a new scorebook

- Enter the game location.
- Choose the number of players (3 or 4).
- Enter the players' names.
- Select the starting dealer.

The dealer rotates automatically clockwise after every game.

---

## 2. Add a game

After each hand, tap **+ Add** under the player who called the game (or any player for Klop).

Fill in:

- Game type
- Partner (for One / Two / Three games)
- Point difference
- Win / Loss
- Game multiplier (Kontra, Rekontra, Mord, Sub)
- Bonuses
  - Trula
  - Pagat
  - Kings
  - Last King
  - Colour Valat
  - Valat

The application automatically:

- calculates the score
- applies active Radelci
- rounds to the nearest 5 points
- updates every player's total

---

## 3. Klop

For Klop, select for every player:

- None
- Full
- Empty

Then enter the number of cards.

The application validates that all players together have exactly **70 cards**.

According to the official rules, only the player sitting immediately after the dealer may enter a Klop.

---

## 4. Radelci

Whenever a game worth **70 points or more** is played, every player receives a **Radelc** (displayed as a golden dot).

A player may activate an unused Radelc when calling a future game.

- **Win:** score is doubled and the Radelc is consumed.
- **Loss:** score is doubled but the Radelc remains active.

---

## 5. Edit previous rounds

Tap any previous result to edit or delete it.

---

## 6. Finish the game

Press **Finish Game** to calculate all remaining active Radelci (-100 points each) and lock the scorebook.

Start another game anytime by selecting **New Game**.

---

# 💾 Offline support

All data is stored locally on your device.

If you close the browser or app during a game, everything is restored automatically when you reopen it.

---

# ✨ Features

- 🃏 Automatic Tarok score calculation
- 👥 3- and 4-player support
- 🔄 Automatic dealer rotation
- ✅ Built-in game validation
- ⭐ Automatic Radelci management
- ✏️ Edit and delete previous rounds
- 📈 Running score history
- 📱 Progressive Web App (PWA)
- 🌐 Offline support
- 📲 Mobile-first responsive design

---

# 🛠️ Why I built this

My friends and I have been keeping Tarok scores on paper for years.

I wanted to eliminate manual calculations, reduce mistakes, and make scorekeeping significantly faster while respecting the official Slovenian Tarok rules.

This project demonstrates my end-to-end product approach:

- Identifying a real user problem
- Defining product requirements
- Designing the user workflow
- Building the MVP with AI assistance
- Testing it with real users
- Deploying it as a Progressive Web App
- Continuously improving it based on feedback

---

# 🇸🇮 Slovenska različica

A Slovenian version of this README is available below.


# Tarok beležka

Digitalna beležka za vodenje rezultatov pri slovenski različici taroka. Namesto ročnega seštevanja v zvezku aplikacija sama izračuna vrednost vsake igre (osnova + razlika + bonusi + kontre + radlci) in sproti vodi seštevek za vsakega igralca.

## 🔗 Odpri beležko

**👉 [reycika.github.io/tarok-scorebook](https://reycika.github.io/tarok-scorebook/)**

Deluje v brskalniku na telefonu ali računalniku — ni potrebna namestitev. Za najboljšo izkušnjo na telefonu glej spodaj *"Namestitev na telefon"*.

## 📱 Namestitev na telefon (kot prava aplikacija)

**iPhone (Safari):**
1. Odpri zgornjo povezavo v Safariju.
2. Tapni gumb za **deljenje** (kvadrat s puščico navzgor).
3. Izberi **"Dodaj na začetni zaslon."**

**Android (Chrome):**
1. Odpri zgornjo povezavo v Chromu.
2. Tapni meni **⋮** zgoraj desno.
3. Izberi **"Dodaj na začetni zaslon"** oz. **"Namesti aplikacijo."**

Po namestitvi dobiš pravo ikono na začetnem zaslonu, ki se odpre čez cel zaslon (brez naslovne vrstice brskalnika) in deluje tudi brez interneta.

## 🃏 Kako se uporablja

### 1. Ustvari beležko
- Vnesi kraj igranja.
- Izberi število igralcev (3 ali 4).
- Vnesi imena igralcev.
- Označi, kdo je **začetni delilec** (gumb "Delilec" ob imenu) — delilec se nato vsako igro samodejno zamenja za naslednjega v smeri urinega kazalca.

### 2. Vpisovanje iger
Ob koncu vsake odigrane igre tapni **"+ vpiši"** pod imenom igralca, ki je igro klical (ali pri Klopu poljubnega igralca), in izpolni:

- **Igra** — izberi med Klop, Berač, Ena/Dve/Tri, Solo 1/2/3, Solo brez, Odprti berač.
- **Soigralec** *(samo pri Ena/Dve/Tri)* — če je bil klican partner.
- **Razlika** — razlika od 35 kart (0–35).
- **Izid** — zmaga ali poraz.
- **Kontra na igro** — Kontra / Rekontra / Mord / Sub, če je bilo klicano.
- **Bonusi** — Trula, Pagat, Kralji, Zadnji kralj (najavljen/tiho, in če je bil izgubljen). Pri Solo igrah je na voljo tudi **Barvni valat**, pri več igrah pa **Valat** (tihi/napovedan) kot samostojen bonus.

Aplikacija samodejno izračuna vrednost, doda radelc (če je igralec aktivnega ima), zaokroži na najbližjih 5 in vpiše rezultat.

### 3. Klop
Pri Klopu za vsakega igralca izbereš **Ne / Poln / Prazen** in vpišeš število kart — vsota vseh mora biti natanko 70. Klop lahko zapiše samo igralec, ki sledi delilcu za tisto igro (aplikacija to sama preveri).

### 4. Radlci
Vsakič, ko je odigrana igra vredna 70 ali več (Klop, Berač, Solo brez, Odprti berač, Barvni valat, Valat), vsak igralec za mizo dobi **radelc** (zlata pika pod imenom). Igralec ga lahko porabi tako, da pokliče poljubno igro — če jo dobi, se vrednost podvoji in radelc je porabljen (obarva se črno); če jo izgubi, se vrednost prav tako podvoji, a radelc ostane aktiven.

### 5. Urejanje vnosov
Med igro lahko tapneš na kateri koli že vpisan rezultat, da ga urediš ali izbrišeš.

### 6. Zaključek igre
Gumb **"Zaključi igro"** (s potrditvenim oknom, da preprečimo pomoto) obračuna vse še aktivne radlce (−100 za vsakega) in zaklene beležko. Nato lahko z gumbom **"Nova igra"** začneš novo beležko.

---

*Beležka shranjuje podatke lokalno na napravi — če zapreš aplikacijo sredi igre, se ob ponovnem odprtju nadaljuje tam, kjer si končal.*
