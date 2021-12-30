import './cards.css';
import PropTypes from 'prop-types';

const Card = (props) => (
  <div className={'cards__item card'}>
    <CardImg img={props.img} />
    <div className={'card__body'}>
      {props.children}
    </div>
  </div>
)

const CardImg = ({ img }) => img ? (
  <div className={'card__img-wrap'}>
    <img className={'card__img'} src={img} alt="Card" />
  </div>
) : null;

const CardTitle = ({ title }) => (
  <div className={'card__title-wrap card__wrap'}>
    <p className='card__title'>{title}</p>
  </div>
)

const CardText = ({ text }) => (
  <div className={'card__text-wrap card__wrap'}>
    <p className='card__text'>{text}</p>
  </div>
)

const CardLink = ({ link, text }) => (
  <div className={'card__link-wrap card__wrap'}>
    <a className={'card__link'} href={link}>{text}</a>
  </div>
)

Card.propTypes = {
  img: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

Card.defaultProps = {
  img: '',
}

export default function Cards() {
  return (
    <div className={'cards'}>
      <div className={'cards__body'}>
        <Card img={require(`./img/cards/card-1.jpg`)}>
          <CardTitle title={'Название карточки'} />
          <CardText text={'Небольшой пример текста, который будет построен на заголовке карты и составляет основную часть содержимого карты.'} />
          <CardLink link={'#'} text={'Ссылка куда-нибудь'} />
        </Card>

        <Card img={require(`./img/cards/card-2.jpg`)}>
          <CardTitle title={'Название карточки'} />
          <CardText text={'Небольшой пример текста, который будет построен на заголовке карты и составляет основную часть содержимого карты.'} />
          <CardLink link={'#'} text={'Ссылка куда-нибудь'} />
        </Card>

        <Card>
          <CardTitle title={'Особый титульный режим'} />
          <CardText text={'Со вспомогательным текстом ниже в качестве естественного перехода к дополнительному контенту.'} />
          <CardLink link={'#'} text={'Ссылка куда-нибудь'} />
        </Card>

        <Card img={require(`./img/cards/card-3.jpg`)}>
          <CardTitle title={'Название карточки'} />
          <CardText text={'Небольшой пример текста, который будет построен на заголовке карты и составляет основную часть содержимого карты.'} />
          <CardLink link={'#'} text={'Ссылка куда-нибудь'} />
        </Card>

        <Card>
          <CardTitle title={'Особый титульный режим'} />
          <CardText text={'Со вспомогательным текстом ниже в качестве естественного перехода к дополнительному контенту.'} />
          <CardLink link={'#'} text={'Ссылка куда-нибудь'} />
        </Card>

        <Card img={require(`./img/cards/card-4.jpg`)}>
          <CardTitle title={'Название карточки'} />
          <CardText text={'Небольшой пример текста, который будет построен на заголовке карты и составляет основную часть содержимого карты.'} />
          <CardLink link={'#'} text={'Ссылка куда-нибудь'} />
        </Card>
      </div>
    </div>
  )
}
