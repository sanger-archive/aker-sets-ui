class Aim < ApplicationRecord
  belongs_to :project
  has_many :proposals
  validates :name, presence: true
end
