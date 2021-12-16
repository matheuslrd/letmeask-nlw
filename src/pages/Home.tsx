import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

import illustrationSvg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg';

import '../styles/auth.scss';

import { Button } from '../components/Button';

import { useAuth } from '../hooks/useAuth';

export const Home: FC = () => {
  const navigate = useNavigate();
  const { signInWithGoogle, user } = useAuth();

  async function handleCreateNewRoom() {
    if(!user) {
      await signInWithGoogle();
    }

    navigate('rooms/new');
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationSvg} alt="Ilustração perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiencia em tempo-real.</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask logo" />
          <button
            className="create-room"
            onClick={ handleCreateNewRoom }
          >
              <img src={googleIcon} alt="Google Icon" />
              Crie sua sala com google
          </button>
          <div className="separator">
            ou entre em uma sala
          </div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"  
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}
