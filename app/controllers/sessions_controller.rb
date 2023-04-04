class Users::SessionsController < ApplicationController

    def create
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: { message: "Logged in successfully" }, status: :ok
        else
            render json: { error: "Invalid email or password" }, status: :unauthorized
        end
    end

    def destroy_user
        # # remove the user_id from session
        session.delete(:user_id)
        ## return JSON response
        render json: { message: "Logged out successfully" }, status: :ok
     end


end
