class MaterialsController < ApplicationController
    
    wrap_parameters format: []

    def index
        # byebug
        materials = Material.all
        render json: materials, status: :ok
    end

    def user_materials
        # byebug
        user = User.find(session[:user_id])
        materials = user.user_materials_array
        render json: materials
        # each_serializer: MaterialSerializer
    end

    def create
        # byebug
        project = Project.find(params[:project_id])
        division = Division.find(params[:division_id])
        material = Material.create(
            name: params[:name],
            status: params[:status],
            project_id: project.id,
            division_id: division.id
        )
        render json: material, status: :created
    end

    def update
        # byebug
        material = Material.find(params[:id])
        material.update(material_params)
        render json: material, status: :ok
    end

    def destroy
        # byebug
        material = Material.find(params[:id])
        material.destroy
        render json: material, status: :ok
    end

    private

    def material_params
        params.permit(:id, :status)
    end

end
