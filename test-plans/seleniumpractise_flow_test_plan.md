# SeleniumPractise (RahulShetty) — End-to-end Test Plan

## Executive summary
This test plan covers the full shopping workflow on https://rahulshettyacademy.com/seleniumPractise/#/ — a demo grocery store application used for UI automation practice. It includes happy-path flows (search, add to cart, checkout, apply promo code, place order), negative/validation checks, edge cases, accessibility checks, and automation notes tuned for Playwright/Selenium. The plan is suitable for manual testing and for implementing automated end-to-end tests.

Assumptions
- Tests run against the public demo site at https://rahulshettyacademy.com/seleniumPractise/#/
- Each test begins with a fresh browser profile (no previous cart state or cookies).
- Network and backend are accessible and reasonably responsive; timeouts may need adjustment for slower networks.
- Selectors in the plan are suggestions based on typical page structure and should be validated against the live DOM before automating.

Success criteria
- Happy-path tests complete and final confirmation (order placed or confirmation message) appears.
- Price calculations and promo-code behavior match expected business rules.
- UI validation prevents invalid actions (e.g., negative quantities, invalid promo codes).

Failure conditions
- Elements not found within timeouts, mismatch between computed totals and displayed totals, promo-code misbehavior, or unexpected errors on the site.

---

## Application overview / features to test
- Product browsing and filtering via search box
- Product list with name, price, Add to Cart button
- Cart/mini-cart with list of selected items and a Checkout button
- Cart totals (item prices, quantities, total amount)
- Promo code input and Apply action
- Checkout flow (place order / confirm)
- Quantity adjustments and removal of items

Quick selector reference (likely elements)
- Search input: `input.search-keyword` or `input[placeholder='Search for Vegetables and Fruits']`
- Product cards: `.products .product` or `.product` inside `.products`
- Product name: `.product h4` or `.product-name`
- Add button: `.product-action button` or `button:has-text('ADD')`
- Cart icon / view cart: `.cart-icon` or `.cart` (button/link)
- Proceed to checkout: `button:has-text('PROCEED TO CHECKOUT')` or `.cart-preview .action`
- Promo code input: `.promoCode` or `input.promoCode`
- Apply promo button: `.promoBtn` or `button.promoBtn`
- Place order / Continue: `button:has-text('Place Order')` or `button:contains('Place Order')`
- Quantity: `.quantity` or `.increment` / `.decrement`

Adjust these selectors after inspecting the live page. Prefer role/label-based locators where available (for accessibility) and relative scoping when interacting with items in a list.

---

## Test scenarios
Each scenario contains: Title, Assumptions/starting state, Steps (numbered), Expected results, Success criteria, Failure conditions.

### 1. Happy path — Search product, add single product, checkout and place order
Assumption: Fresh session, site reachable
Steps:
1. Navigate to the home page (base URL).
2. In search field, type `ca` (or a short substring) to filter products.
3. Verify product list is filtered to matching items (at least one product visible).
4. For the first visible matching product, click `Add`.
5. Click the cart icon or `PROCEED TO CHECKOUT` to view cart.
6. Verify the chosen item appears in the cart with correct name and unit price.
7. Click `PROCEED TO CHECKOUT` (cart page) and verify totals (sum of price * qty).
8. Enter a valid promo code (if available) or skip promo; click Apply.
9. Verify promo applied (discount displayed) or an appropriate message if promo not valid.
10. Click `Place Order` or `Proceed` and verify final confirmation message or success screen.

Expected results:
- Search filters products; add increments cart count.
- Cart contains chosen item with correct price.
- Total equals sum of item subtotals.
- After placing order, success/confirmation message is shown.

Success criteria:
- All assertions pass and final confirmation visible.

Failure conditions:
- No products after search (when expected), cart missing item, mismatched price, failed checkout without message.

---

### 2. Add multiple different items and validate cart totals
Assumptions: Fresh session
Steps:
1. Search and add 3 different products (select by name or index).
2. Go to cart and proceed to checkout page.
3. Capture each product's unit price and quantity.
4. Compute expected subtotal = sum(unitPrice * qty).
5. Verify displayed subtotal equals expected subtotal.

Expected:
- Cart lists all items added.
- Calculated and displayed totals match.

Edge/failure:
- Rounding/formatting differences (handle currency symbols), missing items.

---

### 3. Increase quantity and verify price recalculation
Assumptions: Product already in cart
Steps:
1. Add a product to cart and go to cart.
2. Increase quantity using the `+` / increment control to 3.
3. Verify that the subtotal for that product becomes unitPrice * 3.
4. Verify overall total updates accordingly.

