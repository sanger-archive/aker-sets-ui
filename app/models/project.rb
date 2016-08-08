class Project < ApplicationRecord
  belongs_to :program
  has_many :aims
  validates :name, presence: true
end
