# 📌 Projet de Tests Automatisés - Demoblaze

## 📖 Présentation du projet
Ce projet vise à tester les fonctionnalités principales du site **Demoblaze** à l'aide de **tests fonctionnels automatisés**. Ces tests permettent de s'assurer que les fonctionnalités essentielles du site sont opérationnelles et qu'elles peuvent être vérifiées rapidement dans le cadre de **tests de régression**.

Ce projet est conçu pour illustrer la mise en place de tests automatisés et fournir une base pour une suite de tests plus complète.

## 🎯 Objectifs
- Tester les fonctionnalités principales du site **Demoblaze**
- Détecter d'éventuels problèmes via des tests automatisés
- Mettre en place des **tests fonctionnels** qui pourraient être utilisés en entreprise pour de la **régression**
- Démontrer des compétences en **automatisation des tests** et en **création de cas de test**.

## 📌 Périmètre des tests
Les tests couvrent :
✔️ **Authentification** (création de compte, connexion, déconnexion)
✔️ **Navigation** (accès aux catégories et consultation des produits)
✔️ **Gestion du panier** (ajout, suppression, mise à jour du total)
✔️ **Passage de commande** (validation de commande et gestion des erreurs)

⛔ **Ce projet ne couvre pas** :
❌ La page de contact
❌ Les favoris

## 🛠️ Stack technique
- **Langage** : JavaScript
- **Framework de test** : [Playwright](https://playwright.dev/)
- **Gestion des tests** : Jira/Xray (cas de test documentés dans un fichier Excel)

## 📂 Structure du projet
```
 ├── 📂 test_description         # Fichiers de description des tests manuels en .md
 │   ├── US1_authentification.md # Description des tests d'authentification ✅
 │   ├── US2_navigation.md       # Description des tests de navigation // ✅
 │   ├── US3_panier.md           # Description des tests du panier // ( en construction 👷 )
 │   ├── US4_commande.md         # Description des tests de commande // ( en construction 👷 )
 ├── 📂 tests                    # Fichiers des tests automatisés en .js
 │   ├── authentication.spec.js  # Tests automatisés liés à l'authentification ✅
 │   ├── navigation.spec.js      # Tests automatisés liés à la navigation // ✅
 │   ├── cart.spec.js            # Tests automatisés liés au panier // ( en construction 👷 )
 │   ├── order.spec.js           # Tests automatisés liés au passage de commande // ( en construction 👷 )
 ├── .gitignore                  # Liste des fichiers et dossiers à ignorer par Git
 ├── README.md                   # Documentation du projet
 ├── package-lock.json           # Verrouillage des versions des dépendances
 ├── package.json                # Dépendances et scripts npm
 ├── playwright.config.js         # Configuration Playwright

```

## ✅ Cas de tests

| ID   | Test Case                 | Description                                              | Résultat Attendu                                    | User Story 📌 |
|------|----------------------------|---------------------------------------------------------|------------------------------------------------------|---------------|
| 🟢 TC01 | **Création de compte**       | Un utilisateur peut créer un compte valide              | Le compte est créé et un message de confirmation s'affiche | US01 - Authentification |
| 🟢 TC02 | **Connexion valide**         | Un utilisateur peut se connecter avec des identifiants corrects | L'utilisateur est connecté et son nom s'affiche en haut | US01 - Authentification |
| 🟢 TC03 | **Connexion invalide**       | Un utilisateur ne peut pas se connecter avec des identifiants erronés | Un message d'erreur s'affiche | US01 - Authentification |
| 🟢 TC04 | **Déconnexion**              | Un utilisateur connecté peut se déconnecter              | L'utilisateur est redirigé vers la page d'accueil | US01 - Authentification |
| 🔵 TC05 | **Navigation dans les catégories** | L'utilisateur peut naviguer entre les catégories (Laptops, Phones, Monitors) | La liste des produits de la catégorie sélectionnée s'affiche | US02 - Navigation |
| 🔵 TC06 | **Consultation d'un produit**  | L'utilisateur peut voir les détails d'un produit (image, description, prix) | La page du produit s'affiche avec les bonnes informations | US02 - Navigation |
| 🟡 TC07 | **Ajout au panier**          | L'utilisateur peut ajouter un produit au panier          | Le produit apparaît dans le panier | US03 - Panier |
| 🟡 TC08 | **Suppression d'un produit**  | L'utilisateur peut supprimer un produit du panier        | Le produit disparaît du panier | US03 - Panier |
| 🟡 TC09 | **Mise à jour du total**      | Le total du panier est mis à jour après ajout/suppression | Le montant total est correct | US03 - Panier |
| 🔴 TC10 | **Passage de commande**       | L'utilisateur peut finaliser une commande avec des infos valides | Une confirmation de commande s'affiche | US04 - Commande |
| 🔴 TC11 | **Erreur de commande**        | Si des champs sont manquants, la commande échoue        | Un message d'erreur s'affiche | US04 - Commande |

### 📌 Légende des couleurs :
- 🟢 **US01 - Authentification** → Inscription, Connexion, Déconnexion
- 🔵 **US02 - Navigation** → Parcours des catégories et consultation des produits
- 🟡 **US03 - Panier** → Ajout, suppression et mise à jour du total
- 🔴 **US04 - Commande** → Passage et validation des commandes


## 🚀 Exécution des tests
### Installation des dépendances
```sh
npm install
```

### Exécuter tous les tests
```sh
npx playwright test
```

### Exécuter un test spécifique
```sh
npx playwright test tests/authentication.spec.js
```

## 📌 Améliorations futures
- Ajouter des tests pour les scénarios avancés
---
🛠 **Auteur** : PAOLINO Gabin
📅 **Dernière mise à jour** : 26/03/2025
