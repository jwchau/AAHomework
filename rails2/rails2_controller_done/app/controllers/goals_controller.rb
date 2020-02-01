class GoalsController < ApplicationController
  before_action :required_login

  def create
    #with params[:user_id]
    @goal = Goal.new(garams)
    @goal.user_id = params[:user_id]
    flash[:errors] = @goal.errors.full_messages unless @goal.save
    redirect_to user_url(params[:user_id])
  end

  def destroy
    @goal = current_user.goals.find_by(id: params[:id])
    if @goal && @goal.destroy
      redirect_to(users_url)
    end
  end

  def garams
    params.require(:goal).permit(:name, :details, :status, :user_id)
  end
  
end
