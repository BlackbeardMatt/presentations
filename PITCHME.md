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
@snap[north-west]
Smart vs. Dumb Components
@snapend

## Smart Components
@ul
- AKA Containers
- Stateful
- Connected to Services
- Receives Data via Resolvers
- Contains Most Business Logic
@ulend
---
@snap[north-west]
Smart vs. Dumb Components
@snapend

## Dumb Components
@ul
- AKA Presentational
- Stateless
- Similar to a Pure Function
- Receives data via @Input Bindings
- Contains almost no Business Logic
@ulend
---
## Smart Vs. Dumb Demo
---
@snap[midpoint]
## What Problems Do We See
@snapend
---
## Component Interaction State Management
@ul
- Up and down Dom
- Can not pass through containers
  - Have to implement every event emission upwards
- Changes in one place will be hard to manage elsewhere
@ulend
---
## Component Interaction State Mangement
### Use For
@ul
- Small Projects
- Managing when dom elements rerender
- Read only
@ulend
---
## RXJS To The Rescue!
---
## RXJS Observable Services
@ul
- BehaviorSubjects<T> hold state
- Exposed by Singleton Services
  - As Observables
- Built Into Angular
@ulend
---
## RXJS Demo
---
@snap[midpoint]
## What Problems Do We See
@snapend
---
## RXJS State Management
@ul
- Have to implement for each state slice
- Could see race conditions
- Not ideal if receiving push notifcations from server
@ulend