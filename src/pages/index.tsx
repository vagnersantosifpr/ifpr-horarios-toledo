import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

import Courses, { type CourseItem } from '@site/src/data/courses'
import Course from '../components/Course'

import Heading from '@theme/Heading'
import Translate, { translate } from '@docusaurus/Translate'

import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      {/* Mesh Gradient Background Canvas */}
      <div className={styles.heroCanvas}>
        <div className={styles.meshBlob}></div>
        <div className={styles.meshBlob}></div>
        <div className={styles.meshBlob}></div>
      </div>

      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.heroContent}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </div>

      {/* Organic Wave Divider */}
      <div className={styles.waveDivider}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,115.32,127.15,116,183.13,103.42,232,92.35,268.45,71,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </header>
  )
}

function TimetablesAnnouncement() {
  return (
    <div
      className={clsx(styles.announcement, styles.announcementDark)}
      data-theme="dark"
    >
      <div className={styles.announcementInner}>
        <Link className="button button--primary button--lg" to="/docs/intro">
          Acessar Quadro de Horários
        </Link>
      </div>
    </div>
  )
}

function CourseSection() {
  const courseColumns: CourseItem[][] = [[], [], []]
  Courses.filter((course) => course.showOnHomepage).forEach((course, i) =>
    courseColumns[i % 3]!.push(course),
  )

  return (
    <div className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <Heading as="h2" className={clsx('margin-bottom--lg', 'text--center')}>
          <h2>Acesso rápido aos iniciante</h2>
        </Heading>
        <div className={clsx('row', styles.coursesSection)}>
          {courseColumns.map((courseItems, i) => (
            <div className="col col--4" key={i}>
              {courseItems.map((course) => (
                <Course {...course} key={course.url} />
                // <div>course.name</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <TimetablesAnnouncement />
        <HomepageFeatures />
        {/* <CourseSection /> */}
      </main>
    </Layout>
  )
}
