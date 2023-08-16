import React, { useEffect, useState } from 'react'


// use effect hooks are use to do something after rendering or doing any chage in website 
// ( for exaple i want to show user a popup after 5 sec he arives the website )


const UseEffect = () => {

    const initialData = 0 ;

    const [myNum,setMyNum] = useState(initialData)

    // this use effect has square bracet at the end which just provide the update when the website is loaded only once 

        // useEffect(() => {
        //     document.title = `chats(${myNum})`
        // },[])   

    // this use effect does not have square bracet at the end which provide the regular update when the chages something in website


    useEffect(() => {
        document.title = `chats(${myNum})`
    })

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        
      </div>
    </>
  )
}

export default UseEffect