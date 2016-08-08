FactoryGirl.define do
  factory :product do
    sequence(:name) { |i| "Product #{i}" }
  end
end
