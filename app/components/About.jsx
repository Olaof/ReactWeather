var React = require('react');

var About = (props) => {
  return (

    <div>
      <h1 className="text-center page-title">About page</h1>
      <p>This is a weather application build on React javascript framework.
        I have built this for the Complete React Web App Developer Course taught on
        <a target='new' href="https://click.linksynergy.com/link?id=sfG5kf2jZNc&offerid=323058.755128&type=2"> Udemy
        </a> by Andrew Mead.</p>
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
