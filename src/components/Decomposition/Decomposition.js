import Header from './Header/Header';
import Search from './Search/Search';
import Promo from './Promo/Promo';
import WidgetItems from './WidgetItems/WidgetItems';
import './Decomposition.css'

export default function Decomposition() {
  return (
    <>
      <Header />
      <main className={'main-decom'}>
        <Search />
        <Promo />
        <WidgetItems />
      </main>
    </>
  )
}
