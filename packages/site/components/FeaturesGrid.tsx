import { Grid, H4, Paragraph, YStack } from 'tamagui'

import { CocentricCircles } from './CocentricCircles'
import { ContainerLarge } from './Container'

export function FeaturesGrid() {
  return (
    <>
      <YStack
        pe="none"
        zi={-1}
        scale={0.75}
        pos="absolute"
        o={0.2}
        top={-820}
        left={0}
        right={-1500}
      >
        <CocentricCircles />
      </YStack>
      <ContainerLarge>
        <YStack space="$3">
          <YStack>
            <Grid gap={25} itemMinWidth={250}>
              <YStack space p="$4">
                <H4 ta="center" fontFamily="$body">
                  Modern design system
                </H4>
                <Paragraph theme="alt2">
                  Inline typed styles, typed themes, tokens, shorthands, media queries and
                  animations, plus a full suite of accessible components.
                </Paragraph>
              </YStack>

              <YStack space p="$4">
                <H4 ta="center" fontFamily="$body">
                  Fast by default
                </H4>
                <Paragraph theme="alt2">
                  Tamagui saves you time writing code because it optimizes even inline styles, even
                  flattening your tree when possible.
                </Paragraph>
              </YStack>

              <YStack space p="$4">
                <H4 ta="center" fontFamily="$body">
                  SSR
                </H4>
                <Paragraph theme="alt2">
                  Cross-browser server-side rendering, even for responsive styles and variants out
                  of the box. Next.js plugin and example apps.
                </Paragraph>
              </YStack>

              <YStack space p="$4">
                <H4 ta="center" fontFamily="$body">
                  Avanced dev tools
                </H4>
                <Paragraph theme="alt2">
                  A fully-typed API, completely extensible, token-aware properties, debug props and
                  pragmas, dev-time filename and line numbers on each html tag.
                </Paragraph>
              </YStack>

              <YStack space p="$4">
                <H4 ta="center" fontFamily="$body">
                  Accessible
                </H4>
                <Paragraph theme="alt2">
                  Built on top of react-native-web, you get complete accessiblity control out of the
                  box, plus components that have smart defaults.
                </Paragraph>
              </YStack>

              <YStack space p="$4">
                <H4 ta="center" fontFamily="$body">
                  Compatible
                </H4>
                <Paragraph theme="alt2">
                  Everything you need included on all platforms from themes to responsive design and
                  more. Augments react-native-web.
                </Paragraph>
              </YStack>
            </Grid>
          </YStack>
        </YStack>
      </ContainerLarge>
    </>
  )
}
