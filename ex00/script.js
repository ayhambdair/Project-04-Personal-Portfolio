const translations = {
    en: {},
    ar: {
        name: "أيهم بدير",
        namePlain: "أيهم بدير",
        intro: "فضول تقني. تعلّم مستمر.",
        role: "مهتم بتطوير الويب والأمن السيبراني.",
        heroText: "أطوّر مهاراتي مع كل مشروع جديد، وأستكشف تطوير الويب وحماية الأنظمة.",
        viewProjects: "استكشف مشاريعي",
        getInTouch: "تواصل معي",
        degree: "بكالوريوس نظم المعلومات الإدارية (MIS)",
        aboutTitle: "نبذة عني",
        aboutText: "أنا أيهم بدير، مطوّر ويب طموح ومهتم بالأمن السيبراني من الأردن.",
        aboutDetails: "أستمتع ببناء صفحات الويب وحل التحديات التقنية. لدي معرفة بأساسيات HTML وCSS وJavaScript، وأحب تحويل الأفكار إلى مشاريع عملية وتفاعلية. أهتم أيضًا بالأمن السيبراني، وأواصل توسيع معرفتي بالبرمجة وحماية الأنظمة. أتعلم باستمرار، وأبني وأطوّر مهاراتي مع كل مشروع جديد.",
        skillsTitle: "المهارات",
        skillsNote: "أدواتي ومهاراتي المتنامية",
        web: "تطوير الويب",
        webDetail: "بنية الصفحات والتنسيق والتفاعل",
        tools: "الأدوات",
        security: "الأمن السيبراني",
        fundamentals: "أساسيات الأمن السيبراني",
        securityDetail: "بناء معرفة أساسية في حماية الأنظمة",
        softTitle: "مهارات شخصية",
        problem: "حل المشكلات",
        continuous: "التعلم المستمر",
        teamwork: "العمل الجماعي",
        projectsTitle: "المشاريع",
        projectNote: "رحلتي التعليمية",
        projectDisclaimer: "استكشف الكود والمشاريع على GitHub.",
        hobbiesTitle: "الهوايات والاهتمامات",
        hobby1: "تعلم تقنيات جديدة",
        hobby2: "البرمجة وبناء المشاريع",
        hobby3: "استكشاف الأمن السيبراني",
        hobby4: "حل المشكلات والتحديات التقنية",
        hobby5: "التعلم المستمر وتطوير الذات",
        contactTitle: "تواصل معي",
        contactEyebrow: "لنتواصل",
        contactLead: "حوارات مفيدة، وفرص جديدة.",
        emailLabel: "البريد الإلكتروني",
        phoneLabel: "الهاتف",
        yourName: "اسمك",
        yourEmail: "بريدك الإلكتروني",
        yourMessage: "رسالتك",
        send: "افتح مسودة بريد",
        emailNote: "يفتح تطبيق البريد مع مسودة الرسالة، دون إرسال تلقائي.",
        footer: "أتعلم باستمرار، وأبني باستمرار.",
        top: "العودة للأعلى"
    }
};

const projectData = [
    {
        repo: "discovery-web-piscine",
        en: "Linux, Git & GitHub",
        ar: "Linux وGit وGitHub",
        tag: "Linux / Git",
        descEn: "Terminal commands, version control & SSH authentication",
        descAr: "أوامر الطرفية، وإدارة الإصدارات، والمصادقة باستخدام SSH"
    },
    {
        repo: "Project-01-HTML-Fundamentals",
        en: "HTML Fundamentals",
        ar: "أساسيات HTML",
        tag: "HTML5",
        descEn: "Building the foundations of the web",
        descAr: "بناء أساس صفحات الويب"
    },
    {
        repo: "project02-css",
        en: "CSS & Styling",
        ar: "التنسيق باستخدام CSS",
        tag: "CSS3",
        descEn: "Exploring layout and visual styling",
        descAr: "استكشاف تنسيق وتصميم الصفحات"
    },
    {
        repo: "JavaScript-Project03",
        en: "JavaScript & Interactivity",
        ar: "JavaScript والتفاعل",
        tag: "JavaScript",
        descEn: "Adding interactivity to the web",
        descAr: "إضافة التفاعل إلى صفحات الويب"
    }
];

const textElements = document.querySelectorAll("[data-t]");
const languageButton = document.getElementById("language");
const themeButton = document.getElementById("theme");
const contactForm = document.getElementById("contact-form");

let language = "en";

textElements.forEach((element) => {
    translations.en[element.dataset.t] = element.textContent.trim();
});

function renderProjects() {
    const container = document.getElementById("project-list");

    container.replaceChildren();

    projectData.forEach((project) => {
        const link = document.createElement("a");
        const content = document.createElement("div");
        const title = document.createElement("h3");
        const description = document.createElement("p");
        const tag = document.createElement("span");

        link.className = "project-row";
        link.href = `https://github.com/ayhambdair/${project.repo}`;
        link.target = "_blank";
        link.rel = "noopener noreferrer";

        title.textContent = project[language];

        description.textContent = language === "ar"
            ? project.descAr
            : project.descEn;

        tag.className = "tag";
        tag.textContent = project.tag;

        content.append(title, description);
        link.append(content, tag);
        container.append(link);
    });
}

function setLanguage(value) {
    language = value;

    const isArabic = value === "ar";

    document.documentElement.lang = value;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";

    textElements.forEach((element) => {
        element.textContent = translations[value][element.dataset.t];
    });

    languageButton.textContent = isArabic ? "EN" : "AR";

    languageButton.setAttribute(
        "aria-label",
        isArabic ? "Switch to English" : "التبديل إلى العربية"
    );

    document.querySelector("nav").setAttribute(
        "aria-label",
        isArabic ? "التنقل الرئيسي" : "Main navigation"
    );

    document.querySelector(".portrait img").alt = isArabic
        ? "صورة أيهم بدير"
        : "Portrait of Ayham Bdair";

    themeButton.setAttribute(
        "aria-label",
        isArabic ? "تبديل الثيم" : "Switch color theme"
    );

    renderProjects();

    try {
        localStorage.setItem("portfolio-language", value);
    } catch {}
}

languageButton.addEventListener("click", () => {
    setLanguage(language === "en" ? "ar" : "en");
});

themeButton.addEventListener("click", () => {
    const dark = document.body.classList.toggle("dark");

    themeButton.setAttribute("aria-pressed", String(dark));

    try {
        localStorage.setItem("portfolio-theme", dark ? "dark" : "light");
    } catch {}
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("sender").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !message) {
        return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);

    window.location.href =
        `mailto:ayhambdair63@gmail.com?subject=${subject}&body=${body}`;
});

document.getElementById("year").textContent = new Date().getFullYear();

try {
    if (localStorage.getItem("portfolio-theme") === "dark") {
        document.body.classList.add("dark");
    }

    language = localStorage.getItem("portfolio-language") === "ar"
        ? "ar"
        : "en";
} catch {}

themeButton.setAttribute(
    "aria-pressed",
    String(document.body.classList.contains("dark"))
);

setLanguage(language);