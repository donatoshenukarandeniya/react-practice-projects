import React from "react"
import ReacrDom from "react-dom"

ReacrDom.render(<div><h1>Hello World!</h1><p>This is a Paragraph</p></div>,document.getElementById("root"));

var myNewp = document.createElement("p")
myNewp.innerHTML = "This is a Pharagraph."
