import { Input } from "antd"
import Link from "next/link";

const navs = 
[
    {
        href: "cho-canh",
        name: "Chó cảnh"
    },
    {
        href: "meo-canh",
        name: "Mèo Cảnh"
    },
    {
        href: "cac-canh",
        name: "Cặc Cảnh"
    },
    {
        href: "lon-canh",
        name: "Lồn cảnh"
    },
]

const Header = () => (
    <div className="header-wrapper">
        <div className="header-main">
            <div className="header-inner flex-row container logo-left">
                <div id="logo" className="flex-col logo">
                    <Link href="">
                        <img width="200" height="83" src="https://dogily.vn/wp-content/uploads/2020/07/dogily-logo.png" 
                        className="header_logo header-logo entered lazyloaded"/>
                    </Link>
                </div>
                <div className="flex-col flex-left flex-grow">
                    <form className="search-form">
                        <Input.Search placeholder="Tìm kiếm..." size="large" allowClear/>
                    </form>
                </div>
            </div>
        </div>
        <div className="header-bottom">
            <div className="flex-row container">
                <div className="flex-col hide-for-medium flex-center">
                    <ul className="nav header-nav header-bottom-nav nav-center">
                        {
                            navs.map(nav => (
                                <li>
                                    <Link href={nav.href} key={nav.href} className="nav-top-link">{nav.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    </div>
)

export default Header