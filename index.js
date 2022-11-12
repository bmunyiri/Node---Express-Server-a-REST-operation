const Express = require( 'express' )
const app = new Express()


let watu =[

{
name:"Kelele Mingi",
age:35,
status:true
},
{
name:"Kamutu Kadogo",
age:15,
status:false
},
{
name:"Mugongo Muture",
age:65,
status:true
}
]

//send a request to root
// app.get( '/', ( req, res ) => {
//     res.send("Kimeumana")
// })

app.get( "/people", ( req, res ) => {
    res.json(watu)
})



app.listen( '3001', () => {
    console.log("Server Running at port 3001")
})