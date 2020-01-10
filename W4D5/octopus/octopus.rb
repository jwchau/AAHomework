require 'io/console'
require 'benchmark'

class Array

    def sluggish_octopus
        longer = ""
        (0...length).each do |i|
            (i...length).each do |j|
                longer = self[j] if self[j].length > longer.length
            end
            longer = self[i] if self[i].length > longer.length
        end
        longer
    end

    def merge_sort (array, &prc)
        return array if array.length <= 1
    
        mid_idx = array.length / 2
        merge(
          merge_sort(array.take(mid_idx), &prc),
          merge_sort(array.drop(mid_idx), &prc),
          &prc
        )
      end

    def merge(left, right, &prc)
        merged_array = []
        prc = Proc.new { |num1, num2| num1 <=> num2 } unless block_given?
        until left.empty? || right.empty?
          case prc.call(left.first, right.first)
          when -1
            merged_array << left.shift
          when 0
            merged_array << left.shift
          when 1
            merged_array << right.shift
          end
        end
    
        merged_array + left + right
      end


    def dominant_octopus
        merge_sort(self) { |a, b| a <=> b }.last
    end


    def clever_octopus
        longest = ""
        self.each_with_index { |fish| longest = fish if fish.length > longest.length }
        longest
    end


end



def random_fish(n)
    fishes = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
    Array.new(n) { fishes[rand(fishes.length)] }
end
f = random_fish(10000)

ARR_TILES = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ].freeze
def random_dance(n)
    Array.new(n) { ARR_TILES[rand(ARR_TILES.length)] }
end

def slow_dance(dir)
    ARR_TILES.each_with_index { |tile, i| return i if tile == dir }
end

BETTER_TILES = {"up"=>0, "right-up"=>1, "right"=>2, "right-down"=>3, "down"=>4, "left-down"=>5, "left"=>6,  "left-up"=>7}.freeze
def fast_dance(dir)
    BETTER_TILES[dir]
end

def s_dance_for_me(t)
    t.each do |move|
        slow_dance(move)
    end
end

def f_dance_for_me(t)
    t.each do |move|
        fast_dance(move)
    end
end

def run_bench(arr)
    Benchmark.benchmark(Benchmark::CAPTION, 9, Benchmark::FORMAT) do |b|
        # b.report("sluggish") { f.sluggish_octopus }
        # b.report("dominant") { f.dominant_octopus }
        # b.report("clever") { f.clever_octopus }
        b.report("fast") { f_dance_for_me(arr) }
        b.report("slow") { s_dance_for_me(arr) }
    end
end

(8..16).each { |i| run_bench(random_dance(2**i)) ; puts "==============================================================\n" }






