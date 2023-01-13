class Project < ApplicationRecord
    belongs_to :user

<<<<<<< HEAD
    has_many :joiners
    has_many :materials, through: :joiners
end
=======
    has_many :materials
    has_many :divisions, through: :materials

end
>>>>>>> 95f3dab70515a69af1e2c5fd6d8d450438519cd9
