import createCurrentWeatherEl from '..app/current-weather';
import testData from '../test-data';



module('Current Weather', () => {
  test('It exists', (assert) => {
    assert.ok(createCurrentWeatherEl);
    assert.equal(typeof createCurrentWeatherEl, 'function');
  });


  test('It creates an element', (assert) => {
    const resultingElement = createCurrentWeatherEl(currentWeather);

    // assert.ok(resultingElement, 'It should return something please!');
    assert.equal(resultingElement.tagName, 'DIV', 'It should return a div');
    assert.ok(resultingElement.classList.contains('forecast'));

  test

  })
});
