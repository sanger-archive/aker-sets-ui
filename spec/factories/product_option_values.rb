FactoryGirl.define do
  factory :product_option_value do
    product_option
    sequence(:value) { |i| "Value #{i}" }
  end
end
