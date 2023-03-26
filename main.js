click1 = () => {
    alert("clicked!\nsum100=" + sum100())
}

sum100 = () => {
    i = 1
    sum = 0
    while (i <= 100) {
        sum += i
        i++
    }
    return sum
}

gotopage = (url) => {
    window.location = "https://"+url
}