## US1. Authentification et gestion du compte

### Description
En tant qu'utilisateur, je veux pouvoir créer un compte, me connecter avec mes identifiants, me déconnecter et gérer mes erreurs de connexion afin d'accéder à mon compte en toute sécurité.

### Critères d'acceptation :
- **Création de compte** : L'utilisateur peut créer un compte avec un nom d'utilisateur, un e-mail et un mot de passe. En cas de données invalides, un message d'erreur s'affiche.
- **Connexion** : L'utilisateur peut se connecter en utilisant son nom d'utilisateur et son mot de passe. Si les identifiants sont incorrects, un message d'erreur s'affiche.
- **Déconnexion** : L'utilisateur peut se déconnecter de son compte et revenir à la page d'accueil.
- **Gestion des erreurs** : Un message d'erreur doit apparaître si l'utilisateur entre des informations incorrectes lors de la connexion ou de la création de compte.

---

### Test 1 : Création d'un compte valide

#### Description
Ce test vise à valider la fonctionnalité de création d'un compte utilisateur valide sur le site Demoblaze. L'objectif est de s'assurer que l'utilisateur peut s'inscrire avec des informations valides (nom d'utilisateur, mot de passe, e-mail) et que le système procède correctement à la création du compte.

#### Préconditions
Se rendre sur le site [Demoblaze](https://www.demoblaze.com).

---

#### Étapes du test :
| **Action** | **Données** | **Résultat attendu** |
|------------|-------------|----------------------|
| **1.** Cliquer sur le bouton "Sign up" dans la barre de navigation du site. | - | Une fenêtre pop-up s'affiche avec deux champs à remplir : "username" et "Password". |
| **2.** Saisir le "username" dans le champ correspondant et le "Password" dans le champ correspondant. Appuyer sur "Sign up". | `Username: test1234test` <br> `Password: test1234test` <br> (Si l’utilisateur est déjà pris, ajouter un chiffre à la fin du username, par exemple : `test1234test1`) | Une pop-up s'affiche indiquant : **"Sign up successful."** |

---

### Test 02 : Connexion avec un compte valide

#### Description
Ce test a pour but de vérifier que l’utilisateur peut se connecter avec des identifiants valides sur le site Demoblaze. L'objectif est de s'assurer que le processus d'authentification fonctionne correctement et que l'utilisateur est bien reconnu après la connexion.

#### Préconditions
Se rendre sur le site [Demoblaze](https://www.demoblaze.com).

---

#### Étapes du test :
| **Action** | **Données** | **Résultat attendu** |
|------------|-------------|----------------------|
| **1.** Cliquer sur le bouton "Log in" situé dans la barre de navigation du site. | - | Une fenêtre pop-up doit s'ouvrir demandant de rentrer le **Username** et le **Password**. |
| **2.** Entrer le **Username** dans le champ correspondant. Entrer le **Password** dans le champ correspondant. Appuyer sur "Log in". | `Username: test` <br> `Password: test` | Nous sommes redirigés sur la page d'accueil et dans la barre de navigation s'affiche **"Welcome test"**, indiquant que nous sommes connectés. |

---

### Test 03 : Connexion avec des identifiants incorrects

#### Description
Ce test vérifie que lorsqu’un utilisateur saisit des identifiants incorrects (nom d’utilisateur et/ou mot de passe erronés), le système affiche un message d’erreur approprié et refuse la connexion.

#### Préconditions
Se rendre sur le site [Demoblaze](https://www.demoblaze.com).

---

#### Étapes du test :
| **Action** | **Données** | **Résultat attendu** |
|------------|-------------|----------------------|
| **1.** Cliquer sur le bouton "Log in" situé dans la barre de navigation du site. | - | Une fenêtre pop-up doit s'ouvrir demandant de rentrer le **Username** et le **Password**. |
| **2.** Entrer le **Username** dans le champ correspondant. Entrer le **Password** dans le champ correspondant. Appuyer sur le bouton "Log in" de la pop-up. | `Username: mauvaisusername` <br> `Password: mauvaispassword` | Une autre fenêtre pop-up nous indique **"User does not exist."** |

---

### Test 04 : Déconnexion de l'utilisateur connecté

#### Description
Ce test vérifie que lorsqu’un utilisateur connecté clique sur le bouton de déconnexion, il est bien déconnecté et redirigé vers la page d’accueil du site.

#### Préconditions
1. Être sur le site [Demoblaze](https://www.demoblaze.com).
2. Être un utilisateur connecté.  
   Se connecter avec les identifiants suivants :  
   `Username: test`  
   `Password: test`

---

#### Étapes du test :
| **Action** | **Données** | **Résultat attendu** |
|------------|-------------|----------------------|
| **1.** Cliquer sur le bouton "Log out" dans la barre de navigation en haut du site. | - | Le bouton "Log in" et "Sign up" doivent réapparaître, indiquant que l'utilisateur est bien déconnecté. |

---





