import react from 'react';
import PropTypes from 'prop-types';
import Evidence from './evidence';
import OutcomePage from './outcomePage';
import PublicSectorResult from './publicSectorResult';
import PolicyCapability from './policyCapability';
import ArrowNav from './arrowNav';
function Context({selectedItem, setSelectedItem}) {
  return (
    <div style={{width: '65vw'}} >
<div className="content" style={{height:'100%', background:'rgb(240, 240, 240)', padding:'20px' }}>
      <ArrowNav selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      {selectedItem == 'results' &&  <PublicSectorResult />}
      {selectedItem=='outcome'&& <OutcomePage />}
      {selectedItem.startsWith('group') && <Evidence selectedItem={selectedItem} />}
      {selectedItem == 'policy' && <PolicyCapability />}

    </div>
    </div>
  );
}

Context.propTypes = {
    selectedItem : PropTypes.object.isRequired,
    setSelectedItem: PropTypes.func.isRequired,
};

export default Context;