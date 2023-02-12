import { SearchOutlined } from "@ant-design/icons";

const Header = () => (
    <div className="header-wrapper">
        <div className="header-main hide-for-sticky">
            <div className="header-inner flex-row container logo-left">
                <div className="flex-col logo">
                    <span>
                        <img width="200" height="100" src="https://dogily.vn/wp-content/uploads/2020/07/dogily-logo.png" 
                        className="header_logo header-logo entered lazyloaded"/>
                    </span>
                </div>
                <div className="flex-col hide-for-medium flex-left flex-grow">
                    <form className="search-form">
                        <div className="flex-row relative">
                            <div className="flex-col flex-grow">
                                <label className="screen-reader-text">Tìm kiếm:</label>
                                <input type="search" className="search-field mb-0" placeholder="Tìm kiếm…" value="" />
                            </div>
                            <div className="flex-col">
                                <SearchOutlined/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
)

export default Header