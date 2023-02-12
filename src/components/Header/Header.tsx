const Header = () => (
    <div className="header-wrapper">
        <div className="header-main hide-for-sticky">
            <div className="header-inner flex-row container logo-left">
                <div className="flex-col logo"></div>
                <div className="flex-col hide-for-medium flex-left flex-grow">
                    <span>
                        <img width="200" height="100" src="https://dogily.vn/wp-content/uploads/2020/07/dogily-logo.png" 
                        className="header_logo header-logo entered lazyloaded"/>
                    </span>
                </div>
            </div>
        </div>
    </div>
)

export default Header