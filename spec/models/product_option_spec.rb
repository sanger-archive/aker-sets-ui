require 'rails_helper'

RSpec.describe ProductOption, type: :model do

  it 'is not valid without a name' do
    expect(build(:product_option, name: nil)).to_not be_valid
  end

  it 'sets select_type to single by default' do
    expect(build(:product_option).select_type).to eql('single')
  end

  it 'is not valid if select_type is not either multi or single' do
    expect(build(:product_option, select_type: 'infinite')).to_not be_valid
  end

end
