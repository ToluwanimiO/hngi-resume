import './styles.css';
import profile from './assets/test.JPG'
import hng from './assets/download.png'

function App() {
  return (
    <div className="container">
      <div className="App">
        <div>
          <div className="space"></div>
          <div className="boxed">TOLUWANIMI OSUOLALE</div>
        </div>
        <div className="title-text">
          <span>
          Front End Developer
          </span>
        </div>
      </div>
      <div className="row pad-top">
        <div className="col-md-4">
          <img src={profile} className="profile" alt="Avatar"></img>
        </div>
        <div className="col-md-8 text-center">
          <div className="row">
            <div className="col-md-7">
              <p><span className="p-edits">About</span></p>
              <p className="text-left">
                Computer Science major, seeking to use my programming skills to 
                address solutions in my local community, especially in the 
                education sector. I am a book lover, started reading at the age of 5 
                and I have never stopped. I enjoy all kinds of genres, particularly 
                fantasy, science fiction and Christian historical romance novels. A 
                particular favorite is the medusa project series by Sophie Mckenzie
              </p>
            </div>
            <div className="col-md-5">
            <p><span className="p-edits">Contact</span></p>
              <div className="text-left">
                <table>
                  <tr>
                    <td className="pr-3"><i className="fa fa-phone fa-2x pad-top-sm"></i></td>
                    <td>(+234) 8142608972</td>
                  </tr>
                  <tr>
                    <td className="pr-3"><i className="fa fa-envelope fa-2x pad-top-sm"></i></td>
                    <td>toluwanimiosuolale@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="pr-3"><i className="fa fa-github fa-2x pad-top-sm"></i></td>
                    <td><a className="git" href="https://github.com/ToluwanimiO" target="_blank">github.com/ToluwanimiO</a></td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
            <p><span className="block-edits color-green">EDUCATION</span></p>
              <div className="spaced-text">
                BSC. COMPUTER SCIENCE<br/>
                3.63/4.0 GPA<br/>
                <i>University of Ibadan</i><br/>
                2018-2024 <i>(Expected)</i><br/>
              </div>
            </div>
            <div className="col-md-4 spaced-line">
              <p><span className="block-edits color-dark">SKILLS</span></p>
              <ul className="spaced-skills">
                <li className="flex-item">HTML</li>
                <li className="flex-item">JavaScript</li>
              </ul>
              <ul className="spaced-skills">
                <li className="flex-item">CSS</li>
                <li className="flex-item">Angular</li>
              </ul>
              <ul className="spaced-skills">
                <li className="flex-item">Bootstrap</li>
                <li className="flex-item">React</li>
              </ul>
              {/* <ul className="spaced-skills">
                <li className="flex-item">Python</li>
                <li className="flex-item">Vue.js</li>
              </ul> */}
              {/* <ul className="spaced-skills">
                <li className="flex-item">MySQL</li>
                <li className="flex-item">PHP</li>
              </ul> */}
            </div>
            <div className="col-md-4">
              <p><span className="block-edits color-green">PROFESSIONAL AFFILIATIONS</span></p>
              <p className="text-left">
                <b><font className="text-green">DEPUTY CLERK</font>&nbsp;&nbsp;(NACOSS)</b><br />
                <font className="text-sm">National Association of Computer
                Science Students,</font><br />
                University of Ibadan<br />
                2018 – 2021
              </p>
              {/* <p className="text-left">
                <b><font className="text-green">MEMBER</font>&nbsp;&nbsp;(FASSA)</b><br />
                <font className="text-sm">Faculty of Science Students Association,</font><br />
                University of Ibadan<br />
                2018 – TILL DATE
              </p> */}
            </div>
          </div>
        </div>
        
      </div>      
      <div className="text-center styled-project">
        PROJECTS
      </div>
      <span>
        <div className="row">
          <div className="col-md-2">
            <p><span className="p-edits-sm">Jan - Feb 2021</span></p>
          </div>
          <div className="col-md-10">
            <b>E-commerce Web-App</b>
            <div>
              An E-commerce web application built with React JS and Django. The link for 
              test version of this web app is: <a className="project-link" target="_blank" href="https://construct-ecommerce.netlify.app/">https://construct-ecommerce.netlify.app/</a>
            </div>
            <b>To-do List Web-App</b>
            <div>
            A to-do list built with vueJS. It was deployed for testing at:<a className="project-link" target="_blank" href="https://planned-todo.netlify.app/">https://planned-todo.netlify.app/</a>
            </div>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-md-2">
            <p><span className="p-edits-sm">Jan - Feb 2021</span></p>
          </div>
          <div className="col-md-10">
            <b>Market List Web-App</b>
            <div>
            A web application for planning market outings built with React. It has been 
            deployed for testing. Here is the link:  <a className="project-link" target="_blank" href="https://marketlist-organizer.netlify.app/">https://marketlist-organizer.netlify.app/</a>
            </div>
            <b>Forum Web-App</b>
            <div>
            A forum web application for built with Angular and Django. The link for the 
            test version of the app is:<a className="project-link" target="_blank" href="https://sqi-forum-app.herokuapp.com/landingpage">https://sqi-forum-app.herokuapp.com/landingpage</a>
            </div>
          </div>
        </div><br /><br />
        <div className="text-center styled-project">
        Current Progress
      </div>
        <div className="row">
          <div className="col-md-3 text-center">
            <img src={hng} />
          </div>
          <div className="col-md-9">
          I embarked on a journey with HNGi8- Zuri Internship<br />
          Join me <a target="_blank" href="https://internship.zuri.team/">here</a>
          </div>
        </div>    
        <br /><br/>
      
      </span>
    </div>
  );
}

export default App;
