require 'rails_helper'

RSpec.describe Project, type: :model do

  it 'is not valid without a name' do
    expect(build(:project, name: nil)).to_not be_valid
  end
end
