Feature: Enter Get started section at Playwright

  Scenario: Bob opens Get Started section
    Given Bob opens "https://playwright.dev/"
    When Bob clicks the 'Get Started' button
    Then Bob sees the 'Get Started' section