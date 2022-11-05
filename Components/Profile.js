   let profileUrl = require('../images/Device=Web, State=Focused.png');
   let iconUrl = require('../images/Icon.png');
   let mobileIcon = require('../images/dots-horizontal.png');
   
   function Profile() {
    return (
        <header className="profile">
  <div className="text">
    <img
      id="profile-img"
      alt="profile-img"
      src={profileUrl}
    />
    <p id="twitter">@bhee_dex</p>
    <p id="slack">lizzy</p>
  </div>
  <div className="icon">
    <img src={iconUrl} alt="" className="icon-desktop" />
    <img
      src={mobileIcon}
      alt=""
      className="icon-mobile hidden"
    />
  </div>
</header>

    )
}
export default Profile;