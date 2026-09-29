import { Button } from './styles'

function DefaultButton({ children, theme }) {

    return(
        <Button theme={theme}>{children}</Button>
    )
}

export default DefaultButton