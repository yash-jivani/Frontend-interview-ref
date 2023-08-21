/*

sytx: 
element.addEventlistener('event', function, true/false)

? event bubbling | (By default) value => false

exmple: 

if we have 
----
GrandParent-DIV   [onClick => grandparent-clicked]
    Parent-DIV      [onClick => parent-clicked]
        Child-DIV      [onClick => child-clicked]

( all have event listner )
---
 
click on child-DIV 
O/P =>
    child-clicked
    parent-clicked
    grandparent-clicked
*(event-bubbling)


? event capturing/trickling | change 3rd arg. of eventListener => true  

exmple: 

if we have 
----
GrandParent-DIV   [onClick => grandparent-clicked]
    Parent-DIV      [onClick => parent-clicked]
        Child-DIV      [onClick => child-clicked]

( all have event listner )
---
 
click on child-DIV 
O/P =>
    grandparent-clicked
    parent-clicked
    child-clicked
*(event-capturing)


? Stop event capturing/bubbling:

e.stopPropagation();

*/
