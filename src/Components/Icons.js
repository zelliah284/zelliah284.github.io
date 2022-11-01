let slackUrl = require('../images/slack.png');
let githubUrl = require('../images/Social icon.png');

 function Icons() {
    return(
    <>
       <div className="social-section">
  <img src={slackUrl} alt="slack" />
  <img src={githubUrl} alt="github" />
</div>
<hr/>
            </>
    )
}
export default Icons;