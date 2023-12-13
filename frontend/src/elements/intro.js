export default function Intro() {
  return (
    <div className="intro--section">
      <h1>About WebHarvestWizard...</h1>
      <p>Hello! This is WebHarvestWizard!</p>
      <p>
        With only one URL input, we help you get the comprehensive information
        of the website!
      </p>
      <p>
        We use python selenium and firefox driver to get the information of the
        website and parse it to get the specific info you want.
      </p>
      <h1>How to use WebHarvestWizard?</h1>
      <ol>
        <li>Enter one URL of the website that you wanna do web scraping on.</li>
        <br />
        <li>Play the "BOOM!" button and wait for the outcome.</li>
        <br />
        <li>
          Caution!! Sometimes it will take some time to finish the whole
          progress of web scraping, please be patient.
        </li>
        <br />
        <li>Voilà!The outcome will show up at the below of the input feild!</li>
      </ol>
      <h1>Reference</h1>
      <ul>
        <li>
          Web scraping tool--Python
          <a href="https://selenium-python.readthedocs.io"> Selenium</a>
        </li>
        <br />
        <li>
          Backend framework--Python
          <a href="https://flask.palletsprojects.com/en/3.0.x/"> Flask</a>
        </li>
        <br />
        <li>
          Frontend framework--
          <a href="https://react.dev">React</a>
        </li>
        <br />
        <li>Web Driver: firefox driver</li>
      </ul>
    </div>
  );
}
