import React, { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    peticion: '',
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
Petición de oración: ${formData.peticion}
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
              <span className="logo-text">Iglesia Cristiana Pentecostal del MMM en Pembroke Pines</span>
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
            {/* Imagen de los pastores Mario y Rebeca */}
            <div className="content-image">
              <img 
                src="https://drive.google.com/uc?export=view&id=1Dk1_ApQ6g-fWOggzSEUUgwYRjBwoILD6" 
                alt="Pastores Mario y Rebeca Aguirrera"
                className="section-image"
              />
            </div>
            
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
          <h2 className="section-title center">Transmisiones/Streaming</h2>
          <p className="streaming-subtitle">Nuestra próxima transmisión es en:</p>
          
          <div className="streaming-platforms">
            <div className="platform-card">
              <div className="platform-header">
                <div className="instagram-icon">
                  <svg viewBox="0 0 24 24" width="40" height="40">
                    <defs>
                      <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#405DE6"/>
                        <stop offset="25%" stopColor="#5851DB"/>
                        <stop offset="50%" stopColor="#833AB4"/>
                        <stop offset="75%" stopColor="#C13584"/>
                        <stop offset="100%" stopColor="#E1306C"/>
                      </linearGradient>
                    </defs>
                    <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span className="live-badge">LIVE</span>
              </div>
              <h3>Instagram Live</h3>
              <a 
                href="https://www.instagram.com/mmmppines/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="platform-button instagram-button"
              >
                Ver en Instagram
              </a>
            </div>

            <div className="platform-card">
              <div className="platform-header">
                <div className="youtube-icon">
                  <svg viewBox="0 0 24 24" width="40" height="40">
                    <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span className="livestream-badge">LIVESTREAM</span>
              </div>
              <h3>YouTube Live</h3>
              <a 
                href="https://www.youtube.com/@Mmmppines" 
                target="_blank" 
                rel="noopener noreferrer"
                className="platform-button youtube-button"
              >
                Ver en YouTube
              </a>
            </div>

            <div className="platform-card">
              <div className="platform-header">
                <div className="facebook-icon">
                  <svg viewBox="0 0 24 24" width="40" height="40">
                    <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="live-badge facebook-live">LIVE</span>
              </div>
              <h3>Facebook Live</h3>
              <a 
                href="https://www.facebook.com/MMM33024/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="platform-button facebook-button"
              >
                Ver en Facebook
              </a>
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
                <select
                  name="peticion"
                  value={formData.peticion}
                  onChange={handleInputChange}
                  required
                  className="select-peticion"
                >
                  <option value="">Selecciona tu petición de oración</option>
                  <option value="Por Mi familia">Por Mi familia</option>
                  <option value="Mi Esposo o Esposa">Mi Esposo o Esposa</option>
                  <option value="Liberación">Liberación</option>
                  <option value="Volver a los caminos del Señor">Volver a los caminos del Señor</option>
                  <option value="Visita Pastoral">Visita Pastoral</option>
                  <option value="Otras">Otras</option>
                </select>
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
              <h3>Iglesia Cristiana Pentecostal del MMM en Pembroke Pines</h3>
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
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/mmmppines/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon instagram"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/@Mmmppines" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon youtube"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
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