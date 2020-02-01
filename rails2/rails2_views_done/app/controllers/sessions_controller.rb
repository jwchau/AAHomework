class SessionsController < ApplicationController
  before_action :required_login, only: [:destroy]

  def new

    render :new
  end

  def create
    user = User.find_by_credentials(sarams[:username], sarams[:password])
    if user
      session[:session_token] = user.reset_session_token!
      redirect_to users_url
    else
      flash[:errors] = ['Invalid username or password']
      render :new
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    redirect_to new_session_url
  end

  def sarams
    params.require(:user).permit(:username, :password)
  end

end
