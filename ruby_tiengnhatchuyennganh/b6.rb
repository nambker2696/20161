# レンジ
ran1 = 1..10
p ran1.to_a
ran2 = 1...10
p ran2.to_a
# 配列に用いる場合、Forループの様に使える
total = 0
(1..10).to_a.each do |i|
total += i
end
p total
# 数字以外
chars1 = "a".."f"; p chars1.to_a
chars2 = "G".."L"; p chars2.to_a