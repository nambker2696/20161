# 配列の要素に名前をつけたもの
fruits = { "apple" => 5, "banana" => 3}
p fruits["apple"]
fruits["orange"] = 8
wishlist = Hash.new()
# 配列同様にイテレーションできる
fruits.each do |i,j|
 p "%s: %d" % [i,j]
end
pricelist =fruits.select do |i,j|
 j > 4
end
p pricelist