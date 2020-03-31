import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selector';

import MenuItem from '../menu-item/menu-item.component';

import './directory.style.scss';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);

/* ...otherSctionProps is similar to destructing the object 
        {this.state.sections.map(({ title, size, imageURL, linkURL, id }) => (
          <MenuItem
            key={id}
            title={title}
            imageURL={imageURL}
            linkURL={linkURL}
            size={size}
          />
        ))} */
