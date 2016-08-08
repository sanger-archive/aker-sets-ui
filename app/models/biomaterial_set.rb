class BiomaterialSet < ApplicationRecord

  has_many :set_elements
  has_many :biomaterials, through: :set_elements

  validates :name, presence: true
end
