import classNames from 'classnames/bind';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h3>Header</h3>
                {/* logo, search box... */}
            </div>
        </header>
    );
}

export default Header;