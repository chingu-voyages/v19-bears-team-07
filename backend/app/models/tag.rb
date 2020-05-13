class Tag < ApplicationRecord
  belongs_to :app, optional: true
end
