class App < ApplicationRecord
  belongs_to :user, optional: true
  has_many :tags 
  has_many :comments
end
