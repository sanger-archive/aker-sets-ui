FactoryGirl.define do
  factory :project do
    sequence(:name) { |i| "Project #{i}" }
    program
  end
end
