class UsersController < ApplicationController

    #Retrieve all users
    def index
        user = User.all
        render json: user, status: :ok
    end

    def show
        user = User.find_by(id: params[:id])
        render json: user, status: :ok
    end

    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :ok
    end

    def create
          user = User.new(user_params)
          if user.save
          session[:user_id] = user.id
          render json: user, status: :created  
          else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
          end
  
    end

    def signup
       user = User.new(user_params)
        if user.save
          session[:user_id] =user.id
          render json:user, status: :created
        else
          render json: { errors:user.errors.full_messages }, status: :unprocessable_entity
        end
  
    end

    def logged_in
       user = User.find_by(id: session[:user_id])
        if user
          render json:user, status: :ok
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end
       



    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :phone_number, :password)
    end


end
