import { useRef, useState, useEffect } from 'react';
import './collapse.css';
import PropTypes from 'prop-types';

function Collapse({ isExpanded, collapsedLabel, expandedLabel, children }) {
  const [isOpen, setIsOpen] = useState(isExpanded);
  const [height, setHeight] = useState('auto');
  const [expandedHeight, setExpandedHeight] = useState('auto');
  const [isHeightInit, setIsHeightInit] = useState(false);
  const refCollapseText = useRef(null);

  const onClick = () => {
    if (isOpen) {
      setHeight(0);
    } else {
      setHeight(expandedHeight);
    }
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const initExpandedHeight = () => {
      if (isHeightInit) return;
      setExpandedHeight(`${refCollapseText.current.offsetHeight}px`);
      setIsHeightInit(true);
    }

    initExpandedHeight();

    if (!isOpen) {
      setHeight(0);
      return;
    }

    setHeight(expandedHeight);
  }, [expandedHeight, isHeightInit, isOpen]);

  return (
    <div className={`collapse ${isOpen ? 'collapse_expanded' : 'collapse_collapsed'}`}>
      <div
        className={'collapse__text animation'}
        ref={refCollapseText}
        style={{ height }}>
        <div className={'collapse__text'}>
          {children}
        </div>
      </div>

      <div className={'collapse__footer'}>
        <button className={'collapse__btn'} onClick={onClick}>{isOpen ? expandedLabel : collapsedLabel}</button>
      </div>
    </div>
  )
}

Collapse.defaultProps = {
  collapsedLabel: 'Развернуть',
  expandedLabel: 'Свернуть',
  isExpanded: true,
}

Collapse.propTypes = {
  collapsedLabel: PropTypes.string.isRequired,
  expandedLabel: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool.isRequired,
}

export default Collapse;
