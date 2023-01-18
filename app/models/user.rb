class User < ApplicationRecord
    has_many :projects
    has_secure_password

    validates :name, presence: true
    validates :username, presence: true, uniqueness: true
end
