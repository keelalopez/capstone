class ProjectsController < ApplicationController

    skip_before_action :authorized, only: [:index]

    def index
        # byebug
        user = User.find(session[:user_id])
        render json: user.projects, status: :ok
    end

    def show
        project = Project.find(params[:id])
        render json: project, status: :ok
    end
end
