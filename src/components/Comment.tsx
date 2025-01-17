import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/fsanntiago.png"
        alt=""
      />
      <div className={styles.commentBox}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Fabricio Santiago</strong>
            <time title="22 de Abril às 10:02h" dateTime="2024-04-22 10:02:00">
              Cerca de 1hr atrás
            </time>
          </div>
          <button onClick={handleDeleteComment} title="Deletar comentário">
            <Trash size={24} />
          </button>
        </header>
        <p>{content}</p>
      </div>
      <footer>
        <button onClick={handleLikeComment}>
          <ThumbsUp size={20} />
          Aplaudir <span>{likeCount}</span>
        </button>
      </footer>
    </div>
  )
}
