class App < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :category, optional: true
  has_many :tags 
  has_many :comments

  def avg_score
    comments.average(:score).round(2).to_f
  end
end
