/* eslint-disable react/display-name */
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { forwardRef } from 'react';

// ----------------------------------------------------------------------

const Page = forwardRef(
  ({ children, title = '', pageName = '', meta, ...other }, ref) => (
    <>
      <Helmet>
        <title>{`${title} | CSMS`}</title>
        {meta}
      </Helmet>

      <div ref={ref} {...other}>
        {pageName && (
          <div className=" px-5 py-3">
            <h1 className="text-4xl font-semibold text-gray-600">{pageName}</h1>
            <h1 className="text-sm text-gray-400 font-semibold">
              Unlock Your Potential. Join Our Journey Of Education And
              Excellence
            </h1>
          </div>
        )}

        {children}
      </div>
    </>
  )
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node
};

export default Page;
