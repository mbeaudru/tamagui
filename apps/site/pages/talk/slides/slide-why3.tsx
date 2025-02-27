import { Slide } from 'components/Slide'
import React from 'react'
import { memo } from 'react'
import { Paragraph, YStack } from 'tamagui'

export default memo(() => {
  return (
    <Slide
      title="Why?"
      theme="blue"
      stepsStrategy="replace"
      steps={[
        [
          {
            type: 'callout',
            content: `I wanted to save time building an app...`,
          },

          {
            type: 'content',

            content: (
              <YStack marginTop={-100} ai="center">
                <Paragraph theme="alt2">(Ironically)</Paragraph>
              </YStack>
            ),
          },
        ],

        [
          {
            type: 'callout',
            content: `... but my universal app felt terrible 😭`,
          },
        ],
      ]}
    />
  )
})
