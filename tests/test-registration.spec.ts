import { test, expect } from '@playwright/test';
import generator from 'generate-password-ts';
import { RegistrationPage } from '../pages/RegistrationPage';

test.describe('test agent registration at real', () => {
  let registrationPage: RegistrationPage;

  test.beforeEach(async ({ page }) => {
    registrationPage = new RegistrationPage(page);
    await registrationPage.navigateTo();
    await expect(page).toHaveURL('https://bolt.playrealbrokerage.com/login');
  });

  test('test application form', async ({ page }) => {
    // click on join real
    await page.getByText('Join Real').click();
    await expect(page).toHaveURL('https://app.playonereal.com/agent-signup');

    // fill in the registration form
    const generatedPassword = generator.generate({
      length: 16,
      numbers: true,
      symbols: true,
      uppercase: true,
      lowercase: true,
      excludeSimilarCharacters: true,
      strict: true,
    });

    const generatedEmail = generator.generate({
      length: 10,
      numbers: true,
      symbols: false,
      uppercase: false,
      lowercase: false,
      excludeSimilarCharacters: false,
      strict: true,
    });

    const generatedUsername = generator.generate({
      length: 12,
      numbers: true,
      symbols: false,
      uppercase: true,
      lowercase: true,
      excludeSimilarCharacters: true,
      strict: true,
    });

    await registrationPage.firstNameInput.fill('Rony');
    await registrationPage.lastNameInput.fill('Daher');
    await registrationPage.usernameInput.fill(generatedUsername);
    await registrationPage.passwordInput.fill(generatedPassword);
    await registrationPage.confirmPasswordInput.fill(generatedPassword);
    await registrationPage.emailInput.fill(generatedEmail + '@test.com');
    await registrationPage.permissionCheckbox.click();

    // submit the form
        /*await page.getByText('Create Account').click();
    await expect(page).toHaveURL(
      'https://bolt.playrealbrokerage.com/onboarding/application-form',
    );

    await registrationPage.phoneNumber.fill('18888888888');
    await registrationPage.nextButton.click();

    await registrationPage.dateInput.fill('01/01/1990');
    await registrationPage.nextButton.click();

    await registrationPage.stateInput.locator('..').click();
    await page.getByText('California').click();
    await page.locator('body').click({ position: { x: 0, y: 0 } });
    await registrationPage.nextButton.click();
    await page.getByText('Yes').click();

    await page.getByText('I do not belong to a MLS.').click();
    await registrationPage.nextButton.click();

    await page.getByText('I do not belong to a Board.').click();
    await registrationPage.nextButton.click();

    await registrationPage.licenseNumber.fill('ABCD-7771234');
    await registrationPage.nextButton.click();

    await page.getByText('Yes').click();
    await registrationPage.nextButton.click();

    await registrationPage.dateExpiration.locator('input').fill('01/01/2026');
    await registrationPage.nextButton.click();

    await page.getByText('No').click();
    await registrationPage.nextButton.click();

    await registrationPage.skipButton.click();
    await registrationPage.nextButton.click();

    await page.getByText('I do not currently belong to a brokerage.').click();
    await registrationPage.hasPendingTransactions.last().click();
    await registrationPage.nextButton.click();

    await registrationPage.estimatedSales.fill('5000000');
    await registrationPage.nextButton.click();

    await registrationPage.individualAgent.first().check();
    await registrationPage.nextButton.click();

    await registrationPage.isPreferredTitleVendor.last().check();
    await registrationPage.reviewButton.click();
    await registrationPage.submitButton.click();

    await expect(
      page.getByText('Thank you, Rony for filling out the application form.'),
    ).toBeVisible(); */
  });
});
