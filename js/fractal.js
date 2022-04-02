document.oncontextmenu = function() {
    return false;
}

window.onload = function() {

    var canvas = document.getElementById("viewport")
    var context = canvas.getContext("2d")

    context.canvas.width = window.innerWidth
    context.canvas.height = window.innerHeight

    var width = canvas.width
    var height = canvas.height

    var imagedata = context.createImageData(width, height)

    var iterations = 75

    const probability_factors = [0.01, 0.85, 0.07, 0.07]
    var t1 = 0.2, t2 = 0.04
    var f1 = (a) => [0., 0.16 * a[1]]
    var f2 = (a) => [0.85 * a[0] + t2 * a[1], -0.04 * a[0] + 0.85 * a[1] + 1.6]
    var f3 = (a) => [t1 * a[0] - 0.26 * a[1], 0.23 * a[0] + 0.22 * a[1] + 1.6]
    var f4 = (a) => [-0.15 * a[0] + 0.28 * a[1], 0.26 * a[0] + 0.24 * a[1] + 0.44]

    function init() {
        canvas.addEventListener("click", onMouseDown)
        generateImage()        
        main(0)
    }

    // Main loop
    function main(tframe) {
        // Request animation frames
        window.requestAnimationFrame(main)

        setTimeout(generateImage, 15)

        // Draw the generate image
        context.putImageData(imagedata, 0, 0)
    }

    function generateImage() {        
        var a = [0, 0]

        let cumulative_probability = [probability_factors[0]], clr = Math.floor(Math.random() * 75 + 125)
        for (let i = 1; i < 4; i++)
            cumulative_probability[i] = cumulative_probability[i - 1] + probability_factors[i]
        
        for (let i = 0; i < iterations; i++) {
            let t =  Math.floor(Math.random() * 100 + 1) / 100
            if (t == cumulative_probability[0])
                a = f1(a)
            else if (t > cumulative_probability[0] && t <= cumulative_probability[1])
                a = f2(a)
            else if (t > cumulative_probability[1] && t <= cumulative_probability[2])
                a = f3(a)
            else
                a = f4(a)
            
            let pixelindex = (Math.floor((1 - a[1] / 10.75) * height) * width + Math.floor((a[0] * 1.25 + 5 * width / height) * width / (10 * width/ height))) * 4
            
            imagedata.data[pixelindex] = 0
            imagedata.data[pixelindex + 1] = clr + Math.floor((2.25 - Math.abs(a[0])) * (255 - clr) / 2.25)
            imagedata.data[pixelindex + 2] = pixelindex % 200
            imagedata.data[pixelindex + 3] = 255
        }
        
        if (iterations < 5000)
            iterations = iterations * 1.05
    }

    function onMouseDown(e) {
        imagedata.data.fill(0)
        t1 = -Math.random() * 0.1 + 0.2
        t2 = -Math.random() * 0.06 + 0.04
        iterations = 75
        generateImage()
    }

    init()
}
