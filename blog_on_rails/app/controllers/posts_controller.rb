class PostsController < ApplicationController
  def index
    @posts = Post.order(created_at: :desc)
  end

  def new
    @post = Post.new
  end

  def show
    @post = Post.find params[:id]
    @comments = @post.comments
    @comment = Comment.new
  end

  def create
    post_params = params.require(:post).permit([:title, :body])
    @post = Post.new post_params
    @post.user = current_user

    if @post.save
      redirect_to post_path(@post)
    else
      render :new
    end

  end

  def destroy
    @post = Post.find params[:id]
    @post.destroy
    redirect_to posts_path
  end

  def edit
    @post = Post.find params[:id]
  end

  def update
    @post = Post.find params[:id]
    post_params = params.require(:post).permit([:title, :body])
    if @post.update post_params
      redirect_to posts_path(@post)
    else
      render :edit
    end
  end

  private
    def authorize_user!
      @post = Post.find params[:id]
      unless can?(:manage, @post)
        flash[:alert] = 'Access Denied!'
        redirect_to post_path(@post)
      end
    end

    def find_post
      @post = Post.find params[:id]
    end

    def post_params
      params.require(:post).permit(:title, :description)
    end


end
