

Feature: The Internet Website Homepage

  Scenario Outline: As a user, I can open Internet website

    Given I open te browser and load the URL<homepageurl>
    Then I should see a header with text <headertext>

    Examples:
     |homepageurl                               |headertext
     |https://the-internet.herokuapp.com/       |Welcome to the-Internet