import './Header.css'

function Header ({onSearch}) {
    function handleChange(event) {
        onSearch(event.target.value)
    }

    return (
        <>
          <div className="header">
            <h3 className="header-title" >Weatherapp</h3>
            <div className="links">
            </div>
            <input className="search-bar" placeholder="Insert a place" type="text" onChange={event => handleChange(event)}/>
        </div>
        </>
    );
}

export default Header;
