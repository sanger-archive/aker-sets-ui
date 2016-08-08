module Api
  module V1
    class ProjectResource < JSONAPI::Resource
      attributes :name
      has_one :program
      has_many :aims
    end
  end
end
