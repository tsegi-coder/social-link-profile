import avatarJessica from "./avatar-jessica.jpeg";
function Header() {
  return (
    
    <header>
      <img src={avatarJessica} alt="Profile" className="profile-image" />
  <h1 className="profile-name">Jessica Ranall</h1>
    <h2 className="location">London,united Kingdom</h2>
    <h3 className="bio">"Front-end developer and avid reader."</h3> 
    </header>
  );
}
export default Header;