function Copy({password})
{
    function copyHandler(e)
    {
          document.getElementById("password_text_box").select()
      navigator.clipboard.writeText(password)
    }
    return (
        <button className='basis-1/4' onClick={copyHandler}>Copy</button>
    )
}
export default Copy