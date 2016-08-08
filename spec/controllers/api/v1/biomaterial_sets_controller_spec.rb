require 'rails_helper'

RSpec.describe Api::V1::BiomaterialSetsController, type: :controller do

  describe 'GET #show' do

    it 'has a size attribute in the meta' do
      biomaterial_set = create(:biomaterial_set, biomaterial_count: 10)

      get :show, params: { id: biomaterial_set.id}

      expect(response).to have_http_status(:ok)

      body = JSON.parse(response.body, symbolize_names: true)

      expect(body[:data][:meta][:size]).to be(10)
    end
  end
end