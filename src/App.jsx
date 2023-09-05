import { useState } from 'react'
import './App.css'
import Copy from './components/Copy'
import Number from './components/Number'
import Password_Text_Box from './components/Password_Text'
import Special_Char from './components/Special_Char'
import Range from './components/Range'
function App() {
  const [password, setPassword] = useState('a')
  const [length, setLength]= useState(parseInt(1))
  const chars="abcdefghijklmnopqrstuvwxyz";
  // function char(e)
  // {
  //   let schar=['!','@','#','$','%','^','&','*','(',')','{','}','[',']','<','>']
  //   let len=length;
  //   var val=password;
  //  if(e.target.checked)
  //  {
  //   let r1=((Math.random()+1)*100)%len;
  //   while(r1>0)
  //   {
  //     r1--;
  //     let idx=parseInt(((Math.random()+1)*100)%len);
  //    console.log(idx);
  //    let val_arr=val.split('');
  //     val_arr[idx]=schar[(parseInt(((Math.random()+1)*100)%16))];
  //     val=val_arr.join('');


  //   //  r1--;
  //   //  let idx=((Math.random()+1)*100)%len;
  //   //  val=password;
  //   //  val[idx]=schar[((Math.random()+1)*100)%16];
  //   }
  //  }
  //  else{
  //   for (let i=0;i<len;i++)
  //   {
  //     if((parseInt(val[i])>=0 && parseInt(val[i])<=9) || (val[i]>='a' && val[i]<='z'))
  //     continue
  //   else
  //     {let val_arr=val.split('');
  //       val_arr[i]=(chars[parseInt(((Math.random()+1)*100)%26)])
  //       val=val_arr.join('');
  //     }
  //   }
  //  }
   
  //  setPassword(val);
  // }

  // function num(e)
  // {
  //   console.log(e)
  //  let len=length;
  //  var val=password;
  //  if(e.target.checked)
  //  {
  //   console.log("inside")
  //   let r1=parseInt(((Math.random()+1)*100)%len);
  //   console.log(r1)
  //   // r1=parseFloat(r1)%length;
  //   // console.log(r1)
  //   // console.log((Math.random()+1)*100)
  //   // console.log(parseInt((Math.random()+1)*100)%length)
  //   // val=password;
  //  while(r1>0)
  //  {
  //   r1--;
  //   let idx=parseInt(((Math.random()+1)*100)%len);
  //  console.log(idx);
  //  let val_arr=val.split('');
  //   val_arr[idx]=(parseInt(((Math.random()+1)*100)%10));
  //   val=val_arr.join('');
  //  }
  //  }
  //  else{
  //   // val=password
  //   for (let i=0;i<len;i++)
  //   {
  //     if(parseInt(val[i])>=0 && parseInt(val[i])<=9)
  //     {let val_arr=val.split('');
  //       val_arr[i]=(chars[parseInt(((Math.random()+1)*100)%26)])
  //       val=val_arr.join('');
  //     }
  //   }
  //  }
   
  //  setPassword(val);
  // }
//   function rangeHandler(e)
//   {
//     console.log(e);
//     // (e)=>{console.log(e.target.value)}
//     let len=length
//     console.log(len);
//     let len1=e.target.value
   
//     console.log(len1);
// if(len>len1)
// {
//   var s=password;
//   // var diff=len-len1;
//   // while(diff>0)
//   // {
//   //   diff--;
//   //   s.pop();

//   // }
//   s=s.substring(0,len1);
//   setPassword(s)
// }
// else{
//   var diff=len1-len;
//   console.log(diff);
//   var val=password;
//   while(diff>0)
//   {
//     diff--;
//     val+=(chars[parseInt(((Math.random()+1)*100)%26)])
//   }
//   setPassword(val)
// }
// setLength(e.target.value);
//   }
  // function copyHandler(e)
  // {
  //       document.getElementById("password_text_box").select()
  //   navigator.clipboard.writeText(password)
  // }
  var copy_prop={
    password:{password}
  }
  var password_text_prop={
    password:{password}
  }
  var range_prop={
    password:{password},
    length:{length},
    setLength:{setLength},
    setPassword:{setPassword},
    chars:{chars},
  }
  var number_prop={
    password:{password},
    length:{length},
    setPassword:{setPassword},
    chars:{chars},
  }
  var special_prop={
    password:password,
    length:{length},
    setPassword:{setPassword},
    chars:{chars},
  }
  return (
    <>
      <div className='flex flex-row h-1/4 bg-black w-1/4'>
        <div className='flex flex-row'>
          <Password_Text_Box password={password} />
          <Copy  password={password} />
        {/* <input type="text" className='basis-3/4' value={password} id='password_text_box' /> */}
      {/* <button className='basis-1/4' onClick={copyHandler}>Copy</button> */}
        </div>
     <div className='flex flex-row'>
      <Range  password={password}
    length={length}
    setLength={setLength}
    setPassword={setPassword}
    chars={chars}/>
      <Number   password={password}
    length={length}
    setPassword={setPassword}
    chars={chars} />
      <Special_Char  password={password}
    length={length}
    setPassword={setPassword}
    chars={chars} />
     {/* <label
    htmlFor="Range "
    className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
    > Length {length}</label
  > */}
  {/* <input
    type="range"
    onChange={rangeHandler} min='0' max='16' value={length}
    // className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
    // id="customRange1" 
    /> */}
      {/* <label htmlFor="Number">Number</label>
     <input type="checkbox" name="Number" id="Number" className='basis-1/3' onClick={num} /> */}
     {/* <label htmlFor="Characters">Characters</label>
      <input type="checkbox" name="Characters" id="Characters" className='basis-1/3' onClick={char} /> */}
     </div>
     
      </div>
    </>
  )
}

export default App
