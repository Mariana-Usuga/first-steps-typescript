import React from "react"

interface CardProps {
  title: string,
  description: string,
  numVotes?: number
} 

const Card = (props: CardProps) => {
const { title, description, numVotes } = props
  return(
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>{numVotes} votes</div>
    </div>
    )
}

export default Card