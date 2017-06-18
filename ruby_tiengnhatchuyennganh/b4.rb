arr1 = [0, 2, 4]
p arr1[1]
p arr1.length()
p arr1.length
# 初期化方法
p Array.new(3)
p Array.new(3, 5)
arr2 = Array.new(3) do |i|
 i * 2
end
p arr2