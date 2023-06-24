import { commonStylesFromProps } from 'components/_core/commonStyles'
import * as Core from 'components/_core/Core'
import * as Typography from 'components/_core/Typography'
import { Controller, FieldValues, Path, UseFormReturn } from 'react-hook-form'
import styled, { css } from 'styled-components'
import { ICustomStyledProps } from 'types/customStyles'

interface IInputTextProps<T extends FieldValues> {
  name: Path<T>
  label?: string
  secondaryLabel?: string
  disabled?: boolean
  form: UseFormReturn<T>
  type?: 'text' | 'number'
}

export const StyledCheckbox = styled.input<
  {
    isError: boolean
  } & ICustomStyledProps
>(
  ({ theme: { colors }, isError }) => css`
    ${commonStylesFromProps};
    height: 20px;
    width: 20px;
    border: 1px solid ${isError ? colors.error : colors.textSecondary};
    cursor: pointer;
  `
)

const InputCheckbox = <T extends FieldValues>({
  name,
  form,
  label = '',
  secondaryLabel = '',
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

        return (
          <Core.Div
            flex="row"
            alignItems="center"
            {...rest}
          >
            <StyledCheckbox
              name={name}
              type="checkbox"
              disabled={disabled}
              onChange={onChange}
              isError={!!error}
              mr={2}
            />
            {label && (
              <Typography.Body
                secondary
                bold
                mr={1}
              >
                {label}
              </Typography.Body>
            )}
            {secondaryLabel && (
              <Typography.Body secondary>{secondaryLabel}</Typography.Body>
            )}
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

export default InputCheckbox
