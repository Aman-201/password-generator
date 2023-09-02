import { useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('abcde23hik')
  const [Length, setLength]= useState(10)
  const chars="abcdefghijklmnopqrstuvwxyz";
  function char(e)
  {
    let schar=['!','@','#','$','%','^','&','*','(',')','{','}','[',']','<','>']
   let len=length;
   if(e.target.checked)
   {
    let r1=((Math.random()+1)*100)%len;
    while(r1>0)
    {
     r1--;
     let idx=((Math.random()+1)*100)%len;
     val=password;
     val[idx]=schar[((Math.random()+1)*100)%16];
    }
   }
   
   setPassword(val);
  }

  function num(e)
  {
    console.log(e)
   let len=length;
   let val;
   if(e.target.checked)
   {
    console.log("inside")
    let r1=(((Math.random()+1)*100));
    console.log(r1)
    r1=parseFloat(r1)%length;
    console.log(r1)
    console.log((Math.random()+1)*100)
    console.log(parseInt((Math.random()+1)*100)%length)
    val=password;
   while(r1>0)
   {
    r1--;
    let idx=((Math.random()+1)*100)%len;
   
    val[idx]=((Math.random()+1)*100)%10;
   }
   }
   else{
    val=password
    for (let i=0;i<len;i++)
    {
      if(parseInt(val[i])>=0 && parseInt(val[i])<=9)
      val[i]=chars[((Math.random()+1)*100)%26]
    }
   }
   
   setPassword(val);
  }
  return (
    <>
      <div className='flex flex-row h-1/4 bg-black w-1/4'>
        <div className='flex flex-row'>
        <input type="text" className='basis-3/4' value={password} />
      <button className='basis-1/4'>Copy</button>
        </div>
     <div className='flex flex-row'>
     <label
    htmlFor="Range"
    className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
    > Length</label
  >
  <input
    type="range"
    className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
    id="customRange1" />
      <label htmlFor="Number">Number</label>
     <input type="checkbox" name="Number" id="Number" className='basis-1/3' onClick={num} />
     <label htmlFor="Characters">Characters</label>
      <input type="checkbox" name="Characters" id="Characters" className='basis-1/3' onClick={char} />
     </div>
     
      </div>
    </>
  )
}

export default App
