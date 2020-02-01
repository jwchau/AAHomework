class UsersController < ApplicationController
  before_action :required_login, only: [ :show, :index ]

  def new
    
    render :new
  end

  def create
    @user = User.new(urams)
    if @user.save
      login(@user)
      redirect_to users_url
    else
      flash[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  def index
    @users = User.all
    render :index
  end

  def urams
    params.require(:user).permit(:username, :password)
  end

end
