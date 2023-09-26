import { AlertContext } from '@/components/Alert'
import { useContext } from 'react'

export default function useAlert() {
  return useContext(AlertContext)
}
