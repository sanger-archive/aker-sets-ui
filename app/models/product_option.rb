class ProductOption < ApplicationRecord
  has_many :product_option_values
  belongs_to :product

  validates :name, presence: true
  validates :select_type, inclusion: { in: %w{ multi single },
    message: "%{value} is not valid. Must be either 'multi' or 'single'" }

  after_initialize :set_defaults

  private

  def set_defaults
    self.select_type ||= 'single'
  end
end
