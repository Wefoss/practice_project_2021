import React from "react";
import styles from "./Pricing.module.scss";
import PricingListItems from "../PricingListItems";
import pirsingContent from "./pricingContent.json";

const Pricing = () => {
  return (
    <section className={styles.pricing}>
      <div className={styles.pricing_container}>
        {pirsingContent.map((el) => (
          <PricingListItems key={el.id} items={el}/>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

//   {
//     "prising": "gold",
//     "title": "More privacy and Trademark support",
//     "price": 798,
//     "save": 100,
//     "id": 2,
//     "contest": {
//       "Includes 2 Contests (Name, Logo)": "The Squadhelp platform allows you to connect with the world's largest branding community and receive an unmatched breadth of ideas. Our smart-technology powered platform (which incorporate Machine Learning, AI, Gamification, and more) delivers the absolute best collaborative crowdsourcing possible."
//     },
//     "prize": {
//       "Prize to Winner - $425 ($200 for Name, $225 for Logo) (Included)": "Paid to the winning creative at the end of contest. This amount is already included in your package price."
//     },
//     "validation services": {
//       "Validation Services & Upgrades ($572 value)": "Our agency-style validation features and upgrades provide all the tools you need to complete a successful branding project, start to finish, and select a name with confidence.",
//       "resources": [
//         {
//           "Matching .com URL": "All submitted names are automatically checked for matching domain name availability. If you are only interested in a name and not a matching .com URL, you can specify that preference during contest creation."
//         },
//         {
//           "Instant Trademark Check (One Database)": "One-click Trademark availability check for names received in your contest against USPTO Trademark database. You will have the ability to get instant information on any active Trademarks for all name contest entries."
//         },
//         {
//           "NDA and More Privacy": "Require creatives to agree to a Non Disclosure Agreement before participating in your contest. Your contest details will also be hidden from search engines"
//         },
//         {
//           "Project Promotion (Basic)": "Receive priority project listing so your project stands out and gets more participation."
//         },
//         {
//           "Comprehensive Trademark Research (1 Name)": "A comprehensive Trademark validation report for your favorite name."
//         }
//       ]
//     },
//     "expected entries": {
//       "Expected Entries , 300+ Name, 30+ Logo": "Complimentary extension of timeline if you receive less than expected number of entries."
//     },
//     "partial options": {
//       "Partial Refund Option": "If you are not happy with submissions, you can receive a partial refund for creative award ($425 ($200 for Name, $225 for Logo))"
//     }
//   },
//   {
//     "prising": "platinum",
//     "title": "Work with top-level creatives, plus agency-style brand validation",
//     "price": 1248,
//     "save": 200,
//     "id": 3,
//     "contest": {
//       "Includes 2 Contests (Name, Logo)": "The Squadhelp platform allows you to connect with the world's largest branding community and receive an unmatched breadth of ideas. Our smart-technology powered platform (which incorporate Machine Learning, AI, Gamification, and more) delivers the absolute best collaborative crowdsourcing possible."
//     },
//     "prize": {
//       "Prize to Winner - $600 ($300 for Name, $300 for Logo) (Included)": "Paid to the winning creative at the end of contest. This amount is already included in your package price."
//     },
//     "validation services": {
//       "Validation Services & Upgrades ($1623 value)": "Our agency-style validation features and upgrades provide all the tools you need to complete a successful branding project, start to finish, and select a name with confidence.",
//       "resources": [
//         {
//           "Audience Testing": "Test your top 6 names and 5 Logos with your target demographics and receive detailed insights to pick the best options."
//         },
//         {
//           "Comprehensive Trademark Research (3 Names)": "Comprehensive Trademark validation reports prepared for your top three names."
//         },
//         {
//           "Linguistics Analysis (3 Names)": "Receive a Linguistics Analysis report for up to 3 names. Report includes comprehensive linguistics analysis across major languages for any potential red flags ($129 value)."
//         },
//         {
//           "Tier A Creatives": "Only work with top creatives who have achieved high quality ranking on Squadhelp"
//         },
//         {
//           "Matching .com URL": "All submitted names are automatically checked for matching domain name availability. If you are only interested in a name and not a matching .com URL, you can specify that preference during contest creation."
//         },
//         {
//           " Instant Trademark Check (4 Databases)": "One-click Trademark availability check for names received in your contest against USPTO and other Trademark databases (4 databases). You will have the ability to get instant information on any active Trademarks for all name contest entries."
//         },
//         {
//           "NDA and More Privacy": "You can require creatives to agree to a Non Disclosure Agreement before participating in your contest. Plus, your contest is hidden from search engines"
//         },
//         {
//           "Enhanced Project Promotion": "Receive priority project listing so your project stands out and receive more participation. We will also announce the launch of your project to our entire community via email."
//         },
//         {
//           "Team Collaboration Tools": "Invite your team members to co-manage your contest"
//         }
//       ]
//     },
//     "expected entries": {
//       "Expected Entries , 1000+ Name, 60+ Logo": "Complimentary extension of timeline if you receive less than guaranteed number of entries."
//     },
//     "partial options": {
//       "Partial Refund Option": "If you are not happy with submissions, you can receive a partial refund for creative award ($600 ($300 for Name, $300 for Logo))"
//     }
//   },
//   {
//     "prising": "managed",
//     "title": "A full agency experience without the agency price tag",
//     "price": 2748,
//     "save": 250,
//     "id": 4,
//     "info": [
//       "Receive optimum results from your Platinum Contest by launching a Managed Contest Package and working one-on-one with an experienced Squadhelp Branding Consultant.",
//       "With significantly more validation services, professional brief creation, and daily management of your contest by your Branding Expert, you'll receive an enhanced branding experience to closeout your branding project."
//     ],
//     "link": "https://www.squadhelp.com/managed-contests"
//   }