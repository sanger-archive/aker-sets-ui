require 'rails_helper'

RSpec.describe Product, type: :model do

  it 'is not valid without a name' do
    expect(build(:product, name: nil)).to_not be_valid
  end
end
