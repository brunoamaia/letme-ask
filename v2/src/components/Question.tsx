import { ReactNode } from 'react'

import { QuestionStyles } from '../styles/question'

type QuestionProps = {
  author: {
    name: string
    avatar: string
  }
  children?: ReactNode
  content: string
  isAnswered?: boolean
  isHighLighted?: boolean
}

export function Question({
  author,
  children,
  content,
  isAnswered = false,
  isHighLighted = false
}: QuestionProps) {
  return (
    <QuestionStyles className={`
      question 
      ${isAnswered ? 'answered' : ''} 
      ${isHighLighted && !isAnswered ? 'highlighted' : ''}
    `}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>

        <div>{children}</div>
      </footer>
    </QuestionStyles>
  )
}