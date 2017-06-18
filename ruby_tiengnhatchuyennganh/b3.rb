# 下記例は同じ意味
lang1 = "japanese"
if lang1 == "japanese"
	p lang1
end
lang2 = :vietnamese
if lang2 == :vietnamese
	p lang2
end
# 違いは以下
puts "japanse".object_id
puts "japanse".object_id
puts :vietnamese.object_id
puts :vietnamese.object_id