# frontend_testLearning

This project is a **practice and revision project** for the module **M293 – Einstieg Webentwicklung**.

It is designed to prepare for **practical and theory tests** that include:
- HTML structure
- CSS (especially Flexbox)
- JavaScript DOM manipulation

The project focuses on **small, exam-style tasks**, not on design or advanced features.

---

## Project Structure

```

/
├── index.html     # Contains all practice sections (HTML given in exams)
├── style.css      # CSS & Flexbox practice
├── script.js      # JavaScript logic (main focus)
└── README.md      # Learning guide & overview

```

---

## Project Goal

The goal of this project is to:
- practise **JavaScript patterns that appear in exams**
- understand how **HTML, CSS and JavaScript work together**
- build **muscle memory** for writing code on paper
- avoid common mistakes under exam pressure

Each section represents **one typical exam task**.

---

## Practice Sections

### Section 1 – Click → Change Text
**Concepts practised:**
- Selecting elements with `getElementById`
- Click events
- Changing text with `textContent`

**Typical exam task:**
> Beim Klick auf den Button soll sich der Text ändern.

---

### Section 2 – Click → Change Style *(planned)*
**Concepts practised:**
- `element.style.color`
- `element.style.backgroundColor`
- JavaScript controlling CSS

---

### Section 3 – Input → Output *(planned)*
**Concepts practised:**
- Reading input with `.value`
- Displaying user input on the page

---

### Section 4 – Create Elements *(planned)*
**Concepts practised:**
- `document.createElement`
- `appendChild`
- Dynamically modifying the DOM

---

### Section 5 – Toggle / IF Logic *(planned)*
**Concepts practised:**
- `if / else`
- State handling (first click vs second click)
- Show / hide elements

---

### Section 6 – Counter (+ / -) *(planned)*
**Concepts practised:**
- Variables
- Updating values
- Preventing values below 0

---

### Section 7 – Flexbox Layout *(planned)*
**Concepts practised:**
- `display: flex`
- `justify-content`
- `align-items`
- `flex-wrap`

---

## Exam Patterns to Memorise

This project repeatedly uses the same patterns that appear in exams:

- Select element → Event → DOM change
- Input uses `.value`
- Text uses `.textContent`
- `appendChild` requires an **HTML element**
- User actions must be handled **inside event listeners**
- Flexbox alignment depends on **main axis vs cross axis**

---

## Common Mistakes (Avoid in Exams)

- Reading input outside a click event  
- Using `.textContent` on `<input>` elements  
- Appending text instead of elements  
- Writing JavaScript outside event listeners  
- Mixing CSS syntax into JavaScript  

---

## How to Use This Project for Exam Prep

1. Open one section
2. Understand **what pattern it practises**
3. Rewrite the JavaScript code **by hand**
4. Explain in words what the code does
5. Repeat until the structure feels automatic

---

## Notes

- This project is intentionally **simple**
- No frameworks or advanced JavaScript
- Focus is on **clarity and exam relevance**

```
