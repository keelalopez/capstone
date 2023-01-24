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

    def user_materials_array
        # user = User.find(session[:user_id])
        startingArray = []
        array = self.projects.each do |proj|
            proj.materials.each do |mat|
                startingArray.push(mat)
            end
        end
        startingArray
    end

    # USED IN MATERIALS CONTROLLER 
    def pending_materials_filter
        # Using the 'user_materials_array' as helper method
        test = self.user_materials_array
        test.filter do |m|
            m[:status] == 'Pending'
        end
    end

    def delivered_materials_filter
        # Using the 'user_materials_array' as helper method
        materials = self.user_materials_array
        materials.filter do |m|
            m[:status] == 'Complete'
        end
    end

end



# def user_materials_array
#     # user = User.find(session[:user_id])
#     startingArray = []
#     array = self.projects.map do |p|
#         startingArray.push(p.materials)
#     end
#     startingArray
# end
