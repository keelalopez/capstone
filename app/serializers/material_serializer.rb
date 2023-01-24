class MaterialSerializer < ActiveModel::Serializer
  attributes :id, :name, :status,  :lead_time, :need_by_date, :order_by,:division, :project

  # belongs_to :division
  # belongs_to :project
end
