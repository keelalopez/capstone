class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :completion_date, :architect, :owner

  has_many :materials
  # has_many :divisions, through: :materials
end
