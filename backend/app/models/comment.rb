class Comment < ApplicationRecord
  belongs_to :app, optional: true
end
