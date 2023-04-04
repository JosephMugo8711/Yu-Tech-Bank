// The navbar guidance https://propy.com/ 

// User should see a SIGN IN Link
//Routes them to a Sign in form prompting them for email and password
//They can choose to use their google account or social accounts(will implement later together)
//For now ensure user is routed to a sign in form
//Below the sign in form include a link that routes user to signup form
//Sign up prompts them for (:first_name, :last_name, :email, :phone_number, :password)
//When user clicks submit they are taken to their personal dashboard
//When user logouts, and tries logging again prompt user for email and password

//Here are the routes to work with

// post "/login", to: "sessions#create"



// The route post "/login", to: "sessions#create" maps a POST request to the /login URL to the create method of the SessionsController.

// In the create method, the first line finds a user by the email parameter passed in the request. 
// If a user is found and the password parameter matches the user's password, the session's :user_id key is set to the user's id.
//  A JSON response with a message "Logged in successfully" and a status code of 200 (OK) is returned.
// If the email or password is invalid, a JSON response with an error message "Invalid email or password" and a status code of 401 (Unauthorized) is returned.




// get "/profile", to: "users#logged_in"



//This route maps the GET HTTP method to the "/profile" URL path, and it is handled by the logged_in action in the UsersController.

// The logged_in action checks if the user is authenticated by verifying the user_id stored in the session.
//  If the user_id is found, it uses the find_by method to retrieve the user object from the database using the id attribute.
//  If a user is found, the method returns a JSON response with the user object and a HTTP status of 200 (OK).

// If the user_id is not found, it means the user is not authenticated and the method returns a JSON response with an error message of "Not authorized" and a HTTP status of 401 (Unauthorized).

// In summary, this route is used to get the details of the currently logged in user, and it can only be accessed by an authenticated user.


// delete "/logout", to: "sessions#destroy_user"



// The delete "/logout", to: "sessions#destroy_user" route maps an HTTP DELETE request to the destroy_user action within the SessionsController controller.

// The def destroy_user method is responsible for logging out the current user by removing their user_id from the session. 
// It then returns a JSON response with a message indicating that the user has been logged out successfully.

// The session.delete(:user_id) line removes the user_id key-value pair from the session hash, effectively logging out the user.
//  The render json: { message: "Logged out successfully" }, status: :ok line returns a JSON response with a success message and an HTTP status code of 200 (OK).




//  post "/signup", to: "users#signup"


// The post "/signup" route is used to handle user sign-up requests to the application. 
// When a new user submits their information to sign up for an account, their information is sent as parameters to the user_params method.

// In the def signup action, a new user object is created with the provided parameters using the User.new(user_params) method.
//  Then, the if statement checks if the user object is successfully saved to the database using the user.save method.

// If the user is saved successfully, then their session ID is set to their user ID using session[:user_id] = user.id, indicating that the user is now logged in. 
// Then, a JSON response containing the new user object is returned with a created status code (render json:user, status: :created).

// If the user cannot be saved due to validation errors, then an error JSON response is returned with a unprocessable_entity status code, containing the error messages (render json: { errors:user.errors.full_messages }, status: :unprocessable_entity).
//  The user is not saved in this case, and the user is not logged in.



// put "/profile", to: "users#update"


// The put "/profile", to: "users#update" endpoint is responsible for updating the current user's profile information.

// When the endpoint is called, it triggers the update action in the users controller. 
// The first line of the action retrieves the current user's information from the database based on the id parameter passed in the request.

// Next, the action calls the update! method on the retrieved user object, passing in the updated user parameters. 
// The update! method saves the changes to the user object and raises an error if any of the validations fail.

// Finally, the action returns a JSON response containing the updated user information with a status code of :ok indicating that the request was successful.