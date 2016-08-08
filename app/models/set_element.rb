class SetElement < ApplicationRecord

  belongs_to :biomaterial
  belongs_to :biomaterial_set

  validates_uniqueness_of :biomaterial_id, scope: :biomaterial_set_id, message: "is already part of Set"

end
