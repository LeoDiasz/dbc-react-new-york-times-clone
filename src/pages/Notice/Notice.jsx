import React, { useState, useEffect} from 'react'

export const Notice = () => {
  const [datasNotices, setDatasNotices] = useState({})

  useEffect(() => {
    
    let datas = localStorage.getItem("notice")

    if(!datas) {
      return
    }

    localStorage.removeItem("notice")

    datas = JSON.parse(datas)    

    setDatasNotices(datas)
    console.log(datas)
  }, [])

  return (
    <section>
      <h1>{datasNotices.title}</h1>
    </section>
  )
}
