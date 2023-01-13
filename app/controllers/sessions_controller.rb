class SessionsController < ApplicationController

    # ALLOWS FOR CREATE TO WORK WITHOUT BEING AUTHORIZED (needed to signup/login)
    skip_before_action :authorized, only: :create

    # /login
    def create
        # byebug        
        # Using find by bc we are looking by username 
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else 
            render json: {error: "Invalid username or password"}, status: :unauthorized
        end
    end

    # /logout
    def destroy
        byebug
        session.delete :user_id
        head :no_content
    end

end
