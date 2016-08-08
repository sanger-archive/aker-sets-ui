class Biomaterial < ApplicationRecord
  has_many :set_elements
  has_many :biomaterial_sets, through: :set_elements

  belongs_to :collection, optional: true

  scope :unsorted, -> { where(collection: nil) }
end
