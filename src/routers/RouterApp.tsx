// Common
import { Routes, Route, BrowserRouter } from 'react-router-dom'

// Layouts
import LayoutBase from 'layouts/LayoutBase'

// Views

// Constants
import { ROUTE_HOME } from 'constants/routes'
import ViewHome from 'views/ViewHome'

const MAPPED_ROUTES = [
  {
    path: ROUTE_HOME,
    component: ViewHome,
    layout: LayoutBase,
  },
]

const RouterApp = () => (
  <BrowserRouter>
    <Routes>
      {MAPPED_ROUTES.map(({ path, component: Component, layout: Layout }) => (
        <Route
          path={path}
          key={path}
          element={
            <Layout>
              <Component />
            </Layout>
          }
        />
      ))}
    </Routes>
  </BrowserRouter>
)

export default RouterApp
