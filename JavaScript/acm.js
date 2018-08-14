function scrollcolor() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navigationbar").className = "test";
    } else {
        document.getElementById("navigationbar").className = "";
    }
}
