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
## Pattern Matching is fundamental to Elixir
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
@[1-17](With this, we can whitelist actions...)
@[18](And default errors when it doesn't match)
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
```elixir
defmodule ModuleName do
  def hello do
    IO.puts "Hello World"
  end
end
```
@[01-01](Define the module)
@[02-04](Define the function)
@[03-03](Output to the world!)
