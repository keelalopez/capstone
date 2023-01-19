class User < ApplicationRecord
    has_many :projects
    has_secure_password

    validates :name, presence: true
    validates :username, presence: true, uniqueness: true

    def projects_count
        self.projects.count
    end

    # ALL MATERIALS FOR A USER
    def materials_count
        user_materials = 0
        array = self.projects.map do |p|
            p.materials.count
        end
        user_materials = array.sum
    end
end
