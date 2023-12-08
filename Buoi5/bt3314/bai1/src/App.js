import './App.css';

function App() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h3 class="panel-title">Compose e-mail message</h3>
            </div>
            <div class="panel-body">
                  <form method="post" action="">
                    <div class="form-group">
                      <label>To:</label>
                      <input required="true" type="email" name="to" class="Email-Editor"/>
                    </div>
                    <div class="form-group">
                      <label>From:</label>
                      <input required="true" type="email" name="from" class="Email-Editor"/>
                    </div>
                    <div class="form-group">
                      <label>Cc:</label>
                      <input required="true" type="email" name="cc" class="Email-Editor"/>
                    </div>
                    <div class="form-group">
                      <label>Subject:</label>
                      <input required="true" type="text" name="subject" class="Email-Editor"/>
                    </div>
                    <div class="form-group">
                      <label>Message:</label>
                      <textarea required="true" rows="5" class="Email-Editor"></textarea>
                    </div>
                    <div class="form-group">
                      <label></label>
                      <button type="submit"><a href="./Startus.html">Send</a></button>
                      <button type="reset">Cancel</button>
                    </div>
                  </form>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
