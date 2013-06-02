class FamilyMember < ActiveRecord::Base
#  attr_accessible :deactivate, :family_member_user_id, :join_pending, :payment_status, :relation_id, :relationship, :user_id


attr_accessible :family_member_user_id, :relationship, :user_id, :join_pending, :payment_status, :deactivate
  belongs_to :user
  belongs_to :relation

end
