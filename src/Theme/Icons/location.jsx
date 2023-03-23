import * as React from "react"

const Place = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 22"
    style={{
      enableBackground: "new 0 0 20 22",
    }}
    xmlSpace="preserve"
    width="1em"
    height="1em"
  >
    <path
      d="M10 .4C5.7.4 2.2 4 2.2 8.3c0 2.4 1.2 5.4 3.7 8.8 1.1 1.5 2.3 3 3.6 4.3.3.3.7.3 1 0 1.3-1.3 2.5-2.7 3.6-4.2 2.4-3.4 3.7-6.4 3.7-8.9 0-4.4-3.5-7.9-7.8-7.9zm0 11.3c-2.1 0-3.8-1.7-3.8-3.8 0-2.1 1.7-3.8 3.8-3.8 2.1 0 3.8 1.7 3.8 3.8 0 2.1-1.7 3.8-3.8 3.8z"
      style={{
        fill: "#d50014",
      }}
    />
  </svg>
)

export default Place
