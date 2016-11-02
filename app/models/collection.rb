class Collection < ApplicationRecord
  has_many :biomaterials
  validates :name, presence: true
end
