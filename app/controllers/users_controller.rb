class UsersController < ApplicationController

    # /signup
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :ok 
    end

    private
    
    def user_params
        params.permit(:username, :name, :password, :password_confirmation)
    end
end
