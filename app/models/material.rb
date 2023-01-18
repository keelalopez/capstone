class Material < ApplicationRecord
    belongs_to :project
    belongs_to :division

    validates :name, presence: true
    validates :status, presence: true
end

