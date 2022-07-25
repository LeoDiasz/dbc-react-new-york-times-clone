import React from 'react'
import { NavListInColumn } from '../NavListInColumn/NavListInColumn'
import { ListTextSmall } from '../ListTextSmall/ListTextSmall'
import { Logo } from '../Logo/Logo'
import styles from "./styles.module.css"


export const Footer = () => {
  const listNews = ["Home Page", "World", "Coronavirus", "U.S.", "Politics", "New York", "Business", "Tech", "Science", "Sports", "Wildfire Tracker", "Obituares", "Today's Paper", "Corrections", "Trending"]
  const listOpinions = ["Today´s Opinion", "Columnists", "Editorials", "Guest Essays", "Letters", "Sunday Opinion", "Opinion Video"]
  const listArts = ["Today's Arts", "Art & Design", "Books", "Best Sellers Book List", "Dance", "Movies", "Music", "Pop Culture", "Television", "Theater", "What to Watch", "Video: Arts"]
  const listLiving = ["Automotive", "Games", "Education", "Food", "Health", "Jobs", "Love", "Magazine", "Parenting", "Real Estate", "Style", "T Magazine", "Travel"]
  const listMore = ["Reader Center", "The Athletic", "Wirecutter", "Cooking", "Headway", "Live Events", "The Learning Network", "Tools & Services", "Podcasts", "Video", "TimesMachine", "NYT Store", "Manage My Account", "NYTLicensing"]
  const listEndFooter = ["The New York Times Company", "NYTCo", "Contact Us", "Accessibility", "Work with us", "Advertise", "T Brand Studio", "Your Ad Choices", "Privacy Policy", "Terms of Service", "Terms of Sale",]
  const listSubscribeOne = ["Email Newsletters", "Corporate Subscriptions", "Education Rate"]
  const listSubscribeTwo = ["Mobile Applications", "Replica Edition", "International", "Canada", "Español", "中文网"]
  
  return (
    <footer className={styles.footerContent}>
      <Logo width="200px"/>
      <nav className={styles.navTopicsFooterContent}>
        <div className={styles.divGridListContent}>
          <NavListInColumn title="NEWS" listTopics={listNews}/>
          <NavListInColumn title="OPINION" listTopics={listOpinions}/>
          <NavListInColumn title="ARTS" listTopics={listArts}/>
          <NavListInColumn title="LIVING" listTopics={listLiving} />
          <NavListInColumn title="MORE" listTopics={listMore}/>
        </div>
        <div className={styles.footerSubscribe}>
          <h3>SUBSCRIBE</h3>
          <ul>
            
          </ul>
          <div>
            <ul>
              {listSubscribeOne.map((item, indice) => (
                <ListTextSmall key={indice} size="11px" text={item}/>
              ))}
            </ul>
            <ul>
              {listSubscribeTwo.map((item, indice) => (
                <ListTextSmall key={indice} text={item} size="11px" />
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <nav className={styles.navEndFooter}>
        <ul>
          {listEndFooter.map((list, indice) => (
            <ListTextSmall key={indice} text={list} size="11px"/>
          ))}
        </ul>
      </nav>
    </footer>
  )
}
