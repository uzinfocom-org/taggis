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
          title="Xinux Uzbekistan"
          description="Linux ga oid O'zbek hamjamiyati"
          image="/projects/xinux.png"
          href="https://xinux.uz/"
        />

        <Entry
          title="Korrektor"
          description="O'zbek tiliga bag'ishlangan lingvistika loyihasi"
          image="/projects/korrektor.png"
          href="https://korrektor.uz/"
        />

        <Entry
          title="Osmon"
          description="Boshlang'ich dasturchilar uchun yaratilgan dasturlash tili"
          image="/projects/osmon.png"
          href="https://osmon.dev"
        />
      </article>
    </Page>
  )
}

export default Projects
