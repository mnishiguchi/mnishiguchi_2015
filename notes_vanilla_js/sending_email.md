# Sending email (with user's message in the textarea)
- http://stackoverflow.com/questions/271171/sending-emails-with-javascript

```html
      ...
      <aside class="email-me">
        <h2>Please send me message if you like</h2>
        <div>
          <textarea id="message-to-masa" placeholder="Message to masa"></textarea>
          <input type="reset" value="Clear">
          <button id="btn-send-message">Send</button>
        </div>
      </aside>

      <footer>
        <small>&copy; 2015 <a href="http://mnishiguchi.github.io/" target="_blank">Masatoshi Nisihguchi</a></small>
      </footer>

    </div>

    <!-- javascripts -->
    
    <script>
      /**
       * Opens the default email program with title, address and message prefilled.
       */
      function sendEmail() {
          window.location.href = "mailto:nishiguchi.masa@gmail.com"
            + "?cc=masatoshi.nishiguchi@udc.edu"
            + "&subject=" + escape("Hello, Masa!")
            + "&body=" + escape(document.getElementById('message-to-masa').value)
          ; // end window.location.href
      }

      // Add the click listener to send message button
      document.addEventListener('DOMContentLoaded', function() {
          document.getElementById("btn-send-message").addEventListener("click", sendEmail, false);
      });
    </script>
...
```
