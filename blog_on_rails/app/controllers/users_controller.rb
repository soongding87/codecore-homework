class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
      @user = User.new user_params
      if @user.save
        session[:user_id] = @user.id
        flash[:notice] = "Thank you, #{@user.name}, for signing up!"
        redirect_to home_path
      else
        render :new
      end
    end

    def edit
      @user = User.find params[:id]
    end

    def update
      @user = User.find params[:id]
      session[:user_id] = @user.id

      if @user.update user_params
        redirect_to home_path
      else
        render :edit
      end

      user_password = params.require(:user).permit(:password_digest)
      if @user.password = params[:user][:new_password]
        @user.update user_password
      end
    end

    def change
      @user = User.find params[:id]
      session[:user_id] = @user.id
    end


    private
    def user_params
      params.require(:user).permit(
        :name, :email, :password, :password_confirmation
      )
    end
end
