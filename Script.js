/* Reset & base */
*, *::before, *::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  color: #f0f0f0;
  line-height: 1.6;
  scroll-behavior: smooth;
}
a {
  text-decoration: none;
  color: inherit;
}
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Container */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px 60px;
}

/* Header */
header {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
}
header h1 {
  font-size: 4rem;
  margin: 0;
  font-weight: 900;
  letter-spacing: 2px;
  background: linear-gradient(90deg, #f39c12, #f1c40f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
header p {
  font-size: 1.3rem;
  font-weight: 600;
  color: #eaeaeacc;
  margin-top: 10px;
}
header nav {
  margin-top: 40px;
}
header nav a {
  font-weight: 600;
  margin: 0 15px;
  padding: 8px 18px;
  border: 2px solid #f1c40f;
  border-radius: 30px;
  color: #f1c40f;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
}
header nav a:hover,
header nav a:focus {
  background: #f1c40f;
  color: #2c3e50;
  box-shadow: 0 0 8px #f1c40faa;
}

/* Skills Section */
section.skills {
  background: #34495e;
  border-radius: 10px;
  margin-top: 60px;
  padding: 40px 30px;
  box-shadow: 0 8px 20px #0008;
}
.skills h2 {
  font-size: 2.8rem;
  margin-bottom: 30px;
  text-align: center;
  color: #f1c40f;
  letter-spacing: 2px;
}
.skill-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}
.skill-item {
  background: #2c3e50;
  flex: 1 1 140px;
  max-width: 140px;
  text-align: center;
  padding: 20px 10px;
  border-radius: 12px;
  box-shadow: inset 0 0 8px #f1c40f55;
  transition: transform 0.3s ease;
  cursor: default;
  user-select: none;
}
.skill-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 20px #f1c40fcc, inset 0 0 12px #f1c40fff;
}
.skill-icon {
  font-size: 3rem;
  margin-bottom: 12px;
  color: #f39c12;
}
.skill-name {
  font-weight: 700;
  font-size: 1.1rem;
  color: #fff;
  user-select: text;
}

/* Projects Section */
section.projects {
  margin-top: 80px;
}
.projects h2 {
  font-size: 2.8rem;
  color: #f1c40f;
  text-align: center;
  margin-bottom: 40px;
  letter-spacing: 2px;
}
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}
.project-card {
  background: #2c3e50;
  border-radius: 15px;
  box-shadow: 0 8px 20px #000a;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.project-card:hover,
.project-card:focus {
  transform: translateY(-12px);
  box-shadow: 0 12px 30px #f1c40fdd;
  outline: none;
}
.project-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  background: #f39c12;
}
.project-body {
  padding: 20px 15px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.project-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 10px;
  color: #f1c40f;
}
.project-description {
  flex: 1 1 auto;
  font-size: 1rem;
  color: #ddd;
  line-height: 1.3;
  margin-bottom: 15px;
}
.project-links {
  margin-top: auto;
}
.project-link {
  color: #f39c12;
  font-weight: 600;
  margin-right: 15px;
  transition: color 0.25s ease;
}
.project-link:hover,
.project-link:focus {
  color: #f1c40f;
  outline: none;
}

/* Footer */
footer {
  text-align: center;
  margin-top: 100px;
  padding-bottom: 30px;
  color: #f1c40f99;
  font-size: 0.95rem;
}

/* Responsive */
@media (max-width: 600px) {
  header h1 {
    font-size: 3rem;
  }
  header p {
    font-size: 1rem;
  }
  .skill-list {
    gap: 20px;
  }
  .skill-item {
    max-width: 110px;
    padding: 16px 8px;
  }
  .project-image {
    height: 140px;
  }
}

/* Scroll reveal animations */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  animation-fill-mode: forwards;
  animation-name: fadeUp;
  animation-duration: 0.8s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: none;
  }
}

