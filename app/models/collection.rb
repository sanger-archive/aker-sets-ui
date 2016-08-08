class Collection < ApplicationRecord
  has_many :biomaterials
  belongs_to :program
  validates :name, presence: true
end
