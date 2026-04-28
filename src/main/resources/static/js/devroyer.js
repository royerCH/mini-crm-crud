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
            "INFOTEC – Desarrollador Junior PHP\n" +
            "Octubre 2023 – Noviembre 2023\n" +
            "\n" +
            "Desarrollo y mantenimiento de aplicaciones web basadas en PHP.\n" +
            "\n" +
            "SEDENA (FAMEX 2023) – Desarrollador de Aplicación Móvil\n" +
            "Enero 2023 – Abril 2023\n" +
            "\n" +
            "Colaboré en la continuidad de un proyecto de aplicación móvil usando Swift y Xcode 12.4.\n" +
            "Implementación de nuevas funcionalidades y aseguramiento de la calidad del código.\n" +
            "\n" +
            "got IT Business Solutions SA. DE CV. – Prácticas Profesionales en Desarrollo Web\n" +
            "Septiembre 2021 – Abril 2022\n" +
            "\n" +
            "Desarrollo de aplicaciones web con Laravel 8.\n" +
            "Mantenimiento y actualización de sitios web.\n" +
            "Mantenimiento de sistemas de información internos en PHP.",
            "Portafolio web React",
            "Desarrollo de una aplicación web full-stack en Java para la gestión de ventas de clientes.\n" +
            "Implementación de APIs REST usando Spring Boot y MyBatis con base de datos MySQL.\n" +
            "Diseño de vistas frontend con Thymeleaf y autenticación basada en sesiones.\n" +
            "Generación de reportes con iTextPDF y Apache POI.\n" +
            "Validación con Hibernate Validator y pruebas unitarias con JUnit y Mockito.\n" +
            "Gestión del build y dependencias con Maven; mejoras en el flujo de desarrollo con Spring Boot DevTools.\n" +
            "Despliegue en AWS Cloud utilizando instancias EC2 y Elastic Beanstalk, con conexión a AWS RDS para la base de datos."

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
            "INFOTEC – Junior PHP Developer\n" +
            "October 2023 – November 2023\n" +
            "\n" +
            "Developed and maintained PHP-based web applications.\n" +
            "\n" +
            "SEDENA (FAMEX 2023) – Mobile App Developer\n" +
            "January 2023 – April 2023\n" +
            "\n" +
            "Collaborated on the continuation of a mobile app project using Swift and Xcode 12.4.\n" +
            "Implemented new features and ensured code quality during development.\n" +
            "\n" +
            "got IT Business Solutions SA. DE CV. – Web Developer Intern\n" +
            "September 2021 – April 2022\n" +
            "\n" +
            "Developed web applications using Laravel 8.\n" +
            "Performed website maintenance and updates.\n" +
            "Maintained internal information systems using PHP.",
            "React Web Portfolio",
            "Languages: Java 17, SQL\n" +
            "Frameworks: Spring Boot, Spring MVC, MyBatis\n" +
            "Frontend / Templates: Thymeleaf, HTML/CSS\n" +
            "Databases: MySQL, H2 (in-memory), AWS RDS\n" +
            "Cloud & Deployment: AWS EC2, AWS Elastic Beanstalk\n" +
            "Build & Dev Tools: Maven, Spring Boot DevTools, Git\n" +
            "Testing: JUnit, Mockito, MyBatis test starter\n" +
            "Libraries: iTextPDF, Apache POI\n" +
            "Validation: Hibernate Validator\n" +
            "Other: Jakarta EE APIs",
            "Developed a full-stack Java web application for client sales management.\n" +
            "Implemented REST APIs using Spring Boot and MyBatis with MySQL database.\n" +
            "Designed frontend views with Thymeleaf and implemented session-based authentication.\n" +
            "Generated reports using iTextPDF and Apache POI.\n" +
            "Applied validation with Hibernate Validator and unit tested using JUnit and Mockito.\n" +
            "Managed project build and dependencies with Maven; improved development workflow with Spring Boot DevTools.\n" +
            "Deployed to AWS Cloud using EC2 instances and Elastic Beanstalk, connecting to AWS RDS for database hosting."
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
    const [lang, setLang] = React.useState("es"); // idioma por defecto
    const [showSkills, setShowSkills] = React.useState(true);

    return e("div", { className: "container py-4" },
        // Selector de idioma
        e("div", { className: "text-end mb-3" },
            e("button", { className: "btn btn-outline-primary me-2", onClick: () => setLang("es") }, "Español"),
            e("button", { className: "btn btn-outline-secondary", onClick: () => setLang("en") }, "English")
        ),
        // Cabecera
        e("div", { className: "text-center mb-4" },
            e("img", { src: "/imgs/royerch.jpg", className: "rounded-circle mb-2 shadow-sm", width: 160, alt: "Avatar" }),
            e("h3", null, "ROGELIO CEREZO HERNÁNDEZ"),
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
                    e("p", null, e("a",{ href:"https://github.com/royerCH/mini-crm-crud.git", target:"_blank"}, data[lang].contact.github))
                )
            )
        )
    );
}

const root = document.getElementById("devroyer-root");
if(root) ReactDOM.render(e(DevRoyer), root);