import * as React from "react"

const Arrow = (props) => (
  <svg
    {...props}
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 23.6 16"
  >
    <path
      style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
      d="M1 8h21.6M15.6 1l7 7-7 7"
    />
  </svg>
)

export default Arrow
