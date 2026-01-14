# Apna_College_Development

## Side Projects 

### 3. Quora Posts 

💡Concept involved :- RESTful APIs

📽️Algorithm or Working flow :- 

-> GET at '/posts' : to see all posts -- Index route
-> POST at '/posts' : to create a new post -- Create route
-> GET at '/posts/:id' : to see a specific post -- View route
-> PATCH/PUT at '/posts/:id' : to update a specific post -- Update route
-> DELETE at '/posts/:id' : to delete a specific post -- Destroy route

☕Errors/Bugs Faced :- 
->Make sure to include "app.set('view engine','ejs');" into your code . I did everything but this , hence faced a dumb error.


🛰️ New things learned :-
-> array.find() function in JS , docs : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

-> Redirection using res.redirect() function 
-> Sending patch request via a form using 'method-override' package
-> Deleting a post by clicking a button :- This button is wrapped inside a <form> element so when we click on it , the sends a delete request to the 'posts/:id' route with the help of 'method-override' to delete the post.


### 4. Whatsapp Chats

🛰️ Navigation : 

-> models folder -- keeps all the models in one place
-> init.js -- Used to initialize the database with some sample data , run only once at the beginning of the project.

🗺️ Routing : 

-> index route -- '/chats' to show all chats 
-> create route -- '/chats/new' to get the form and then post request on '/chats'
-> edit route -- '/chats/:id/edit' to get the edit page and then patch request on '/chats'