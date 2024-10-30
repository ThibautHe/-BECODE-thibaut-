const btns = document.querySelectorAll("button");

const openText = "Open tab";
const closeText = "Close tab";

btns.forEach((btn) => btn.addEventListener("click",
    () => {
        if(btn.nextElementSibling.classList.contains('hidden'))
        {
            btn.innerText = closeText; 
        }else
        {
            btn.innerText = openText;
        }

        btn.nextElementSibling.classList.toggle("hidden");
    }
    )
);