# Test d'Authentification avec Playwright (JS)

Ce projet contient des tests automatisés pour l'authentification sur le site Demoblaze, réalisés avec Playwright en JavaScript.

## 📌 État du projet

🚧 **En cours d'évolution** 🚧

Ce projet est mis à jour régulièrement pour couvrir de nouvelles User Stories. Actuellement, seule l'authentification est entièrement automatisée, mais d'autres fonctionnalités (gestion du compte, navigation, panier, passage de commande, etc.) seront ajoutées progressivement.

## 🛠 Installation et utilisation

1. **Cloner le repo**

```sh
git clone <URL_DU_REPO>
cd <NOM_DU_REPO>
```

2. **Installer les dépendances**

```sh
npm install
```

3. **Exécuter les tests**

```sh
npx playwright test
```

## 🚀 Fonctionnalités couvertes

- ✅ Authentification (connexion et déconnexion)
- 🔜 Gestion du compte (à venir)
- 🔜 Navigation et consultation du catalogue (à venir)
- 🔜 Gestion du panier (à venir)
- 🔜 Passage de commande (à venir)

## 📂 Structure du projet

```
📁 tests
 ├── authentification.test.js  # Tests d'authentification
 ├── ... (autres tests à venir)
```

// Run tests : npx playwright test

pour voir le report : npx playwright show-report

mettre en pause : await page.pause();

exécuter un seul test parmis un fichier : npx playwright test --grep "connexion_compte_valide" //
