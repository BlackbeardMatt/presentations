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
@[01-01](The = is the *match operator*)
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
