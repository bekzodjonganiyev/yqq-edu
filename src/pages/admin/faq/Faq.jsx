import React, {useContext} from 'react'
import { useEffect } from 'react'

import { SkeletonPost } from '../../../components'

import { UsersContext, faqActions } from '../../../context'

const Faq = () => {
  const {isLoading, error, faq} = useContext(UsersContext)
  console.log(faq)
  useEffect(() => {
    faqActions.getFaq("mission/")
  }, [])

  if (isLoading) return ([...Array(10).keys()].map((i) => <SkeletonPost key={i} />))
  if (error) return (<h1 className="text-3xl text-center p-10 bg-gray-100">Internet yo'q bo'lishi mumkin</h1>)
  return (
    <div>Faq</div>
  )
}

export default Faq