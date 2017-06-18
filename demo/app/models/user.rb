class User < ApplicationRecord
	mount_uploader :photo, AvatarUploader
end
