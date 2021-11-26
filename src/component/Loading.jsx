import React from 'react'
import "../App.css"
const Loading = () => {

const innerStrip = document.querySelector('innerstrip')
innerStrip.classList.add('loading')
setTimeout(() => {
  innerStrip.classList.remove("loading")
  innerStrip.classList.add("complete");
}, 3000)
    return (
      <>
      </>
    )
}

export default Loading
