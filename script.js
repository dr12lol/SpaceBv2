changeColours()
changeColours2()
// changeSize()



async function changeColours() {
    while (true){
        const hue = Math.random() * 360
        const brightness = Math.random() * 100
        const color = `hsl(${hue}, 80%, 50%)`
        document.getElementById('titleb').style.color = color
        await wait(500)
    }
}
async function changeColours2() {
    while (true){
        const hue = Math.random() * 360
        const brightness = Math.random() * 100
        const color = `hsl(${hue}, 80%, 70%)`
        document.getElementById('mars-activity').style.color = color
        await wait(500)
    }
}
function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function changeSize() {
    while (true){
        
        const size = Math.random() * 50 + 10

        document.getElementById('titlec').style.fontSize = size+"px"
        await wait(500)
    }
}
function wait(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}