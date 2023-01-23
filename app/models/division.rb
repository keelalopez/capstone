class Division < ApplicationRecord
    has_many :materials
    has_many :projects, through: :materials

    validates :name, presence: true
    validates :number, presence: true
end
