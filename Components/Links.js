import {Link} from 'react-router-dom';

function Links() {
    return (
        <section>
  <a
    id="twitter_link"
    href="https://twitter.com/bhee_dex"
    target="_blank"
    rel="noreferrer"
  >
    Twitter Link
  </a>
  <a
    id="btn_zuri"
    href="https://training.zuri.team/"
    target="_blank"
    rel="noreferrer"
  >
    Zuri Team
  </a>
  <a id="books" href="http://books.zuri.team/" target="_blank" rel="noreferrer">
    Zuri Books
  </a>
  <a
    id="book_python"
    title="a comprehensive book on introduction to python for beginners"
    href="https://books.zuri.team/python-for-beginners?ref_id=<lizzy>"
    target="_blank"
    rel="noreferrer"
  >
    Python Books
  </a>
  <a
    id="pitch"
    title="a reliable background checking service that verifies potential hires for companies"
    href="https://background.zuri.team/"
    target="_blank"
    rel="noreferrer"
  >
    Background Check For Coders
  </a>
  <a
    id="book_design"
    title="a detailed and comprehensive book that provides tips and guidelines for creating professional designs"
    href="https://books.zuri.team/design-rules"
    target="_blank"
    rel="noreferrer"
  >
    Design Books
  </a>
  <Link to="/contact" id="contact">Contact Me</Link>
</section>
    )
}
export default Links;