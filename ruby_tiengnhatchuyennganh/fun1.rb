class Sample
	public
		def method1; p "this is public"; end
		private
		def method2; p "this is private"; end
		protected
		def method3; p "this is protected"; end
		public
		def method4; method2; end
		def method5; self.method2; end
		def method6; method3; end
		def method7; self.method3; end
end
sample = Sample.new().method6

# class Human
#  def initialize(name, age = 0)
#  @name = name
#  @age = age
#  end

#  def name=(name)
#  @name = name
#  end

#  def name
#  @name
#  end
# end
# man = Human.new "ishida", 31
# p man