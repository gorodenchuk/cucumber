package steps;

import Base.BaseUtil;
import Transformation.EmailTransform;
import Transformation.SalaryCountTransformer;
import cucumber.api.DataTable;
import cucumber.api.Transform;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import pages.LoginPage;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by NGorodenchuk on 9/8/2017.
 */
public class LoginStep extends BaseUtil{

        private BaseUtil base;

    public LoginStep(BaseUtil base) {
        this.base = base;
    }

    @Given("^I navigate to the login page$")
    public void iNavigateToTheLoginPage() throws Throwable {

        System.out.println("I navigate to the login page");
        base.webDriver.navigate().to("http://www.executeautomation.com/demosite/Login.html");
    }

    @And("^I click login button$")
    public void iClickLoginButton() throws Throwable {
        LoginPage page = new LoginPage(base.webDriver);
        page.ClickLogin();
    }

    @Then("^I should see the menu page$")
    public void iShouldSeeTheMenuPage() throws Throwable {

        Assert.assertEquals("Its not displayed",
                base.webDriver.findElement(By.id("Initial")).isDisplayed(), true);

    }

    @And("^I enter the following for Login$")
    public void iEnterTheFollowingForLogin(DataTable table) throws Throwable {
    //Create an ArrayList
    List<User> users = new ArrayList<User>();
    //Store all the users
     users = table.asList(User.class);

        LoginPage page = new LoginPage(base.webDriver);

        for (User user: users){
//            System.out.println(" The UserName is ***" + user.username + "***");
//            System.out.println(" The Password is ***"  + user.password + "***");
            page.Login(user.username, user.password);
        }

    }

    @And("^I enter ([^\"]*) and ([^\"]*)$")
    public void iEnterUsernameAndPassword(String username, String password) throws Throwable {
        System.out.println(" The UserName is ***" + username + "***");
        System.out.println(" The Password is ***"  + password + "***");
    }

    @And("^Enter user name as \"([^\"]*)\" enter password as \"([^\"]*)\"$")
    public void enterUserNameAsEnterPasswordAs(String username, String password) throws Throwable {
        System.out.println("USER " + username + "PASSWORD " + password);
    }

    @And("^I enter the users email address ass Email:([^\"]*)")
    public void iEnterTheUsersEmailAddressAssEmailAdmin(@Transform(EmailTransform.class) String email) throws Throwable {

        System.out.println("The Email Address is ***" + email + "***");

    }

    @And("^I verify the count of my salary digits for Rs (\\d+)$")
    public void iVerifyTheCountOfMySalaryDigitsForRs(@Transform(SalaryCountTransformer.class) int salary) throws Throwable {
        System.out.println("My salary digits count is: " + salary);
    }

    public class User{

        private String username;
        private String password;

        public User(String userName, String passWord) {
            username = userName;
            password = passWord;
        }
    }
}
