$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "This feature deals with the login functionality of the application",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1748338581,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with correct username and password table",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password-table",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter the following for Login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 7
    },
    {
      "cells": [
        "admin",
        "adminpassword"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see the menu page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 2379737770,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iEnterTheFollowingForLogin(DataTable)"
});
formatter.result({
  "duration": 313799109,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 351165347,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheMenuPage()"
});
formatter.result({
  "duration": 55219373,
  "status": "passed"
});
formatter.after({
  "duration": 133868,
  "status": "passed"
});
formatter.before({
  "duration": 1038921789,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Enter user name as \"admin\" enter password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the menu page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 2692935810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 20
    },
    {
      "val": "admin",
      "offset": 46
    }
  ],
  "location": "LoginStep.enterUserNameAsEnterPasswordAs(String,String)"
});
formatter.result({
  "duration": 186523,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 548784542,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheMenuPage()"
});
formatter.result({
  "duration": 52994926,
  "status": "passed"
});
formatter.after({
  "duration": 79875,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Login with correct username and password using Scenario outline",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I enter \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see the menu page",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 25,
      "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline;;1"
    },
    {
      "cells": [
        "execute",
        "automation"
      ],
      "line": 26,
      "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline;;2"
    },
    {
      "cells": [
        "admin",
        "password"
      ],
      "line": 27,
      "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline;;3"
    },
    {
      "cells": [
        "testName",
        "testPassword"
      ],
      "line": 28,
      "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 986570323,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Login with correct username and password using Scenario outline",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I enter execute and automation",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see the menu page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 2689365539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "execute",
      "offset": 8
    },
    {
      "val": "automation",
      "offset": 20
    }
  ],
  "location": "LoginStep.iEnterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 191432,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 361067145,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheMenuPage()"
});
formatter.result({
  "duration": 54355029,
  "status": "passed"
});
formatter.after({
  "duration": 68719,
  "status": "passed"
});
formatter.before({
  "duration": 993185206,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Login with correct username and password using Scenario outline",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I enter admin and password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see the menu page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 2551606487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 18
    }
  ],
  "location": "LoginStep.iEnterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 184292,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 622004304,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheMenuPage()"
});
formatter.result({
  "duration": 54210898,
  "status": "passed"
});
formatter.after({
  "duration": 85676,
  "status": "passed"
});
formatter.before({
  "duration": 984557389,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Login with correct username and password using Scenario outline",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password-using-scenario-outline;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I enter testName and testPassword",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see the menu page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 2285563142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testName",
      "offset": 8
    },
    {
      "val": "testPassword",
      "offset": 21
    }
  ],
  "location": "LoginStep.iEnterUsernameAndPassword(String,String)"
});
formatter.result({
  "duration": 164658,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "duration": 540967075,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheMenuPage()"
});
formatter.result({
  "duration": 55785189,
  "status": "passed"
});
formatter.after({
  "duration": 183400,
  "status": "passed"
});
formatter.before({
  "duration": 1036023984,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Login with correct username and password, enter email as admin",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password,-enter-email-as-admin",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I enter the users email address ass Email:admin",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I verify the count of my salary digits for Rs 1000",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I just need to see how stop looks for Cucumber-Java8",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter the following for Login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 36
    },
    {
      "cells": [
        "nazar.moonart",
        "1234"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should see the menu page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.iNavigateToTheLoginPage()"
});
formatter.result({
  "duration": 2351666907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 42
    }
  ],
  "location": "LoginStep.iEnterTheUsersEmailAddressAssEmailAdmin(String)"
});
formatter.result({
  "duration": 165105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 46
    }
  ],
  "location": "LoginStep.iVerifyTheCountOfMySalaryDigitsForRs(int)"
});
formatter.result({
  "duration": 225345,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginStep.iEnterTheFollowingForLogin(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.iClickLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStep.iShouldSeeTheMenuPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 83444,
  "status": "passed"
});
});