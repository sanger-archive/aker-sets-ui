module Api
  module V1
    class ProposalResource < JSONAPI::Resource
      attributes :name
      has_one :aim
    end
  end
end
