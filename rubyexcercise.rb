#
# module HelperMethods
#   checkarr = ['in','the','of','and','or','from']
#   def titleize(str)
#     arr = str.split(' ')
#     arrCA = []
#     for i in arr
#       if(i == 'in' || i== 'the' || i == 'of'|| i == 'and' || i == 'or' || i=='from')
#       arrCA.push(i)
#       else
#       arrCA.push(i.capitalize)
#       end
#     end
#     res = arrCA.join(' ')
#   p res
#   end
# end
#
# class Bar
#   include HelperMethods
# end
# Bar.new.titleize('Cedric in codecore is genius')
#
# class Baz
#   extend HelperMethods
# end
# Baz.titleize('Cedric in the of and or genius')


# -----------     Quiz 2 -------------------
#
# class Book
#  attr_accessor :title
#
#  def initialize()
#    @chapters = []
#   end
#
#
#
#   def add_chapter(str)
#      @chapters.push(str)
#   end
#
#   def chapters()
#     p "your book: #{@title} has #{@chapters.length} chapters: "
#     num =1
#     for i in @chapters
#       p "#{num}. #{i}"
#       num +=1
#     end
#   end
#
# end
#
# book = Book.new
# book.title = "My Awesome Book"
# book.add_chapter("My Awesome Chapter 1 ")
# book.add_chapter("My Awesome Chapter 2 ")
# book.chapters

# ------------------ Quiz 3 -----------------------

# def is_prime(n)
#   res = true;
#   for i in 2...n-1
#      if n % i == 0
#        res = false
#      end
#   end
#
#   p res
# end
#
# is_prime(17)


# ------------------ QUiz 4 ------------------------
major_cities = {BC: ["Vancouver", "Victoria", "Prince George"], AB: ["Edmonton", "Calgary"]}

def print(obj)
  arr1= ["BC has #{obj[:BC].length} main cities:" ]
  arr2= ["AB has #{obj[:AB].length} main cities:" ]
  for i in 0...obj[:BC].length
    if i===obj[:BC].length-1
      arr1.push("#{obj[:BC][i]}")
    elsif i===obj[:BC].length-2
      arr1.push("#{obj[:BC][i]} and")
    else
    arr1.push("#{obj[:BC][i]}, ")
    end
  end

  for k in 0...obj[:AB].length
    if k===obj[:AB].length-1
      arr2.push("#{obj[:AB][k]}")
    elsif k===obj[:AB].length-2
      arr2.push("#{obj[:AB][k]} and")
    else
    arr2.push("#{obj[:AB][k]}, ")
    end
  end

  res1 = arr1.join(' ')
  res2 = arr2.join(' ')
 p res1
 p res2

end

print(major_cities)
