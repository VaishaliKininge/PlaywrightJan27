


XML - custom tags / any tag can be given  - user defined 
html  - type of XML  -predefined tags 

xpath - XML path 

Tag = input
attributes - type, class , id etc.


<input type="submit" class="submit-button btn_action" data-test="login-button" id="login-button" name="login-button" value="Login" fdprocessedid="npi1mo">

html - parent  -chile hierarchy 

absolute Xpath 
starts with  - single shash   /   exact next child

/html/body/div/div/div[2]/div[1]/div/div/form/div[1]/input


relative xpath 
starts with  - double shash   //
distant child
//input[@id="user-name"]

tag text
text () = 
//a[text()="Gmail"]

contains    
//a[contains(text(),"Gma")]
//a[starts-with(text(),"Gma")]