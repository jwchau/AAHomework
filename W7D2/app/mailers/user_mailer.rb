class UserMailer < ApplicationMailer

    default from: 'everybody@appacademy.io'

    def welcome_email(user)
        @user = user
        @url  = 'http://example.com/login'
        mail(to: "#{user.username}@phonyemail.net", subject: "Welcome to 99 Cats, where we only have 9 cats and they're all the same cat.")
    end
end
