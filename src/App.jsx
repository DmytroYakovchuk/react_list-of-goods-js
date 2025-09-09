import { useState } from 'react';
import cn from 'classnames';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const SORT_FIELD_NAME = 'name';
const SORT_FIELD_LENGTH = 'length';

export const App = () => {
  const [sortField, setSortField] = useState('');
  const [isReversed, setIsReversed] = useState(false);

  const visibleGoods = [...goodsFromServer];

  if (sortField === SORT_FIELD_NAME) {
    visibleGoods.sort((a, b) => a.localeCompare(b));
  }

  if (sortField === SORT_FIELD_LENGTH) {
    visibleGoods.sort((a, b) => a.length - b.length);
  }

  if (isReversed) {
    visibleGoods.reverse();
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          onClick={() => {
            setSortField(SORT_FIELD_NAME);
          }}
          type="button"
          className={cn('button is-info', {
            'is-light': sortField !== SORT_FIELD_NAME,
          })}
        >
          Sort alphabetically
        </button>

        <button
          onClick={() => {
            setSortField(SORT_FIELD_LENGTH);
          }}
          type="button"
          className={cn('button is-success', {
            'is-light': sortField !== SORT_FIELD_LENGTH,
          })}
        >
          Sort by length
        </button>

        <button
          type="button"
          onClick={() => setIsReversed(!isReversed)}
          className={cn('button is-warning', { 'is-light': !isReversed })}
        >
          Reverse
        </button>

        {(sortField !== '' || isReversed) && (
          <button
            onClick={() => {
              setSortField('');
              setIsReversed(false);
            }}
            type="button"
            className="button is-danger"
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {visibleGoods.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
