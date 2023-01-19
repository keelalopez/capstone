class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :password_digest, :company, :position

  has_many :projects
end
