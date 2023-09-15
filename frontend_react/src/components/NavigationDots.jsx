import { React } from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['home', 'about', 'work', 'skills', 'testimonial', 'contact'].map((item, index) => (
      // eslint-disable-next-line
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        aria-label="Links"
        style={active === item ? { backgroundColor: '#313BAC' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
