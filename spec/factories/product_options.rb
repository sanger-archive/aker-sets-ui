FactoryGirl.define do
  factory :product_option do
    product
    sequence(:name) { |i| "Option #{1}" }
  end
end
