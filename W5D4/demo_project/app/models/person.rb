class Person < ApplicationRecord

    validates :name, presence: true
    validates :house_id, presence: true

    # def house 
    #     House.find(house_id)
    # end

    belongs_to :house, 
        primary_key: :id,
        foreign_key: :house_id,
        class_name: :House

end