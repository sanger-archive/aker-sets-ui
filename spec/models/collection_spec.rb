require 'rails_helper'

RSpec.describe Collection, type: :model do

  it 'is not valid without a name' do
    expect(build(:collection, name: nil)).to_not be_valid
  end

end
