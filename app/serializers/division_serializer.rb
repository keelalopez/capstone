class DivisionSerializer < ActiveModel::Serializer
  attributes :id, :name, :number
  
  has_many :materials
end
