class Division < ApplicationRecord
    has_many :materials
    has_many :projects, through: :materials
end
