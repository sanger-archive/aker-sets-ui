require 'rails_helper'

RSpec.feature "Authentications", type: :feature do

  context 'When I visit the set page' do

    before do
      visit sets_index_path
    end

    context 'and I\'m not logged in' do

      it 'redirects me to the login page' do
        expect(page).to have_current_path(new_user_session_path)
      end

    end

  end

  context 'When I am logged in' do
    before :each do
      sign_in(create(:user))
    end

    it 'will take me to the homepage' do
      visit root_path
      expect(page).to have_current_path(root_path)
    end
  end

end
