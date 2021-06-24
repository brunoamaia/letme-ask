import { ReactNode } from 'react'

import '../styles/question.scss'

type QuestionProps = {
  author: {
    name: string
    avatar: string
  }
  children?: ReactNode
  content: string
}

export function Question({author, children, content}: QuestionProps) {
  return(
    <div className="question">
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>

        <div>{children}</div>
      </footer>
    </div>
  )
}