require 'rails_helper'

RSpec.describe BiomaterialSet, type: :model do

  it 'is not valid without a name' do
    expect(build(:biomaterial_set, name: nil)).to_not be_valid
  end

  it 'is not valid with duplicate biomaterials in a set' do
    biomaterial = build(:biomaterial)

    expect { create(:biomaterial_set, biomaterials: [biomaterial, biomaterial]) }
      .to raise_error(ActiveRecord::RecordInvalid, /Biomaterial is already part of Set/)
  end

end
