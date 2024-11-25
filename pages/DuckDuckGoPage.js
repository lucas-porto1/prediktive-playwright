export class DuckDuckGoPage {
  /**
   * DuckDuckGo page
   * @param {import('@playwright/test').Page} page
   */

  // Initializes the page and defines locators
  constructor(page) {
    this.page = page
    this.searchInput = page.locator('#searchbox_input')
    this.suggestionsList = page.locator('#listbox--1')
    this.suggestionsItems = page.locator('#listbox--1 > li')
    this.regionFilter = page.getByTestId('region-filter-label')
    this.filterDropdown = page.locator('[data-testid=dropdown-options] > div > div')
  }

  // Methods for interacting with the page
  async getSuggestionList(search) {
    await this.searchInput.fill(search)
    await this.suggestionsList.waitFor({ state: 'visible' })
  }

  async getSuggestionItems() {
    return await this.suggestionsItems.evaluateAll((items) =>
      items.map((item) => item.textContent.trim())
    )
  }

  async search(search) {
    await this.searchInput.fill(search)
    await this.searchInput.press('Enter')
  }

  async filterRegion() {
    await this.regionFilter.click()
  }
}
