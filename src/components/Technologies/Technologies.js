import React from "react";
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiPostgresql,
  DiMongodb,
  DiNodejs
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web / application development world.
    </SectionText>
    <List>
      <ListItem>
        <picture></picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>            <img src='           https://sandstorm.de/_Resources/Persistent/3/2/8/5/3285416e8503b2c8354c321bcd690cf550b8b2d3/React-Logo.svg
' width="38rem"/>

             <img src='https://camo.githubusercontent.com/c8f91d18976e27123643a926a2588b8d931a0292fd0b6532c3155379e8591629/68747470733a2f2f7675656a732e6f72672f696d616765732f6c6f676f2e706e67' style={{maxHeight: '43px'}} width="40px"/>
             <img src='https://camo.githubusercontent.com/c241d33361366f3604367d7762ca67275cb986918ad4bcfac106b283444f0114/68747470733a2f2f7777772e6d61726b7573616e746f6e776f6c662e636f6d2f6d656469612f70616765732f626c6f672f7461696c77696e642d6373732f3236353239383438372d313539363637353034312f7461696c77696e642d6373732d6c6f676f2e737667' width="38rem"/>
             <img src='https://avatars.githubusercontent.com/u/20658825?s=200&v=4' style={{maxHeight: '43px'}} width="35px"/>
             <img src='https://redux.js.org/img/redux.svg' style={{maxHeight: '43px', marginRight:'50px'}} width="40px"/>
             <img src='https://raw.githubusercontent.com/Rohan-Shakya/Rohan-Shakya/master/images/next_logo.png' width="40px"/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
          <img title="Laravel" src='     https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png' width="35rem"/>

     
          <img title="Node JS" src='https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png' width="80rem"/>
          <img title="GraphQL" src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png' width="40rem"/>
          <img title="REST" src='          https://www.ictshore.com/wp-content/uploads/2018/08/sfw0002-01-REST_Architecture.png
' width="70rem"/>
<img title="Prisma ORM" style={{backgroundColor: "white", padding: "3px", borderRadius: "8px"}} src='https://redmonk.com/jgovernor/files/2021/05/Prisma-Logo-Black.png
' width="70rem"/>
<img title="Express JS" style={{backgroundColor: "white", padding: "3px", borderRadius: "8px"}} src='https://cdn.buttercms.com/2q5r816LTo2uE9j7Ntic
' width="90rem"/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
          <img title="PostgreSQL" src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png' width="40rem"/>
          <img title="MongoDB" src='https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' width="50rem"/>
          <img title="Firebase"ext src='/images/firebase.png' width="35rem"/>

         
          </ListParagraph>
        </ListContainer>
        
      </ListItem>
      <ListContainer>
          <ListTitle>Programming Languages</ListTitle>
          <ListParagraph>
          <img title="C" src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png' width="35rem"/>
          <img title="JAVA" src='https://github.com/abranhe/programming-languages-logos/blob/master/src/java/java.png?raw=true' width="50rem"/>
          <img title="JavaScript" src='https://github.com/abranhe/programming-languages-logos/blob/master/src/javascript/javascript.png?raw=true' width="35rem"/>
          <img title="Racket" src='https://racket-lang.org/img/racket-logo.svg' width="40rem"/>
          <img title="Prolog" src='          https://dashboard.snapcraft.io/site_media/appmedia/2020/04/Prolog-logo-512.png
' width="40rem"/>
<img title="PHP" src='          https://github.com/abranhe/programming-languages-logos/blob/master/src/php/php.png?raw=true

' width="50rem"/>
<img title="Python" src='          https://github.com/abranhe/programming-languages-logos/blob/master/src/python/python.png?raw=true
' width="40rem"/>
          </ListParagraph>
        </ListContainer>
      
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
