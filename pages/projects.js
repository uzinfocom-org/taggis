import Page from '@components/page'
import Entry from '@components/entry'

const Projects = () => {
  return (
    <Page title="Loyihalar" description="Qilingan barcha loyihalar ro'yxati.">
      <article>
        <Entry
          title="Xinux Uzbekistan"
          description="Linux ga oid O'zbek hamjamiyati"
          image="https://oss.uzinfocom.uz/favicons/ogs/xinux.png"
          href="https://xinux.uz/"
        />

        <Entry
          title="Korrektor"
          description="O'zbek tiliga bag'ishlangan lingvistika loyihasi"
          image="https://oss.uzinfocom.uz/favicons/ogs/korrektor.png"
          href="https://korrektor.uz/"
        />

        <Entry
          title="Osmon"
          description="Boshlang'ich dasturchilar uchun yaratilgan dasturlash tili"
          image="https://oss.uzinfocom.uz/favicons/ogs/osmon.png"
          href="https://osmon.dev"
        />
      </article>
    </Page>
  )
}

export default Projects
