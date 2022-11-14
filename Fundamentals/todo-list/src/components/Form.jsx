import React,{useState} from 'react'

const Form = ({list, setList}) => {
    const [input,setInput] = useState("")
    const handleSubmit = e => {
        e.preventDefault()
        setList([...list,
        {content: input, complete : false}
        ])
        setInput("")
    }
  return (
    <div>
        <h2>
            Add Item
        </h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={ e => setInput(e.target.value)}/>
            <input type="Submit" value="Do" className="btn btn-primary"/>
        </form>
        {input}
    </div>
  )
}

export default Form