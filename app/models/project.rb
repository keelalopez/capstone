class Project < ApplicationRecord
    belongs_to :user

    has_many :materials
    has_many :divisions, through: :materials

    validates :name, presence: true, uniqueness: true
    # validates :owner, presence: true
    # validates :address, presence: true
    # validates :architect, presence: true
    # validates :completion_date, presence: true
end
