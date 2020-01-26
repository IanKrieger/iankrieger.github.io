import PropTypes from 'prop-types'
import React from 'react'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <p>
            Hello! I'm Ian Krieger, and I'm glad you came to check out my
            website! In the paragraph below, I will tell you more about myself.
            What I'm currently passionate about in technology, in my personal
            life, what video games I'm playing, and more! I want you to come out
            of this page feeling like you know me!
          </p>
          <br />
          <h3>Hometown And Current Location</h3>
          <p>
            I grew up in a suburb near Cleveland Ohio, where I lived for the majority of my life.
            I now live in Columbus, Ohio which is where I have lived for all of my professional life.
            In Columbus I've worked at J.P Morgan Chase as a back-end software engineer.
            I now work at Updox, doing a little bit of everything helping develop the product.
          </p>
          <br />
          <h3>College</h3>
          <p>
            I attended College at The University Of Dayton Where I got my B.S in Computer Information Systems
            and a minor in Business Administration. I also worked in the IT department doing tech support for
            3 years of my time there.
          </p>
          <br />
          <h3>What tech I'm passionate about</h3>
          <p>
            I like to make sure I'm up to date on current technology trends. One of the things that interests
            me the most is Machine Learning. I have actually built a small python script that processes
            lines of text in a file and then creates it's own original output. Go check it out on my github!
            Another thing I really like is BlockChain, but not for Bitcoin. The idea of smart contracts helping 
            with transactions is something I am learning about and hoping to code, so be on the lookout. I
            also like AWS for infrastructure, I think any new app could be written to go to the cloud both quickly
            and securely.
          </p>
          <br />
          <h3>What I like to do in my free time</h3>
          <p>
            Other than coding I like to lift weigths, I actually did some powerlifting in college. More recently
            I've been running in my free time. I also like to visit Columbus local restaurants and breweries. One
            of my favorite spots for both food and beer in columbus is Wolfe's Ridge. The last thing I like to do
            is play video games. I recently just finished up 'Hollow Knight', and am working my way through 'Ori and
            the blind forest'. Both really great games. 
          </p>      
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <p>
            As far as my development career goes, it's not been very long. However,
            I feel as though I have gained so much experience and knowledge in the almost 3 
            years I've been developing. I make sure I work hard to learn what I need to do for my job.
            Here are the places I have worked so far.
          </p>
          <h3>J.P Morgan Chase: July 2017 - Aug 2019</h3>
          <p>
            At Chase, I was a back-end software engineer working in the transaction processing area.
            That is the place that all your checks go through. It was a large scale 24/7 environment
            and very critical to the bank. I automated their deploys, helped transition them from SVN to GIT,
            and helped mentor new college aged software engineers. In my day job though, I wrote back-end java
            REST based microservices that utilized SpringBoot, Kafka, UMQ, REST, Cassandra, and Maven.
            I worked there for a little over 2 years before changing jobs.
          </p>
          <h3>Updox: Aug 2019 - Present</h3>
          <p>
            At Updox, I work on developing code for partners to help ensure we can effectively integrate with
            their EHR / EMR. Already I've worked on critical systems, adding both new functionality and making
            the legacy code cleaner and more efficient. I currently develop for the backend using Kotlin, Java,
            C#, SpringBoot, Kafka, Groovy, Maven, RabbitMQ and more. I've also done a small amount of Ruby, 
            Angular and React. 
          </p>
          {close}
        </article>

        <article
          id="skills"
          className={`${this.props.article === 'skills' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skills</h2>
          <h3>Technical Skills</h3>
          <ul>
            <li>Java</li>
            <li>Kotlin</li>
            <li>C#</li>
            <li>SpringBoot + Maven (REST Based Microservices)</li>
            <li>Mockito + Junit + Groovy</li>
            <li>Git</li>
            <li>CI/CD (Jenkins / TeamCity)</li>
            <li>Event Processing (UMQ / RabbitMQ / Kafka)</li>
            <li>And more! Ask what else i'm passionate about!</li>
          </ul>
          <br />
          <h3>Soft Skills</h3>
          <ul>
            <li>Interpersonal Skills</li>
            <li>Time Management</li>
            <li>Scrum / Agile Principles</li>
            <li>Technical Communication</li>
            <li>Team Player</li>
            <li>Hard Worker</li>
          </ul>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="https://getform.io/f/bdf3a892-2c15-4bd8-802d-09a46a9df250">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/ian-krieger"
                className="icon fa-linkedin"
              >
                <span className="label">Linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/kriegs42"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/IanKrieger"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
