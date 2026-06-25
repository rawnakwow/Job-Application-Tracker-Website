# Job-Application-Tracker-Website



## Live Link: https://job-application-tracking-system-wow.netlify.app/



## Answers to Questions

* ## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

 **Answers**: 

The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll are:

* **getElementById()**
        getElementById() selects a single, unique element using its unique id. That's why it is the fastest method, it returns null if no match is found. 

* **getElementsByClassName()**
      getElementsByClassName() selects all elements with the same class name and return as an HTMLCollection.


* **querySelector()**
          querySelector() returns the first element that matches a CSS selector.


* **querySelectorAll()**
      querySelectorAll() returns all matching elements and provides them as a NodeList.


* ## 2. How do you create and insert a new element into the DOM?

 **Answers**: 

I will first create the element in the browser's memory, and then i will attach it to an existing element on the page. 

* 1. Create the element using document.createElement() and pass HTML tag name (like 'div', 'p','button').

* 2. Modify its properties by adding classes or attributes to the element. 

* 3. Insert it into the DOM by using a method like appendChild() or append(). 


**Example:**

const newCard = document.createElement('div');
newCard.className = 'job-card';
newCard.textContent = 'New Job Opportunity Added!';

const dashboard = document.getElementById('job-cards-container');

dashboard.appendChild(newCard); 


* ## 3. What is Event Bubbling? And how does it work?

 **Answers**: 

Event Bubble is a process where an event triggers on the deepest target element and then travels straight up through its parent elements in the HTML structure like a bubble.

* ##  How It Works:

* **1. Trigger Point**: The event starts exactly on the specific child element where the action happened (e.g., clicking a button).
* **2. Upward Movement**: After running the listener on the target, the event moves up to its immediate parent element, triggering any listeners there.
* **3. Final Destination**: This upward movement continues through all parent wrappers until it reaches the root tags (<body>, <html>) and the global window object.











* ## 4. What is Event Delegation in JavaScript? Why is it useful?

 **Answers**: 

Event Delegation is a design pattern where we can attach a single event listener to a parent element to manage events for all of its child elements instead of targeting them individually.

* **1. How it works**:
      
         It relies entirely on Event Bubbling. When a child element is clicked, the event bubbles up to the parent container, which catches the event and checks which child triggered it.

* **2. Memory Efficiency**:
          
          It reduces memory usage drastically. Instead of adding 100 listeners to 100 individual job cards, we can create only 1 single listener on the main container.

* **3. Dynamic Support**

       It automatically works for brand-new elements added to the page later, and does not need to manually attach new event listeners when generating fresh content.



* ## 5. What is the difference between preventDefault() and stopPropagation() methods?


 **Answers**: 
preventDefault() and stopPropagation() both methods manage event behaviors, but they control completely different aspects of an event's life cycle:

* **preventDefault()**
   preventDefault() cancels the browser's default native behavior for an element.
   *Example*: Stops a form from reloading the page or an <a> link from navigating to a URL. 
   It does not stop the event from bubbling up the DOM tree.

* **stopPropagation()**
   stopPropagation() stops the event's journey from traveling any further up the DOM tree.
  *Example*: Stops a button click from triggering a click event on its parent card container.
   It does not stop default browser behaviors like form submissions or link redirects.
































