FactoryGirl.define do
  factory :biomaterial_set do
    sequence(:name) { |i| "Set #{i}" }

    transient do
      biomaterial_count 5
    end

    after(:create) do |set, evaluator|
      create_list(:biomaterial, evaluator.biomaterial_count, biomaterial_sets: [set])
    end

  end
end
