import { useState } from 'react';
function Number({password,
    length,
    setPassword,
    chars})
{
    function num(e)
    {
      console.log(e)
     let len=length;
     var val=password;
     if(e.target.checked)
     {
      console.log("inside")
      let r1=parseInt(((Math.random()+1)*100)%len);
      console.log(r1)
      // r1=parseFloat(r1)%length;
      // console.log(r1)
      // console.log((Math.random()+1)*100)
      // console.log(parseInt((Math.random()+1)*100)%length)
      // val=password;
     while(r1>0)
     {
      r1--;
      let idx=parseInt(((Math.random()+1)*100)%len);
     console.log(idx);
     let val_arr=val.split('');
      val_arr[idx]=(parseInt(((Math.random()+1)*100)%10));
      val=val_arr.join('');
     }
     }
     else{
      // val=password
      for (let i=0;i<len;i++)
      {
        if(parseInt(val[i])>=0 && parseInt(val[i])<=9)
        {let val_arr=val.split('');
          val_arr[i]=(chars[parseInt(((Math.random()+1)*100)%26)])
          val=val_arr.join('');
        }
      }
     }
     
     setPassword(val);
    }

    return(
        <>
         <label htmlFor="Number">Number</label>
     <input type="checkbox" name="Number" id="Number" className='basis-1/3' onClick={num} />
        </>
    )
}
export default Number