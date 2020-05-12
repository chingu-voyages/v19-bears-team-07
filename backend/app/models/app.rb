class App < ApplicationRecord
  has_many :tags
  belong_to :user
end
