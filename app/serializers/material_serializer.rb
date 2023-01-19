class MaterialSerializer < ActiveModel::Serializer
  attributes :id, :name, :status, :division, :project

  # belongs_to :division
  # belongs_to :project
end
