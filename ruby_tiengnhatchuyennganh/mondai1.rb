
a = [ "a", "b", "c", "d" ]
p a.collect() {|x|
x + "!"
}


array = [1, 2, 3, 4, 5]
doubled = array.map() do |element|
 element * 2
end
puts doubled



# # ブロックとは処理を独立させたもの
# # do ~ endと{ ~ }は等価
# (1..5).each do |counter|
# puts "iteration #{counter}"
# end
# (1..5).each { |counter|
# puts "iteration #{counter}"
# }

# def func1(apple, orange)
# r = apple * 100
# r += orange * 80
# return r
# end
# p func1(3, 5) # <= func1 3, 5

# def func2(apple, orange, basket=1)
# r = apple * 100
# r += orange * 80
# r += basket * 300
# end
# p func2(2, 4) # <= func2 2,4

# def func3(name, *favorite)
#  favorite
# end
# p func3("ishida", "Ruby","PHP","Javascript")