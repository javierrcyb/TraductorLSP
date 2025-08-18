import "./MainFooter.css";

function MainFooter() {
    return (
        <footer>
            <div className="container footer-content">
                <p>© {new Date().getFullYear()} Javier Ramirez – MIT License</p>
                <nav>
                    <ul>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/javier-ramirez-737596302/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/javierrcyb"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="mailto:javier.ramirez.tech@gmail.com">
                                Contacto
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

export default MainFooter;
