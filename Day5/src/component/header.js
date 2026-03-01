function Header(){
    return(
      <div className="header">
      <img className="logo" src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76bojCz7_injEv5kj9N2pSwEOo1BCQmau0w&s" height="80px" width="80px"/>
      <div className="option">
        <button className="btn">MEN</button>
        <button className="btn">WOMEN</button>
        <button className="btn"> KIDS</button>
        <button className="btn">HOME & LIVING</button>
        <button className="btn">BEAUTY</button>
         </div>

         <input className="search" placeholder="Search for products, brands and more"></input>


         <div className="profile">
            <button className="pro">Profile</button>
            <button className="pro">Wishlist</button>
            <button className="pro">Bag</button>
         </div>
      </div>
    )
}
export default Header;