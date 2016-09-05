require 'rails_helper'

RSpec.describe ProductOptionValue, type: :model do

  it 'is not valid without a value' do
    expect(build(:product_option_value, value: nil)).to_not be_valid
  end
end
