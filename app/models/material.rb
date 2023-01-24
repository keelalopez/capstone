class Material < ApplicationRecord
    belongs_to :project
    belongs_to :division

    validates :name, presence: true
    validates :status, presence: true

    def order_by
        # (self.lead_time*7)
        # DateTime.current
        # (self.need_by_date.to_datetime - DateTime.current).to_i/7
        # days until date by needed
        (self.need_by_date.to_datetime - DateTime.current).to_i
    end
end

