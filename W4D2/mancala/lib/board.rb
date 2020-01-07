require "byebug"

class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14) { Array.new(4) {:stone} }
    @cups[6], @cups[13] = [], []
  end

  # def place_stones
  #   # helper method to #initialize every non-store cup with four stones each
  # end

  def valid_move?(start_pos)
    raise 'Invalid starting cup' if start_pos > 13 || start_pos < 0
    raise 'Starting cup is empty' if cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    i = start_pos

    # debugger
    until cups[start_pos].empty?
      i = (i + 1) % 14
      if i == 6 && current_player_name == @name1
        cups[i].push(cups[start_pos].pop)
      elsif i == 13 && current_player_name == @name2
        cups[i].push(cups[start_pos].pop)
      elsif i != 6 && i != 13
        cups[i].push(cups[start_pos].pop)
      end

      
    end

    render
    return next_turn(i)
    # display start_pos
    # display i
    # display cups[i]
    # display cups[start_pos]
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    cup = cups[ending_cup_idx]
    if ending_cup_idx == 6 || ending_cup_idx == 13
      return(:prompt)
    elsif cup.length <= 1
      return(:switch)
    else
      return ending_cup_idx
    end

  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    side1, side2 = true, true

    (0...6).each { |i| side1 = false if cups[i].length > 0 }
    (7...13).each { |i| side2 = false if cups[i].length > 0 }

    side1 || side2
  end

  def winner
    case cups[6] <=> cups[13]
    when 0
      :draw
    when -1
      @name2
    when 1
      @name1
    end
  end


end
