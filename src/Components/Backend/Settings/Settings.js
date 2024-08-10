import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';
import React from 'react';
import General from './General/General';
import './Settings.scss';
import Style from './Style/Style';

const Settings = ({ attributes, setAttributes }) => {

  return (
    <>
      <InspectorControls>
        <TabPanel
          className="my-tab-panel"
          activeClass="active-tab"
          tabs={[
            {
              name: 'tab1',
              title: 'General',
              className: 'setting-tab',
            },
            {
              name: 'tab2',
              title: 'Style',
              className: 'style-tab',
            },
          ]}>
          {(tab) => (
            <>
              {tab.name === 'tab1' && <General attributes={attributes} setAttributes={setAttributes} />}
              {tab.name === 'tab2' && <Style attributes={attributes} setAttributes={setAttributes} />}
            </>
          )}
        </TabPanel>
      </InspectorControls>
    </>
  );
};

export default Settings;