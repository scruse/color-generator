import { useState } from 'react'

const Form = ({ addColor }) => {
  const [color, setColor] = useState('#f15025')

  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
  }
  return (
    <section className="container">
      <h4>Color Generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          placeholder="#f15025"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button className="btn" type="submit" style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  )
}
export default Form
