class Program < ApplicationRecord
  has_many :projects
  has_many :collections
  validates :name, presence: true
end
