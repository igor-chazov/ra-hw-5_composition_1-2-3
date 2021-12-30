/**
 * Название блока.
 * @param props.title
 *
 * Ссылка
 * @param props.url
 *
 * Содержимое блока.
 * @param props.children
 *
 * @returns {JSX.Element}
 */

export default function WidgetItem(props) {
  return (
    <div className={'widget-item'}>
      <div className={'widget-item__title'}><a href={props.url}>{props.title}</a></div>
      {props.children}
    </div>
  )
}
