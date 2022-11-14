const Express = require( 'express' );
const app = new Express();
app.use(Express.json());


let watu =[

    {
    id:1,
name:"Kelele Mingi",
age:35,
status:true
},
    {
     id:2,
name:"Kamutu Kadogo",
age:15,
status:false
},
    {
     id:3,
name:"Mugongo Muture",
age:65,
status:true
}
]

//send a request to root
// app.get( '/', ( req, res ) => {
//     res.send("Kimeumana")
// })

// Commit - 1 to display watu list 
app.get( "/people", ( req, res ) => {
    res.json(watu)
})


//Commit - 2 To add a person to watu list
app.post( "/people", ( req, res ) => {
  
    const NewWatu = req.body

    watu.push( NewWatu )
    
    res.json(watu)
    
})

//Commit -3 To remove a Person from watu list
app.delete( "/people/:id", ( req, res ) => {
    
    const id = req.params.id

    for ( let i = 0; i < watu.length; i++ ){
        if ( watu[ i ].id == id ) { 
              watu.splice(i,1)  
        }
    
    }
      res.json(watu)
})

app.listen( '3001', () => {
    console.log("Server Running at port 3001")
})