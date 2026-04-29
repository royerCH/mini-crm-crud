const e = React.createElement;

const data = {
    es: {
        skills: [
            { name: "Java", level: 90 },
            { name: "Spring Boot", level: 80 },
            { name: "React", level: 20 },
            { name: "MySQL", level: 50 },
            { name: "AWS, RDS, EC2, ElastikBeansTalk", level: 40 }
        ],
        experience: [
           "hola mundo",
            "hola mundo dos",
            "hola mundo react",
            "hola mundo react",
            "hola mundo react",
            "hola mundo react"

        ],
        contact: {
            email: "rogeliocerezohernandez@gmail.com",
            phone: "+52 56 45031914",
            linkedin: "LinkedIn",
            github: " GitHub:  "
        },
        title: "Full-Stack Java Developer"
    },
    en: {
        skills: [
            { name: "Java", level: 90 },
            { name: "Spring Boot", level: 80 },
            { name: "React", level: 20 },
            { name: "MySQL", level: 50 },
            { name: "AWS, RDS, EC2, ElastikBeansTalk", level: 40 }
        ],
        experience: [
            "HELLO WROLD",
            "HELLO WORLD 2",
            "HELLO WORLD 3",
            "HELLO WORLD 4"
        ],
        contact: {
            email: "rogeliocerezohernandez@gmail.com",
            phone: "+52 555 123 4567",
            linkedin: "LinkedIn",
            github: "GitHubt"
        },
        title: "Full-Stack Java Developer"
    }
};

function DevRoyer() {
    const [lang, setLang] = React.useState("es");
    const [showSkills, setShowSkills] = React.useState(true);

    return e("div", { className: "container py-4" },

        // Selector de idioma
        e("div", { className: "text-end mb-3" },
            e("button", { className: "btn btn-outline-primary me-2", onClick: () => setLang("es") }, "Español"),
            e("button", { className: "btn btn-outline-secondary", onClick: () => setLang("en") }, "English")
        ),

        // Botones Habilidades / Experiencia
        e("div", { className: "mb-3 text-center" },
            e("button", { className: `btn ${showSkills ? "btn-primary" : "btn-outline-primary"} me-2`, onClick: () => setShowSkills(true) }, lang === "es" ? "Habilidades" : "Skills"),
            e("button", { className: `btn ${!showSkills ? "btn-primary" : "btn-outline-secondary"}`, onClick: () => setShowSkills(false) }, lang === "es" ? "Experiencia" : "Experience")
        ),

        // Cards dinámicas
        e("div", { className: "row g-4" },
            showSkills ?
                data[lang].skills.map(s =>
                    e("div", { className: "col-md-4", key: s.name },
                        e("div", { className: "card p-3 shadow-sm h-100 hover-shadow" },
                            e("h5", null, s.name),
                            e("div", { className: "progress mt-2" },
                                e("div", {
                                    className: "progress-bar",
                                    role: "progressbar",
                                    style: { width: s.level + "%" },
                                    "aria-valuenow": s.level,
                                    "aria-valuemin": 0,
                                    "aria-valuemax": 100
                                }, `${s.level}%`)
                            )
                        )
                    )
                )
                :
                data[lang].experience.map((exp, index) =>
                    e("div", { className: "col-md-6", key: index },
                        e("div", { className: "card p-3 shadow-sm h-100 hover-shadow" },
                            e("p", null, exp)
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
                    e("p", null, e("a", { href: "https://linkedin.com/in/roger", target: "_blank" }, data[lang].contact.linkedin)),
                    e("p", null, e("a", { href: "https://github.com/royerCH/mini-crm-crud.git", target: "_blank" }, data[lang].contact.github))
                )
            )
        )
    );
}

const root = document.getElementById("devroyer-root");
if(root) ReactDOM.render(e(DevRoyer), root);