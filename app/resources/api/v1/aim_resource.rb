module Api
  module V1
    class AimResource < JSONAPI::Resource
      attributes :name
      has_many :proposals
      has_one :project
    end
  end
end
