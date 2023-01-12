class Project < ApplicationRecord
    belongs_to :user

    has_many :materials
    has_many :divisions, through: :materials
end