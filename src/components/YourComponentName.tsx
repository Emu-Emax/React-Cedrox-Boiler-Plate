import * as Core from 'components/_core/Core'
import * as Typography from 'components/_core/Typography'
import { useAppDispatch } from 'hooks/useRedux'
import { ReactNode, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { ICustomStyledProps } from 'types/customStyles'

const YourComponentContainer = styled(Core.Div)<ICustomStyledProps>(
  ({ theme: { colors } }) => css`
    // color: ${colors.primary}
  `
)

interface IYourComponentNameProps {
  children?: ReactNode
  className?: string
}

const YourComponentName = ({
  className = '',
  children,
}: IYourComponentNameProps) => {
  const [state, setState] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log('hello world')
  }, [])

  return (
    <YourComponentContainer>
      <Typography.H1>Component name</Typography.H1>
    </YourComponentContainer>
  )
}

export default YourComponentName
