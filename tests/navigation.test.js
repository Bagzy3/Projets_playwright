const { test, expect } = require('@playwright/test');

test.describe('05 Filtrage des catégories', () => {

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
            await page.waitForTimeout(2000); 

            // Récupérer tous les noms des produits affichés
            const productNames = await page.$$eval('.card-title a', elements => elements.map(el => el.textContent.trim()));

            // Vérifier que seuls les produits attendus sont affichés
            expect(productNames.sort()).toEqual(expectedProducts.sort());
        });
    }
});

test('06_consultation_details_produit', async ({ page }) => {
    // Aller sur la page d'accueil
    await page.goto('https://www.demoblaze.com');

    // Attendre que les produits apparaissent
    await page.waitForSelector('.card-title .hrefch', { timeout: 5000 });

    // Récupérer tous les produits
    const products = await page.locator('.card-title .hrefch').all();
    console.log('Nombre de produits trouvés:', products.length);
    
    // Vérifier qu'il y a bien des produits sur la page
    expect(products.length).toBeGreaterThan(0);

    // Sélectionner un produit au hasard
    const randomIndex = Math.floor(Math.random() * products.length);
    await products[randomIndex].click();

    // Attendre que la page de détails charge
    await page.waitForSelector('.name', { timeout: 5000 });

    // Vérifier que l'URL contient bien l'ID du produit
    const url = page.url();
    expect(url).toContain('prod.html?idp_=');

    // Récupérer le nom du produit
    const productName = await page.locator('.name').innerText();
    console.log('Nom du produit sélectionné:', productName);

    // Récupérer le nom de l'image
    const imageSrc = await page.locator('#myCarousel-2 .carousel-inner img').first().getAttribute('src');
    console.log('Nom de l\'image du produit:', imageSrc);

    // Vérifier l'affichage des détails du produit
    await expect(page.locator('.name')).toBeVisible(); // Nom
    await expect(page.locator('.price-container')).toBeVisible(); // Prix
    await expect(page.locator(`img[src="${imageSrc}"]`)).toBeVisible(); // Image correspondante réucpérée
    await expect(page.locator('.description')).toBeVisible(); // Description
    await expect(page.locator('.btn-success')).toHaveText('Add to cart'); // Bouton "Add to cart"
});
