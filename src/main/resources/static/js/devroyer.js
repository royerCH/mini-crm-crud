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
           "• Empresa INFOTEC en un periodo de Octubre del 2023 a Noviembre de 2023. realizaba funciones de programador JR. en lenguaje de programación PHP. \n " +
           "\nEstaba contratado por honorarios",
            "• Empresa SEDENA (SECRETARÍA DE LA DEFENSA NACIONAL). En un periodo de Enero - Abril de 2023, colaboré en la continuidad de un desarrollo de una aplicación móvil con el lenguaje de programación Swift, usando xCode, en su versión 12.4. " +
            "dicha aplicación mostraba información y permitía la compra de boletos para ingresar al evento denominado FAMEX 2023 (Feria Aeroespacial 2023).\n" +
            " https://www.f-airmexico.com.mx/ ",
            "•\tEmpresa got It Business Solutions SA. DE CV., en un periodo\n" +
            "de Septiembre 2021 a Abril de 2022.\n" +
            "-\tAprendí Desarrollo Web con framework Laravel 8 (Prácticas profesionales)\n" +
            "-\tMantenimiento de sistemas de información en PHP\n",
            "Hoy en día realizo Freelance en un proyecto con las siguientes características\n" +
            " "+
            "\tDesarrollador Java con experiencia en Spring Boot, Hibernate y MySQL, construyendo aplicaciones CRUD robustas con manejo de errores y validación de entradas. Experto en logging y diseño modular, separando DTOs, repositorios y servicios para un código mantenible y escalable.\n" +
            "\n" +
            "Mini CRM – Gestión de Clientes y Ventas\n" +
            "Java 17 | Spring Boot | MyBatis | Thymeleaf | MySQL | GitHub\n" +
            "•\tDesarrollo full-stack de un mini CRM para gestionar clientes y ventas, incluyendo operaciones CRUD y autenticación de usuarios.\n" +
            "•\tConstrucción de REST APIs y lógica de negocio con MyBatis, optimizando consultas a la base de datos MySQL.\n" +
            "•\tInterfaces web dinámicas y responsivas con Thymeleaf y JavaScript, mejorando la experiencia del usuario.\n"

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
            "INFOTEC company, in the period from October 2023 to November 2023, performed functions of a JR. programmer in the PHP programming language.",
            "•SEDENA Company (SECRETARÍA DE LA DEFENSA NACIONAL). During the period from January to April 2023, I collaborated on the continuation of the development of a mobile application using the Swift programming language, using xCode, version 12.4. This application displayed information and allowed the purchase of tickets to attend the event called FAMEX 2023 (FERIA AEROESPACIAL 2023).\n" +
            "https://www.f-airmexico.com.mx/",
            "•\tCompany got It Business Solutions SA. DE CV., in a period\n" +
            "from September 2021 to April 2022.\n" +
            " I learned Web Development with Laravel 8 framework (Professional practices)\n" +
            " Maintenance of information systems in PHP",
            "Currently, I work as a freelancer on a project with the following characteristics:\n" +
            "\n" +
            "I am a Java developer with experience in Spring Boot, Hibernate, and MySQL, building robust CRUD applications with error handling and input validation. I am an expert in logging and modular design, separating DTOs, repositories, and services for maintainable and scalable code.\n" +
            "\n" +
            "\"Mini CRM – Customer and Sales Management\" +\n" +
            "\n" +
            "\"Java 17 | Spring Boot | MyBatis | Thymeleaf | MySQL | GitHub\"\n" +
            "\n" +
            "I developed a full-stack mini CRM for managing customers and sales, including CRUD operations and user authentication.\n" +
            "\n" +
            "I built REST APIs and business logic with MyBatis, optimizing MySQL database queries.\n" +
            "I created dynamic and responsive web interfaces with Thymeleaf and JavaScript, improving the user experience."
        ],
        contact: {
            email: "rogeliocerezohernandez@gmail.com",
            phone: "+52 56 45031914",
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