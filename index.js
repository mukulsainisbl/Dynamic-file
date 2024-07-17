let http = require("http")
let PORT = 4000
let fs  = require("fs")


let server = http.createServer((req,res) =>{
    console.log("req.url" , req.url)
    if(req.url === "/"){
        let dirData = fs.readdirSync("./" ,"utf-8" , "\n")
        res.writeHead(200,{
            "Content-Type" : "text/html",
        })

        dirData.forEach((ele,i) => {
            res.write(`
                <ul>
                <li>                <a href=${ele}>${ele}</a>
 </li>
                </ul>
                `)
        })
        res.end()  
    }

   else if(req.url != "/favicon.ico"){
    console.log("req.url in if else", req.url)
    let data = fs.readFileSync(`.${req.url}` , "utf-8")
    res.end(data)
}



   
})
server.listen(PORT,()=>{
    console.log("Server Started")
})