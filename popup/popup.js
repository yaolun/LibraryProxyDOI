function listenForClicks() {
    document.addEventListener("click", (e) => {
        function formSubmitHandler() {
            let doi = document.forms["Library Proxy"]["doi"].value;
            if(doi == ""){
                return;
            }

            firstDigit = doi.search(/\d/);
            if(firstDigit == -1){
                return;
            }
            
            doi = doi.substring(firstDigit)
            let url = "https://doi-org.riken.idm.oclc.org/" + doi
            browser.tabs.create({
                "url": url
            });
        }

        if (e.target.classList.contains("button")) {
            formSubmitHandler();
        }
    });
}

listenForClicks();
