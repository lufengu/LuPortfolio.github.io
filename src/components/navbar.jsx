function Navbar() {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);

        if (section) {
            const nav = document.querySelector("nav");
            const navHeight = nav ? nav.offsetHeight : 70;

            const offsetTop = section.offsetTop - navHeight;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });

            window.history.pushState(null, "", `#${id}`);
        }
    };

    const handleNavClick = (event, id) => {
        event.preventDefault();
        scrollToSection(id);
    };

    return (
        <nav>
            <h2>PORTFOLIO</h2>

            <ul>
                <li>
                    <a
                        href="#home"
                        onClick={(event) => handleNavClick(event, "home")}
                    >
                        HOME
                    </a>
                </li>

                <li>
                    <a
                        href="#what-i-do"
                        onClick={(event) => handleNavClick(event, "what-i-do")}
                    >
                        WHAT I DO
                    </a>
                </li>

                <li>
                    <a
                        href="#about-me"
                        onClick={(event) => handleNavClick(event, "about-me")}
                    >
                        ABOUT ME
                    </a>
                </li>

                <li>
                    <a
                        href="#portfolio"
                        onClick={(event) => handleNavClick(event, "portfolio")}
                    >
                        PROJECTS
                    </a>
                </li>

                <li>
                    <a
                        href="https://www.linkedin.com/in/luisa-ar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => {
                            event.preventDefault();
                            window.open("https://www.linkedin.com/in/luisa-ar/", "_blank", "noopener,noreferrer");
                        }}
                    >
                        CONTACT
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;