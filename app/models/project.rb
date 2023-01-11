class Project < ApplicationRecord
    belongs_to :user

    has_many :joiners
    has_many :materials, through: :joiners
end