Expected:
- Subtotal and total update immediately and correctly.

Failure conditions:
- Quantity change doesn't update price or UI shows stale values.

---

### 4. Remove product from cart
Steps:
1. Add two items to cart.
2. Remove one item from the cart (click remove / delete icon).
3. Verify that the removed item disappears and totals update.

Expected:
- Removal UI works and totals reflect remaining items.

---

### 5. Promo code: valid and invalid scenarios
A. Valid promo code
Steps:
1. Add items to cart and go to checkout.
2. Enter valid promo code (if known) and click Apply.
3. Verify discount is applied and discounted total is correct.

Expected:
- Promo applied success message appears; totals reflect discount.

B. Invalid promo code
Steps:
1. Enter an invalid promo code (e.g., `INVALID123`) in the promo field and click Apply.
2. Verify appropriate error message shown and no discount applied.

Expected:
- Error message or toast indicating invalid promo; totals unchanged.

---

### 6. Search edge cases and filters
- Empty search: Clear search input and verify full product list reappears.
- No results: Type a random string (`xyz123`) and verify `No results` state or empty list.
- Case-insensitive search: Verify `Ca` and `ca` produce same results.

---

### 7. Performance / load test (smoke)
- Repeat add-to-cart flow 10 times in a row to catch UI memory leaks or sluggish behavior.
- Measure response time for adding an item to cart and applying promo.

---

### 8. Accessibility and UI checks
- Verify interactive elements have accessible names: search input has placeholder/label, Add buttons have accessible labels.
- Use `getByRole` or ARIA where possible in automation.

---

## Data & variables
- Search terms: `ca`, `ber`, `apple`, `tomato` (examples)
- Quantities: 1, 2, 3
- Promo codes: (use known valid code from environment if provided). If none, test invalid code behavior.

---

## Automation notes & recommended locators (Playwright/Selenium)
- Prefer scoping: find `.products` then `.product` within it, then interact with children (title, price, add button).
- Use `locator.nth(i)` or `.at(index)` rather than global selectors for repeated elements.
- Wait for UI updates using `await expect(locator).toBeVisible()` and `toHaveText()` rather than arbitrary timeouts.
- Normalize currency strings before numeric comparison: `Number(text.replace(/[^0-9.-]+/g, ''))`.
- For typing into search, use `page.type(selector, text, { delay })` or `keyboard.type` for suggestion widgets.
- If automating visually flaky flows (promo toast, toast disappears quickly), capture text with `.textContent()` and assert substring presence.

Example scoped locator pattern (Playwright):
```ts
const products = page.locator('.products .product');
const firstName = await products.nth(0).locator('h4').textContent();
await products.nth(0).locator('button').click();
```

---

## Edge cases and negative scenarios
- Adding the same product twice: test whether cart updates quantity or duplicates line items.
- Extremely large quantity: try setting quantity to large number and assert guardrails (max quantity) or behaviour.
- Promo code concurrency: try applying promo after removing items to ensure discount recalculation.
- Unavailable product: test UI behavior if server returns out-of-stock.

---

## Test run checklist (for automation)
- [ ] Start with an empty browser profile (incognito) or clear storage.
- [ ] Navigate to base URL.
- [ ] Run scenario steps; use assertions after each major action.
- [ ] Capture screenshots when failures occur.
- [ ] Keep tests independent and idempotent.

---

## Recommended test suite structure
- `tests/01-smoke/` — basic happy-path tests
- `tests/02-functional/` — all functional scenarios (add/remove/qty/promo)
- `tests/03-negative/` — validation and error handling
- `tests/04-performance/` — light load tests

---

## Example Playwright happy-path snippet
```ts
// add first search result and checkout
await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
await page.type('input.search-keyword','ca');
const products = page.locator('.products .product');
await expect(products.first()).toBeVisible();
await products.nth(0).locator('button').click();
await page.locator('.cart-icon').click();
await page.locator("button:has-text('PROCEED TO CHECKOUT')").click();
// verify and place order
```

---

## Reporting & logs
- Log item names, prices and computed totals on assertions to simplify debugging.
- Save screenshots and HTML snapshot on failures.

---

## Next steps
1. Validate selectors against the live page and update the reference list.
2. Implement the top-priority automated tests (smoke: search+add+checkout, promo code tests).
3. Run tests in CI, collect flakiness metrics, and increase selectors resilience if needed.


End of test plan.
