import IconCross from 'assets/svgs/IconCross.svg'
import * as Common from 'components/_core/Core'
import * as Typography from 'components/_core/Typography'
import { useOnClickOutside } from 'hooks/useClickOutside'
import React, { ReactNode, useRef } from 'react'
import { createPortal } from 'react-dom'
import styled, { css } from 'styled-components'
import { ICommonModalProps } from 'types/commonComponents'

interface IModalProps extends ICommonModalProps {
  children: ReactNode
  className?: string
  closeOnClickOutside?: boolean
  withExitButton?: boolean
  title?: string
}

export const ModalBody = styled.div(
  ({ theme: { spacing, colors } }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    background: ${colors.modalBackground};
    padding: ${spacing(3)} ${spacing(5)};
    min-width: 50vw;
    min-height: 50vh;
    max-height: 90vh;
    border-radius: 35px;
    border: none;
    box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
    overflow: auto;

    &::-webkit-scrollbar {
      /* Hide the scrollbar */
      display: none;
    }
  `
)

export const ModalOverlay = styled.div(
  ({ theme: { colors } }) => css`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: ${colors.modalOverlay};
  `
)

export const CloseButton = styled(Common.Svg)(
  ({ theme: { spacing } }) => css`
    position: absolute;
    top: ${spacing(2)};
    right: ${spacing(3)};
  `
)

const Modal = ({
  isOpen,
  setIsOpen,
  children,
  className,
  closeOnClickOutside = true,
  withExitButton = true,
  title,
}: IModalProps) => {
  const modalRef = useRef(null)

  if (closeOnClickOutside) {
    useOnClickOutside(modalRef, () => {
      setIsOpen(false)
    })
  }

  const handleCloseClick = () => {
    setIsOpen(false)
  }

  return isOpen
    ? createPortal(
        <>
          <ModalOverlay />
          <ModalBody
            ref={modalRef}
            className={className}
          >
            {(title || withExitButton) && (
              <Common.Div
                flex="row"
                justifyContent="space-between"
                mb={2}
              >
                {title && <Typography.H2>{title}</Typography.H2>}
                {withExitButton && (
                  <CloseButton
                    src={IconCross}
                    onClick={handleCloseClick}
                  />
                )}
              </Common.Div>
            )}
            {children}
          </ModalBody>
        </>,
        document.body
      )
    : null
}

export default Modal
