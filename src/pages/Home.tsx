import { useHistory } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss'
import { Button } from '../components/Button';
// import { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
import { useAuth } from '../hooks/useAuth';


export function Home() {
  const history = useHistory();
  const {signInWithGoogle, user } = useAuth()

 

   async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/new')   
  }


  return(
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Illustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Aprenda e compartilha conhecimento com outras pessoas</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleImg} alt="Logo do Google" />
            Crie sua sala com Google
          </button>
          <div className="separator">
            ou entre em uma sala
          </div>
          <form>
            <input type="text" placeholder="Digite o codigo da sala" />
            <Button type="submit"> Entrar na sala </Button>
          </form>
        </div>
      </main>
    </div>
  )
}