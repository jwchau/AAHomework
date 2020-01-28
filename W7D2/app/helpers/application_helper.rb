module ApplicationHelper

    def auth_token 
        t = "<input type='hidden' "
        t += "name='authenticity_token' "
        t += "value=#{form_authenticity_token}/>"

        t.html_safe
    end
    
end