class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :completion_date, :architect, :owner, :materials_count, :pending_count

  has_many :materials
  # has_many :divisions, through: :materials
  
  # def materials_count
  #   object.materials.count
  # end
end
