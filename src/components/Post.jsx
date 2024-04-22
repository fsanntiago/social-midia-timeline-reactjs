import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <img
          className={styles.avatar}
          src="https://github.com/fsanntiago.png"
          alt=""
        />
        <div className={styles.authorInfo}>
          <strong>Fabricio Santiago</strong>
          <span>Web Developer</span>
        </div>
        <time
          title="22 de Abril às 10:02h"
          dateTime="2024-04-22 10:02:00"
          className={styles.data}
        >
          Publicado há 1hr
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Escreva um comentário..." />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}
