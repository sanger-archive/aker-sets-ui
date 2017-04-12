require 'rails_helper'

RSpec.describe TokensController, type: :controller do
  describe "POST /token" do

    before(:each) do
      @request.env['devise.mapping'] = Devise.mappings[:user]
      @request.headers['accept'] = 'application/json'
    end

    context 'when I am not authenticated' do
      it "does not give me a token" do
        post :create
        expect(response).to have_http_status(401)
      end
    end

    context 'when I am authenticated' do
      before do
        sign_in(create(:user))
      end

      it "gives me a token" do
        post :create
        expect(response).to have_http_status(201)

        body = JSON.parse(response.body)
        expect(body.has_key?("token")).to be true
      end
    end

  end
end
