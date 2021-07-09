Feature: Chai page

  Scenario Outline: Test chai form

    Given I am on the practice page "http://www.practiceselenium.com/practice-form.html"
    Then I Validate page header "Practice form"
    When I enter firstname <fname> and lastname <lname>
    And I select gender <gender> years <yrs> favourite chai <favchai> and reason <reason>
    And I select continent <continent> and commands <command>
    And I click on sumbit button


    Examples:
      | fname  | lname  | gender | yrs | favchai    | reason | continent | command       |
      | bhavna | vuttur | Female | 5  | Oolong Tea | Break  | Asia      | Wait Commands |

