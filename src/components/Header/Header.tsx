import './Header.css'

function Header () {


    return (
        <>
          <div className="header">
            <h3 className="header-title" >Weatherapp</h3>
            <input className="search-bar" placeholder="Insert a place" type="text" />
        </div>
        </>
    );
}

export default Header;
