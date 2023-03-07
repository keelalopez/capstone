class Material < ApplicationRecord
    belongs_to :project
    belongs_to :division

    validates :name, presence: true
    validates :status, presence: true

    def order_by_date
        # (self.lead_time*7)
        # DateTime.current
        # (self.need_by_date.to_datetime - DateTime.current).to_i/7

        # days until date by needed
        days_delivery = (self.need_by_date.to_datetime - DateTime.current).to_i
        
        # Days until date needed minus lead time
        days_order = (days_delivery - (self.lead_time*7))
        
        # Last day to order before it's late
        order_by_date = (DateTime.current + days_order)
        
    end

end

