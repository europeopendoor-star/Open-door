from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            page.goto("http://localhost:3000/jobs")

            # Wait for content
            page.wait_for_timeout(2000)

            # Click the first Apply button
            # We use a locator that finds buttons with text "Apply"
            apply_buttons = page.locator("button", has_text="Apply")
            if apply_buttons.count() > 0:
                print(f"Found {apply_buttons.count()} apply buttons")
                apply_buttons.first.click()

                # Wait for modal animation
                page.wait_for_timeout(1000)

                # Check for modal content
                if page.is_visible("text=Apply for this role"):
                    print("Modal opened successfully")
                else:
                    print("Modal did not open")

                # Take screenshot
                page.screenshot(path="apply_modal.png")
            else:
                print("No Apply buttons found")
                page.screenshot(path="no_buttons.png")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
