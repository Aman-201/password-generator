import { useState } from 'react';
function Special_Char({password,
    length,
    setPassword,
    chars})
{
    function char(e)
    {
      let schar=['!','@','#','$','%','^','&','*','(',')','{','}','[',']','<','>']
      let len=length;
      var val=password;
     if(e.target.checked)
     {
      let r1=((Math.random()+1)*100)%len;
      while(r1>0)
      {
        r1--;
        let idx=parseInt(((Math.random()+1)*100)%len);
       console.log(idx);
       let val_arr=val.split('');
        val_arr[idx]=schar[(parseInt(((Math.random()+1)*100)%16))];
        val=val_arr.join('');
  
  
      //  r1--;
      //  let idx=((Math.random()+1)*100)%len;
      //  val=password;
      //  val[idx]=schar[((Math.random()+1)*100)%16];
      }
     }
     else{
      for (let i=0;i<len;i++)
      {
        if((parseInt(val[i])>=0 && parseInt(val[i])<=9) || (val[i]>='a' && val[i]<='z'))
        continue
      else
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
<label htmlFor="Characters">Characters</label>
      <input type="checkbox" name="Characters" id="Characters" className='basis-1/3' onClick={char} />
</>
    )
}
export default Special_Char