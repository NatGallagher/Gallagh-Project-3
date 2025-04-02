

function ContactUs() {

    return (
        <>
        <div className="div-main-contact">  
          <h2>Contact Us</h2>
          <div>

          </div>
          <br/>
          <form>
              <div> 
                  <span>* First name: </span> <input type="text" maxLength={25} placeholder="* First name" required/>
                  <br/>
                  <span>Last name: </span> <input type="text" maxLength={25} placeholder="Last name"/>
                  <br/>
                  <span>* Email: </span> <input type="text" maxLength={100} placeholder="* Email" required/>
                  <br/>
                  <span>* Comment: </span> 
                  <br/><textarea rows={5} cols={30} maxLength={100} placeholder="* Comment" required></textarea>
                  <p></p>
                  <button>Submit</button> {" "} <a>Clear</a>
              </div>
          </form>
      </div>
      </>
    )
}

export default ContactUs;