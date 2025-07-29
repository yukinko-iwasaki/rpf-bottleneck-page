import react from 'react';
import PropTypes from 'prop-types';
import Evidence from './evidence';
import OutcomePage from './outcomePage';
import PublicSectorResult from './publicSectorResult';
import PolicyCapability from './policyCapability';
function Context({selectedItem}) {
  return (
    <div style={{width: '65vw'}} >
      {selectedItem == 'results' &&  <PublicSectorResult />}
      {selectedItem=='outcome'&& <OutcomePage />}
      {selectedItem.startsWith('group') && <Evidence selectedItem={selectedItem} />}
      {selectedItem == 'policy' && <PolicyCapability />}
      {/* {selectedItem == 'public-sector-result' && <PublicSectorResult />} */}
    </div>
  );
}

Context.propTypes = {
    selectedItem : PropTypes.object.isRequired,
};

export default Context;