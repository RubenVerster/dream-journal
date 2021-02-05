import Meta from '../components/Meta';
import headerStyles from '../styles/Header.module.css';

const About = () => {
  return (
    <div className={headerStyles.container}>
      <Meta title="About" />
      <h1>About This App</h1>
      <p>
        This app will help those who are working to lucid dream better. By
        writing down all your dreams you have every night, you train your brain
        to start remembering your dreams better and better. Also writing your
        dreams down could show you which dreams you have more frequently. You
        can then look out for these recurring dreams to get into a lucid state
        easier
      </p>
      <p>v1.0.0</p>
    </div>
  );
};

export default About;
