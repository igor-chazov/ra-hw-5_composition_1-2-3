/**
 * Контейнер содержащий блоки с различной информацией.
 * @returns {JSX.Element}
 */
import Weather from './Weather/Weather';
import WidgetItem from './WidgetItem/WidgetItem';

export default function WidgetItems() {
  return (
    <div className={'widget-items'}>
      <WidgetItem title={'Погода'} url={''}>
        <Weather />
      </WidgetItem>

      <WidgetItem title={'Карта германии'} url={''}>
        {/** Компонет */}
      </WidgetItem>

      <WidgetItem title={'Эфир'} url={''}>
        {/** Компонет */}
      </WidgetItem>

      <WidgetItem title={'Посещаемое'} url={''}>
        {/** Компонет */}
      </WidgetItem>

      <WidgetItem title={'Телепрограмма'} url={''}>
        {/** Компонет */}
      </WidgetItem>
    </div>
  )
}
