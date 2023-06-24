import { commonStylesFromProps } from 'components/_core/commonStyles'
import * as Core from 'components/_core/Core'
import * as Typography from 'components/_core/Typography'
import { Controller, FieldValues, Path, UseFormReturn } from 'react-hook-form'
import styled, { css } from 'styled-components'
import { ICustomStyledProps } from 'types/customStyles'

interface IInputTextProps<T extends FieldValues> {
  name: Path<T>
  label?: string
  disabled?: boolean
  form: UseFormReturn<T>
  type?: 'text' | 'number'
}

export const StyledTextField = styled.input<{
  isError: boolean
}>(
  ({ theme: { colors, spacing }, isError }) => css`
    ${commonStylesFromProps};
    height: 50px;
    padding: ${spacing(1)};
    border: 1px solid ${isError ? colors.error : colors.textSecondary};
    color: ${colors.textSecondary};
    min-width: 300px;
  `
)

const InputText = <T extends FieldValues>({
  name,
  form,
  label = '',
  type = 'text',
  disabled = false,
  ...rest
}: IInputTextProps<T> & ICustomStyledProps) => {
  const { control } = form

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, formState: { errors } }) => {
        const error = errors[name] as { message: string }
        console.log('error: ', error)

        return (
          <Core.Div
            flex="column"
            {...rest}
          >
            {label && <Core.Label>{label}</Core.Label>}
            <StyledTextField
              name={name}
              type={type}
              isError={!!error}
              disabled={disabled}
              onChange={onChange}
              value={value as string}
            />
            {error && (
              <Typography.ErrorMessage>
                {error?.message ?? ''}
              </Typography.ErrorMessage>
            )}
          </Core.Div>
        )
      }}
    />
  )
}

// const InputText = hocWithErrorLabel(InputTextComponent)
export default InputText
