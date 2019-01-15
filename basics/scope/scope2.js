//example of a leaked global (not declaring a var, but taking that vars name and putting it in the scope of the if statement will cause a leaked global, compiler will fix this by declaring the var globally, but this is poor practice)
if(true){
  if(true){
    name = "in second"
    console.log(name)
    
  }
}

if (true) {
    console.log(name)
}
//fix this issue by declaring the var globally