import { join } from 'path'
import { promises } from 'fs'
import Page from '@components/page'
import Entry from '@components/entry'

const Main = ({ items }) => {
  return (
    <Page description="Social Networks and Links of Uzinfocom.">
      <article>
        <h1 className="hero" align="center">
          Connect with Us!
        </h1>

        {items.map((entry) => {
          return (
            <Entry
              key={`${entry.title}-${entry.url}`}
              title={entry.title}
              image={entry.image}
              href={entry.url}
            />
          )
        })}
      </article>
    </Page>
  )
}

export const getStaticProps = async () => {
  const file = await promises.readFile(join('socials.json'), {
    encoding: 'utf8',
  })
  const parsed = JSON.parse(file)

  return {
    props: { items: parsed.data },
  }
}

export default Main
