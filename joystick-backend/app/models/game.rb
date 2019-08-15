class Game < ApplicationRecord
  has_many :releases
  has_many :platforms, through: :releases
end
