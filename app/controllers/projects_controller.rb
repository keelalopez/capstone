class ProjectsController < ApplicationController
    has_many :materials
    has_many :divisions, through: :materials
end
