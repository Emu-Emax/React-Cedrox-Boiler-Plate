import { yupResolver } from '@hookform/resolvers/yup'
import Button from 'components/_common/Button'
import * as Common from 'components/_core/Core'
import * as Typography from 'components/_core/Typography'
import InputText from 'components/_inputs/InputText'
import { useAppDispatch } from 'hooks/useRedux'
import { ReactNode, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import styled, { css } from 'styled-components'
import { ICustomStyledProps } from 'types/customStyles'
import { exampleSchema } from 'utils/validation/example'

const YourComponentContainer = styled(Common.Div)<
  ICustomStyledProps & { variant?: 'primary' | 'secondary' }
>(
  ({ theme: { colors } }) => css`
    // color: ${colors.primary}
  `
)

interface IExampleFormProps {
  onClick?: () => void
  children?: ReactNode
  className?: string
}

interface TFormType {
  test: string
}

const ExampleForm = ({
  className = '',
  children = null,
}: IExampleFormProps) => {
  const [state, setState] = useState(false)
  const dispatch = useAppDispatch()

  const form = useForm<TFormType>({
    defaultValues: {
      test: '',
    },
    resolver: yupResolver(exampleSchema),
  })
  const { handleSubmit } = form

  const onValidForm = () => {
    console.log('valid')
  }

  const onInvalidForm = () => {
    console.log('invalid')
  }

  useEffect(() => {
    console.log('hello world')
  }, [])

  return (
    <YourComponentContainer>
      <form onSubmit={handleSubmit(onValidForm, onInvalidForm)}>
        <InputText
          name="test"
          form={form}
          mb={2}
        />
        <Button type="submit">Submit</Button>
      </form>
    </YourComponentContainer>
  )
}

export default ExampleForm
