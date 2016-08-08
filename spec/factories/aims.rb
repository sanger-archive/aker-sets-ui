FactoryGirl.define do
  factory :aim do
    sequence(:name) { |i| "Aim #{i}" }
    project
  end
end
