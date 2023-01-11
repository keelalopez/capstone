class Material < ApplicationRecord
    has_many :joiners
    has_many :projects, through: :joiners
end
