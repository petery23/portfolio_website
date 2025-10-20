# Peter Yungman - Portfolio

A modern, responsive portfolio website built with Next.js and TypeScript, showcasing my projects in computer science, AI, and healthcare technology.

## 🚀 Live Demo

[View Portfolio](https://portfolio-website-petery23.vercel.app) *(Update with your actual deployment URL)*

## 👨‍💻 About

I'm Peter Yungman, a Computer Science student at the University of Florida with a passion for AI and healthcare technology. This portfolio showcases my projects in:

- **Computer Vision & AI**: Sports analysis and sign language interpretation
- **Healthcare Technology**: Range of motion tracking for physical therapy
- **Hardware & IoT**: Arduino-based safety devices for elderly care
- **Web Development**: Modern, responsive applications

## 🛠 Featured Projects

### Ultimate Frisbee Coach
Mobile app using computer vision to analyze throwing mechanics with ±5% precision
- **Tech**: React Native, Expo, Python, Flask, OpenCV, MediaPipe, NumPy
- **GitHub**: [Ultimate-Frisbee-Coach](https://github.com/petery23/Ultimate-Frisbee-Coach)

### Range of Motion (ROM)
Real-time motion tracking for UF Shands Hospital physical therapy
- **Tech**: Python, Flask, OpenCV, MediaPipe
- **GitHub**: [Range-of-Motion](https://github.com/petery23/Range-of-Motion)

### EchoGuard
Arduino-based obstacle detection system for elderly mobility
- **Tech**: Arduino, C++, Ultrasonic sensors, Piezo buzzers, LEDs
- **GitHub**: [EchoGuard](https://github.com/petery23/EchoGuard)

## 🛠️ Built With

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom gradients
- **Animations**: Framer Motion
- **Deployment**: Vercel
- **Language**: TypeScript/JavaScript

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/petery23/portfolio_website.git
   cd portfolio_website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Content Updates
- **Personal info**: Update `app/components/HeroSection.tsx`
- **Projects**: Modify `app/components/ProjectsSection.tsx`
- **Skills**: Edit `app/components/SkillsSection.tsx`
- **Contact**: Update `app/components/ContactSection.tsx`

### Assets
- **Profile image**: Replace `public/portrait.jpeg`
- **Resume**: Update `public/Peter_Resume2.pdf`
- **Project images**: Add to `public/projects/`

### Styling
- **Colors**: Modify gradients in component files
- **Fonts**: Update in `app/layout.tsx`
- **Animations**: Adjust Framer Motion variants

## 📱 Features

- ✅ **Fully Responsive** - Works on all devices
- ✅ **Modern Design** - Gradient backgrounds and glass morphism
- ✅ **Smooth Animations** - Framer Motion powered
- ✅ **Fast Loading** - Next.js optimized
- ✅ **SEO Friendly** - Proper metadata and structure
- ✅ **Accessible** - WCAG compliant

## 📂 Project Structure

```
├── app/
│   ├── components/
│   │   ├── HeroSection.tsx      # Main hero with bio
│   │   ├── ProjectsSection.tsx  # Featured projects
│   │   ├── SkillsSection.tsx    # Technical skills
│   │   └── ContactSection.tsx   # Contact info & social links
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main page
├── public/
│   ├── portrait.jpeg            # Profile image
│   ├── Peter_Resume2.pdf        # Resume
│   └── projects/                # Project images
└── tailwind.config.ts           # Tailwind configuration
```

## 🚀 Deployment

This portfolio is deployed on Vercel for optimal performance:

1. **Connect GitHub repository to Vercel**
2. **Configure build settings** (auto-detected for Next.js)
3. **Deploy** - Automatic deployments on every push

## 📧 Contact

- **Email**: [contact@peteryungman.com](mailto:contact@peteryungman.com)
- **LinkedIn**: [peter-yungman](https://linkedin.com/in/peter-yungman)
- **GitHub**: [@petery23](https://github.com/petery23)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

This portfolio was built from scratch using modern web technologies and best practices. Special thanks to the open source community for the amazing tools and libraries that made this possible.

---

⭐ **Star this repository if it helped you!**
