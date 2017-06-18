






times = 0
total = 1.0
while total < 2
 total *= 1.03
 times += 1
end
p "%d
回(%f)" % [times, total]
times = 0
total = 1.0
until total < 0.05
 total /= 2
 times += 1
end
p "%d
回(%f)" % [times, total]



# # 基本的なループ 
# 5.times do |i|
#  print (i*2).to_s + ","
# end
# # レンジを使うループ
# p 'xxxxxxxxxx'
# for i in 1..5
#  print (i*2).to_s + ","
# end
# p 'xxxxxxxxxx'
# for i in 1...5
#  print (i*2).to_s + ","
# end
# p 'xxxxxxxxxx'
# 1.upto(5) do |i|
#  print (i*2).to_s + ","
# end

# score = 75
# if score > 90 then
#  p "Excellent"
# elsif score > 70 then
#  p "Good(" + score.to_s + ")"
# else
#  p "bad"
# end
# is_completed = false
# unless is_completed
#  p "It's happened error"
# end
# # if文の入れ替え
# is_pass = true


# p "It's passed" if is_pass
# p "Please input your question"
# p "[1] What your name"
# p "[2] How old are you"
# p "[3] What do you like food"
# p "[0] Nothing"
# p ">>>"
# input = gets
# case input.to_i
# when 1
#  p "I'm Duc"
# when 2
#  p "I'm 23 years old"
# when 3
#  p "I love all of Vietnam food"
# else
# p "I did't understand"
# end




# p 1 == 1
# p 2 != 3
# p 10 > 5
# p 12 <= 100
# p "A" < "a"
# # UFO演算子
# p 10 <=> 1
# p 1 <=> 1
# p 1 <=> 10