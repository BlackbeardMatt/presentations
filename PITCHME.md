## Angular State Management

*Reducing headaches with stores*

<p style="margin-top: 100px; font-weight: bold;">Matthew Schladweiler</p>

@snap[south]
@size[0.4em](@fa[github](BlackbeardMatt)     @fa[twitter](BlackbeardMatt))
@snapend
---
@title[About Me]

@snap[west]
@ul[](false)
* MSOE 2018 SE Graduate
* Software Engineer
* Centarian
@ulend
@snapend

@snap[north]
### Matthew Schladweiler
@snapend

@snap[east aboutmepic]
![ProfilePic](assets/img/me.jpg)
@snapend
---
## Our Agenda

@ul
- Smart vs. Dumb Components
- Services
- RXJS Observable Stores
    - NGXS (ngxs.io)
    - NGRX (ngrx.io)
@ulend
---
@snap[north]
## Smart vs. Dumb Components
@snapend

@snap[west]
Smart Components
@ul
- AKA Containers
- Stateful
- Connected to Services
- Receives Data via Resolvers
- Contains Most Business Logic
@ulend
@snapend

@snap[east]
Dumb Components
@ul
- AKA Presentational
- Stateless
- Similar to a Pure Function
- Receives data via @Input Bindings
- Contains almost no Business Logic
@snapend
