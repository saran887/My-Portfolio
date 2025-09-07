# Saran Sarvesh - Portfolio

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. This portfolio showcases my projects, skills, and provides a way to get in touch with me.

## Features

- 🚀 Modern and responsive design
- 🌓 Dark/Light mode toggle
- ✨ Smooth animations and transitions
- 📱 Mobile-friendly navigation
- 📝 Contact form with EmailJS integration
- 🎨 Custom theme with Tailwind CSS

## Technologies Used

- ⚛️ React 18
- ⚡ Vite
- 🎨 Tailwind CSS
- 🎭 Framer Motion
- ✉️ EmailJS
- 🔍 React Icons

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Build for production
   ```bash
   npm run build
   ```

## Configuration

### Environment Variables

Create a `.env` file in the root directory and add your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Project Structure

```
src/
├── assets/            # Static assets
├── components/        # Reusable components
│   ├── Common/        # Shared components
│   ├── Contact/       # Contact section
│   ├── Hero/          # Hero section
│   ├── Projects/      # Projects section
│   └── Skills/        # Skills section
├── context/           # React context providers
└── App.jsx            # Main application component
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Feel free to reach out to me at [your.email@example.com](mailto:your.email@example.com) or connect with me on [LinkedIn](https://linkedin.com/in/yourusername).
