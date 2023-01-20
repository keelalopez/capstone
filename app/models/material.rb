class Material < ApplicationRecord
    belongs_to :project
    belongs_to :division

    validates :name, presence: true
    validates :status, presence: true

    # def user_materials_array
    #     # user = User.find(session[:user_id])
    #     array = self.projects.map do |p|
    #         p.materials
    #     end
    #     array
    # end
end

