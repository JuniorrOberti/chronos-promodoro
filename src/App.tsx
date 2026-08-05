import './styles/theme.css';
import './styles/global.css';
import { Logo } from './components/Logo.tsx';

export function App() {
  return (
    <>
      <div className='container'>
        <div className='content'>
          <section>
            <Logo>Chronos</Logo>
          </section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>MENU</section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>FORM</section>
        </div>
      </div>

      <div className='container'>
        <div className='content'>
          <section>FOOTER</section>
        </div>
      </div>
    </>
  );
}
