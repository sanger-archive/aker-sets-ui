FactoryGirl.define do
  factory :collection do
    sequence(:name) { |i| "Collection #{i}" }
    program
  end
end
