FactoryGirl.define do
  factory :proposal do
    sequence(:name) { |i| "Proposal #{i}" }
    aim
  end
end
