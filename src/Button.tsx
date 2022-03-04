import React,{ SyntheticEvent, FormEvent, ChangeEvent} from "react"

const Button = () => {
  const type= "submit"

const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  console.log(e)
}

const handleClick = (e: SyntheticEvent) => {

}

const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
console.log(e)
}

  return(
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" onChange={handleChange} />
      <button type={type}>
        submit
        </button>
      </form>
      <div onClick={handleClick}>click me</div>
    </>
  )
}

export default Button