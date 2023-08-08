import * as Typography from 'components/_core/Typography'
import React, { ComponentType } from 'react'

interface WithErrorLabelProps {
  error?: { message: string }
}

const hocWithErrorLabel = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  return ({ error, ...props }: WithErrorLabelProps & P) => {
    // console.log(props.form)
    return (
      <div>
        <WrappedComponent {...(props as P)} />
        {error && (
          <Typography.ErrorMessage>
            {error?.message ?? ''}
          </Typography.ErrorMessage>
        )}
      </div>
    )
  }
}

export default hocWithErrorLabel
