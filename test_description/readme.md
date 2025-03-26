# Documentation des Tests - Demoblaze

Ce document décrit les tests automatisés réalisés avec Playwright sur le site [Demoblaze](https://www.demoblaze.com).

---

## 1. Authentification
### 1.1 Création d'un compte valide
**Description** : Ce test vise à valider la fonctionnalité de création d'un compte utilisateur valide sur le site Demoblaze. L'objectif est de s'assurer que l'utilisateur peut s'inscrire avec des informations valides (nom d'utilisateur, mot de passe, e-mail) et que le système procède correctement à la création du compte.  
**Préconditions** : Se rendre sur le site [Demoblaze](https://www.demoblaze.com).

**Critères d'acceptation** :
- Un compte valide est créé avec succès.
- Un message de confirmation "Sign up successful." est affiché.

**Étapes du test** :  
| Action | Données | Résultat attendu |
|--------|---------|------------------|
| 1. Cliquer sur le bouton "Sign up" dans la barre de navigation du site. | - | Une fenêtre Pop-up s’affiche avec deux champs à remplir, "username" et "Password". |
| 2. Saisir le "username" dans le champ correspondant et le "Password" dans le champ correspondant. Appuyer sur "Sign up". | `Username: test1234test` <br> `Password: test1234test` (Si l’utilisateur est déjà pris, ajouter un chiffre à la fin du username, par exemple : `test1234test1`) | Une pop-up s’affiche indiquant : "Sign up successful." |

**Pièces jointes** : Aucune

---
