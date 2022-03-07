import React,{ SyntheticEvent, FormEvent, ChangeEvent, FC} from "react"

const Button: FC = () => {
  const type= "submit"

const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  console.log(e)
}

const handleClick = (e: SyntheticEvent) => {
  console.log(e)
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