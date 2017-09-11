Feature: LoginFeature
  This feature deals with the login functionality of the application

  Scenario: Login with correct username and password table
    Given I navigate to the login page
    And I enter the following for Login
      | username | password      |
      | admin    | adminpassword |
    And I click login button
    Then I should see the menu page

  Scenario: Login with correct username and password
    Given I navigate to the login page
    And Enter user name as "admin" enter password as "admin"
    And I click login button
    Then I should see the menu page

  Scenario Outline: Login with correct username and password using Scenario outline
    Given I navigate to the login page
    And I enter <username> and <password>
    And I click login button
    Then I should see the menu page

    Examples:
      | username | password     |
      | execute  | automation   |
      | admin    | password     |
      | testName | testPassword |

  Scenario: Login with correct username and password, enter email as admin
    Given I navigate to the login page
    And I enter the users email address ass Email:admin
    And I verify the count of my salary digits for Rs 1000
    And I just need to see how stop looks for Cucumber-Java8
    And I enter the following for Login
      | username      | password |
      | nazar.moonart | 1234     |
    And I click login button
    Then I should see the menu page