class MaterialsController < ApplicationController
    
    wrap_parameters format: []

    def index
        # byebug
        materials = Material.all
        render json: materials, status: :ok
    end

    def update
        # byebug
        material = Material.find(params[:id])
        material.update(material_params)
        render json: material, status: :ok
    end

    private

    def material_params
        params.permit(:id, :status)
    end

end
