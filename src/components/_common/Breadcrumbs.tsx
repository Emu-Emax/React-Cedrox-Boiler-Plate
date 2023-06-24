import * as Common from 'components/_core/Core'
import * as Typography from 'components/_core/Typography'
import { ROUTE_HOME, routeBreadCrumbNames } from 'constants/routes'
import { useLocation, useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const NavLink = styled(Typography.Body)(
  () => css`
    &:hover {
      text-decoration: underline;
    }
  `
)

const Breadcrumbs = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  const segments = pathname.split('/').filter(Boolean)

  const locations = []
  locations.push(ROUTE_HOME)
  let currentRoute = ''

  for (let i = 0; i < segments.length; i++) {
    currentRoute += `/${segments[i]}`
    locations.push(currentRoute)
  }

  return (
    <Common.Div
      flex="column"
      px={12}
      mt={1}
    >
      <Common.Div
        flex="row"
        mb={1}
      >
        {locations.map((l: string, index) => (
          <Common.Div
            flex="row"
            key={l}
          >
            {index !== segments.length ? (
              <NavLink
                secondary
                onClick={() => navigate(l)}
              >
                {routeBreadCrumbNames[l]}
              </NavLink>
            ) : (
              <Typography.Body>{routeBreadCrumbNames[l]}</Typography.Body>
            )}

            {index !== segments.length && (
              <Typography.Body
                ml={1}
                mr={1}
                secondary
              >
                {'>'}
              </Typography.Body>
            )}
          </Common.Div>
        ))}
      </Common.Div>
    </Common.Div>
  )
}

export default Breadcrumbs
