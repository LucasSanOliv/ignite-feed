import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

interface postProps {
  id: number;
  author: {
      avatarUrl: string;
      name: string;
      role: string;
  };
  content: {
      type: "paragraph" | "link";
      content: string;
  }[];
  publishedAt: Date;
}

const posts : postProps[] = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://avatars.githubusercontent.com/u/123646546?v=4',
      name: 'Lucas Santos Oliveira',
      role: 'Front-End Developer'

    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'github.com/LucasSanOliv/DoctorCare'},
    ],
    publishedAt: new Date('2023-06-29 20:24:45'),
  },

  {
    id: 2,
    author:{
      avatarUrl: 'https://wallpapers-clan.com/wp-content/uploads/2022/12/cristiano-ronaldo-pfp-27.jpg',
      name: 'Ronaldo CR7',
      role: 'Front-End Senior Developer'

    },

    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'github.com/LucasSanOliv/DoctorCare'},
    ],
    publishedAt: new Date('2023-06-28 20:24:45'),
  },
];


function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
            )
          })}
        </main>
      </div>

    </div>
  )

}

export default App
