class MaterialsController < ApplicationController
    def index
        # byebug
        materials = Material.all
        render json: materials, status: :ok
    end
end
