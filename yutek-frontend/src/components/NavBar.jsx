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




// get "/me", to: "users#logged_in"

//This route maps the GET HTTP method to the "/me" URL path, and it is handled by the logged_in action in the UsersController.

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

