class Stack
    def initialize
      @arr = []
    end

    def push(el)
        @arr.push(el)
    end

    def pop
        @arr.pop
    end

    def peek
        @arr.last
    end
end

class Queue
    def initialize
      @arr = []
    end

    def enqueue(el)
      @arr.unshift(el)
    end

    def dequeue
      @arr.pop
    end

    def peek
      @arr.last
    end
end



class Map
    def initialize
        @arr = []
    end


    def set(key, value)
        @arr.each do |el|
            if el[0] == key
                el[1] = value
                return [key, value]
            end
        end
        @arr.push([key, value])
    end

    def get(key)  
        @arr.each { |el| return el[1] if el[0] == key }
        nil
    end

    def delete(key)
        @arr.each { |el| @arr.delete([el[0], el[1]]) if el[0] == key }
    end

    def show
        @arr
    end

end
