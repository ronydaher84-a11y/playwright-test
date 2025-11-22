import { Page, Locator } from '@playwright/test';

export class RegistrationPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly usernameInput: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly createAccountBtn: Locator;
  readonly termsCheckbox: Locator;
  readonly permissionCheckbox: Locator;
  readonly selectCountry: Locator;
  readonly phoneNumber: Locator;
  readonly nextButton: Locator;
  readonly dateInput: Locator;
  readonly stateInput: Locator;
  readonly licenseNumber: Locator;
  readonly dateExpiration: Locator;
  readonly estimatedSales: Locator;
  readonly individualAgent: Locator;
  readonly isPreferredTitleVendor: Locator;
  readonly reviewButton: Locator;
  readonly skipButton: Locator;
  readonly submitButton: Locator;
  readonly hasPendingTransactions: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.getByTestId('text-input-First Name');
    this.lastNameInput = page.getByTestId('text-input-Last Name');
    this.usernameInput = page.getByTestId('text-input-Username');
    this.emailInput = page.getByTestId('email-input-Email');
    this.createAccountBtn = page.getByRole('button', { name: 'Submit' });
    this.passwordInput = page.locator('input[name="password"]');
    this.confirmPasswordInput = page.locator('input[name="confirmPassword"]');
    this.selectCountry = page.getByTestId('country');
    this.termsCheckbox = page.locator('input[name = "terms"]');
    this.permissionCheckbox = page.getByTestId('consentedToCallMessage');
    this.phoneNumber = page.locator('input[name="phoneNumber"]');
    this.nextButton = page.getByText('Next');
    this.dateInput = page.locator('input[name="birthDate"]');
    this.stateInput = page.locator('#selectedProvinces');
    this.licenseNumber = page.getByPlaceholder('NY4235567');
    this.dateExpiration = page.locator('.react-datepicker__input-container');
    this.estimatedSales = page.locator('#estimatedSales');
    this.individualAgent = page.locator('input[name="individualAgent"]');
    this.isPreferredTitleVendor = page.locator(
      'input[name="isPreferredTitleVendor"]',
    );
    this.reviewButton = page.locator('button:has-text("Review")');
    this.skipButton = page.locator('button:has-text("Skip")');
    this.submitButton = page.locator('button:has-text("Submit")');
    this.hasPendingTransactions = page.locator(
      'input[name="hasPendingTransactionsWithCurrentBrokerage"]',
    );
  }

  async navigateTo(): Promise<void> {
    await this.page.goto('https://bolt.playrealbrokerage.com/');
  }
}
