class ProjectsController < ApplicationController

    # skip_before_action :authorized, only: [:index]
    wrap_parameters format: []

    def index
        # byebug
        user = User.find(session[:user_id])
        render json: user.projects, status: :ok
    end

    def show
        project = Project.find(params[:id])
        render json: project, status: :ok
    end

    def create
        user = User.find(session[:user_id])
        project = Project.create!(
            user_id: user.id,
            name: params[:name],
            address: params[:address],
            owner: params[:owner],
            architect: params[:architect],
            completion_date: params[:completion_date],
        )
        render json: project, status: :created
    end

    def destroy
        byebug
        project = Project.find(params[:id])
        project.destroy
        render json: project, status: :ok
    end

    private

    def projet_params
        params.permit(:name, :address, :owner, :completion_date, :architect)
    end
end
