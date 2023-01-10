class SessionsController < ApplicationController

    # ALLOWS FOR CREATE TO WORK WITHOUT BEING AUTHORIZED (needed to signup/login)
    skip_before_action :authorized, only: :create

    # /login
    def create
        # Using find by bc we are looking by username 
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        render json: user
    end

    # /logout
    def destroy
        session.delete :user_id
        head :no_content
    end

end
