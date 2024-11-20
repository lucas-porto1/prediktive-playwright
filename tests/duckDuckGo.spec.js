import { test, expect } from '@playwright/test'
import { DuckDuckGoPage } from '../pages/DuckDuckGoPage'

test.describe('Validate DuckDuckGo Search', () => {
  let duckDuckGoPage
  const search = 'android'

  test.beforeEach(async ({ page }) => {
    duckDuckGoPage = new DuckDuckGoPage(page)
    // Navigate to the homepage before each test
    await page.goto('/')
  })

  test('Search results should include the search term', async ({}) => {
    // Enter the search term and wait for suggestions
    await duckDuckGoPage.getSuggestionList(search)
    const suggestions = await duckDuckGoPage.getSuggestionItems()

    // Validate each suggestion contains the search term
    suggestions.forEach((item) => {
      expect(item).toContain(search)
    })
  })

  test('Filter should display all available regions', async ({}) => {
    // Perform a search and open the region filter
    await duckDuckGoPage.search(search)
    await duckDuckGoPage.filterRegion()

    // Validate the filter dropdown contains enough options
    const count = await duckDuckGoPage.filterDropdown.count()
    expect(count).toBeGreaterThan(10)
  })
})
