import TextInputProps from "./ITextInput"
import './textInput.scss'

const TextInput = (props: TextInputProps) => {
  const { id, label, content } = props;

  return (
    <div className='text-input'>
      <label>
        {label}
      </label>
      <input defaultValue={content} id={id} />
    </div>
  )
}


export default TextInput;