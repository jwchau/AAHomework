require "byebug"

class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []

  end

  def play
    until game_over
      take_turn
    end

    game_over_message
    reset_game

  end

  def take_turn
    show_sequence
    require_sequence
    round_success_message unless game_over
  end

  def show_sequence
    add_random_color
  end

  def require_sequence
    puts "give me a sequence"
    gets.chomp
    round_success_message
  end

  def add_random_color
    seq.push(COLORS.sample)

  end

  def round_success_message
    puts "round success"
    self.sequence_length += 1
  end

  def game_over_message
    puts "game over punko"
  end

  def reset_game
    self.sequence_length = 1
    self.seq = []
    self.game_over = false
  end
end
