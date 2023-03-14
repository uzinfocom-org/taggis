import Page from '@components/page'

const Contact = () => {
  return (
    <Page title="Contact" footer={false} description="Keep in touch with us.">
      <article>
        <p>Contact with us at...</p>

        <blockquote>
          <a
            href="mailto:cctld@uzinfocom.uz?subject=Hello Uzinfocom!"
            className="reset"
          >
            info@uzinfocom.uz
          </a>
        </blockquote>

        <p>...follow our telegram channel.</p>

        <blockquote>
          <a href="https://t.me/s/uzinfocomofficial" className="reset">
            @uzinfocomofficial
          </a>
        </blockquote>
      </article>
    </Page>
  )
}

export default Contact
