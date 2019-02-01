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
Component Interaction State Management
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
Component Interaction State Management
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
@snap[north-west]
Smart vs. Dumb Components
@snapend

@snap[midpoint]
## What Problems Do We See
@snapend
---
@snap[north-west]
Component Interaction State Management
@snapend

@ul
- Up and down Dom
- Can not pass through containers
  - Have to implement every event emission upwards
- Changes in one place will be hard to manage elsewhere
@ulend
---
@snap[north-west]
Component Interaction State Management
@snapend

### Use For
@ul
- Small Projects
- Managing when dom elements rerender
- Read only
@ulend
---
## RXJS To The Rescue!
---
@snap[north-west]
RXJS Observable Services
@snapend

@ul
- BehaviorSubjects<T> hold state
- Exposed by Singleton Services
  - As Observables
- Built Into Angular
@ulend
---
@snap[north-west]
RXJS Observable Services
@snapend

## RXJS Demo
---
@snap[north-west]
RXJS Observable Services
@snapend

@snap[midpoint]
## What Problems Do We See
@snapend
---
@snap[north-west]
RXJS Observable Services
@snapend

@ul
- Could see race conditions
- Not ideal if receiving push notifcations from server
- Managing services between modules is painful
@ulend
---
@snap[north-west]
RXJS Observable Services
@snapend

## Use For
@ul
- Sharing information between smart components (containers)
- Generally good for all sized projects
- Race conditions are not a concern
@ulend
---
@snap[midpoint]
## But what if we do have possible race conditions?
@snapend
---
@snap[midpoint]
![FACEBOOK MESSENGER](assets/img/unread.jpg)
@snapend