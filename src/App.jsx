import { Button, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  const[principle,setPrinciple]=useState(0)
  const[rate,setRate]=useState(0)
  const[year,setYear]=useState(0)
  const[interest,setInterest]=useState(0)

  const[isPrinciple,setIsPrinciple]=useState(true)
  const[isRate,setIsRate]=useState(true)
  const[isYear,setIsYear]=useState(true)

  const validate=(e)=>{
    const {name,value} = e.target
     console.log(name);
     console.log(value);
  
if(!!value.match(/^[0-9]*$/)){
  if(name==='priciple'){
    setPrinciple(value)
    setIsPrinciple(true)
  }
  else if(name==='rate'){
    setRate(value)
    setIsRate(true)

  }
  else{
    setYear(value)
    setIsYear(true)
  }

}else{
  if(name==='priciple'){
    setIsPrinciple(false)
    setPrinciple(value)
    
  }
  else if(name==='rate'){
    setRate(value)
    setIsRate(false)

  }
  else{
    setYear(value)
    setIsYear(false)
  }

}
  }

const handleReset =()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsYear(true)
    setIsPrinciple(true)
    setIsRate(true)
    setInterest(0)
  }
const handleSubmit=(e)=>{
  e.preventDefault()
  setInterest((principle*rate*year)/100)

}
  

  return (
    <>
      <div className="bg-dark d-flex align-items-center justify-content-center" style={{height:'120vh'}}>
        <div className="bg-light p-5 rounded" style={{width:'500px',height:'600px'}}>
          <h1>Simple Interest app</h1>
          <p>calculte your simple interest</p>

          <div  style={{height:'100px'}} className="bg-warning d-flex align-items-center rounded mt-5 flex-column">
            <h1 className="mt-3">₹ {interest}</h1>
            <p>total simple interest</p>
            <form onSubmit={handleSubmit}>
              <div  className='mb-3 mt-1'>
              <TextField id="outlined-basic" label="₹ Principle amount" variant="outlined" className='w-100'
                name='priciple' onChange={(e)=>validate(e)} value={principle || ""} />
                { !isPrinciple && 
                <p>*invalid</p>

              }
              </div>
              <div  className='mb-3'>
              <TextField id="outlined-basic" label="% Rate of Interest" variant="outlined"  className='w-100'
               name='rate' onChange={(e)=>validate(e)} value={rate || ""} />
              { !isRate && 
                <p>*invalid</p>

              }
              </div>
              <div  className='mb-1'>
              <TextField id="outlined-basic" label="Year" variant="outlined"  className='mb-3'
              name='year' onChange={(e)=>validate(e)} value={year || ""} />
              { !isYear && 
                <p>*invalid</p>

              }
              </div>
              <div className='mb-3 d-flex justify-content-between'>
              <Button variant="outlined"  className='mb-3' 
               onClick={handleReset}>RESET</Button>
              <Button variant="contained" className='mb-3'
              disabled ={isPrinciple && isRate && isYear ?false :true} type='submit' >CALCULATE</Button>
              </div>
            </form>

          </div>
        </div>

      </div>

    </>
  )
}

export default App
