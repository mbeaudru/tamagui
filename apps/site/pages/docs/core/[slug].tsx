import { getDocLayout } from '@components/layouts/DocLayout'
import { components } from '@components/MDXComponents'
import { QuickNav } from '@components/QuickNav'
import { TitleAndMetaTags } from '@components/TitleAndMetaTags'
import { getAllFrontmatter, getMdxBySlug } from '@lib/mdx'
import { getOgUrl } from '@lib/og'
import { ThemeTint } from '@tamagui/logo'
import { getMDXComponent } from 'mdx-bundler/client'
import React from 'react'
import { Spacer } from 'tamagui'

import { HomeH1 } from '../../../components/HomeH2'
import { SubTitle } from '../../../components/SubTitle'
import type { Frontmatter } from '../../../frontmatter'

type Doc = {
  frontmatter: Frontmatter
  code: any
}

export default function DocsCorePage({ frontmatter, code }: Doc) {
  if (!frontmatter) {
    return null
  }
  const Component = React.useMemo(() => getMDXComponent(code), [code])
  return (
    <>
      <TitleAndMetaTags
        title={`${frontmatter.title} — Tamagui Core`}
        image={getOgUrl('default', {
          title: frontmatter.title,
          description: frontmatter.description ?? '',
        })}
      />
      <HomeH1>{frontmatter.title}</HomeH1>
      <Spacer size="$1" />
      <SubTitle>{frontmatter.description}</SubTitle>
      <ThemeTint>
        <Component components={components as any} />
      </ThemeTint>
      <QuickNav key={frontmatter.slug} />
    </>
  )
}

DocsCorePage.getLayout = getDocLayout

export async function getStaticPaths() {
  const frontmatters = getAllFrontmatter('docs/core')
  const paths = frontmatters.map(({ slug }) => ({
    params: { slug: slug.replace('docs/core/', '') },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { frontmatter, code } = await getMdxBySlug('docs/core', context.params.slug)
  return {
    props: {
      frontmatter,
      code,
    },
  }
}
