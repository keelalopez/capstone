class Project < ApplicationRecord
    belongs_to :user

    has_many :materials
    has_many :divisions, through: :materials

    validates :name, presence: true, uniqueness: true
    # validates :owner, presence: true
    # validates :address, presence: true
    # validates :architect, presence: true
    # validates :completion_date, presence: true

    def materials_count
        self.materials.count
    end

    def pending_count
        self.materials.where(status: "Pending").count
    end
end
