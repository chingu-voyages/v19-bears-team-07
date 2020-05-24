class User < ApplicationRecord
  has_many :apps
  has_one_attached :img
  # belongs_to :teams, optional: true

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
