let lines = document.querySelectorAll(".product")

lines.forEach((i, index) => {
    if(!Number.isInteger(index/2)) {
        i.style.backgroundColor = '#d1d1d1'
    } 
})
