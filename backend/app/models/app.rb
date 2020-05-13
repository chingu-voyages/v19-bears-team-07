class App < ApplicationRecord
  belongs_to :user, optional: true
  has_many :tags
end
