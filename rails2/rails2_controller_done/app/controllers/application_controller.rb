class ApplicationController < ActionController::Base

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    session[:session_token] = user.session_token
  end

  def logged_in?
    !!current_user
  end

  def required_login
    redirect_to new_session_url unless logged_in?
  end

end
