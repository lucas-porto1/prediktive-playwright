import { test, expect } from '@playwright/test'
import { DuckDuckGoPage } from '../pages/DuckDuckGoPage'

test.describe('Validate DuckDuckGo Search', () => {
    let duckDuckGoPage
    const search = "android"

    test.beforeEach(async ({ page }) => {
        duckDuckGoPage = new DuckDuckGoPage(page)
        await page.goto('/')
    })

    test('Search results should include the search term', async ({ }) => {
        await duckDuckGoPage.getSuggestionList(search)
        const suggestions = await duckDuckGoPage.getSuggestionItems()

        suggestions.forEach(item => {
            expect(item).toContain(search)
        })
    })

    test('Filter should display all available regions', async ({ }) => {
        await duckDuckGoPage.search(search)
        await duckDuckGoPage.filterRegion()

        const count = await duckDuckGoPage.filterDropdown.count()
        expect(count).toBeGreaterThan(10)
    })
})