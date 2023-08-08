// React
import { commonStylesFromProps } from 'components/_core/coreStyles'
import * as Core from 'components/_core/Core'
import * as Typography from 'components/_core/Typography'
import { Controller, FieldValues, Path, UseFormReturn } from 'react-hook-form'
import styled, { css } from 'styled-components'

interface IInputSelectProps<T extends FieldValues> {
  name: Path<T>
  label?: string
  disabled?: boolean
  form: UseFormReturn<T>
  options: { label: string; value: string }[]
  optional?: boolean
}

export const StyledSelect = styled.select<{ isError: boolean }>(
  ({ theme: { colors, spacing }, isError }) => css`
    ${commonStylesFromProps};
    height: 50px;
    padding: ${spacing(1)};
    border: 1px solid ${isError ? colors.error : colors.textSecondary};
    color: ${colors.textSecondary};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    // TODO: Custom arrows
    //background-image: url("path/to/custom-arrow.png");
    //background-repeat: no-repeat;
    //background-position: right center;
    //background-size: 16px 16px;
    //padding-right: 24px; /* Add padding for the custom arrow */
  `
)

const InputSelect = <T extends FieldValues>({
  form,
  name,
  label = '',
  options = [],
  disabled = false,
}: IInputSelectProps<T>) => {
  const { control } = form

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value: formValue },
        formState: { errors },
      }) => {
        const error = errors[name] as { message: string }
        const value = formValue as string | string[]
        return (
          <Core.Div flex="column">
            {label && (
              <Core.Label id={`input-label-${label}`}>{label}</Core.Label>
            )}
            <StyledSelect
              name={name}
              value={value}
              isError={!!error}
              disabled={disabled}
              onChange={onChange}
            >
              <option value="">Select an option</option>
              {options.map(option => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </StyledSelect>
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

export default InputSelect
