require 'rails_helper'

RSpec.describe Quote, type: :model do
  it 'is not valid without some text' do
    expect(build(:quote, text: nil)).to_not be_valid
  end

  it 'is not valid without an author' do
    expect(build(:quote, author: nil)).to_not be_valid
  end
end
