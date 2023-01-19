class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :password_digest, :company, :position, :projects_count

  has_many :projects
end
