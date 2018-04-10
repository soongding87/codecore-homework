class Ability
  include CanCan::Ability

  def initialize(user)


    can(:manage, Post) do |post|

      user == post.user
    end


    can(:manage, Comment) do |comment|
      user == comment.user
    end


  end
end
