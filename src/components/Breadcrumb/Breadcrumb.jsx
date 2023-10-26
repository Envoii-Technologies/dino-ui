import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import './Breadcrumb.scss';
import { Link } from 'react-router-dom';

export const Breadcrumb = ({ className, location, ...props }) => {
    const pathnames = location.split('/').filter((x) => x);
    console.log(pathnames);

    return (
        <div
            className={`Breadcrumb ${className !== undefined ? className : ''}`}
        >
            {pathnames.map((path, i) => {
                const first = i === 0;
                const last = i === pathnames.length - 1;
                const to = `/${pathnames.slice(0, i + 1).join('/')}`;

                return (
                    <div key={i} className="Breadcrumb__item">
                        {first && (
                            <Link className="Breadcrumb__item__wrapper" to={to}>
                                <FontAwesomeIcon
                                    className="Breadcrumb__item__wrapper__home"
                                    icon={faHouse}
                                />
                            </Link>
                        )}
                        {last && (
                            <div className="Breadcrumb__item__wrapper ">
								 <FontAwesomeIcon
                                    className="Breadcrumb__item__wrapper__chevron"
                                    icon={faChevronRight}
                                />
								<div className='Breadcrumb__item__wrapper__text last'>
									{ path }
								</div>
							</div>
                        )}
                        {!first && !last && (
                            <div className="Breadcrumb__item__wrapper">
								 <FontAwesomeIcon
                                    className="Breadcrumb__item__wrapper__chevron"
                                    icon={faChevronRight}
                                />
								<Link className='Breadcrumb__item__wrapper__text__link' to={to}>
									{ path }
								</Link>
							</div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

Breadcrumb.propTypes = {
    /**
     * Custom class name of Component
     */
    className: PropTypes.string,
};

Breadcrumb.defaultProps = {
    className: undefined,
    location: '/acme/Karten/Hydraulikpresse',
};