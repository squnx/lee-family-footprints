
const Footer = () => {
  return (
    <footer id="footer" className="footer coffee-background">
      <div className="container">
        <div className="copyright text-center ">
          <p><span>Copyright</span> © 2024–{(new Date().getFullYear())} &nbsp;<strong>Lee Family Footprints</strong>&nbsp; <span>All Rights Reserved</span></p>
        </div>
        <div className="social-links d-flex justify-content-center">
          <a href=""><i className="bi bi-twitter-x"></i></a>
          <a href=""><i className="bi bi-facebook"></i></a>
          <a href=""><i className="bi bi-instagram"></i></a>
        </div>
        <div className="credits">
          Powered by <a href="https://mousewurx.com/" target="_blank" rel="noreferrer"><strong>mousewurx</strong></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer