import { useAppDispatch, useAppSelector } from 'hooks/useRedux'
import { ReactNode, useEffect } from 'react'
import { selectResolution, setResolution } from 'redux/slices/app'

// TODO: Do the loader
const ResponsiveProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch()
  const resolution = useAppSelector(selectResolution)

  useEffect(() => {
    // set resolution
    const handleResize = () => {
      const { innerWidth } = window
      dispatch(setResolution(innerWidth))
    }
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return resolution ? <>{children}</> : <>loading...</>
}
export default ResponsiveProvider
