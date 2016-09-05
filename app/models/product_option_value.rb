class ProductOptionValue < ApplicationRecord
  belongs_to :product_option

  validates :value, presence: true
end
