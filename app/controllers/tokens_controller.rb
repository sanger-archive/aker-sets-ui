class TokensController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :create
  before_action :authenticate_user!

  def create
    render json: { token: JWTSerializer.generate_jwt(current_user) }, status: :created
  end

end
