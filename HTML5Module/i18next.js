

i18next.init(
{
 ///   lng: navigator.language.split("-")[0] || "en",
    lng: 'en',   
    debug: true,
    resources: {
        en: {
            translation: {
                "hello": "Hello world",
                "button": "Load facts"
            }
        },
        fr: {
            translation: {
                "hello": "Hello world fr",
                "button": "Load facts fr"
            }
        },
        nl: {
            translation: {
                "hello": "Hello world nl",
                "button": "Load facts nl"
            }
        }
    }
}, (err, t) => {
    updateContent();
});

document.getElementById("langSelect").addEventListener("change", function () {
    const newLang = this.value;
    i18next.changeLanguage(newLang, () => {
        updateContent();
    });
});

function updateContent() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        el.innerHTML = i18next.t(el.getAttribute("data-i18n"));
    });
}

