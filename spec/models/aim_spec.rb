require 'rails_helper'

RSpec.describe Aim, type: :model do

  it 'is not valid without a name' do
    expect(build(:aim, name: nil)).to_not be_valid
  end
end
