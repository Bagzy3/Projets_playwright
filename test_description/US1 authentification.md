## **US1. Authentification et gestion du compte** 

### **Description**  
📌 *En tant qu'utilisateur, je veux pouvoir créer un compte, me connecter avec mes identifiants, me déconnecter et gérer mes erreurs de connexion afin d'accéder à mon compte en toute sécurité.*  

### **Critères d'acceptation**  
- ✅ **Création de compte** : L'utilisateur peut créer un compte avec un nom d'utilisateur, un e-mail et un mot de passe. En cas de données invalides, un message d'erreur s'affiche.  
- ✅ **Connexion** : L'utilisateur peut se connecter en utilisant son nom d'utilisateur et son mot de passe. Si les identifiants sont incorrects, un message d'erreur s'affiche.  
- ✅ **Déconnexion** : L'utilisateur peut se déconnecter de son compte et revenir à la page d'accueil.  
- ✅ **Gestion des erreurs** : Un message d'erreur doit apparaître si l'utilisateur entre des informations incorrectes lors de la connexion ou de la création de compte.  

---

### **🔹 Test 01 : Création d'un compte valide**  

#### **Description**  
🎯 *Ce test vise à valider la fonctionnalité de création d'un compte utilisateur valide sur le site Demoblaze.*  

#### **Préconditions**  
📍 Se rendre sur le site [Demoblaze](https://www.demoblaze.com).  

#### **Étapes du test**  

| **#** | **Action** | **Données** | **Résultat attendu** |
|-------|------------|-------------|----------------------|
| **1.** | Cliquer sur le bouton `Sign up` dans la barre de navigation du site. | - | Une fenêtre pop-up s'affiche avec deux champs : **"Username"** et **"Password"**. |
| **2.** | Saisir un **Username** et un **Password**, puis appuyer sur `Sign up`. | `Username: test1234test`<br>`Password: test1234test`<br>(si l’utilisateur est déjà pris, ajouter un chiffre à la fin du username jusqu’à ce qu’il soit libre, ex. : "test1234test1") | Une pop-up s'affiche indiquant : **"Sign up successful."** |

---

### **🔹 Test 02 : Connexion avec un compte valide**  

#### **Description**  
🎯 *Vérifier que l’utilisateur peut se connecter avec des identifiants valides sur le site.*  

#### **Préconditions**  
📍 Se rendre sur le site [Demoblaze](https://www.demoblaze.com).  

#### **Étapes du test**  
| **Action** | **Données** | **Résultat attendu** |
|------------|-------------|----------------------|
| **1.** Cliquer sur le bouton `Log in` en haut du site. | - | Une pop-up s'ouvre avec les champs **"Username"** et **"Password"**. |
| **2.** Entrer les identifiants et appuyer sur `Log in`. | `Username: test`<br>`Password: test` | L'utilisateur est connecté et voit **"Welcome test"** dans la barre de navigation. |

---

### **🔹 Test 03 : Connexion invalide : identifiants incorrects / Compte non enregistré **  

#### **Description**  
🎯 *Vérifier que la connexion échoue et qu’un message d'erreur s’affiche lorsque les identifiants sont erronés ou que le compte n'est pas enregistré.*  

#### **Préconditions**  
📍 Se rendre sur le site [Demoblaze](https://www.demoblaze.com).  

#### **Étapes du test**  
| **Action** | **Données** | **Résultat attendu** |
|------------|-------------|----------------------|
| **1.** Cliquer sur le bouton `Log in`. | - | Une pop-up s'affiche avec **"Username"** et **"Password"**. |
| **2.** Entrer des identifiants erronés et appuyer sur `Log in`. | `Username: fauxusername`<br>`Password: fauxpassword` | Une pop-up affiche **"User does not exist."** |

---

### **🔹 Test 04 : Déconnexion de l'utilisateur connecté**  

#### **Description**  
🎯 *Vérifier que l’utilisateur peut se déconnecter correctement.*  

#### **Préconditions**  
📍 Être connecté sur le site avec :  
🔑 `Username: test`  
🔑 `Password: test`  

#### **Étapes du test**  
| **Action** | **Données** | **Résultat attendu** |
|------------|-------------|----------------------|
| **1.** Cliquer sur `Log out` dans la barre de navigation. | - | Les boutons **"Log in"** et **"Sign up"** réapparaissent, indiquant que l'utilisateur est bien déconnecté. |

---



