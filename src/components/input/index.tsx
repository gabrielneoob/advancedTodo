import * as Styles from './styles'
import { InputTypes } from '../../types/input.types'


const Input = ({
  onChange,
  placeholder,
  value,
  type,
  labelPlaceholder
}: InputTypes) => {
  return (
    <Styles.Container>
      <Styles.Label >
        <span>{labelPlaceholder}</span>
        <Styles.Input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        />
      </Styles.Label>
    </Styles.Container>
  )
}

export default Input