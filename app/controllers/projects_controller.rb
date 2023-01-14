class ProjectsController < ApplicationController

    skip_before_action :authorized, only: [:index]

    def index
        # byebug
        user = User.find(session[:user_id])
        render json: user.projects, status: :ok
    end
end
