import Button from 'components/_common/Button'
import ExampleForm from 'components/_forms/ExampleForm'
import { useAppDispatch } from 'hooks/useRedux'
import { fetchMockData } from 'redux/slices/app'

const ViewHome = () => {
  const dispatch = useAppDispatch()
  const handleButtonClick = async () => {
    await dispatch(fetchMockData())
  }

  return (
    <>
      <Button
        mb={2}
        onClick={handleButtonClick}
      >
        Click me
      </Button>
      <ExampleForm />
    </>
  )
}

export default ViewHome
