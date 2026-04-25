const e = React.createElement;

const data = {
    es: {
        skills: [
            { name: "Java", level: 90 },
            { name: "Spring Boot", level: 85 },
            { name: "Angular", level: 75 },
            { name: "React", level: 80 },
            { name: "MySQL", level: 70 }
        ],
        experience: [
            "Mini CRM Java + Spring Boot",
            "Portafolio web React",
            "Aplicaciones de gestión de Uber",
            "Proyectos personales full-stack"
        ],
        contact: {
            email: "roger@example.com",
            phone: "+52 555 123 4567",
            linkedin: "LinkedIn",
            github: "GitHub"
        },
        title: "Full-Stack Java Developer"
    },
    en: {
        skills: [
            { name: "Java", level: 90 },
            { name: "Spring Boot", level: 85 },
            { name: "Angular", level: 75 },
            { name: "React", level: 80 },
            { name: "MySQL", level: 70 }
        ],
        experience: [
            "Mini CRM Java + Spring Boot desarrollo propio para demostrar conocimientos de desarrollo web",
            "React Web Portfolio",
            "Uber management applications",
            "Personal full-stack projects"
        ],
        contact: {
            email: "roger@example.com",
            phone: "+52 555 123 4567",
            linkedin: "LinkedIn",
            github: "GitHub"
        },
        title: "Full-Stack Java Developer"
    }
};

function DevRoyer() {
    const [lang, setLang] = React.useState("es"); // idioma por defecto
    const [showSkills, setShowSkills] = React.useState(true);

    return e("div", { className: "container py-4" },
        // Selector de idioma
        e("div", { className: "text-end mb-3" },
            e("button", { className: "btn btn-outline-primary me-2", onClick: () => setLang("es") }, "ES"),
            e("button", { className: "btn btn-outline-secondary", onClick: () => setLang("en") }, "EN")
        ),
        // Cabecera
        e("div", { className: "text-center mb-4" },
            e("img", { src: "/imgs/royerch.jpg", className: "rounded-circle mb-2 shadow-sm", width: 160, alt: "Avatar" }),
            e("h2", null, "ROGELIO CEREZO HERNÁNDEZ"),
            e("p", { className: "text-muted" }, data[lang].title)
        ),
        // Botones Habilidades / Experiencia
        e("div", { className: "mb-3 text-center" },
            e("button", { className: "btn btn-primary me-2", onClick: () => setShowSkills(true) }, lang === "es" ? "Habilidades" : "Skills"),
            e("button", { className: "btn btn-secondary", onClick: () => setShowSkills(false) }, lang === "es" ? "Experiencia" : "Experience")
        ),
        // Cards dinámicas
        e("div", { className: "row g-4" },
            showSkills ?
                e("div", { className: "col-12" },
                    e("div", { className: "card p-3 shadow-sm" },
                        e("h5", null, lang === "es" ? "Habilidades" : "Skills"),
                        e("ul", { className: "list-group list-group-flush" },
                            data[lang].skills.map(s => e("li",{ className:"list-group-item", key:s.name },
                                s.name,
                                e("div",{ className:"progress mt-1" },
                                    e("div",{ className:"progress-bar", role:"progressbar", style:{ width: s.level+"%" }, "aria-valuenow": s.level,"aria-valuemin":0,"aria-valuemax":100}, `${s.level}%`)
                                )
                            ))
                        )
                    )
                )
                :
                e("div", { className: "col-12" },
                    e("div", { className: "card p-3 shadow-sm" },
                        e("h5", null, lang === "es" ? "Experiencia" : "Experience"),
                        e("ul", { className: "list-group list-group-flush" },
                            data[lang].experience.map(exp => e("li",{ className:"list-group-item", key:exp }, exp))
                        )
                    )
                )
        ),
        // Contacto
        e("div", { className: "row g-4 mt-4" },
            e("div", { className: "col-12" },
                e("div", { className: "card p-3 shadow-sm" },
                    e("h5", null, lang === "es" ? "Contacto" : "Contact"),
                    e("p", null, `Email: ${data[lang].contact.email}`),
                    e("p", null, `Tel: ${data[lang].contact.phone}`),
                    e("p", null, e("a",{ href:"https://linkedin.com/in/roger", target:"_blank"}, data[lang].contact.linkedin)),
                    e("p", null, e("a",{ href:"https://github.com/roger", target:"_blank"}, data[lang].contact.github))
                )
            )
        )
    );
}

const root = document.getElementById("devroyer-root");
if(root) ReactDOM.render(e(DevRoyer), root);