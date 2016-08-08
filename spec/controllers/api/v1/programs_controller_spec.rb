require 'rails_helper'

RSpec.describe Api::V1::ProgramsController, type: :controller do

  describe 'GET index' do

    it 'returns all programs' do
      programs = create_list(:program, 5)
      get :index
      expect(response).to have_http_status(:ok)
    end

  end

end