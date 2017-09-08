package Steps;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by NGorodenchuk on 9/8/2017.
 */
public class LoginStep {
    @Given("^I navigate to the login page$")
    public void iNavigateToTheLoginPage() throws Throwable {

        System.out.println("I navigate to the login page");
    }

    @And("^I click login button$")
    public void iClickLoginButton() throws Throwable {

        System.out.println("I click login button");
    }

    @Then("^I should see the menu page$")
    public void iShouldSeeTheMenuPage() throws Throwable {

        System.out.println("I should see the menu page");
    }

    @And("^I enter the following for Login$")
    public void iEnterTheFollowingForLogin(DataTable table) throws Throwable {

        List<List<String>> data = table.raw();

/*        System.out.println(data.get(0).get(0));
        System.out.println(data.get(0).get(1));*/

    //Create an ArrayList
    List<User> users = new ArrayList<User>();
    //Store all the users
        users = table.asList(User.class);

        for (User user: users){
            System.out.println("The UserName is" + user.UserName);
            System.out.println("The UserName is" + user.Password);
        }

    }

    public class User{

        private String UserName;
        private String Password;

        public User(String userName, String password) {
            UserName = userName;
            Password = password;
        }

        public String getUserName() {
            return UserName;
        }

        public String getPassword() {
            return Password;
        }

        public void setUserName(String userName) {
            UserName = userName;
        }

        public void setPassword(String password) {
            Password = password;
        }
    }
}
