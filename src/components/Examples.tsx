import * as Core from 'components/_core/Core'
import * as Typography from 'components/_core/Typography'
import ExampleForm from 'components/_forms/ExampleForm'
import styled, { css } from 'styled-components'
import { ICustomStyledProps } from 'types/customStyles'
import { mediaQueries } from 'utils/breakpoints'

const TitleExample = styled(Typography.H2)<ICustomStyledProps>(
  () => css`
    width: 100%;
    text-align: center;
  `
)

const ExampleRWDBlock = styled(Core.Div)<ICustomStyledProps>(
  ({ theme: { colors } }) => css`
    width: 100px;
    height: 100px;
    color: ${colors.white};

    ${mediaQueries.xl} {
      background: ${colors.tertiary};
    }
    ${mediaQueries.lg} {
      background: ${colors.secondary};
    }
    ${mediaQueries.md} {
      background: ${colors.primary};
    }
  `
)

const Examples = () => {
  return (
    <Core.Div
      flex="column"
      gap={4}
      alignItems="center"
    >
      <Typography.H1 align="center">Examples</Typography.H1>
      <TitleExample>Responsive web design</TitleExample>
      <ExampleRWDBlock
        fullyCentered
        p={2}
      >
        <p>RWD example block</p>
      </ExampleRWDBlock>

      <TitleExample>Form</TitleExample>
      <ExampleForm />
    </Core.Div>
  )
}

export default Examples
