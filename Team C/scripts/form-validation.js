(() => {
    "use strict";

    const forms = document.querySelectorAll(".needs-validation");

    document.getElementById("phoneNumber").addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D/g, "");
    });

    document.getElementById("name").addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/[^A-Za-z ]+/, "");
    });

    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();
