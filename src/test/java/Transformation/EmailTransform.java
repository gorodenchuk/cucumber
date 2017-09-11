package Transformation;

import cucumber.api.Transformer;

/**
 * Created by gorod on 10.09.2017.
 */
public class EmailTransform extends Transformer<String>{

    @Override
   public String transform(String userName){
       return userName.concat("@gmail.com");
   }
}