import PropTypes from 'prop-types';
import Evidence from './evidence';
import OutcomePage from './outcomePage';
import PublicSectorResult from './publicSectorResult';
import PolicyCapability from './policyCapability';
import ArrowNav from './arrowNav';


function Content({selectedItem, setSelectedItem}) {
  return (
    <div
      className="content"
      style={{
        height:'100%',
        minHeight: 0,
        background:'rgb(240, 240, 240)',
        padding:'0 20px',
        overflow: 'auto',
      }}
    >
      <ArrowNav selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      {selectedItem === 'results' && <PublicSectorResult />}
      {selectedItem === 'outcome' && <OutcomePage />}
      {selectedItem === 'policy' && <PolicyCapability />}
      {selectedItem.startsWith('group') && <Evidence selectedItem={selectedItem} />}

    </div>
  );
}

Content.propTypes = {
    selectedItem : PropTypes.object.isRequired,
    setSelectedItem: PropTypes.func.isRequired,
};

export default Content;
