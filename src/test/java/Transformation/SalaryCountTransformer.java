package Transformation;

import cucumber.api.Transformer;

/**
 * Created by gorod on 10.09.2017.
 */
public class SalaryCountTransformer extends Transformer<Integer> {

    @Override
    public Integer transform(String salary){
        return salary.length();
    }
}
