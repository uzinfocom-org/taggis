import Page from '@components/page'
import Entry from '@components/entry'

const Projects = () => {
  return (
    <Page
      title="MyID"
      description="A tool for simple and secure facial identification"
    >
      <article>
        <Entry
          title="Telegram"
          image="/socials/Telegram.png"
          href="https://t.me/myid_uz/"
        />

        <Entry
          title="Instagram"
          image="/socials/Instagram.png"
          href="https://www.instagram.com/myid.uz/"
        />

        <Entry
          title="Facebook"
          image="/socials/Facebook.png"
          href="https://www.facebook.com/people/Myid/100089041106821/"
        />
      </article>
    </Page>
  )
}

export default Projects
