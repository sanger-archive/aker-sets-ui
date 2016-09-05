class Product < ApplicationRecord
  has_many :product_options

  validates :name, presence: true
end
