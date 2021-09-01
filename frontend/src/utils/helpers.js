import { useLocation } from "react-router-dom"

export const useCategory = () => {
  const location = useLocation()
  const pathname = location.pathname
  const category = pathname.split('/')[2]
  if (category)
    return category
  else 
    return 'mobs'

}

export const parseDesc = (desc) => {
  desc = desc.replaceAll('\\n', ' <br> ')
  desc = desc.replace('#c', '<b>')
  desc = desc.replace('#', '</b>')
  return desc
}