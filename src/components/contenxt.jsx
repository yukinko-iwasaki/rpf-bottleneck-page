import react from 'react';
import PropTypes from 'prop-types';
import Evidence from './evidence';
import OutcomePage from './outcomePage';
import PublicSectorResult from './publicSectorResult';
function Context({selectedItem}) {
  return (
    <div>
      {selectedItem == 'dev-outcome' && <PublicSectorResult />}
      {selectedItem.startsWith('group') && <Evidence selectedItem={selectedItem} />}
      {/* {selectedItem == 'public-sector-result' && <PublicSectorResult />} */}
    </div>
  );
}

Context.propTypes = {
    selectedItem : PropTypes.object.isRequired,
};

export default Context;