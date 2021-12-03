import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Love it',
    Svg: require('../../static/img/loveit.svg').default,
    description: (
      <>
        I&apos;m used to fall in love with a project and I love to work with people
        who love what they do.
        I usually work with a team of 3 or 4 people up to 10, but I can also work alone.
        I'm happy to share my knowledge and experience with others.
        I love to study new technologies and I'm always looking for new ways to improve my skills.
      </>
    ),
  },
  {
    title: 'Do it',
    Svg: require('../../static/img/doit.svg').default,
    description: (
      <>
        I&apos;m used to do many things, from design to development.
        I&apos;m also a big fan of the open-source community and I&apos;m always looking for new projects to contribute to.
      </>
    ),
  },
  {
    title: 'Deliver it',
    Svg: require('../../static/img/deliverit.svg').default,
    description: (
      <>
        When I started my carrier I couldn't imagine how satisfying it would be to deliver a product.
        I was always looking for a solution to solve definitively the problem of delivering projects easily facilitating the process to bring
        things to the production relieving the effort needed from the development teams but also enforcing and ensuring things works as expected.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
