import React, { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crear mensaje para WhatsApp
    const mensaje = `Hola, me llamo ${formData.nombre}. 
Email: ${formData.email}
Teléfono: ${formData.telefono}
Mensaje: ${formData.mensaje}`;
    
    const whatsappUrl = `https://wa.me/17863832729?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Header con navegación */}
      <header className="header-section">
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <span className="logo-text">MMM Pembroke Pines</span>
            </div>
            
            {/* Menú hamburguesa */}
            <button 
              className={`hamburger ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Menú de navegación */}
            <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <button onClick={() => scrollToSection('inicio')} className="nav-link">Inicio</button>
              <button onClick={() => scrollToSection('quienes-somos')} className="nav-link">Quiénes Somos</button>
              <button onClick={() => scrollToSection('mision-vision')} className="nav-link">Misión y Visión</button>
              <button onClick={() => scrollToSection('horarios')} className="nav-link">Horarios</button>
              <button onClick={() => scrollToSection('testimonios')} className="nav-link">Testimonios</button>
              <button onClick={() => scrollToSection('videos')} className="nav-link">Videos en Vivo</button>
              <button onClick={() => scrollToSection('contacto')} className="nav-link">Contacto</button>
            </div>
          </div>
        </nav>
      </header>

      {/* Sección 1: Inicio */}
      <section id="inicio" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Bienvenidos a nuestra iglesia
            </h1>
            <p className="hero-subtitle">
              Un lugar de cambios y experiencias reales con Dios
            </p>
            <button 
              className="cta-button"
              onClick={() => scrollToSection('videos')}
            >
              Ver Servicios en Vivo
            </button>
          </div>
          
          {/* Espacio para imagen del logo MMM */}
          <div className="hero-image-container">
            <div className="image-placeholder">
              <p className="placeholder-text">Logo MMM (Imagen 3)</p>
              <p className="placeholder-subtitle">Espacio reservado para imagen</p>
            </div>
          </div>
        </div>
        
        <div className="hero-decoration">
          <div className="decoration-circle"></div>
          <div className="decoration-circle-2"></div>
        </div>
      </section>

      {/* Sección 2: Quiénes Somos */}
      <section id="quienes-somos" className="about-section">
        <div className="container">
          <div className="section-content">
            <div className="content-text">
              <h2 className="section-title">Quiénes Somos</h2>
              <div className="text-content">
                <p>
                  El Movimiento Misionero Mundial nació con una visión clara: llevar el evangelio de 
                  Jesucristo a toda criatura, con poder, santidad y pasión por las almas. En Pembroke Pines, 
                  fue establecida por el pastor David Vizcay Jr., y actualmente está bajo la cobertura de 
                  los pastores Mario y Rebeca Aguirrera.
                </p>
                <p>
                  Esta iglesia es un refugio espiritual donde se vive la sana doctrina, la oración y el 
                  poder del Espíritu Santo.
                </p>
              </div>
            </div>
            
            {/* Espacio para imagen de la pareja */}
            <div className="content-image">
              <div className="image-placeholder">
                <p className="placeholder-text">Pastores Mario y Rebeca (Imagen 1)</p>
                <p className="placeholder-subtitle">Espacio reservado para imagen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3: Misión y Visión */}
      <section id="mision-vision" className="mission-section">
        <div className="container">
          <div className="section-content reverse">
            <div className="content-image">
              <div className="image-placeholder">
                <p className="placeholder-text">Pastor Predicando (Imagen 2)</p>
                <p className="placeholder-subtitle">Espacio reservado para imagen</p>
              </div>
            </div>
            
            <div className="content-text">
              <h2 className="section-title">Misión y Visión</h2>
              <div className="text-content">
                <div className="mission-item">
                  <h3>Nuestra Misión</h3>
                  <p>
                    Ser una iglesia de bendición donde las vidas experimenten la presencia de Dios 
                    a través de la salvación de sus almas.
                  </p>
                </div>
                
                <div className="mission-item">
                  <h3>Nuestra Visión</h3>
                  <p>
                    Es local, nacional y global. Estamos presentes en más de 180 países predicando 
                    la sana doctrina del Evangelio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4: Horarios de Servicios */}
      <section id="horarios" className="schedule-section">
        <div className="container">
          <h2 className="section-title center">Horarios de Servicios</h2>
          <div className="schedule-grid">
            <div className="schedule-card">
              <div className="day">Martes</div>
              <div className="time">8:00 PM</div>
            </div>
            <div className="schedule-card">
              <div className="day">Jueves</div>
              <div className="time">8:00 PM</div>
            </div>
            <div className="schedule-card">
              <div className="day">Viernes</div>
              <div className="time">8:00 PM</div>
            </div>
            <div className="schedule-card special">
              <div className="day">Domingo</div>
              <div className="time">10:00 AM</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5: ¿Qué hizo Dios conmigo? */}
      <section id="testimonios" className="testimonials-section">
        <div className="container">
          <h2 className="section-title center">¿Qué hizo Dios conmigo?</h2>
          <p className="testimonials-subtitle">
            Mira los testimonios impactantes de lo que Dios ha hecho con nuestras vidas.
          </p>
          
          <div className="testimony-video">
            <iframe 
              width="800" 
              height="450" 
              src="https://www.youtube.com/embed/yURFWUjwUko" 
              title="Testimonio - ¿Qué hizo Dios conmigo?" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Sección 6: Videos en Vivo */}
      <section id="videos" className="videos-section">
        <div className="container">
          <h2 className="section-title center">Videos en Vivo</h2>
          <div className="videos-grid">
            <div className="video-card">
              <h3>Facebook Live</h3>
              <div className="video-container">
                <iframe 
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMMM33024%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="500" 
                  height="500" 
                  style={{border: 'none', overflow: 'hidden'}} 
                  scrolling="no" 
                  frameBorder="0" 
                  allowfullscreen="true" 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Facebook Page"
                ></iframe>
              </div>
            </div>
            
            <div className="video-card">
              <h3>YouTube Channel</h3>
              <div className="video-container">
                <iframe 
                  width="500" 
                  height="315" 
                  src="https://www.youtube.com/embed/videoseries?list=UU@Mmmppines" 
                  title="YouTube Channel" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 7: Contáctanos */}
      <section id="contacto" className="contact-section">
        <div className="container">
          <h2 className="section-title center">Contáctanos</h2>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div>
                  <h3>Dirección</h3>
                  <p>10030 NW 6th Ct, Pembroke Pines, FL 33124</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">📱</div>
                <div>
                  <h3>WhatsApp / Teléfono</h3>
                  <a href="https://wa.me/17863832729" target="_blank" rel="noopener noreferrer">
                    786-383-2729
                  </a>
                </div>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Tu teléfono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="mensaje"
                  placeholder="Tu mensaje"
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">
                Enviar por WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Sección 8: Redes Sociales y Footer */}
      <footer className="footer-section">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>Movimiento Misionero Mundial</h3>
              <p>Pembroke Pines, Florida</p>
            </div>
            
            <div className="social-links">
              <h3>Síguenos</h3>
              <div className="social-icons">
                <a 
                  href="https://www.facebook.com/MMM33024/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon facebook"
                >
                  📘
                </a>
                <a 
                  href="https://www.instagram.com/mmmppines/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  📷
                </a>
                <a 
                  href="https://www.youtube.com/@Mmmppines" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon youtube"
                >
                  📺
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 Movimiento Misionero Mundial - Pembroke Pines. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;