class UsersController < ApplicationController

    # ALLOWS FOR CREATE TO WORK WITHOUT BEING AUTHORIZED (needed to signup)
    skip_before_action :authorized, only: :create
    # ALLOWS FOR PARAMS TO NOT BE DOUBLED UP
    wrap_parameters format: []

    # /signup
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :ok 
    end

    def show
        user = User.find(session[:user_id])
        render json: user, status: :ok
    end

    private

    def user_params
        params.permit(:username, :name, :password, :password_confirmation)
    end
end
