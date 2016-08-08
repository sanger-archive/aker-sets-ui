module Api
  module V1
    class ProgramResource < JSONAPI::Resource
      attributes :name
      has_many :projects
      has_many :collections
    end
  end
end