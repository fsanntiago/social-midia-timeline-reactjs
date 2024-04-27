import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/fsanntiago.png" />
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
        <button>
          <ThumbsUp size={20} />
          Aplaudir <span>20</span>
        </button>
      </footer>
    </div>
  )
}
