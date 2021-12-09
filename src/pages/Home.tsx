import illustrationSvg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg';

export default function Home() {
  return (
    <div>
      <aside>
        <img src={illustrationSvg} alt="Ilustração perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiencia em tempo-real.</p>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="Letmeask logo" />
          <button>
            <img src={googleIcon} alt="Google Icon" />
            Crie sua sala com google
          </button>
          <div>
            ou entre em uma sala
          </div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"  
            />
            <button type="submit">
              Entrar na sala
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}
