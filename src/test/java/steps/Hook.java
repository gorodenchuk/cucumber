package steps;

import Base.BaseUtil;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

/**
 * Created by gorod on 10.09.2017.
 */
public class Hook extends BaseUtil{
    private BaseUtil base;

    public Hook(BaseUtil base) {
        this.base = base;
    }

    @Before
    public void initializeTest(Scenario scenario) {
        System.out.println("--Scenario name-- " + scenario.getName()+ "\n");
        System.out.println("Opening the browser : MOCK");

//        System.setProperty("webdriver.firefox.marionette", "\\src\\main\\resources\\geckodriver.exe");
//        base.webDriver = new FirefoxDriver();

        //Chrome driver
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\gorod\\workspace\\cucumber\\src\\main\\resources\\chrome-win\\chromedriver.exe");
        base.webDriver = new ChromeDriver();
    }

    @After
    public void tearDownTest(Scenario scenario) {

        if(scenario.isFailed()) {
            //Take screenshot
            System.out.println(scenario.getName());
        }
        System.out.println("Closing the browser : MOCK\n");
        System.out.println("\n");
    }
}
