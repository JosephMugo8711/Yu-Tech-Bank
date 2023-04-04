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



    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :phone_number, :password)
    end


end
