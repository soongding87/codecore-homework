class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  validates :title, presence: true, uniqueness: { case_sensitive: false }, length: { maximum: 50 }
validates :body, presence: true, length: { minimum: 50 }
has_many :comments, dependent: :destroy

end
