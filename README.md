# 🛍️ El Badji Shop – Guide Complet de Déploiement

## 📖 Sommaire
1. [Présentation du projet](#présentation-du-projet)
2. [Technologies utilisées](#technologies-utilisées)
3. [Installation locale](#installation-locale)
4. [Configuration GitHub](#configuration-github)
5. [Déploiement sur Vercel](#déploiement-sur-vercel)
6. [Ajout d’un domaine personnalisé](#ajout-dun-domaine-personnalisé)
7. [Structure du projet](#structure-du-projet)
8. [Mise à jour du site](#mise-à-jour-du-site)
9. [Maintenance et bonnes pratiques](#maintenance-et-bonnes-pratiques)

---

## 🏪 Présentation du projet

**El Badji Shop** est un site e-commerce vitrine (sans paiement en ligne) destiné à présenter des **accessoires, vêtements, produits numériques et cosmétiques**.

### 🌍 Langues disponibles :
- Français 🇫🇷
- Anglais 🇬🇧
- Arabe 🇩🇿

### 🎨 Design :
- Thème clair, professionnel
- Couleurs principales : **Bleu royal (#0b63d6)** et **Doré (#b8860b)**
- Logo intégré
- Typographie moderne : *Poppins*, *Playfair Display*

---

## ⚙️ Technologies utilisées

| Technologie | Rôle |
|--------------|------|
| **React + Vite** | Frontend rapide et moderne |
| **Tailwind CSS** | Design réactif et clair |
| **Framer Motion** | Animations fluides |
| **Vercel** | Hébergement et déploiement |
| **GitHub** | Versionnage et synchronisation |

---

## 💻 Installation locale

### 1. Téléchargement
Télécharge et décompresse le projet :
```
el-badji-shop-v2.zip
```

### 2. Installation des dépendances
Ouvre un terminal dans le dossier du projet :
```bash
cd el-badji-shop-v2
npm install
```

### 3. Lancement local
Pour tester localement :
```bash
npm run dev
```
➡️ Accède à [http://localhost:5173](http://localhost:5173)

---

## 🐙 Configuration GitHub

1. Crée un dépôt sur [GitHub](https://github.com/new) (nom conseillé : `el-badji-shop`).
2. Dans ton terminal :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - El Badji Shop"
   git branch -M main
   git remote add origin https://github.com/<ton-utilisateur>/el-badji-shop.git
   git push -u origin main
   ```

---

## ⚡ Déploiement sur Vercel

1. Crée un compte ou connecte-toi sur [https://vercel.com](https://vercel.com).
2. Clique sur **“Add New Project”** → **“Import Git Repository”**.
3. Sélectionne ton dépôt `el-badji-shop`.
4. Laisse la configuration par défaut :
   - Framework : **Vite**
   - Build Command : `npm run build`
   - Output Directory : `dist`
5. Clique sur **Deploy 🚀**.
6. Une fois terminé, ton site sera en ligne à une URL comme :
   ```
   https://el-badji-shop.vercel.app
   ```

---

## 🌐 Ajout d’un domaine personnalisé

Si tu as acheté un domaine (ex : `elbadjishop.com`) :

1. Va dans ton **dashboard Vercel → Project → Settings → Domains**
2. Clique **Add Domain**
3. Entre ton domaine (`elbadjishop.com`)
4. Configure les DNS chez ton hébergeur :
   - **Type A** → 76.76.21.21
   - Ou **CNAME** → `cname.vercel-dns.com`

💡 Les changements peuvent prendre jusqu’à 24h.

---

## 🧱 Structure du projet

```
el-badji-shop-v2/
├── src/
│   ├── assets/        # Images & logo
│   ├── App.jsx        # Page principale
│   ├── main.jsx       # Point d’entrée React
│   ├── index.css      # Styles globaux (Tailwind)
│   └── components/    # (à créer pour tes futurs modules)
├── package.json       # Dépendances
├── tailwind.config.cjs
├── vite.config.js
└── README.md          # Ce guide
```

---

## 🔁 Mise à jour du site

Quand tu modifies ton projet localement :

```bash
git add .
git commit -m "Mise à jour du contenu"
git push
```

Vercel détectera automatiquement le changement et **déploiera la nouvelle version**.

---

## 🧰 Maintenance et bonnes pratiques

✅ **Toujours tester localement** avant de pousser sur GitHub  
✅ **Sauvegarder ton logo et tes images** dans `/src/assets`  
✅ **Traduire ton contenu** en utilisant des fichiers séparés (FR / EN / AR)  
✅ **Mettre à jour les dépendances** périodiquement :
```bash
npm update
```
✅ **Nettoyer les fichiers inutiles** pour garder le projet léger  

---

💬 **Support & contact**
- Projet : [El Badji Shop](https://elbadjishop.vercel.app)
- Auteur : *Toi-même*
- Hébergement : [Vercel](https://vercel.com)
- Code source : [GitHub](https://github.com)
