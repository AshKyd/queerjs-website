import React from 'react'
import RainbowWithClicker from '../rainbow/RainbowWithClicker'

import {
  InlineRainbow,
  SpeakerPhoto,
  CFP,
  CFPInner,
  SpeakersGrid,
  Unstyled,
  ListItem,
  UnstyledLink
} from './elements'

const Speakers = ({ noSpeak, speakers, cfp }) => {
  return (
    <SpeakersGrid>
      {speakers.map((human) => (
        <ListItem
          talk={human.talk}
          key={human.twitterLink}
          data-tooltip={`I'm speaking about ${human.talk}!`}
        >
          <UnstyledLink
            as="a"
            href={human.link || `https://twitter.com/${human.twitterLink}`}
            target="_blank"
            rel="noopener noreferrer"
            title={human.name}
          >
            <SpeakerPhoto>
              <InlineRainbow flag={human.colors} />
              <img
                width="240"
                height="240"
                src={`https://twitter-avatar.now.sh/${human.twitterLink}`}
                alt="Speaker"
              />
            </SpeakerPhoto>
            <Unstyled>{human.name}</Unstyled>
            {human.location && <Unstyled>{human.location}</Unstyled>}
          </UnstyledLink>
        </ListItem>
      ))}
      {cfp && !noSpeak && (
        <li>
          <UnstyledLink to="/speak" title="Speak at QueerJS">
            <SpeakerPhoto>
              <RainbowWithClicker>
                <CFP>
                  <CFPInner>
                    <h2>You?</h2> <span>Speak at QueerJS</span>
                  </CFPInner>
                </CFP>
              </RainbowWithClicker>
            </SpeakerPhoto>
          </UnstyledLink>
        </li>
      )}
    </SpeakersGrid>
  )
}

export default Speakers
