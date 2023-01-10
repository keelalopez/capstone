class SessionsController < ApplicationController

    def create
        # Using find by bc we are looking by username 
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        render json: user
        end
    end

end
