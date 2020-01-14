$.get("/config/root", (data) => {
        switch (data) {
        case "false":
        case "0":
                document.getElementById("rootAccess").innerHTML = "Enable ROOT access"
                console.log("root is false")
                console.log("data: " + data)
                break

        case "true":
        case "1":
                document.getElementById("rootAccess").innerHTML = "Disable ROOT access"
                console.log("root is true")
                console.log("data: " + data)
                break

        default:
                document.getElementById("rootAccess").innerHTML = "Toggle ROOT access (from device)"
        }
})

$.get("/network/ip_address", (data) => {
        document.getElementById("ipAddress").innerHTML = data
})
