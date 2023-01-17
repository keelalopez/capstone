class MaterialSerializer < ActiveModel::Serializer
  attributes :id, :name, :status, :division, :project
end
