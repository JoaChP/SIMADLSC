import {BrowserRouter} from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
export const SimadApp = () => {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}