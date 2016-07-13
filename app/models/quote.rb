class Quote < ApplicationRecord
  validates :text, :author, presence: true
end
