    function showSidebar() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "flex";
}

    function hideSidebar() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.display = "none";
}

    function contact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth"})
}

    function openpartproduct() {
        window.open("https://produtostete.vercel.app/", "_blanck")
}