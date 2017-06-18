# 配列の要素を一つづつ処理する
arr = [1,2,3,4,5]
arr.each do |x|
 x *= 10
 p x
end
arr2 = arr.select do |i|
 i % 2 == 0
 # 
end
p 2%2 == 0
p 3%2 == 0
p arr2
arr3 = arr.collect do |i|
 i ** 2
end
p arr3