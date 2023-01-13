class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :completion_date, :architect, :owner

end
