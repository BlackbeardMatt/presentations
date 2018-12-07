## Getting Started With Elixir
### Matthew Schladweiler
![Logo](assets/img/elixir_logo.png)

--- 
@title[About Me]

@snap[west]
### MSOE 2018 SE Graduate
### Software Engineer
### Centarian
@snapend

@snap[north]
### Matthew Schladweiler
@snapend

@snap[east aboutme]
![ProfilePic](assets/img/me.jpg)
@snapend

@snap[south]
@size[0.4em](@fa[github](BlackbeardMatt) @fa[twitter](BlackbeardMatt))
@snapend
---
> "Programming should be about transforming data."
---
## Elixir is...
* A functional programming language
* Highly Scalable
* Incredibly Fault-Tolerant
* Built on top of the Erlang VM
---
## Hello World is quite simple
```elixir
defmodule ModuleName do
  def hello do
    IO.puts "Hello World"
  end
end
```
@[01-01](Define the module)
@[02-04](Define the function)
@[2, 4](The function is scoped to a do-block, similar to curly brackets in C)
@[03-03](Output to the world!)
---
```elixir
iex> a = 1
1
iex> a + 3
4
```
@[01-04](Simple assignment, right?)
@[01-04](Not quite)
@[01-01](The = is called the *match operator*)
@[01-04](Elixir, will attempt to match the left-hand side to the right-hand side)
@[01-04](If Elixir can make it true, then it will bind the variable a to value 1)
---
```elixir
iex> a = 1
1
iex> 1 = a
1
iex> 2 = a
** (MatchError) no match of right hand side value: 1
```
@[1-2](We can match a to 1)
@[3-4](Which also means 1 matches to a and is 1)
@[5-6](However 2 will not bind to a in this case)
---
# Elixir Fundamental
## Pattern Matching
---
```elixir
iex> list = [1, 2, 3]
[1, 2, 3]
```
@[1-2](To make the match true, Elixir bound the variable list to the array)
---
```elixir
iex> list = [1, 2, 3]
[1, 2, 3]
iex> [a, b, c] = list
[1, 2, 3]
```
@[1-4](Here, however it still outputs [1, 2, 3])
---
```elixir
iex> list = [1, 2, 3]
[1, 2, 3]
iex> [a, b, c] = list
[1, 2, 3]
iex> a
1
iex> b
2
iex> c
3
```
@[1-10](And this is because to make the pattern match, a = 1, b = 2, etc.)
---
```elixir
iex> list = [1, 2, 3]
[1, 2, 3]
iex> [a, 2, b ] = list
[1, 2, 3]
iex> a
1
iex> b
```
@[3-4](This matches as a is assigned 1 and b is assigned 3)
---
```elixir
iex> list = [1, 2, 3]
[1, 2, 3]
iex> [a, 1, b] = list
** (MatchError) no match of right hand side value: [1, 2, 3]
```
@[1-4](Here the match fails)
---
## Think like Algebra
x = a + 1<br>
Not assigning x, instead <br>
you are asserting x and a + 1<br>
have the same VALUE.
---
## Why is this important?
---
```elixir
def check(%Rules{state: :initialized} = rules, :add_player), do:
    {:ok, %Rules{rules | state: :players_set}}
```
@[1-2](Woah now! What is all this?!?)
@[1-2](Let's back up for a moment)
@[1](First: **def** is how we define a function)
@[1](%Rules defines a key value map struct defined in the Rules module)
---
```elixir
defstruct state:   :initialized,
          player1: :islands_not_set,
          player2: :islands_not_set
```
@[1-3](That struct looked like this)
@[2](Here the key **player1** is assigned the atom :islands_not_set)
---
# Atoms
Atoms are constants that represent something's name.
```elixir
iex> :fred
:fred
```
They are constants that represent themselves.
---
# Atoms
```elixir
iex> :fred = :fred
:fred
```
Two atoms with the same name will always compare as being equal, even if they were created on two different computers an ocean apart.
---
## Back to where we were...
```elixir
def check(%Rules{state: :initialized} = rules, :add_player), do:
    {:ok, %Rules{rules | state: :players_set}}
```
@[1](So the method check here is actually PATTERN MATCHING)
@[1](It is asking, does this key value map have my keys AND is state set to :initialized)
@[1](Which is then assigns to the variable rules)
@[2](It then returns a tuple with :ok meaning success and updates state to :players_set)
---
```elixir
def check(%Rules{state: :player1_turn} = rules, {:guess_coordinate, :player1}), do:
    {:ok, %Rules{rules | state: :player2_turn}}

def check(%Rules{state: :player2_turn} = rules, {:guess_coordinate, :player2}), do:
    {:ok, %Rules{rules | state: :player1_turn}}

def check(_state, _action), do: :error
```
@[1-5](With this, we can whitelist actions...)
@[7](And default errors when it doesn't match)
---
## Helpful in Recursion
```elixir
defmodule Recursion do
    def print_multiple_times(msg, n) when n <= 1 do
        IO.puts msg
    end

    def print_multiple_times(msg, n) do
        IO.puts msg
        print_multiple_times(msg, n - 1)
    end
end

Recursion.print_multiple_times('Hello World', 3)
```
@[6-9](Initially this matches, so we'll see 'Hello World' twice)
@[2-4](But then n is <= 1, when we will see it print out one last time)
---
## Enough about pattern matching!
---
```python
count = 99
do_something_with(count)
print(count)
```
We can expect this to print 99 without worry.<br>
99 will be the value 99
---
```python
array = [1, 2, 3]
do_something_with(array)
print(array)
```
@[1-3](Can we be as sure here?)
@[1](We know that array here is generally a reference, not a value)
@[2](What if this passes array to other threads)
@[3](Will this really be [1, 2, 3]?!)
---
> "GOTO was evil because we asked, 'how did I get to this point of execution?'
> Mutability leaves us with, 'how did I get to this state?'"
> @fa[twitter](jessitron)
---
# Elixir Fundamental
## Immutability
---
## Immutable Data is Known Data
Once a variable references anything, it will always reference those same values until you rebind the variable.
---
## Immutable Data is Known Data
What happens when you add 100 to each element in a list like [1, 2, 3]?
---
## Immutable Data is Known Data
Elixir produces a copy of the original containing the new values.<br>
The original remains **unchanged**.
---
## Immutable Data is Known Data
This fits Elixir's idea of programming being about transforming data.<br>
We transform it into something new. 
---
## Concurrency is a lot less frightening!
---
## But what about performance?
- Wouldn't copying all of this data be inefficient?
- What about Garbage Collection, won't there be a lot of bunch of things using memory on the heap?
---
## Immutability Performance
## Copying Data
Consider the following:
```elixir
iex> list1 = [3, 2, 1]
[3, 2, 1]
iex> list2 = [4 | list1]
[4, 3, 2, 1]
```
@[3](We have a new operator, [head | tail])
@[1-4](In most languages list2 would be built by making a new list and copying over)
@[1-4](Elixir knows list1 **will never change** and therefore simply creates a new list with a head of 4 and a tail of list1)
---
## Immutability Performance
## Garbage Collection
Most modern languages have a garbage collector that we are usually quite suspicious of (rightly so).
---
## Immutability Performance
## Garbage Collection
- When you write Elixir code, you use lots and lots of processes.
- Each process has its own heap.
- Data in applicaiton is divvied up between these, so heap is much smaller.
- As a result, garbage collection is much faster.
- When a process terminates before its heap becomes full, all data is discarded.
---
# Elixir Syntactical Sugar
## For all you developers out there
---
## List Sugar
```elixir
iex> [ 1, 2, 3 ] ++ [ 4, 5, 6 ] # concatenation
[1, 2, 3, 4, 5, 6]
iex> [1, 2, 3, 4] -- [2, 4]     # difference
[1, 3]
iex> 1 in [1, 2, 3, 4]          # membership
true
iex> "cheese" in [1, 2, 3, 4]
false
```
---
## Truth
- true
- false
- nil

Each is actually an alias for an atom of the same name.<br>
Any value other than false or nil is treated as *truthy*
---
## Boolean Operator Sugar
```elixir
a or b    # true if a is true; otherwise b
a and b   # false if a is false; otherwise b
not a     # false if a is true; true otherwise
```
Elixir also does have || && and ! just like most other languages
---
# Elixir Fundamental
## Functions
---
## Functions are first class citizens
---
## We already saw some regular functions, but what about...
--- 
## Anonymous Functions
### Return of the Pattern Matching
```elixir
iex> handle_open = fn
...>    {:ok, file} -> "Read data: #{IO.read(file, :line)}"
...>    {_,  error} -> "Error: #{:file.format_error(error)}"
...> end
iex> handle_open.(File.open("code/intro/hello.exs"))
"Read data: IO.puts \"Hello, World!\"\n"
iex> handle_open.(File.open("nonexistant"))
"Error: no such file or directory"
```
@[1-4](Here we define the function and define two function bodies)
@[1-4](Each has a single tuple as a parameter)
@[2](This function takes an okay and the file)
@[3](This matches any other value for the first term)
@[1-6](And we have an :ok output)
@[1-8](And a failed output)
---
## We already saw pattern matching with functions earlier
## But what if we need to check the types of the argument?
---
## Function Guards
```elixir
defmodule Guard do
    def what_is(x) when is_number(x) do
        IO.puts "#{x} is a number"
    end
    def what_is(x) when is_list(x) do
        IO.puts "#{inspect(x)} is a list"
    end
    def what_is(x) when is_atom(x) do
        IO.puts "#{x} is an atom"
    end
end
```
@[2-4](Here, when is_number enforces that the argument is a number)
@[2-4](Guard.what_is(99) # => 99 is a number)
@[5-7](And is a list)
@[5-7](Guard.what_is([1,2,3]) # => [1,2,3] is a list)
@[8-10](And is an atom)
@[8-10](Guard.what_is(:thisbird) # => thisbird is an atom)
---
## Pipe Operator
### The Amazing...
---
# |>
---
We've all seen code like this:
```python
people = DB.find_customers
orders = Orders.for_customers(people)
tax    = sales_tax(orders, 2018)
filing = prepare_filing(tax)
```
---
Which is easier to read than:
```python
filing = prepare_filing(sales_tax(Orders.for_customers(DB.find_customers),2018))
```
---
Which is not as good as:
```elixir
filing = DB.find_customers
           |> Orders.for_customers
           |> sales_tax(2018)
           |> prepare_filing
```
@[1-4](How does this glorious magic work?!)
@[1-2](The pipe operator |> takes...)
@[1](The returned value from DB.find_customers)
@[2](and uses it as the first argument in Orders.for_customers)
@[2-3](We then take the response and pass it to sales_tax)
@[2-3](which is then the same as sales_tax(orders, 2018))
@[3-4](And finally the returned value is passed to prepare_filing)
@[1](Which is then assigned to filing)
@[1-4](So much more readable!)
---

