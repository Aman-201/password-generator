import { useState } from 'react';
function Range( {password,
    length,
    setLength,
    setPassword,
    chars})
{
    function rangeHandler(e)
    {
      console.log(e);
      // (e)=>{console.log(e.target.value)}
      let len=length
      console.log(len);
      let len1=e.target.value
     
      console.log(len1);
  if(len>len1)
  {
    var s=password;
    // var diff=len-len1;
    // while(diff>0)
    // {
    //   diff--;
    //   s.pop();
  
    // }
    s=s.substring(0,len1);
    setPassword(s)
  }
  else{
    var diff=len1-len;
    console.log(diff);
    var val=password;
    while(diff>0)
    {
      diff--;
      val+=(chars[parseInt(((Math.random()+1)*100)%26)])
    }
    setPassword(val)
  }
  setLength(e.target.value);
    }
    
    return(
<>
<label
    htmlFor="Range "
    className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
    > Length {length}</label
  >
<input
    type="range"
    onChange={rangeHandler} min='0' max='16' value={length}
    // className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
    // id="customRange1" 
    />
</>
    );
}
export default Range