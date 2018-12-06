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
+++
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
defmodule ModuleName do
  def hello do
    IO.puts "Hello World"
  end
end
```
@[01-01](Define the module)
@[02-04](Define the function)
@[03-03](Output to the world!)
