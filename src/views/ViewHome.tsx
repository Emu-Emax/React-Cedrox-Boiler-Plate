import Button from 'components/inputs/Button'
import { useAppDispatch } from 'hooks/useRedux'
import { fetchMockData } from 'redux/slices/app'

const ViewHome = () => {
  const dispatch = useAppDispatch()
  const handleButtonClick = async () => {
    await dispatch(fetchMockData())
  }

  return (
    <>
      Click button to perform action (see Redux devTools)
      <Button onClick={handleButtonClick}>Click me</Button>
    </>
  )
}

export default ViewHome
