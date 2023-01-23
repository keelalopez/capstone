class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name,:company, :position, :projects_count, :materials_count

  has_many :projects
end
