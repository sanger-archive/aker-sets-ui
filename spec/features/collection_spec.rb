require 'rails_helper'

RSpec.describe 'Collection Curation', type: :feature, js: true do

  describe '#index' do

    before :each do
      @programs = create_list(:program, 5)
    end

    it 'displays all the programs' do
      visit collections_index_path

      wait_for_ajax

      @programs.each do |program|
        expect(page).to have_content(program.name)
      end
    end

    context 'when a program link is clicked' do

      before :each do
        visit collections_index_path
        wait_for_ajax
        click_link @programs.first.name
        wait_for_ajax
      end

      it 'displays information about the program' do
        expect(page.find('#content')).to have_content(@programs.first.name)
      end

    end

  end

end