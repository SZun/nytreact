import React from 'react';

import SavedArticle from '../../components/SavedArticle/SavedArticle';
import BCard from '../../components/Card/Card';

const Saved = () => {
  return (
    <div>
      <BCard header="Saved Articles">
        <SavedArticle title="something" date="10/10/10" />
      </BCard>
    </div>
  );
};

export default Saved;
