
## 1. Authentification et gestion du compte

En tant qu'utilisateur, je veux pouvoir créer un compte, me connecter avec mes identifiants, me déconnecter et gérer mes erreurs de connexion afin d'accéder à mon compte en toute sécurité.
Critères d'acceptation :
Création de compte : L'utilisateur peut créer un compte avec un nom d'utilisateur, un e-mail et un mot de passe. En cas de données invalides, un message d'erreur s'affiche.
Connexion : L'utilisateur peut se connecter en utilisant son nom d'utilisateur et son mot de passe. Si les identifiants sont incorrects, un message d'erreur s'affiche.
Déconnexion : L'utilisateur peut se déconnecter de son compte et revenir à la page d'accueil.
Gestion des erreurs : Un message d'erreur doit apparaître si l'utilisateur entre des informations incorrectes lors de la connexion ou de la création de compte.



### 1.1 Création d'un compte valide

**Description** : Ce test vise à valider la fonctionnalité de création d'un compte utilisateur valide sur le site Demoblaze. L'objectif est de s'assurer que l'utilisateur peut s'inscrire avec des informations valides (nom d'utilisateur, mot de passe, e-mail) et que le système procède correctement à la création du compte. 

**Préconditions** : Se rendre sur le site [Demoblaze](https://www.demoblaze.com).

**Étapes du test** :  
| Action | Données | Résultat attendu |
|--------|---------|------------------|
| 1. Cliquer sur le bouton "Sign up" dans la barre de navigation du site. | - | Une fenêtre Pop-up s’affiche avec deux champs à remplir, "username" et "Password". |
| 2. Saisir le "username" dans le champ correspondant et le "Password" dans le champ correspondant. Appuyer sur "Sign up". | `Username: test1234test` <br> `Password: test1234test` (Si l’utilisateur est déjà pris, ajouter un chiffre à la fin du username, par exemple : `test1234test1`) | Une pop-up s’affiche indiquant : "Sign up successful." |
