import Cards from './components/Cards';
import Decomposition from './components/Decomposition';
import Collapse from './components/Collapse';

function App() {
  return (
    <div className={'wrapper'}>
      <header className={'header'} id={'header'}>
        <div className={'header__body _container'}>
          <h2 className={'header__title'}>5. Домашнее задание к лекции «Композиция компонентов»</h2>
        </div>
      </header>

      <main className={'main'}>
        <div className={'main__item task _container'} id={'task1'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>5.1 Карточки</h3>
            <nav className={'task__menu menu'}>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-bottom'} href={'#task2'}>
                  <span className={'_visually-hidden'}>next task</span>
                </a>
              </div>
            </nav>
          </header>
          <div className={'task__body'}>
            <Cards />
          </div>
        </div>

        <div className={'main__item task _container'} id={'task2'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>5.2 Декомпозиция</h3>
            <nav className={'task__menu menu'}>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-top'} href={'#header'}>
                  <span className={'_visually-hidden'}>previous task</span>
                </a>
              </div>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-bottom'} href={'#task3'}>
                  <span className={'_visually-hidden'}>next task</span>
                </a>
              </div>
            </nav>
          </header>
          <div className={'task__body task__body_task2'}>
            <Decomposition />
          </div>
        </div>

        <div className={'main__item task _container'} id={'task3'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>5.3 Collapse*</h3>
            <nav className={'task__menu menu'}>
              <div className={'menu__item'}>
                <a className={'menu__link menu__link-top'} href={'#header'}>
                  <span className={'_visually-hidden'}>home task</span>
                </a>
              </div>
            </nav>
          </header>
          <div className={'task__body task__body_task3'}>
            <Collapse>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis id suscipit veniam! Praesentium dignissimos eveniet aut repellendus debitis minima error fuga earum ipsam iure nisi consequatur impedit obcaecati quidem harum vero, quasi saepe fugit voluptate eum aperiam accusantium neque at commodi? Ab nesciunt molestiae laudantium nisi, nemo id similique dignissimos.</p>
            </Collapse>
            <Collapse isExpanded={false} collapsedLabel={'Подробнее'} expandedLabel={'Скрыть'}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi dolorem consequuntur corrupti, aut quo distinctio ad voluptatibus similique pariatur soluta dolore eligendi quam unde? Aliquid facilis saepe deleniti vitae incidunt fugiat doloribus similique, temporibus, placeat odio, adipisci repellat quam eaque eum consequatur id molestiae ex deserunt voluptatem corrupti nihil nisi.</p>
            </Collapse>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
