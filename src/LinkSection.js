function LinkSection({ linkUrl, linkName }) {
  return (
    <div className="link-section">
       <li className="link-item">
        <a className="social-link" href={linkUrl}>{linkName}</a>
        </li>
     
    </div>
  );
}
export default LinkSection;