class DivisionsController < ApplicationController
    
    def index
        # user = User.find(session[:user_id])
        render json: Division.all, status: :ok
    end
end
