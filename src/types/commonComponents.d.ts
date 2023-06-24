import { Dispatch, SetStateAction } from 'react'

export interface ICommonModalProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
