import  "./HomePage.css"
function HomePage(){
    return(
        <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Traductor y Tutor de Lengua de Señas Peruana (LSP)</h1>
          <p>
            Aprende, practica y traduce en tiempo real para comunicarte sin
            barreras.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">🚀 Empezar a Aprender</button>
            <button className="btn-secondary">🖐 Usar Traductor en Vivo</button>
          </div>
        </div>
      </section>

      {/* Sobre la aplicación */}
      <section className="about">
        <h2>¿Qué es este proyecto?</h2>
        <p>
          Es una plataforma inclusiva para aprender la Lengua de Señas Peruana y
          traducirla en tiempo real a texto o voz. Mi objetivo es unir a
          las comunidades sordas y oyentes con tecnología accesible.
        </p>
        <div className="about-cards">
          <div className="card">📚 Aprende paso a paso</div>
          <div className="card">🎥 Práctica interactiva con tu cámara</div>
          <div className="card">🔊 Traducción señas ↔ voz/texto</div>
          <div className="card">🌎 Acceso gratuito y multiplataforma</div>
        </div>
      </section>

      {/* Módulos de aprendizaje */}
      <section className="modules">
        <h2>Aprende LSP a tu ritmo</h2>
        <div className="module-grid">
          <div className="module">🔤 Abecedario</div>
          <div className="module">🗣️ Palabras básicas</div>
          <div className="module">💬 Oraciones comunes</div>
          <div className="module">🎮 Práctica real</div>
        </div>
      </section>

      {/* Traductor
      <section className="translator">
        <h2>Comunícate sin barreras</h2>
        <p>
          Nuestro traductor bidireccional convierte señas en texto/voz y
          texto/voz en señas.
        </p>
        <div className="translator-box">
          <div className="translator-side">
            <h3>🖐 Señas → Texto/Voz</h3>
            <div className="box-placeholder">[Cámara en vivo aquí]</div>
          </div>
          <div className="translator-side">
            <h3>💻 Texto/Voz → Señas</h3>
            <div className="box-placeholder">[Avatar/Video aquí]</div>
          </div>
        </div>
      </section> */}

      {/* CTA final */}
      <section className="cta">
        <h2>Únete a nuestra comunidad</h2>
        <p>
          Crea tu perfil para guardar tu progreso, ganar medallas y practicar
          todos los días.
        </p>
        <div className="cta-buttons">
          <button className="btn-primary">Sign Up</button>
          <button className="btn-secondary">Explorar sin cuenta</button>
        </div>
      </section>
    </div>
    )
}

export default HomePage;