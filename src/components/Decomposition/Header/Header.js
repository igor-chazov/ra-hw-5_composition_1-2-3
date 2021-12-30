import News from './News/News';
import Rates from './Rates/Rates';
import Promo from '../Promo/Promo';

export default function Header() {
  return (
    <header className={'header-decom'}>
      <News />
      <Rates />
      <div className='date'>31 июля, среда 02 32</div>
      <Promo />
    </header>
  )
}
