import * as React from 'react';

export default () =>
  [1, 2, 3].map((v, i) => (
    <p
      key={i} // eslint-disable-line react/no-array-index-key
    >
      {v}
    </p>
  ));
