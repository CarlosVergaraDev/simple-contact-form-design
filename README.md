# Simple Contact Form Design

A functional, modern, and minimalist contact form developed with a focus on clean UI/UX and robust data validation. This project implements a "Dark Tech" aesthetic with glassmorphism effects and smooth transitions.

## Features

- Minimal and modern UI design
- Responsive layout (mobile-friendly)
- Ambient background glow effect
- Client-side form validation
- Real-time validation feedback (on blur and input)
- Accessible status messages (`aria-live`)
- No external JavaScript frameworks
- Clean and maintainable code structure

## Project Structure

```
├── index.html # Main HTML structure
├── style.css # Styling and visual effects
└── script.js # Form validation and interaction logic
``` 

## 🛠️ Technologies Used

- **HTML5** – Semantic markup
- **CSS3** – Custom properties (CSS variables), transitions, responsive design
- **JavaScript (ES6)** – DOM manipulation and form validation
- **Google Fonts** – Inter font family

## Form Validation Rules

The form validates user input before submission:

- **Name**
  - Required
  - Letters and spaces only
  - Between 2 and 50 characters

- **Email**
  - Required
  - Must match a valid email format

- **Message**
  - Required
  - Minimum of 10 characters

Validation feedback is displayed inline below each field.

## How to Use

1. Clone or download this repository
2. Open `index.html` in your browser
3. Fill out the contact form
4. Submit to see validation and simulated submission feedback


> Note:  
> The form submission is simulated on the client side. No backend or API integration is included.

## Customization

You can easily customize the look and feel by editing CSS variables in `style.css`:

```css
:root {
  --bg-color: #030305;
  --text-main: #ededed;
  --accent-glow: radial-gradient(circle, #3b82f6, transparent);
}
```

## Accessibility

- Semantic HTML structure  
- Error and success messages announced via `aria-live`  
- High contrast text  
- Keyboard-friendly inputs
