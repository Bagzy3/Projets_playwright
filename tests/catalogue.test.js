const { test, expect } = require('@playwright/test');

test.describe('Vérification du filtre des catégories sur Demoblaze', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.demoblaze.com/#');
    });

    const categories = {
        "Laptops": ["Sony vaio i5", "Sony vaio i7", "MacBook air", "MacBook Pro", "Dell i7 8gb", "2017 Dell 15.6 Inch"],
        "Monitors": ["Apple monitor 24", "ASUS Full HD"],
        "Phones": ["Samsung galaxy s6", "Nokia lumia 1520", "Nexus 6", "Samsung galaxy s7", "Iphone 6 32gb", "Sony xperia z5", "HTC One M9"]
    };

    for (const [category, expectedProducts] of Object.entries(categories)) {
        test(`Vérifier que la catégorie "${category}" affiche les bons produits`, async ({ page }) => {
            // Cliquer sur la catégorie
            await page.click(`text=${category}`);

            // Attendre que la liste des produits soit mise à jour
            await page.waitForTimeout(2000); // Peut être remplacé par un `waitForResponse` plus précis

            // Récupérer tous les noms des produits affichés
            const productNames = await page.$$eval('.card-title a', elements => elements.map(el => el.textContent.trim()));

            // Vérifier que seuls les produits attendus sont affichés
            expect(productNames.sort()).toEqual(expectedProducts.sort());
        });
    }
});
