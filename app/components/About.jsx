var React = require('react');

var About = (props) => {
  return (

    <div>
      <h1 className="text-center page-title">About page</h1>
      <p>This is a weather application build on <i>React</i> javascript framework.
        I have built this Web app for the "Complete React Web App Developer" Course taught
        by Andrew Mead on <a href="https://click.linksynergy.com/link?id=sfG5kf2jZNc&offerid=323058.755128&type=2&murl=https%3A%2F%2Fwww.udemy.com%2Fthe-complete-react-web-app-developer-course%2F">Udemy.com</a>.
      </p>
      <p>
        It gives you the temperature of different worldwide cities live and a
        more accurate way than browsers themselves. Just enter the name of your own city inside the right box below.
        Let this application gives you the information you need to know.
      </p>
        <p>Here are some tools i used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - Have a look on this amazing javascript framework!
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>

  );
};

module.exports = About;
