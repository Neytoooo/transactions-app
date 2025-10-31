# React + TypeScript + Vite

# 💳 BankTrack — Transaction Search App

**BankTrack** est une application web moderne permettant de **rechercher, filtrer et consulter** des transactions bancaires simulées à partir d’un fichier JSON.  
Le projet met l’accent sur la **performance**, la **qualité du code** et une **expérience utilisateur fluide**.

![Preview](https://transactions-xxxx.vercel.app/preview.png) <!-- (optionnel: remplace par un vrai screenshot) -->

---

## 🚀 Démo en ligne

👉 [Accéder à la version déployée sur Vercel](https://transactions-dl3mrp6tl-mattis-projects-a36fa3f1.vercel.app)

---

## 🧠 Objectif du projet

L’objectif de ce projet est de **démontrer de bonnes pratiques front-end** :
- Architecture claire et modulaire
- Code maintenable en TypeScript
- UI réactive, sobre et élégante
- Gestion d’état simple mais efficace
- Expérience utilisateur soignée (mode sombre, animation, feedback visuel)

---

## 🛠️ Stack technique

| Outil | Utilisation |
|--------|-------------|
| ⚛️ **React + TypeScript + Vite** | Base de l’application et build ultra rapide |
| 🎨 **Tailwind CSS** | Stylisation rapide et responsive |
| 🌀 **Framer Motion** | Animations fluides et naturelles |
| 💡 **Lucide React** | Pack d’icônes moderne et léger |
| 🧹 **ESLint + Prettier** | Formatage et cohérence du code |
| ☁️ **Vercel** | Déploiement et hébergement continu |

---

## ✨ Fonctionnalités principales

### 🔍 Recherche dynamique
- Filtrage instantané des transactions (label, montant, émetteur, destinataire…)
- Recherche “debounced” pour de meilleures performances

### 🧾 Liste de transactions
- Transactions regroupées **par semaine**
- Statut visuel : ✅ complété, 🕓 en attente, ❌ échoué
- Affichage progressif grâce à un **infinite scroll**

### 💬 Détails d’une transaction
- Ouverture d’une **modale animée**
- Détails complets (ID, label, date, émetteur, destinataire, montant)
- Icônes et couleurs selon le statut

### 🌙 Mode clair / sombre
- Commutateur de thème avec icônes 🌞 / 🌙
- Sauvegarde de la préférence dans `localStorage`
- Adaptation automatique au thème système

### ⚠️ Gestion d’erreurs et feedback utilisateur
- Message stylé si la récupération échoue
- Bouton “Retry” avec animations
- Skeletons visuels pendant le chargement

---

## 🧩 Architecture du projet
transactions-app/
│
├── src/
│ ├── assets/ # Images / icônes si besoin
│ ├── components/
│ │ ├── layout/ # Header, Hero, etc.
│ │ ├── transactions/ # Cartes, modales, search bar...
│ │ └── ThemeToggle.tsx # Bouton de thème clair/sombre
│ │
│ ├── data/
│ │ └── transactions.json # Données simulées
│ │
│ ├── hooks/ # Hooks custom (infinite scroll, debounce)
│ ├── lib/ # Fonctions utilitaires (format date/montant)
│ ├── App.tsx # Composant principal
│ └── main.tsx # Point d’entrée
│
├── public/
│ └── favicon.svg
│
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts


---

## ⚙️ Installation et lancement local

```bash
# 1. Cloner le dépôt
git clone https://github.com/Neytoooo/transactions-app.git
cd transactions-app

# 2. Installer les dépendances
npm install

# 3. Lancer en mode développement
npm run dev

# 4. Build pour la production
npm run build
npm run preview
