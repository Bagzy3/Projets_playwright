// @ts-check
import { test, expect } from '@playwright/test';

// US1 : Authentification

test('01_creation_compte_valide', async ({ page }) =>  {

    const randomUsername = `user_${Math.floor(Math.random() * 100000)}`; // Création d'un Username aléatoire afin que le test soit répétable
    const randomPassword = `pass_${Math.floor(Math.random() * 100000)}`; // Création d'un Mdp aléatoire afin que le test soit répétable

    await page.goto('https://www.demoblaze.com/'); // Aller sur le site
    await page.getByRole('link', { name: 'Sign up' }).click(); // Cliquer sur le bouton Sign up 
    await expect(page.locator('#signInModal')).toContainText('Username:'); // S'assurer que la fênetre pop-up s'affiche en vérifiant si un champ Username existe. 
    await page.getByRole('textbox', { name: 'Username:' }).fill(randomUsername); // Remplir le Username randomUsername
    await page.getByRole('textbox', { name: 'Password:' }).fill(randomPassword); // Remplir le mdp avec randomPassword
    await page.getByRole('button', { name: 'Sign up' }).click(); // Cliquer sur Sign Up
    const dialog = await page.waitForEvent('dialog'); // attendre que la fenêtre d'alerte s'affiche
    expect(dialog.message()).toContain('Sign up successful'); // Vérifier le message "sign up successful" dans l'alerte 

});

test('02_connexion_compte_valide', async ({ page }) =>  {

    await page.goto('https://www.demoblaze.com/'); // Aller sur le site 
    await page.getByRole('link', { name: 'Log in' }).click(); // Cliquer sur le bouton Log in
    await page.locator('#loginusername').fill('test'); // remplir username avec "test" (compte déja crée préalablement)
    await page.locator('#loginpassword').fill('test'); // remplir password avec "test" 
    await page.getByRole('button', { name: 'Log in' }).click(); // Cliquer sur le bouton Log in
    await expect(page.locator('#nameofuser')).toContainText('Welcome test'); // S'assurer que l'utilisateur est connecté en localisant "Welcome test" dans la nav bar

});

test('03_connexion_identifiants_incorrects', async ({ page }) =>  {
    
    const falseusername = `user_${Math.floor(Math.random() * 100000)}`; // Création d'un Username aléatoire qui n'existe donc pas afin que le test soit répétable
    const falsepassword = `pass_${Math.floor(Math.random() * 100000)}`; // Création d'un Mdp aléatoire afin que le test soit répétable

    await page.goto('https://www.demoblaze.com/'); // Aller sur le site
    await page.getByRole('link', { name: 'Log in' }).click(); // Cliquer sur Log in
    await page.locator('#loginusername').fill(falseusername); // Rentrer la variable falseusername
    await page.locator('#loginpassword').fill(falsepassword); // Rentrer la variable falsepassword
    await page.getByRole('button', { name: 'Log in' }).click(); // Cliquer sur Log in

    const dialog = await page.waitForEvent('dialog'); // Attendre le fenêtre d'alerte
    expect(dialog.message()).toContain('User does not exist.'); // S'assurer que l'alerte retourne le message "User does not exist"

});

test('03(Bis)_connexion_username_sans_mdp', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/'); // Aller sur le site
    await page.getByRole('link', { name: 'Log in' }).click(); // Cliquer sur le Bouton Log in 
    await page.locator('#loginusername').fill('test'); // Remplir le username avec "test"
    await page.getByRole('button', { name: 'Log in' }).click(); // CLiquer sur le bouton Log in
    await page.waitForTimeout(2000); // Attendre 2 secondes car il y'a un problème de détection de l'alerte sur ce test il a donc fallu contourner.
    expect(await page.locator('#logout2').isVisible()).toBe(false); // Vérifier que la connexion a échouée et que le bouton Log out ne s'affiche pas.

});

test('04_deconnexion', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/'); // Aller sur le site 
    await page.getByRole('link', { name: 'Log in' }).click(); // Cliquer sur le bouton Log in
    await page.locator('#loginusername').fill('test'); // Remplir le username avec un compte existant (test)
    await page.locator('#loginpassword').fill('test'); // Remplir le Mdp avec un compte existant (test)
    await page.getByRole('button', { name: 'Log in' }).click(); // Cliquer sur le bouton Log in
    await page.getByRole('link', { name: 'Log out' }).click(); // Cliquer sur le bouton Log out
    await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible(); // Vérifier la déconnexion en s'assurant que le Bouton Log in est réapparu. 

});
