


import { Box, styled } from '@mui/material'

export const Flex = styled(Box)((props) => ({
  display: 'flex',
  ...(props.fullWidth ? { width: '100%' } : {}),
}))
