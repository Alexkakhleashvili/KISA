const TopHeader = () =>  { 
    return ( 
        <header>
            <div className="TOP-Header">
                <div className="NAME">
                    <h1> KISA </h1>
                </div>

                <nav>
                    <ul>
                        <li> სახლი</li>
                        <li> ჩვენს შესახებ</li>
                        <li className="Become_Teacher"> 
                            გახდი მასწავლებელი
                        </li>
                        <li> კონტაქტი </li>
                    </ul>
                </nav>

                <div className="Account_ShopingCart">
                    <div className="About_Account">
                        <button> შესვლა </button>
                        <button> რეგისტრაცია </button>
                    </div>

                    <img 
                        className="shopingCart"
                        src="./images/shopingCart.png"
                    />
                </div>
            </div>
        </header>
    )
}

export default TopHeader
