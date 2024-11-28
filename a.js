const siteLang = {
    eng: {
        menuHome: "Home",
        menuCategories: "Categories",
        menucollections:"My collections",
        menuBlog: "Blog",
        menulogin: "login",
        menuSingUp: "SingUp",
        sec1Str1: "Awesome tools for",
        sec1Str2: "Designer & Developer",
        sec1Str3: "Antool is a web collection of information on paid or",
        sec1Str4: "free Design and Development tools",
        Search: "Search",
        loaderText: "My Loader...",
        sec1Str4: "",
        sec1Str4: "",
        sec1Str4: "",
        sec1Str4: "",
        sec1Str4: "",
        sec1Str4: "",
        sec1Str4: "",
        sec1Str4: "",
        sec1Str4: "",
        sec1Str4: "",
        sec1Str4: "",
        sec1Str4: "",
        sec1Str4: "",
        sec1Str4: "",
        sec1Str4: "",
        sec1Str4: "",
        sec1Str4: "",

    },
    ukr: {
        menuHome: "Головна",
        menuCategories: "Категорії",
        menucollections: "Моя колекція",
        loaderText: "Мій Лоадер..."
    }
    
}

function setLang(lang){
    document.getElementById("home").innerHTML = siteLang[lang]["menuHome"]
    document.getElementById("menuCategories").innerHTML = siteLang[lang]["menuCategories"]
    document.getElementById("menucollections").innerHTML = siteLang[lang]["menucollections"]
    document.getElementById("loaderText").innerHTML = siteLang[lang]["loaderText"]
}