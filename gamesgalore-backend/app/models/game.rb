class Game < ApplicationRecord
  has_many :releases
  has_many :systems, through: :releases
end
