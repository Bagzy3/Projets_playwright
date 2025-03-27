## **US2. Navigation & Consultation du Catalogue**

### **Description**  
📌 *En tant qu'utilisateur, je veux pouvoir naviguer dans les différentes catégories de produits et consulter les détails d'un produit afin de trouver ce que je cherche facilement.*

### **Critères d'acceptation**  
- ✅ **Accès aux catégories** : L'utilisateur peut naviguer entre les différentes catégories de produits comme "Laptops", "Phones", "Monitors".  
- ✅ **Consultation des produits** : L'utilisateur peut consulter les détails d'un produit spécifique, y compris la description, l'image et le prix.  

---

### **🔹 Test 05 : Filtrage des catégories**

#### **Description**  
🎯 *Ce test valide la fonctionnalité de filtrage des produits en fonction des catégories sélectionnées.*

#### **Préconditions**  
📍 Se rendre sur le site [Demoblaze](https://www.demoblaze.com).  

#### **Étapes du test**  
| **Action** | **Données** | **Résultat attendu** |
|------------|-------------|----------------------|
| **1.** Cliquer sur la catégorie "Phone" dans le menu listant les catégories à gauche sur la page d’accueil. | Liste téléphones : Samsung galaxy s6, Nokia lumia 1520, Nexus 6, Samsung galaxy s7, Iphone 6 32gb, Sony xperia z5, HTC One M9 | En scrollant vers le bas, seuls les produits étant des téléphones doivent s’afficher. |
| **2.** Cliquer sur la catégorie "Laptops" dans le menu listant les catégories à gauche sur la page d’accueil. | Liste laptops : Sony vaio i5, Sony vaio i7, MacBook air, MacBook Pro, Dell i7 8gb, 2017 Dell 15.6 Inch | En scrollant vers le bas, seuls les produits étant des ordinateurs portables doivent s’afficher. |
| **3.** Cliquer sur la catégorie "Monitors" dans le menu listant les catégories à gauche sur la page d’accueil. | Liste Monitors : Apple monitor 24, ASUS Full HD | En scrollant vers le bas, seuls les produits étant des écrans indépendants doivent s’afficher. |

---

### **🔹 Test 06 : Consultation des détails d'un produit**

#### **Description**  
🎯 *Vérifier que l’utilisateur peut consulter les détails d’un produit sélectionné, avec toutes les informations nécessaires.*

#### **Préconditions**  
📍 Se rendre sur le site [Demoblaze](https://www.demoblaze.com).  

#### **Étapes du test**  
| **Action** | **Données** | **Résultat attendu** |
|------------|-------------|----------------------|
| **1.** Cliquer sur un produit affiché sur la page d’accueil. | - | La page de détails du produit sélectionné s'affiche dans l'URL : `https://www.demoblaze.com/prod.html?idp_=(ID DU PRODUIT)` |
| **2.** Vérifier l'affichage des informations suivantes : Le **nom**, l'**image**, la **description**, le **prix du produit** et le **bouton "Add to cart"** | - | Le **nom**, l'**image**, la **description**, le **prix du produit** et le **bouton "Add to cart"** sont visibles et correspondent au produit sélectionné. |

