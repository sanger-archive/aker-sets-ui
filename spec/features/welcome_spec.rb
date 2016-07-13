require 'rails_helper'

RSpec.describe 'Welcome page', type: :feature do
  before do
    @quote = create(:quote)
  end

  scenario 'Someone visits the root page' do
    visit root_path
    expect(page).to have_content('Aker')
  end
end
