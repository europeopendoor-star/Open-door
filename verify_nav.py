from playwright.sync_api import sync_playwright

def verify_navigation():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        # Desktop verification
        print("Verifying Desktop...")
        page = browser.new_page(viewport={"width": 1280, "height": 720})
        page.goto("http://localhost:3000")
        page.wait_for_selector("nav")

        # Take screenshot of the navbar
        page.screenshot(path="desktop_nav.png", clip={"x": 0, "y": 0, "width": 1280, "height": 100})
        print("Desktop screenshot taken.")

        # Mobile verification
        print("Verifying Mobile...")
        page_mobile = browser.new_page(viewport={"width": 375, "height": 667})
        page_mobile.goto("http://localhost:3000")
        page_mobile.wait_for_selector("nav")

        # Click the menu button
        # Using a selector that targets the button inside the nav which is hidden on md screens
        # In App.tsx: <button className="md:hidden text-white p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>

        page_mobile.locator("nav button.md\:hidden").click()

        # Wait for menu to open (animation)
        page_mobile.wait_for_timeout(1000)

        # Take screenshot of the mobile menu
        page_mobile.screenshot(path="mobile_nav.png")
        print("Mobile screenshot taken.")

        browser.close()

if __name__ == "__main__":
    verify_navigation()
