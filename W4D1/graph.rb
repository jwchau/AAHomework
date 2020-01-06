require 'set'

class GraphNode

    attr_reader :value, :neighbors
    attr_writer :neighbors

    def initialize(value)
        @value = value
        @neighbors = []
    end

    #queue -> unshift and pop
    def self.bfs(starting_node, target_value)
        visited = Set[starting_node]
        queue = [starting_node]
        until queue.empty?
            cur = queue.pop
            return cur if cur.value == target_value
            cur.neighbors.each do |node| 
                unless visited.member?(node)
                    queue.unshift(node)
                    visited.add(node)
                end
            end
        end
        nil
    end

    def inspect
        "#<GraphNode: #{object_id}"
    end


end

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c') #this one
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]

p GraphNode.bfs(a, 'c')