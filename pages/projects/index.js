import Page from '@components/page'
import Entry from '@components/entry'

const Projects = () => {
  return (
    <Page
      title="Projects"
      description="Projects made by Uzinfocom's Developer."
    >
      <article>
        <Entry
            title="MyID"
            description="A tool for simple and secure facial identification"
            image="/projects/myid.png"
            href="/projects/myid/"
            internal={true}
        />

        <Entry
          title="Xinux Uzbekistan"
          description="Linux community & Linux distribution for Uzbekistan"
          image="/projects/xinux.png"
          href="https://xinux.uz/"
        />

        <Entry
          title="Korrektor"
          description="Uzbek linguist assistant for all"
          image="/projects/korrektor.png"
          href="https://korrektor.uz/"
        />
      </article>
    </Page>
  )
}


export default Projects
