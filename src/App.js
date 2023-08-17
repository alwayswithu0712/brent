import logo from './logo.svg';
import './App.css';
import 'react-bootstrap';
import 'bootstrap'

function App() {
 return(
  <div>
    <div className = 'container justify-content-center mt-5 p-4 searchform' style={{background:"white"}}>
      <h4>
        Search form
      </h4>
      <div className = "row">
        <div className = "col-lg-7 col-sm-12">
          <div className = "d-flex justify-content-between mb-2">
            <div>
              Natural language search query
            </div>
            <div>
              <select className='searchform p-1'>
                <option>
                  Pick from sample queries
                </option>
              </select>
            </div>
          </div>
          <div className = "mb-2">
            <textarea className = "form-control" rows="6" name="text"></textarea>
          </div>
          <button type = "submit" className = "btn btn-success m-1">Search</button>
          <button type = "submit" className = "btn btn-success m-1">Clear</button>
        </div>
        <div className = "col-lg-5 flex-row col-sm-12">
          <div className = "mb-2">
            <label for = "searchin" className = "mb-1">Search in </label>
            <div>
              <select id = "searchin" className = "searchform p-1" style={{width:"100%"}}>
                <option>
                  Patents
                </option>
              </select>
            </div>
          </div>
          <div className = "mb-2">
            <label for = "searchtype" className = "mb-1">Search type</label>
            <div>
              <select id = "searchtype" className = "searchform p-1" style={{width:"100%"}}>
                <option>
                  Normal
                </option>
              </select>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div  style={{width:"40%"}}>
              <label for = "publishedafter" className = "mb-1">Published after</label>
              <div>
                <input type ="date" id = "publishedafter" className = "searchform p-1">
                </input>
              </div>
            </div>
            <div style={{width:"40%"}}>
              <label for = "publishedbefore" className = "mb-1">Published before</label>
              <div>
                <input type ="date" id = "publishedbefore" className = "searchform p-1">
                </input>
              </div>
            </div>
          </div>        

        </div>
      </div>
    </div>

    <div className = 'container justify-content-center mt-5 p-3 searchform' style={{background:"white"}}>
      <h4>
        Search results
      </h4>
      <div></div>
      <div></div>
      <div></div>
      <div>
        <button type = "submit" className = "btn btn-success m-1">Save Result</button>
        <button type = "submit" className = "btn btn-success m-1">Open in new tab</button>
        <button type = "submit" className = "btn btn-success m-1">More like this</button>
      </div>
    </div>
</div>
 )
}

export default App;
