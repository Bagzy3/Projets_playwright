// @ts-check
import { test, expect } from '@playwright/test';


test('creation_compte_valide', async ({ page }) =>  {

    const randomUsername = `user_${Math.floor(Math.random() * 100000)}`;
    const randomPassword = `pass_${Math.floor(Math.random() * 100000)}`;


    await page.goto('https://www.demoblaze.com/');

    await expect(page).toHaveTitle("STORE");

    await page.getByRole('link', { name: 'Sign up' }).click();

    await expect(page.locator('#signInModal')).toContainText('Username:');

    await page.getByRole('textbox', { name: 'Username:' }).fill(randomUsername);

    await page.getByRole('textbox', { name: 'Password:' }).fill(randomPassword);

    await page.getByRole('button', { name: 'Sign up' }).click(); 
  
    const dialog = await page.waitForEvent('dialog');
    expect(dialog.message()).toContain('Sign up successful');

});

test('connexion_compte_valide', async ({ page }) =>  {
    await page.goto('https://www.demoblaze.com/');

    await page.getByRole('link', { name: 'Log in' }).click();

    await page.locator('#loginusername').fill('test');

    await page.locator('#loginpassword').fill('test');

    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page.locator('#nameofuser')).toContainText('Welcome test');

});

test('connexion_identifiants_incorrects', async ({ page }) =>  {
    
    const falseusername = `user_${Math.floor(Math.random() * 100000)}`;
    const falsepasseword = `pass_${Math.floor(Math.random() * 100000)}`;

    await page.goto('https://www.demoblaze.com/');
    
    await page.getByRole('link', { name: 'Log in' }).click();

    await page.locator('#loginusername').fill(falseusername);
    await page.locator('#loginpassword').fill(falsepasseword);

    await page.getByRole('button', { name: 'Log in' }).click();

    const dialog = await page.waitForEvent('dialog');
    expect(dialog.message()).toContain('User does not exist.');

});

test('connexion_username_sans_mdp', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/');
    
    await page.getByRole('link', { name: 'Log in' }).click();
    
    await page.locator('#loginusername').fill('test');

    await page.getByRole('button', { name: 'Log in' }).click();

    await page.waitForTimeout(2000); 

 // Si le logout2 apparait c'est que la connexion a réussi alors qu'il n'y avait pas de mdp donc test échoué
    expect(await page.locator('#logout2').isVisible()).toBe(false);

});

test('deconnexion', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/');

    await page.getByRole('link', { name: 'Log in' }).click();

    await page.locator('#loginusername').fill('test');

    await page.locator('#loginpassword').fill('test');
    
    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page.locator('#logout2')).toBeVisible();

    await page.getByRole('link', { name: 'Log out' }).click();

    // Vérifier que l'utilisateur est bien déconnecté
    await expect(page.getByRole('link', { name: 'Log in' })).toBeVisible();
});
