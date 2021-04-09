class overloading:
   def sum(self,a=None,b=None,c=None):
      if a!=None and b!=None and c!=None:
         s = a+b+c
      elif a!=None and b!=None:
         s = a + b
      elif a!=None:
         s = a
      else:
         s = 'The function in not value'
      return s

ob = overloading()
print(ob.sum())

