import Icon1 from "../images/icon1.png"
import Icon2 from "../images/icon2.png"
import Icon3 from "../images/icon3.png"
import Icon4 from "../images/icon4.png"

function Icons() {
    return (
        <div className="images">
            <div className="icons">
                <img src={Icon1} />
                <h2>Declarative</h2>
                <span>
                    React makes it<br/>
                    Painless to create<br/>
                    interactive UIs.
                </span>
            </div>
            <div className="icons">
                <img src={Icon2} />
                <h2>Components</h2>
                <span>
                    Build encapsulated<br/>
                    components that<br/>
                    manage their state.
                </span>
            </div>
            <div className="icons">
                <img src={Icon3} />
                <h2>Single-Way</h2>
                <span>
                    A set of immutable<br/>
                    values are passed to<br/>
                    the component's.
                </span>
            </div>
            <div className="icons">
                <img src={Icon4} />
                <h2>JSX</h2>
                <span>
                    Statically-typed.<br/>
                    designed to run on<br/>
                    modern browsers.
                </span>
            </div>
        </div>
      
    );
  }
  
  export default Icons;