# Emergency Service Directory

A responsive web application project built with HTML, Tailwind CSS, DaisyUI, and Vanilla JavaScript. This project provides a directory of essential government and emergency service numbers in Bangladesh with interactive features like heart counting, call cost deduction, copying service numbers, and maintaining a live call history.

---

## Technical Concept Answers

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
* **`getElementById`**: Selects a single element using its unique `id` attribute. It returns a single element object and is extremely fast.
* **`getElementsByClassName`**: Selects all elements that share a specific class name. It returns a live `HTMLCollection`, meaning if elements are added or removed, the collection updates automatically.
* **`querySelector`**: Uses CSS selectors (like `#id`, `.class`, or `tag`) and returns the **first** element that matches the selector.
* **`querySelectorAll`**: Uses CSS selectors and returns a static `NodeList` containing **all** matching elements. Unlike HTMLCollections, `NodeList` allows using array methods like `.forEach()`.

---

### 2. How do you create and insert a new element into the DOM?
To create and insert a new element into the DOM, follow these steps:
1. **Create the element:** Use `document.createElement('tagName')` (e.g., `document.createElement('div')`).
2. **Add content or styles:** Modify its properties, text, or classes (e.g., `newDiv.textContent = "Hello"`, `newDiv.classList.add('p-4')`).
3. **Insert into the DOM:** Append it to an existing parent element using methods like `parent.appendChild(newElement)` or `parent.append(newElement)`.

---

### 3. What is Event Bubbling and how does it work?
**Event Bubbling** is a phase of event propagation in the DOM. When an event (such as a `click`) occurs on a child element, it does not just trigger on that element; it bubbles upward through its parent, grandparent, and all the way up to the root `document` object, unless explicitly stopped.

---

### 4. What is Event Delegation in JavaScript? Why is it useful?
* **What it is:** Instead of attaching individual event listeners to multiple child elements, you attach a single event listener to their common parent element and rely on **Event Bubbling** to handle events triggered by the children.
* **Why it's useful:** It improves performance by reducing memory usage (fewer event listeners) and automatically handles dynamically added elements that didn't exist when the page first loaded.

---

### 5. What is the difference between preventDefault() and stopPropagation() methods?
* **`preventDefault()`**: Stops the browser's default default action associated with an event. For example, it prevents a form from submitting and reloading the page, or stops a link (`<a>`) from navigating to another URL.
* **`stopPropagation()`**: Stops the event from bubbling up the DOM tree, preventing parent elements from receiving notification of the event.



## Live Preview Link
👉 [Live Preview Link](https://shardarjobair-web.github.io/emergency-service-directory/)